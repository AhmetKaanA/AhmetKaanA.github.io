---
layout: page
title: Boundary-Feedback Control of Vibrations on a String with and without Filtering
description: An interactive comparison of boundary damping, filtering, and order-reduced numerical models for a vibrating string.
img: assets/img/projects/wolfram-demonstrations/string-control-filtering.png
importance: 4
category: Wolfram Demonstrations
related_publications: false
---

## Overview

This Demonstration follows a string clamped at one end and damped at the other. The live controls choose `ParametricNDSolve` or `NDSolve`, finite differences, finite elements, or order reduction; select the initial condition and node count; and tune the viscous, filtering, and boundary-damping gains, end time, and normal-mode displacement and velocity.

<div class="row justify-content-center">
  <div class="col-12 col-lg-9 mt-3">
    {% include figure.liquid
      loading="lazy"
      path="assets/img/projects/wolfram-demonstrations/string-control-filtering.png"
      title="Snapshot of Boundary-Feedback Control of Vibrations on a String with and without Filtering"
      class="img-fluid rounded z-depth-1"
      zoomable=true
    %}
  </div>
</div>
<div class="caption">
  The snapshot captures the selected string shape together with its tip-velocity and energy plots; use the official link below to change the solver, model, and feedback parameters interactively.
</div>

## Mathematical model

The string displacement $w(x,t)$ satisfies a boundary-controlled wave equation. Here $k_1$ is distributed viscous damping and $k_3$ is the boundary-feedback gain; filtered finite-difference and finite-element schemes add viscosity proportional to $h^2w_{xxt}$, whereas the order-reduced method remains stable without that added filter:

$$
\begin{aligned}
  w_{tt} + k_1 w_t - w_{xx} &= 0, \\
  w(0,t) &= 0, \\
  w_x(L,t) + k_3 w_t(L,t) &= 0.
\end{aligned}
$$

## Research project

This Demonstration is part of [Observability-Preserving Discretizations]({{ '/projects/observability-preserving-discretizations/' | relative_url }}). It provides a simple model of the high-frequency observability problem later studied for more strongly coupled beam systems, showing why numerical convergence alone is not enough for reliable boundary control.

## Reference

Poynter, Matthew, Logan Stewart, Ahmet Kaan Aydin, and Ahmet Özkan Özer. 2022. _Boundary-Feedback Control of Vibrations on a String with and without Filtering_. Wolfram Demonstrations Project.

## Wolfram Demonstration

[Open the interactive Demonstration](https://demonstrations.wolfram.com/BoundaryFeedbackControlOfVibrationsOnAStringWithAndWithoutFi/)
