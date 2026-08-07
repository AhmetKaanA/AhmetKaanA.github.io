---
layout: page
title: Stabilization of the Wave Equation by Direct Fourier Filtering
description: A boundary-controlled wave-equation model comparing direct Fourier filtering with an order-reduced discretization.
img: assets/img/projects/wolfram-demonstrations/wave-equation-filtering.png
importance: 3
category: Wolfram Demonstrations
related_publications: false
---

## Overview

This Demonstration models a one-dimensional wave controlled by damping at its free end. The live controls choose an initial configuration and its location, select finite differences, finite elements, or order reduction, and vary the node count, viscous damping, boundary damping, and direct-Fourier-filter cutoff.

<div class="row justify-content-center">
  <div class="col-12 col-lg-9 mt-3">
    {% include figure.liquid
      loading="lazy"
      path="assets/img/projects/wolfram-demonstrations/wave-equation-filtering.png"
      title="Snapshot of Stabilization of the Wave Equation by Direct Fourier Filtering"
      class="img-fluid rounded z-depth-1"
      zoomable=true
    %}
  </div>
</div>
<div class="caption">
  The snapshot shows the wave profile, controlled-end motion, normalized energies, and discrete spectrum; use the official link below to change the configuration, approximation, and spectral-filter parameters interactively.
</div>

## Mathematical model

The model uses distributed damping $k_1$ and boundary feedback $k_3$. In standard discrete models, high-frequency eigenvalues drift toward the imaginary axis as $h\to0$; direct Fourier filtering removes this poorly damped part of the spectrum, while order reduction retains the relevant stability behavior without filtering:

$$
\begin{aligned}
  y_{tt} + k_1 y_t - y_{xx} &= 0, \\
  y(0,t) &= 0, \\
  y_x(L,t) + k_3 y_t(L,t) &= 0.
\end{aligned}
$$

## Research project

This Demonstration is part of [Observability-Preserving Discretizations]({{ '/projects/observability-preserving-discretizations/' | relative_url }}), which studies numerical models that retain reliable boundary sensing and feedback control. It is the collection's most elementary example of how a spectral filter and a structure-preserving discretization address the same control-theoretic problem.

## Reference

Walterman, Jacob, Ahmet Kaan Aydin, Matthew Poynter, and Ahmet Özkan Özer. 2024. _Stabilization of the Wave Equation by Direct Fourier Filtering_. Wolfram Demonstrations Project.

## Wolfram Demonstration

[Open the interactive Demonstration](https://demonstrations.wolfram.com/StabilizationOfTheWaveEquationByDirectFourierFiltering/)
