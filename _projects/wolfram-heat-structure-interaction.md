---
layout: page
title: Rapid Stabilization of Heat and Structure Interactions with Boundary Feedback Controllers
description: An interactive heat-structure model showing how thermal and mechanical dynamics can be stabilized together.
img: assets/img/projects/wolfram-demonstrations/heat-structure-interaction.png
importance: 7
category: Wolfram Demonstrations
related_publications: false
---

## Overview

This Demonstration couples heat transfer in a copper rod to the longitudinal motion of a magnetizable piezoelectric beam. The live controls set time, the tip-velocity and total-current amplifiers, and the thermal diffusivity, then choose sinusoidal, hot, or cold initial heat distributions and linear, box, or pinch initial beam distributions.

<div class="row justify-content-center">
  <div class="col-12 col-lg-9 mt-3">
    {% include figure.liquid
      loading="lazy"
      path="assets/img/projects/wolfram-demonstrations/heat-structure-interaction.png"
      title="Snapshot of Rapid Stabilization of Heat and Structure Interactions with Boundary Feedback Controllers"
      class="img-fluid rounded z-depth-1"
      zoomable=true
    %}
  </div>
</div>
<div class="caption">
  The snapshot shows the beam state, temperature scale, tip-velocity, total-current, and contact-displacement gauges; use the official link below to explore the thermal profile and feedback design interactively.
</div>

## Mathematical model

The copper rod follows the heat equation $z_t-\kappa z_{xx}=0$, while the beam displacement $v$ and electrode charge $p$ satisfy a coupled piezoelectric system. Temperature and velocity meet at the rod-beam interface, and tip gains $\xi_1$ and $\xi_2$ feed back velocity and total current; order-reduced finite differences preserve the continuous system's exponential-stability behavior:

$$
\begin{bmatrix}
\rho & 0 \\
0 & \mu
\end{bmatrix}
\begin{bmatrix}
v \\
p
\end{bmatrix}_{tt}
=
\begin{bmatrix}
\alpha & -\gamma\beta \\
-\gamma\beta & \beta
\end{bmatrix}
\begin{bmatrix}
v \\
p
\end{bmatrix}_{xx}.
$$

## Research project

This Demonstration is part of [Piezoelectric Beam Stabilization]({{ '/projects/piezoelectric-beam-stabilization/' | relative_url }}), extending its boundary-feedback design to a coupled heat-structure system. It connects amplifier design and structure-preserving discretization to a multiphysics setting in which thermal and mechanical energy must decay together.

## Reference

Walterman, Jacob, Ahmet Kaan Aydin, and Ahmet Özkan Özer. 2024. _Rapid Stabilization of Heat and Structure Interactions with Boundary Feedback Controllers_. Wolfram Demonstrations Project.

## Wolfram Demonstration

[Open the interactive Demonstration](https://demonstrations.wolfram.com/RapidStabilizationOfHeatAndStructureInteractionsWithBoundary/)
