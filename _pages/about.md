---
layout: about
title: About
permalink: /
subtitle: Ph.D. Candidate in Applied Mathematics · Scientific Computing

selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # social links are shown below the introduction instead

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<style>
  @media (min-width: 840px) {
    .post .profile {
      width: 184px;
    }
  }

  /* The theme hard-codes these section headings in lowercase ("news", "selected publications"). */
  .post article > h2 {
    text-transform: capitalize;
  }

  .home-social {
    margin: 1.5rem 0 2rem;
  }

  .home-research {
    clear: both;
    margin: 2.5rem 0;
  }

  /* A paragraph beside a frameless video; the video side alternates from row to row. */
  .home-research-story {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.75rem;
    align-items: center;
    margin: 1.75rem 0 2.5rem;
  }

  .home-research-story p {
    margin: 0;
  }

  .home-research-card {
    display: block;
    overflow: hidden;
    border: 1px solid var(--global-divider-color, #d1d5db);
    border-radius: 0.5rem;
    background: var(--global-card-bg-color, var(--global-bg-color));
    color: var(--global-text-color);
    text-decoration: none;
  }

  .home-research-card:hover,
  .home-research-card:focus-visible {
    border-color: var(--global-theme-color);
    color: var(--global-theme-color);
    text-decoration: none;
  }

  .home-research-card:focus-visible {
    outline: 2px solid var(--global-theme-color);
    outline-offset: 3px;
  }

  .home-research-card img,
  .home-research-card video {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  /* Cards with a transparent video and no frame, so the video sits directly on the page. */
  .home-research-card--bare {
    border: none;
    background: transparent;
    overflow: visible;
  }

  .home-research-card--bare .home-research-card-body {
    padding: 0.25rem 0 0;
    text-align: center;
  }

  .home-hero-media {
    position: relative;
    display: block;
    aspect-ratio: 16 / 9;
  }

  /* Three stacked channels: flow, pressure, uncertainty. */
  .home-research-card--navier-stokes .home-hero-media {
    aspect-ratio: 1152 / 1072;
  }

  /* Titles above the three channels (channel tops are at 64, 419 and 774 of 1072 px). */
  .home-flow-label {
    position: absolute;
    left: 2.3%;
    transform: translateY(-100%);
    color: var(--global-text-color);
    font-size: 0.85rem;
    font-weight: 600;
    line-height: 1.2;
    pointer-events: none;
  }

  .home-flow-label--speed {
    top: 5.2%;
  }

  .home-flow-label--pressure {
    top: 38.3%;
  }

  .home-flow-label--uncertainty {
    top: 71.5%;
  }

  /* Beam-control videos: two beam panels (observability) and the piezoelectric beam. Their dial
     titles are HTML, placed in the gaps the render leaves (see docs/HOMEPAGE_GOALS.md). */
  .home-research-card--observability .home-hero-media {
    aspect-ratio: 806 / 868;
  }

  .home-research-card--piezoelectric .home-hero-media {
    aspect-ratio: 1146 / 622;
  }

  .home-research-card--observability .home-hero-media img,
  .home-research-card--observability .home-hero-media canvas,
  .home-research-card--piezoelectric .home-hero-media img,
  .home-research-card--piezoelectric .home-hero-media canvas {
    -webkit-mask-image: none;
    mask-image: none;
  }

  .home-obs-label--unfiltered {
    top: 4.2%;
  }

  .home-obs-label--orfd {
    top: 55.6%;
  }

  /* Dark-theme stills: the dial ink is light, as the player draws it while the video plays. */
  html[data-theme="dark"] .home-research-card--observability .home-hero-media img {
    content: url("{{ '/assets/img/research-highlights/observability-transparent-poster-dark.webp' | relative_url }}");
  }

  html[data-theme="dark"] .home-research-card--piezoelectric .home-hero-media img {
    content: url("{{ '/assets/img/research-highlights/piezoelectric-transparent-poster-dark.webp' | relative_url }}");
  }

  .home-dial-label {
    position: absolute;
    transform: translate(-50%, -100%);
    color: var(--global-text-color);
    font-size: 0.85rem;
    font-weight: 600;
    line-height: 1.2;
    white-space: nowrap;
    pointer-events: none;
  }

  /* Fade only the open inlet and outlet ends; the walls stay sharp. */
  .home-research-card--navier-stokes .home-hero-media img,
  .home-research-card--navier-stokes .home-hero-media canvas {
    -webkit-mask-image: linear-gradient(to right, transparent, #000 5%, #000 95%, transparent);
    mask-image: linear-gradient(to right, transparent, #000 5%, #000 95%, transparent);
  }

  /* Soft edges, so anything the camera cuts off fades out instead of ending in a hard line. */
  .home-hero-media img,
  .home-hero-media canvas {
    -webkit-mask-image:
      linear-gradient(to right, transparent, #000 7%, #000 93%, transparent), linear-gradient(to bottom, transparent, #000 5%, #000 95%, transparent);
    -webkit-mask-composite: source-in;
    mask-image:
      linear-gradient(to right, transparent, #000 7%, #000 93%, transparent), linear-gradient(to bottom, transparent, #000 5%, #000 95%, transparent);
    mask-composite: intersect;
  }

  .home-hero-media img,
  .home-hero-media canvas,
  .home-hero-media video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    aspect-ratio: auto;
    object-fit: contain;
  }

  /* The stacked video is only a texture for the canvas. */
  .home-hero-media video {
    opacity: 0;
    pointer-events: none;
  }

  .home-hero-media.is-playing img {
    visibility: hidden;
  }

  /* Legend for the close-up, in the top-right corner, clear of the cluster. */
  .home-hero-legend {
    position: absolute;
    top: 3%;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 0.45em;
    color: var(--global-text-color);
    font-size: clamp(1rem, 2.6vw, 1.45rem);
    font-weight: 600;
    line-height: 1.2;
    pointer-events: none;
  }

  .home-hero-legend-item {
    display: flex;
    align-items: center;
    gap: 0.5em;
    opacity: 0;
    transform: translateX(0.6em);
    transition:
      opacity 0.6s ease,
      transform 0.6s ease;
  }

  .home-hero-legend-item.is-visible {
    opacity: 1;
    transform: none;
  }

  .home-hero-swatch {
    display: inline-block;
    width: 0.9em;
    height: 0.9em;
    border-radius: 50%;
  }

  .home-hero-swatch--border {
    background: #0072b2;
  }

  .home-hero-swatch--polar {
    background: #d55e00;
  }

  .home-research-card-body {
    display: block;
    padding: 1rem;
  }

  .home-research-card-title {
    display: block;
    font-size: 1.2rem;
  }

  @media (max-width: 767px) {
    .home-research-story {
      grid-template-columns: 1fr;
    }
  }
</style>

<!-- Headshot is placed here instead of via `profile.image` so it can have real alt text (the theme uses the file name). -->
<div class="profile float-right">
  {% include figure.liquid loading="eager" path="assets/img/prof_pic.jpg" class="img-fluid z-depth-1 rounded" sizes="(min-width: 840px) 184px, (min-width: 576px) 30vw, 95vw" alt="Portrait of Ahmet Kaan Aydin" cache_bust=true %}
</div>

I am a Ph.D. Candidate in Applied Mathematics at the University of Maryland, Baltimore County (UMBC). My current research interests include numerical analysis, scientific computing, uncertainty quantification, low-rank methods based on tensor decomposition, and the observer/controller design for partial differential equations. I also build 3D phase-field simulations of collective cell migration, following border cells as they travel through the growing _Drosophila_ egg chamber.

You can explore my [research]({{ '/research/' | relative_url }}), [publications]({{ '/publications/' | relative_url }}), and [teaching]({{ '/teaching/' | relative_url }}) on this website.

<div class="social home-social">
  <div class="contact-icons">{% social_links %}</div>
  <div class="contact-note">{{ site.contact_note }}</div>
</div>

<section class="home-research" aria-labelledby="home-research-title">
  <h2 id="home-research-title">Research Highlights</h2>
  <a class="home-research-card home-research-card--bare" href="{{ '/projects/cell-cluster-migration/' | relative_url }}">
      <span class="home-hero-media" role="img" aria-label="Simulation: the border-cell cluster travels between the nurse cells of the egg chamber, pauses, the view zooms in until the cluster fills the frame, and its eight outer border cells turn see-through to show the two polar cells inside">
        <img src="{{ '/assets/img/research-highlights/cell-cluster-zoom-poster.webp' | relative_url }}" alt="" width="1280" height="720" loading="eager">
        <canvas width="1280" height="720" aria-hidden="true"></canvas>
        <video data-stacked-alpha src="{{ '/assets/img/research-highlights/cell-cluster-zoom.mp4' | relative_url }}" muted loop playsinline preload="auto" aria-hidden="true" tabindex="-1"></video>
        <!-- Shown during the close-up; data-from/data-to are video times in seconds (see docs/HOMEPAGE_GOALS.md). -->
        <span class="home-hero-legend" aria-hidden="true">
          <span class="home-hero-legend-item" data-from="6.4" data-to="15.6"><i class="home-hero-swatch home-hero-swatch--border"></i>border cells</span>
          <span class="home-hero-legend-item" data-from="8.6" data-to="14.2"><i class="home-hero-swatch home-hero-swatch--polar"></i>polar cells</span>
        </span>
      </span>
      <span class="home-research-card-body">
        <strong class="home-research-card-title">Optimal Transport for Border Cell Migration: Interactions Inside the Cluster</strong>
      </span>
  </a>
  <div class="home-research-story">
    <p>
      In the egg chamber of the fruit fly, a small cluster of border cells travels between large nurse cells to reach the oocyte, the future egg. We build 3D models of this journey in which the cells and the signal that guides them shape each other. The oocyte releases a chemical signal that spreads only through the narrow spaces between the cells, so the shapes of the cells decide the trail the cluster follows. The cluster, in turn, crawls along the nurse cells and pushes them aside, which reshapes the spaces the signal travels through. In our <a href="{{ '/projects/cell-migration/' | relative_url }}">phase-field model</a>, every cell is a soft body, and the egg chamber grows during the journey as it does in stage 9 of egg development, with the oocyte growing fastest. Our <a href="{{ '/projects/cell-cluster-migration/' | relative_url }}">hybrid model</a> keeps this soft chamber but builds the cluster from ten individual cells, using optimal transport to share the space among them: each cell keeps its size, no two cells overlap, and their shapes adapt on their own as the cluster squeezes through.
    </p>
    <a class="home-research-card home-research-card--bare" href="{{ '/projects/cell-migration/' | relative_url }}">
      <span class="home-hero-media" role="img" aria-label="Simulation: the border-cell cluster travels to the oocyte while the egg chamber, drawn see-through, grows around it and the oocyte grows fastest">
        <img src="{{ '/assets/img/research-highlights/cell-migration-growth-poster.webp' | relative_url }}" alt="" width="1280" height="720" loading="lazy">
        <canvas width="1280" height="720" aria-hidden="true"></canvas>
        <video data-stacked-alpha src="{{ '/assets/img/research-highlights/cell-migration-growth.mp4' | relative_url }}" muted loop playsinline preload="auto" aria-hidden="true" tabindex="-1"></video>
      </span>
      <span class="home-research-card-body">
        <strong class="home-research-card-title">Border Cell Migration in the Drosophila Egg Chamber</strong>
      </span>
    </a>
  </div>
  <div class="home-research-story">
    <a class="home-research-card home-research-card--bare home-research-card--navier-stokes" href="{{ '/projects/low-rank-stochastic-navier-stokes/' | relative_url }}">
      <span class="home-hero-media" role="img" aria-label="Simulation: flow starts from rest in a channel with a narrow section. Top: the average flow speed, with tracer particles carried by the flow. Middle: the average pressure, high at the inlet and dropping through the narrow section. Bottom: the uncertainty of the velocity, highest just before, inside and after the narrow section">
        <img src="{{ '/assets/img/research-highlights/navier-stokes-flow-pressure-poster.webp' | relative_url }}" alt="" width="1152" height="1072" loading="lazy">
        <canvas width="1152" height="1072" aria-hidden="true"></canvas>
        <video data-stacked-alpha src="{{ '/assets/img/research-highlights/navier-stokes-flow-pressure.mp4' | relative_url }}" muted loop playsinline preload="auto" aria-hidden="true" tabindex="-1"></video>
        <span class="home-flow-label home-flow-label--speed" aria-hidden="true">Flow speed</span>
        <span class="home-flow-label home-flow-label--pressure" aria-hidden="true">Pressure</span>
        <span class="home-flow-label home-flow-label--uncertainty" aria-hidden="true">Uncertainty</span>
      </span>
      <span class="home-research-card-body">
        <strong class="home-research-card-title">Low-Rank Stochastic Navier–Stokes Solvers</strong>
      </span>
    </a>
    <p>
      The Navier–Stokes equations describe how fluids such as water and air move, but the properties of a real fluid are rarely known exactly. We simulate flow through a channel with a narrow section when the viscosity, the fluid's resistance to flowing, is uncertain. Rather than rerunning the simulation for many possible viscosities, our <a href="{{ '/projects/low-rank-stochastic-navier-stokes/' | relative_url }}">stochastic Galerkin solver</a> computes how the flow depends on the uncertainty directly, solving all time steps together and storing the result in a compressed low-rank form that keeps the problem small enough to solve. In the video, the fluid starts from rest. On top, the average flow speeds up through the narrow section, with tracer particles following it. In the middle, the pressure pushes the fluid along the channel and drops most through the narrow section. At the bottom, the uncertainty in the velocity gathers just before, inside and just after the narrow section, where the flow changes fastest.
    </p>
  </div>
  <div class="home-research-story">
    <p>
      Beams and other flexible structures are often controlled with just one sensor and one actuator at the tip. To simulate them, a computer model cuts the beam into small pieces, and the standard ways of doing this add fast, artificial vibrations that the tip sensor can barely detect. A controller tested on such a model then looks weaker than it really is, and more so as the model gets finer. Our <a href="{{ '/projects/observability-preserving-discretizations/' | relative_url }}">order-reduced finite differences</a> (ORFD) build the right behavior into the model itself, so the sensor still sees every vibration the model can make. In the video, the same controller acts on both models: the unfiltered one (top) keeps shaking and its energy stays high, while the ORFD one (bottom) calms down as its energy drains away.
    </p>
    <a class="home-research-card home-research-card--bare home-research-card--observability" href="{{ '/projects/observability-preserving-discretizations/' | relative_url }}">
      <span class="home-hero-media" role="img" aria-label="Two vibrating beams under the same controller, each with total energy, sensor and actuator dials: the unfiltered model above keeps shaking with high energy, the ORFD model below calms down as its energy drops">
        <img src="{{ '/assets/img/research-highlights/observability-transparent-poster.webp' | relative_url }}" alt="" width="806" height="868" loading="lazy">
        <canvas width="806" height="868" aria-hidden="true"></canvas>
        <!-- data-ink-rects: the two dial rows, whose black ink turns light in dark mode. -->
        <video data-stacked-alpha data-ink-rects="0 0.318 1 0.487; 0 0.832 1 1" src="{{ '/assets/img/research-highlights/observability-transparent.mp4' | relative_url }}" muted loop playsinline preload="auto" aria-hidden="true" tabindex="-1"></video>
        <span class="home-flow-label home-obs-label--unfiltered" aria-hidden="true">Unfiltered</span>
        <span class="home-flow-label home-obs-label--orfd" aria-hidden="true">ORFD</span>
        <span class="home-dial-label" style="left: 17%; top: 31.3%" aria-hidden="true">Total energy</span>
        <span class="home-dial-label" style="left: 49.6%; top: 31.3%" aria-hidden="true">Sensor</span>
        <span class="home-dial-label" style="left: 82.3%; top: 31.3%" aria-hidden="true">Actuator</span>
        <span class="home-dial-label" style="left: 17%; top: 82.7%" aria-hidden="true">Total energy</span>
        <span class="home-dial-label" style="left: 49.6%; top: 82.7%" aria-hidden="true">Sensor</span>
        <span class="home-dial-label" style="left: 82.3%; top: 82.7%" aria-hidden="true">Actuator</span>
      </span>
      <span class="home-research-card-body">
        <strong class="home-research-card-title">Observability-Preserving Discretizations</strong>
      </span>
    </a>
  </div>
  <div class="home-research-story">
    <a class="home-research-card home-research-card--bare home-research-card--piezoelectric" href="{{ '/projects/piezoelectric-beam-stabilization/' | relative_url }}">
      <span class="home-hero-media" role="img" aria-label="A clamped piezoelectric beam with a voltage dial at its free end, and total energy, sensor and actuator dials below; under feedback control the vibrations die out and the energy drops to zero">
        <img src="{{ '/assets/img/research-highlights/piezoelectric-transparent-poster.webp' | relative_url }}" alt="" width="1146" height="622" loading="lazy">
        <canvas width="1146" height="622" aria-hidden="true"></canvas>
        <!-- data-ink-rects: the voltage dial with its wires, and the dial row; their black ink turns light in dark mode. -->
        <video data-stacked-alpha data-ink-rects="0.5 0 1 0.566; 0 0.656 1 1" src="{{ '/assets/img/research-highlights/piezoelectric-transparent.mp4' | relative_url }}" muted loop playsinline preload="auto" aria-hidden="true" tabindex="-1"></video>
        <span class="home-dial-label" style="left: 15.5%; top: 64.8%" aria-hidden="true">Total energy</span>
        <span class="home-dial-label" style="left: 48.6%; top: 64.8%" aria-hidden="true">Sensor</span>
        <span class="home-dial-label" style="left: 80.4%; top: 64.8%" aria-hidden="true">Actuator</span>
      </span>
      <span class="home-research-card-body">
        <strong class="home-research-card-title">Piezoelectric Beam Stabilization</strong>
      </span>
    </a>
    <p>
      A magnetizable piezoelectric beam vibrates both mechanically and electrically. Ours is clamped at one end and controlled from the free end with two measurements, the tip velocity and the electric current, which are amplified and fed back to the beam. Picking the two amplifier gains by trial and error often gives slow damping, even when the energy does eventually die out. From a mathematical analysis, we derive a range for each gain; with both gains inside their ranges, the vibrations die out fastest. In the video, the controller damps the beam: the sensor and actuator dials show the feedback at work, the voltage dial shows the electrical oscillation, and the total energy drops to zero.
    </p>
  </div>
</section>

<script>
  // Plays a "stacked alpha" video: each MP4 frame holds the color (top half, premultiplied)
  // above its opacity (bottom half). WebGL recombines them on the canvas, which gives a
  // transparent background in every browser. Without WebGL, or with reduced motion, the
  // transparent poster image stays.
  (() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll("video[data-stacked-alpha]").forEach(setup);

    function setup(video) {
      const box = video.parentElement;
      const canvas = box.querySelector("canvas");
      const gl = canvas.getContext("webgl", { premultipliedAlpha: true, alpha: true, antialias: false });
      if (!gl) return;
      const shader = (type, src) => {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      };
      const prog = gl.createProgram();
      gl.attachShader(prog, shader(gl.VERTEX_SHADER, "attribute vec2 p; varying vec2 uv; void main() { uv = vec2(0.5 * (p.x + 1.0), 0.5 * (1.0 - p.y)); gl_Position = vec4(p, 0.0, 1.0); }"));
      gl.attachShader(
        prog,
        shader(
          gl.FRAGMENT_SHADER,
          "precision mediump float; varying vec2 uv; uniform sampler2D t; uniform vec4 r0; uniform vec4 r1; uniform float dark; float inside(vec4 r) { return step(r.x, uv.x) * step(r.y, uv.y) * (1.0 - step(r.z, uv.x)) * (1.0 - step(r.w, uv.y)); } void main() { float a = texture2D(t, vec2(uv.x, 0.5 + 0.5 * uv.y)).r; vec3 c = min(texture2D(t, vec2(uv.x, 0.5 * uv.y)).rgb, vec3(a)); if (dark * max(inside(r0), inside(r1)) > 0.5 && a > 0.004) { vec3 s = c / a; float sat = max(s.r, max(s.g, s.b)) - min(s.r, min(s.g, s.b)); float ink = (1.0 - smoothstep(0.08, 0.2, sat)) * (1.0 - smoothstep(0.25, 0.4, (s.r + s.g + s.b) / 3.0)); s = mix(s, 1.0 - s, ink); c = s * a; } gl_FragColor = vec4(c, a); }"
        )
      );
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
      // data-ink-rects: up to two rectangles "x0 y0 x1 y1; ..." (fractions of the frame) whose black and gray
      // ink turns light in dark mode. Colored and mid-gray pixels (beams, needles) are left alone.
      const rects = (video.dataset.inkRects || "").split(";").filter((r) => r.trim());
      ["r0", "r1"].forEach((name, k) => {
        const r = (rects[k] || "0 0 0 0").trim().split(/\s+/).map(Number);
        gl.uniform4f(gl.getUniformLocation(prog, name), r[0], r[1], r[2], r[3]);
      });
      const darkLoc = gl.getUniformLocation(prog, "dark");
      const isDark = () => {
        const rgb = getComputedStyle(document.body).backgroundColor.match(/\d+/g) || [255, 255, 255];
        return 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2] < 110;
      };
      const legend = [...box.querySelectorAll("[data-from]")];
      const draw = () => {
        const t = video.currentTime;
        for (const item of legend) item.classList.toggle("is-visible", t >= +item.dataset.from && t < +item.dataset.to);
        if (video.readyState >= 2) {
          gl.viewport(0, 0, canvas.width, canvas.height);
          if (rects.length) gl.uniform1f(darkLoc, isDark() ? 1 : 0);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, video);
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
          box.classList.add("is-playing");
        }
        if (!video.paused) schedule();
      };
      const schedule = () => ("requestVideoFrameCallback" in video ? video.requestVideoFrameCallback(draw) : requestAnimationFrame(draw));
      video.addEventListener("loadedmetadata", () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight / 2;
      });
      video.addEventListener("playing", schedule);
      // Play only while the video is on screen.
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      }).observe(box);
    }
  })();
</script>
