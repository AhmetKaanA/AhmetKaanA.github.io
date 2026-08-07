---
layout: page
title: Feedback Sensor Design for a Cantilevered Three-Layer Sandwich Beam
description: A visual sensor-design experiment for a layered beam clamped at one end and free at the other.
img: assets/img/projects/wolfram-demonstrations/cantilevered-sandwich-beam.png
importance: 2
category: Wolfram Demonstrations
related_publications: false
---

## Overview

This Demonstration models a cantilevered three-layer sandwich beam whose tip-velocity measurement is fed back to a boundary actuator. The live controls choose the layer count and solver; vary the initial form, mesh size, damping, position, velocity, and time; and adjust the three layer thicknesses, elastic constants, Poisson ratios, and core shear modulus.

<div class="row justify-content-center">
  <div class="col-12 col-lg-9 mt-3">
    {% include figure.liquid
      loading="lazy"
      path="assets/img/projects/wolfram-demonstrations/cantilevered-sandwich-beam.png"
      title="Snapshot of Feedback Sensor Design for a Cantilevered Three-Layer Sandwich Beam"
      class="img-fluid rounded z-depth-1"
      zoomable=true
    %}
  </div>
</div>
<div class="caption">
  The snapshot shows the beam profile, sensor trace, energy components, transverse displacement, and core shear angle; use the official link below to change the displayed parameters interactively.
</div>

## Mathematical model

With $w(x,t)$ denoting bending and $v(x,t)$ the core shear angle, the Mead–Marcus equations are coupled through the core. At the free tip, $w_{xxx}(L,t)-d_3w_t(L,t)$ supplies the velocity-feedback damping, while the order-reduced finite-difference discretization preserves uniform observability as $h\to0$ without the high-frequency filter required by standard schemes:

$$
\begin{aligned}
  w_{tt} + w_{xxxx} - B v_x &= 0, \\
  -C v_{xx} + P v + B w_{xxx} &= 0.
\end{aligned}
$$

## Research project

This Demonstration is part of [Observability-Preserving Discretizations]({{ '/projects/observability-preserving-discretizations/' | relative_url }}), specifically its order-reduced sensor design for cantilevered Mead–Marcus sandwich beams. It illustrates how a discretization can be built around the sensing and stabilization properties needed by the controller.

## Reference

Aydin, Ahmet Kaan, Matthew Poynter, and Ahmet Özkan Özer. 2022. _Feedback Sensor Design for a Cantilevered Three-Layer Sandwich Beam_. Wolfram Demonstrations Project.

## Wolfram Demonstration

[Open the interactive Demonstration](https://demonstrations.wolfram.com/FeedbackSensorDesignForACantileveredThreeLayerSandwichBeam/)
