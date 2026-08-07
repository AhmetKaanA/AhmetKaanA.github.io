---
layout: page
title: Vibration Suppression on a Hinged Three-Layer Sandwich Beam
description: Interactive boundary control of a layered sandwich beam with filtering and vibration suppression.
img: assets/img/projects/wolfram-demonstrations/hinged-sandwich-beam.png
importance: 1
category: Wolfram Demonstrations
related_publications: false
---

## Overview

This Demonstration models a hinged three-layer sandwich beam with elastic or piezoelectric outer layers and a shear-deformable viscoelastic core. A tip sensor-controller suppresses bending vibrations; the live controls select the layer count and solver, vary the initial profile, mesh size, filtering, damping, and time, and tune each layer's thickness, Young's modulus, Poisson ratio, and the core shear modulus.

<div class="row justify-content-center">
  <div class="col-12 col-lg-9 mt-3">
    {% include figure.liquid
      loading="lazy"
      path="assets/img/projects/wolfram-demonstrations/hinged-sandwich-beam.png"
      title="Snapshot of Vibration Suppression on a Hinged Three-Layer Sandwich Beam"
      class="img-fluid rounded z-depth-1"
      zoomable=true
    %}
  </div>
</div>
<div class="caption">
  The snapshot shows the beam profile, tip-sensor signal, energy components, transverse displacement, and core shear angle; use the official link below to change the displayed parameters interactively.
</div>

## Mathematical model

The Mead–Marcus model couples transverse displacement $w(x,t)$ to the shear angle $v(x,t)$ of the viscoelastic core. The tip feedback uses $d_3 w_{xt}(L,t)$ to produce continuous energy decay $E(t) \leq M e^{-\omega t}E(0)$; in the finite-difference model, a viscosity term proportional to $d_2w_{xxt}$ prevents artificial high-frequency modes from obscuring that decay:

$$
\begin{aligned}
  w_{tt} + w_{xxxx} - B v_x &= 0, \\
  -C v_{xx} + P v + B w_{xxx} &= 0.
\end{aligned}
$$

## Research project

This Demonstration is part of [Observability-Preserving Discretizations]({{ '/projects/observability-preserving-discretizations/' | relative_url }}), specifically its work on filtering and sensing for hinged Mead–Marcus sandwich beams. It gives a visual counterpart to the project's central question: whether a discrete model preserves the boundary information required for effective feedback control.

## Reference

Aydin, Ahmet Kaan, Matthew Poynter, and Ahmet Özkan Özer. 2022. _Vibration Suppression on a Hinged Three-Layer Sandwich Beam_. Wolfram Demonstrations Project.

## Wolfram Demonstration

[Open the interactive Demonstration](https://demonstrations.wolfram.com/VibrationSuppressionOnAHingedThreeLayerSandwichBeam/)
