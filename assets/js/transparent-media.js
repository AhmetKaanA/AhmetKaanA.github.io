// Transparent 3D videos on the research pages.
//
// Markup (see docs/HOMEPAGE_GOALS.md, "Research pages"):
//   <span class="tmedia" style="aspect-ratio: W / H" role="img" aria-label="...">
//     <img src="NAME-poster.webp" alt="" />
//     <canvas></canvas>
//     <video src="NAME.mp4" muted loop playsinline preload="none"></video>
//   </span>
//
// Each MP4 frame holds the color (premultiplied) on top of its opacity, as rendered on a black and
// on a white background. WebGL recombines the two halves on the canvas, which gives a transparent
// background in every browser. Without WebGL, or with reduced motion, the transparent poster stays.
(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const VERTEX =
    "attribute vec2 p; varying vec2 uv; void main() { uv = vec2(0.5 * (p.x + 1.0), 0.5 * (1.0 - p.y)); gl_Position = vec4(p, 0.0, 1.0); }";
  const FRAGMENT =
    "precision mediump float; varying vec2 uv; uniform sampler2D t; void main() { float a = texture2D(t, vec2(uv.x, 0.5 + 0.5 * uv.y)).r; vec3 c = min(texture2D(t, vec2(uv.x, 0.5 * uv.y)).rgb, vec3(a)); gl_FragColor = vec4(c, a); }";

  function setup(box) {
    const video = box.querySelector("video");
    const canvas = box.querySelector("canvas");
    const gl = canvas && video && canvas.getContext("webgl", { premultipliedAlpha: true, alpha: true, antialias: false });
    if (!gl) return;
    const shader = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram();
    gl.attachShader(prog, shader(gl.VERTEX_SHADER, VERTEX));
    gl.attachShader(prog, shader(gl.FRAGMENT_SHADER, FRAGMENT));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
    for (const [k, v] of [
      [gl.TEXTURE_MIN_FILTER, gl.LINEAR],
      [gl.TEXTURE_MAG_FILTER, gl.LINEAR],
      [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE],
      [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE],
    ]) {
      gl.texParameteri(gl.TEXTURE_2D, k, v);
    }
    const draw = () => {
      if (video.readyState >= 2) {
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, video);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        box.classList.add("is-playing");
      }
      if (!video.paused) schedule();
    };
    const schedule = () => ("requestVideoFrameCallback" in video ? video.requestVideoFrameCallback(draw) : requestAnimationFrame(draw));
    video.addEventListener("loadedmetadata", () => {
      canvas.width = video.videoWidth;
      canvas.height = Math.round(video.videoHeight / 2);
    });
    video.addEventListener("playing", schedule);
    // Play only while the video is on screen.
    new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "200px 0px" }
    ).observe(box);
  }

  const start = () => document.querySelectorAll(".tmedia").forEach(setup);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
