---
layout: page
title: Piezoelectric Beam Stabilization
description: Boundary-feedback design for fast suppression of coupled mechanical and electromagnetic vibrations.
img: assets/img/projects/piezoelectric-beam-stabilization/piezoelectric-beam-schematiccontrols.png
importance: 3
category: Research
related_publications: true
---

## Overview

Magnetizable piezoelectric beams combine mechanical vibration with electrical and magnetic dynamics. In this project, the beam is clamped at one end and controlled from the free end using two boundary measurements: the tip velocity and the electrical current at the electrodes. These signals are amplified and fed back to the beam to suppress both mechanical and electromagnetic oscillations.

The main challenge is choosing the two feedback amplifiers. Gains that are too small, too large, or poorly balanced may produce slow stabilization even when the total energy eventually decreases. This work replaces trial-and-error tuning with a mathematical design that identifies suitable intervals for both amplifiers. {% cite ozer2024exponential %}

<div class="row justify-content-center">
  <div class="col-12 col-md-9 col-lg-7 mt-3">
    {% include figure.liquid
      loading="lazy"
      path="assets/img/projects/piezoelectric-beam-stabilization/piezoelectric-beam-schematic.png"
      title="Magnetizable piezoelectric beam with boundary sensing and actuation"
      class="img-fluid rounded z-depth-1"
      zoomable=true
    %}
  </div>
</div>

<div class="caption">
  A magnetizable piezoelectric beam with mechanical and electrical boundary measurements connected to feedback actuators.
</div>

## Boundary-feedback design

Let \(\xi_1\) denote the amplifier associated with the tip-velocity measurement and let \(\xi_2\) denote the amplifier associated with the electrical-current measurement. The Lyapunov analysis proves that the closed-loop energy satisfies an exponential estimate of the form

$$
\begin{aligned}
E(t)
&\leq
M E(0)e^{-\sigma t},
\qquad t>0,
\end{aligned}
$$

where the decay coefficient \(\sigma\) depends on the beam parameters and on the two feedback amplifiers.

Using both feedback channels is important. One channel primarily acts on the mechanical component, while the other acts on the electrical and magnetic components. Selecting only one amplifier appropriately does not guarantee that the coupled system will stabilize rapidly.

## Amplifier intervals and maximal decay rate

For each admissible value of the auxiliary parameter used in the Lyapunov estimate, the analysis produces two feedback intervals:

$$
\begin{aligned}
\xi_1
&\in
\left(c_1^{-},c_1^{+}\right),\\
\xi_2
&\in
\left(c_2^{-},c_2^{+}\right).
\end{aligned}
$$

The endpoints \(c_1^{-}\), \(c_1^{+}\), \(c_2^{-}\), and \(c_2^{+}\) are determined explicitly from the beam length and its mechanical, electrical, magnetic, and piezoelectric material parameters.

When **both** feedback amplifiers are chosen inside their corresponding intervals, the Lyapunov estimate reaches its largest guaranteed decay coefficient: $ \sigma\_{\mathrm{max}} = \frac{1}{4\eta L}, $ where \(L\) is the beam length and \(\eta\) is a material-dependent propagation constant.

This is the maximal decay rate guaranteed by the analytical estimate. The actual decay of the closed-loop system can be faster. Numerical eigenvalue calculations show that the fastest observed decay rates also occur when both amplifiers lie inside the derived intervals.

For the representative material parameters used in the paper and the choice \(\epsilon=1\), the intervals are approximately

$$
\begin{aligned}
\left(c_1^{-},c_1^{+}\right)
&\approx
\left(
7.17\times10^{5},
4.18\times10^{6}
\right),\\
\left(c_2^{-},c_2^{+}\right)
&\approx
\left(
1.02\times10^{-4},
9.78\times10^{9}
\right).
\end{aligned}
$$

These intervals depend on the material properties of the beam but not on its initial vibration. The same amplifier design can therefore be used for different initial disturbances. In several cases, the observed numerical decay is faster than the guaranteed value \(\sigma\_{\mathrm{max}}\). The analytical rate should therefore be interpreted as a robust guarantee rather than an exact prediction of the fastest possible response.

<div class="row justify-content-center">
  <div class="col-12 col-md-10 col-lg-8 mt-3">
    {% include figure.liquid
      loading="lazy"
      path="assets/img/projects/piezoelectric-beam-stabilization/feedback-amplifier-map.png"
      title="Decay rates across feedback-amplifier choices"
      class="img-fluid rounded z-depth-1"
      zoomable=true
    %}
  </div>
</div>

<div class="caption">
  Numerical decay rates for different amplifier choices. The fastest decay rates occur when both amplifiers lie within the analytically derived intervals.
</div>

<div class="row justify-content-center">
  <div class="col-12 col-md-10 col-lg-8 mt-3">
    {% include figure.liquid
      loading="lazy"
      path="assets/img/projects/piezoelectric-beam-stabilization/energy-decay-comparison.png"
      title="Energy decay for recommended and non-recommended feedback gains"
      class="img-fluid rounded z-depth-1"
      zoomable=true
    %}
  </div>
</div>

<div class="caption">
  When both amplifiers are inside their recommended intervals, the normalized energy decays rapidly. Moving even one amplifier outside its interval produces a slower, oscillatory response with substantially more residual energy.
</div>

<div class="row justify-content-center">
  <div class="col-12 col-lg-10 mt-3">
    {% include figure.liquid
      loading="lazy"
      path="assets/img/projects/piezoelectric-beam-stabilization/piezoelectric-beam-stabilization.gif"
      title="Piezoelectric beam stabilization simulation"
      class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>

<div class="caption">
  Properly selected boundary feedback suppresses the mechanical and electromagnetic oscillations and drives the beam toward equilibrium.
</div>

Standard finite-difference and finite-element models may introduce artificial high-frequency modes that distort the observed decay rate. These modes can make an otherwise effective controller appear less stable as the numerical mesh is refined. This connects the project with the broader work on [observability-preserving discretizations]({{ '/projects/observability-preserving-discretizations/' | relative_url }}).

## Presentation

- **AMS Central States Section, Milwaukee, Wisconsin, April 2024** —
  [Robust Model Reductions for the Boundary Feedback Stabilization of Magnetizable Piezoelectric Beam Equations]({{ '/assets/pdf/presentations/piezoelectric-beam-stabilization/ams-central-states-milwaukee-2024.pdf' | relative_url }})
