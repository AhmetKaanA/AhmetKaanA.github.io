---
layout: page
title: Dynamics of a Longitudinal Piezoelectric Beam
description: An interactive view of coupled mechanical motion, electrical response, sensing, and actuation.
img: assets/img/projects/wolfram-demonstrations/longitudinal-piezoelectric-beam.png
importance: 5
category: Wolfram Demonstrations
related_publications: false
---

## Overview

This Demonstration visualizes the longitudinal motion of a piezoelectric beam and its coupled electrical response at the electrodes. The live controls choose initial position and velocity profiles, step through time, set the initial compression or extension, and tune the feedback-sensor amplifier and viscous damping; the gauges track voltage, total energy, sensor output, and actuator response.

<div class="row justify-content-center">
  <div class="col-12 col-lg-9 mt-3">
    {% include figure.liquid
      loading="lazy"
      path="assets/img/projects/wolfram-demonstrations/longitudinal-piezoelectric-beam.png"
      title="Snapshot of Dynamics of a Longitudinal Piezoelectric Beam"
      class="img-fluid rounded z-depth-1"
      zoomable=true
    %}
  </div>
</div>
<div class="caption">
  The snapshot shows the beam, electrode-voltage gauge, and total-energy, sensor, and actuator gauges; use the official link below to change initial conditions and feedback parameters interactively.
</div>

## Mathematical model

Writing $\mathbf{u}=(v,p)^{\mathsf T}$ for longitudinal displacement and electrode charge, a strongly coupled piezoelectric model has a mass matrix on the left and a stiffness-coupling matrix on the right. The off-diagonal terms express how strain changes the electrical state and voltage-driven actuation changes the mechanical state, so feedback must reduce the coupled energy rather than treating the two wave types independently:

$$
\begin{bmatrix}
\rho & 0 \\
0 & \mu
\end{bmatrix}
\mathbf{u}_{tt}
=
\begin{bmatrix}
\alpha & -\gamma\beta \\
-\gamma\beta & \beta
\end{bmatrix}
\mathbf{u}_{xx}.
$$

## Research project

This Demonstration is part of [Piezoelectric Beam Stabilization]({{ '/projects/piezoelectric-beam-stabilization/' | relative_url }}), which develops boundary-feedback amplifiers for rapid, robust energy decay. It provides the basic dynamic picture behind the project's analysis of mechanical and electrical feedback channels.

## Reference

Walterman, Jacob, Ahmet Kaan Aydin, Samuel Leveridge, and Ahmet Özkan Özer. 2023. _Dynamics of a Longitudinal Piezoelectric Beam_. Wolfram Demonstrations Project.

## Wolfram Demonstration

[Open the interactive Demonstration](https://demonstrations.wolfram.com/DynamicsOfALongitudinalPiezoelectricBeam/)
