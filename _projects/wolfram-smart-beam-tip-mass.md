---
layout: page
title: Stabilization of a Smart Beam with a Tip Mass
description: An interactive observer-controller model for a magnetizable piezoelectric beam with a dynamic tip load.
img: assets/img/projects/wolfram-demonstrations/smart-beam-tip-mass.png
importance: 6
category: Wolfram Demonstrations
related_publications: false
---

## Overview

This Demonstration examines a magnetizable piezoelectric beam with a mass dynamically coupled to its free tip. The live controls step through time, change the tip mass, and tune three controller amplifiers and four observer amplifiers; the gauges show velocity and total-current tracking errors alongside controller velocity and the auxiliary $\eta$-dynamics.

<div class="row justify-content-center">
  <div class="col-12 col-lg-9 mt-3">
    {% include figure.liquid
      loading="lazy"
      path="assets/img/projects/wolfram-demonstrations/smart-beam-tip-mass.png"
      title="Snapshot of Stabilization of a Smart Beam with a Tip Mass"
      class="img-fluid rounded z-depth-1"
      zoomable=true
    %}
  </div>
</div>
<div class="caption">
  The snapshot shows the beam and dynamic tip load, error-tracking gauges, and controller-dynamics gauges; use the official link below to change the mass and observer-controller gains interactively.
</div>

## Mathematical model

For displacement $w$ and electrode charge $p$, the beam is represented by coupled mechanical and electromagnetic wave equations. At the tip, the mass contributes the inertial term $m w_{tt}(L,t)$, while voltage and strain feedback provide the boundary control; an observer reconstructs the state from left-end measurements and drives its error toward zero:

$$
\begin{bmatrix}
\rho & 0 \\
0 & \mu
\end{bmatrix}
\begin{bmatrix}
w \\
p
\end{bmatrix}_{tt}
=
\begin{bmatrix}
\alpha & -\gamma\beta \\
-\gamma\beta & \beta
\end{bmatrix}
\begin{bmatrix}
w \\
p
\end{bmatrix}_{xx}.
$$

## Research project

This Demonstration is part of [Piezoelectric Beam Stabilization]({{ '/projects/piezoelectric-beam-stabilization/' | relative_url }}), extending boundary-feedback design to a beam with a dynamic tip load. It shows why a payload changes both the boundary equations and the observer-controller architecture needed for rapid stabilization.

## Reference

Walterman, Jacob, Ahmet Kaan Aydin, and Ahmet Özkan Özer. 2024. _Stabilization of a Smart Beam with a Tip Mass_. Wolfram Demonstrations Project.

## Wolfram Demonstration

[Open the interactive Demonstration](https://demonstrations.wolfram.com/StabilizationOfASmartBeamWithATipMass/)
