---
layout: page
title: Low-Rank Stochastic Navier–Stokes Solvers
description: Low-rank tensor-decomposition-based solvers for time-dependent Navier–Stokes equations with stochastic viscosity.
img: assets/img/projects/low-rank-navier-stokes/mean-flow-fields.png
importance: 3
category: Research
related_publications: true
---

## Overview

This project develops solvers for the **unsteady incompressible Navier–Stokes equations with uncertain viscosity**. We use a spectral stochastic Galerkin approach based on generalized polynomial chaos (gPC) expansions, and seek the corresponding gPC expansions of the velocity and pressure. A sequential solver for the underlying deterministic problem with the mean viscosity is used to predetermine the time-step sizes. Subsequently, in the formulation of the stochastic problem, the equations at these time steps are assembled into an all-at-once formulation. The coupling through both the time steps and the terms of the gPC expansion leads to a single large system.

The central idea is to preserve the useful time–stochastic–space structure of this system instead of assembling and storing it as one unstructured vector or matrix. The solution is compressed in **Tensor Train (TT)** format, selected operators are approximated in **CANDECOMP/PARAFAC (CP)** format, and the resulting low-rank structure is used throughout the nonlinear and Krylov iterations.

### The model in brief

The flow obeys the incompressible Navier–Stokes equations for the velocity $\boldsymbol{u}$ and the pressure $p$, with a viscosity $\nu$ that depends on a vector $\boldsymbol{\xi}$ of random parameters:

$$
\partial_t \boldsymbol{u} - \nabla\cdot\bigl(\nu(\boldsymbol{\xi})\nabla\boldsymbol{u}\bigr) + (\boldsymbol{u}\cdot\nabla)\boldsymbol{u} + \nabla p = \boldsymbol{f},
$$

$$
\nabla\cdot\boldsymbol{u} = 0.
$$

Because the viscosity is uncertain, so are the velocity and the pressure. Each of them is written as a sum of fixed polynomials in $\boldsymbol{\xi}$ (a polynomial-chaos expansion) whose coefficients are ordinary flow fields. Once these coefficients are known, the mean, the variance and the full probability distribution of the flow follow directly.

The equations are discretized with finite elements in space and backward Euler in time, and projected onto the polynomials (stochastic Galerkin). All time steps and all polynomial coefficients are then solved together as one large nonlinear system. Its unknowns form a three-way array, indexed by time step, polynomial and spatial degree of freedom. Instead of storing this array in full, the solver keeps it in **Tensor Train** form, a chain of three much smaller factors. The large operators are stored in **CP** form, as short sums of products of separate time, stochastic and spatial matrices. Every step of the solver works directly on these compressed forms.

The numerical experiments use flow through a narrow channel with a symmetric constriction. A time-dependent parabolic profile enters from the left, the upper and lower walls satisfy no-slip conditions, and a natural outflow condition is imposed on the right. The domain is discretized using a quadrilateral Taylor–Hood mesh.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/low-rank-navier-stokes/narrow-channel-domain.jpg" title="Narrow channel benchmark domain and finite-element mesh" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Narrow-channel geometry
</div>

The reported setup uses a lognormal viscosity field with mean
$\mathbb{E}[\nu]=0.01$, coefficient of variation $10\%$, two underlying
random variables, and a total-degree-three polynomial-chaos approximation.
With 40 time steps, 2,025 spatial degrees of freedom, and 10 stochastic modes,
the coupled all-at-once problem contains 810,000 unknowns.

The nonlinear convection term is handled with Picard iteration. Each Picard
correction is computed by an outer flexible GMRES solve for the saddle-point
system. Applying its preconditioner requires an approximate solve with the
velocity block $\mathbb{F}_u$, which is performed by a second, inner,
low-rank GMRES iteration.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/low-rank-navier-stokes/nested-solver.png" title="Nested Picard and GMRES solver structure" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Nested solver architecture: Picard iteration, an outer GMRES saddle-point solve, and an inner low-rank GMRES approximation of the velocity-block inverse.
</div>

The solver also uses **residual-dependent tolerances**. Early iterations are
allowed to use looser GMRES and TT-rounding tolerances; the requested accuracy
is tightened only as the nonlinear residual decreases. This avoids spending
time and memory on highly accurate intermediate solutions that will soon be
updated.

The stochastic Galerkin approximation provides the full polynomial-chaos
representation of velocity and pressure, from which mean, variance, and local
probability distributions can be evaluated. In the narrow section, the mean
horizontal velocity increases as the channel contracts, while the vertical
velocity and pressure fields show the influence of the two corners of the
constriction.

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/low-rank-navier-stokes/mean-flow-fields.png" title="Mean velocity and pressure fields at two time levels" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Mean horizontal velocity, vertical velocity, and pressure at an intermediate time and at the final time.
</div>

## Main observations

For the benchmark reported in the manuscript:

- The stochastic Galerkin mean fields agree closely with Monte Carlo and stochastic collocation references.
- Residual-dependent tolerances avoid oversolving the early nested iterations.
- The TT representation maintains at least a $7{:}1$ compression ratio at the most demanding stage of the solve, corresponding to an $86\%$ reduction in memory for the velocity vector.
- A rank-one CP approximation of the global velocity block provides an inexpensive preconditioner and performs particularly well across the tested time-step regimes.

The work is now available as an arXiv preprint. {% cite aydin2026meaninformed %}
