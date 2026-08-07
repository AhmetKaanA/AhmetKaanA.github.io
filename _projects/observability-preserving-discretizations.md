---
layout: page
title: Observability-Preserving Discretizations
description: Numerical discretizations that preserve the boundary observability and control properties of continuous beam models by addressing spurious high-frequency modes introduced by standard methods.
img: assets/img/projects/observability-preserving-discretizations/obsmemeNEW.png
importance: 2
category: Research
related_publications: true
---

## Overview

Many vibration-control problems for beams and other distributed systems are modeled by partial differential equations, while sensors and actuators are available only at the boundary, such as at the tip of a beam. A boundary controller uses measurements like displacement, velocity, or rotation to suppress vibrations throughout the structure. Its success depends on whether the sensor captures enough information about the full system. A system is exactly observable when boundary measurements collected over a finite time are sufficient to determine the energy of the initial state.

One might expect this observability property to be retained when the continuous system is approximated using standard numerical methods such as finite differences or finite elements. However, these discretizations can introduce spurious high-frequency modes that are poorly detected by the boundary sensor, causing the discrete model to lose uniform observability as the mesh is refined.

In this project, we developed and compared two remedies for a certain class of beam models:

- **Direct Fourier filtering**, which removes the problematic portion of the discrete spectrum.
- **Order-reduced finite differences (ORFD)**, which build the desired observability behavior into the discretization itself.

## Models and results covered

The project brings together several related studies:

- hinged multilayer Mead–Marcus beam models with an arbitrary number of layers, {% cite aydin2023novel ozer2022robust %}
- cantilevered Mead–Marcus sandwich beams {% cite ozer2023novel%},
- fully clamped Euler–Bernoulli beam equations {% cite aydin2024new%}, and
- extensions toward strongly coupled piezoelectric systems {% cite aydin2026robust %}.

Across these settings, standard discretizations create artificial modes that are invisible to the boundary sensor, while filtering or structure-preserving discretization restores a numerically reliable model.

<div class="row justify-content-sm-center">
  <div class="col-10 col-sm-8 col-md-6 col-lg-5">
    {% include figure.liquid loading="lazy" path="assets/img/projects/observability-preserving-discretizations/beam-geometry.jpg" title="Multilayer Mead-Marcus sandwich-beam geometry" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Multilayer sandwich-beam geometry with alternating elastic or piezoelectric and viscoelastic layers.
</div>

### Spectral behavior and filtering

The eigenvalues of the corresponding control problem showcase the spurious modes. In the unfiltered standard finite-difference model, the high-frequency modes drift toward the imaginary axis. A direct approach is to eliminate these modes from the spectrum altogether. Another approach is to redesign the discretization. The two approaches serve related but slightly different purposes.

**Direct Fourier filtering** is especially useful when the problematic spectral branch can be identified explicitly. It trims away the artificial part of the discrete spectrum and recovers uniform observability on the retained subspace. This gives a practical fix for standard discretizations and leads to robust sensor and actuator design in the multilayer beam setting. {% cite ozer2022robust aydin2023novel %}

**ORFD** takes a more structural approach. Instead of correcting the spectrum after discretization, it modifies the discretization itself so that the numerical model respects the same observability mechanism as the continuous PDE. This is particularly valuable in settings where spectral filtering is difficult or inconvenient, such as cantilevered beam models and fully clamped Euler–Bernoulli problems. {% cite ozer2023novel aydin2024new %}

<div class="row justify-content-sm-center">
  <div class="col-10 col-sm-8 col-md-6 col-lg-5">
    {% include figure.liquid loading="lazy" path="assets/img/projects/observability-preserving-discretizations/sfd-eigenvalues.png" title="Eigenvalues of the standard finite-difference discretization" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Standard finite-difference discretization: the rightmost eigenvalues move close to the imaginary axis, indicating poor damping of the highest-frequency numerical modes.
</div>

<div class="row">
  <div class="col-lg-4 col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/observability-preserving-discretizations/unfiltered-discretization.gif" title="Unfiltered discretization simulation" class="img-fluid rounded z-depth-1" %}
    <div class="caption">
      <strong>Unfiltered:</strong> the standard discretization retains spurious high-frequency activity and decays slowly.
    </div>
  </div>

  <div class="col-lg-4 col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/observability-preserving-discretizations/filtered-discretization.gif" title="Fourier-filtered discretization simulation" class="img-fluid rounded z-depth-1" %}
    <div class="caption">
      <strong>Filtered:</strong> direct Fourier filtering removes the unstable portion of the numerical spectrum and restores effective damping.
    </div>
  </div>

  <div class="col-lg-4 col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/observability-preserving-discretizations/orfd-discretization.gif" title="Order-reduced finite-difference discretization simulation" class="img-fluid rounded z-depth-1" %}
    <div class="caption">
      <strong>ORFD:</strong> the order-reduced discretization preserves the desired observability behavior directly, without needing an added filter.
    </div>
  </div>
</div>

In conclusion, **a reduced model for control should preserve boundary observability, not just state convergence**. For these beam problems:

- the unfiltered standard discretization can misrepresent the high-frequency behavior that matters for sensing and feedback
- direct Fourier filtering repairs the model by removing the spurious modes and
- order-reduced finite differences give a cleaner long-term solution by preserving the correct structure at the discretization stage.

### Selected Presentations on the Project

<ul>
  <li>
    <strong>62nd IEEE Conference on Decision and Control</strong>,
    Singapore, December 2023 —
    <a
      href="{{ '/assets/pdf/presentations/observability/cdc-2023-multilayer-smart-beam.pdf' | relative_url }}"
      target="_blank"
      rel="noopener"
    >
      A Novel Finite Difference-Based Model Reduction and a Sensor Design for a Multilayer Smart Beam with Arbitrary Number of Layers
    </a>
  </li>

  <li>
    <strong>Joint Mathematics Meetings (JMM)</strong>,
    Washington, DC, January 2026 —
    <a
      href="{{ '/assets/pdf/presentations/observability/jmm-2026-euler-bernoulli-observability.pdf' | relative_url }}"
      target="_blank"
      rel="noopener"
    >
      A New Semi-Discretization of the Fully Clamped Euler–Bernoulli Beam Preserving Boundary Observability Uniformly
    </a>
  </li>

  <li>
    <strong>SIAM Pacific Northwest Sectional Meeting</strong>,
    Vancouver, Washington, May 2022 —
    <a
      href="{{ '/assets/pdf/presentations/observability/siam-pnw-2022-sandwich-beam.pdf' | relative_url }}"
      target="_blank"
      rel="noopener"
    >
      Avoiding Sensor Data Filtering by a Novel Model Reduction for the PDE System of a Multi-Layer Sandwich Beam
    </a>
  </li>
</ul>
