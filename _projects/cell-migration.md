---
layout: page
title: Border Cell Migration in the Drosophila Egg Chamber
description: Phase-field modeling of border-cell migration in the three-dimensional Drosophila egg chamber, with complementary two-dimensional simulations.
img: assets/img/projects/border-cell-migration/thumbnail.png
importance: 4
category: Research
related_publications: false
---

<style>
  mjx-container[jax="CHTML"][display="true"] {
    overflow-x: visible;
  }
</style>

## Overview

During mid-oogenesis in the _Drosophila melanogaster_ egg chamber, a small cluster of border cells detaches from the anterior follicular epithelium and migrates between the large nurse cells toward the oocyte. The migration is guided by chemoattractants secreted by the oocyte, but it also depends on physical contact with the surrounding nurse cells: the cluster crawls along their surfaces, and the narrow extracellular gaps between them shape both the path of the cluster and the distribution of the chemoattractant.

We model the egg chamber with a multiphase-field framework in which every cell (the border-cell cluster, the oocyte, and the nurse cells) is a diffuse-interface phase field confined by the follicular epithelium. The cellular geometry determines where the chemoattractant can diffuse, and the chemoattractant determines the direction of the contact-mediated traction that moves the cluster. We study migration in a three-dimensional chamber with fifteen nurse cells, an oocyte, and a cluster seated in the anterior tip, alongside a two-dimensional cross-section model.

<div class="row justify-content-center">
  <div class="col-12 col-lg-9 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/border-cell-migration/migration_3d.gif" title="Border cell migration in the three-dimensional egg chamber" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Border-cell cluster (red) migrating from the anterior tip between fifteen nurse cells (grey) toward the oocyte (blue).
</div>

### Mathematical model

Each cell is represented by a phase field $\phi_m(\mathbf{x},t)\in[0,1]$ that evolves as a gradient flow of an energy containing interface, volume-constraint, cell–cell repulsion, adhesion, and epithelial-confinement terms,

$$
\frac{\partial \phi_m}{\partial t} = -M\,\frac{\delta E}{\delta \phi_m}, \qquad m = 1,\dots,N .
$$

The chemoattractant concentration $c$ is secreted at the oocyte interface and diffuses through the extracellular space,

$$
\frac{\partial c}{\partial t} = \nabla\cdot\big(D(\boldsymbol\phi)\,\nabla c\big) - \kappa(\boldsymbol\phi)\,c + \sigma\,|\nabla \phi_{o}|,
$$

where the diffusivity $D(\boldsymbol\phi)$ is high in the extracellular corridors and strongly reduced inside the cells, and $\kappa(\boldsymbol\phi)$ combines degradation with uptake by the nurse cells.

The cluster is driven by the Tangential Interface Migration (TIM) force, which acts only where the cluster touches neighboring cells. Its traction follows the cell interfaces and responds to the chemoattractant gradient along them. The model is discretized with trilinear finite elements on a structured grid and advanced with an implicit time-stepping scheme, with each cell computed only in a box around its support.

## Migration in the egg chamber

The two-dimensional cross-section shows the cluster moving along the interfaces of six nurse cells.

<div class="row justify-content-center">
  <div class="col-10 col-sm-8 col-md-6 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/border-cell-migration/migration_2d.gif" title="Two-dimensional border cell migration model" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Two-dimensional model: cluster migration driven by the TIM force (vectors) along nurse-cell interfaces.
</div>

In the three-dimensional chamber, the cluster travels between nurse cells while the chemoattractant spreads through the extracellular corridors. Longitudinal and cross-sections show the cluster path and the surrounding concentration field.

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/border-cell-migration/section_longitudinal_cells.gif" title="Longitudinal section following the border-cell cluster" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: the three-dimensional chamber with a section plane through the anterior–posterior axis. Right: the cells on that section as the cluster (red) pushes between the nurse cells toward the oocyte (orange).
</div>

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/border-cell-migration/sections_cross_concentration.gif" title="Cross-sections of the chemoattractant field" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Chemoattractant concentration on two cross-sections perpendicular to the anterior–posterior axis: one just ahead of the cluster front, and one through the cluster center.
</div>

<div class="row justify-content-center">
  <div class="col-12 col-lg-10 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/border-cell-migration/concentration_3d.png" title="Three-dimensional chemoattractant isosurfaces" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Steady chemoattractant field before migration: isosurfaces at fractions of the maximum concentration, highest around the oocyte and channeled through the extracellular space between the nurse cells.
</div>

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/border-cell-migration/tim_slice_longitudinal.png" title="TIM traction on a longitudinal section" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  TIM traction on a longitudinal section through the migration path, with the concentration in the background. The enlarged view shows the traction near the cluster, including the planar calculation on the same section.
</div>

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/border-cell-migration/tim_slice_cross.png" title="TIM traction on a cross-section" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  TIM traction on the cross-section through the cluster center. Arrow color shows the component along the anterior–posterior axis; the arrows in the plane show the sideways traction around the cluster.
</div>

## Main observations

- On a symmetry plane of the chamber, TIM traction follows the nurse-cell interfaces along the cluster's route.
- On cross-sections through the cluster, the traction is dominated by its anterior–posterior component; its sideways part, which acts around the cluster, is about one fifth of the total.
- Migration is strongly non-uniform. The cluster first presses slowly into the nurse cells at the anterior tip and then breaks out and accelerates toward the oocyte.
- The chemoattractant is channeled through the extracellular corridors, so the cluster samples a field shaped by the three-dimensional arrangement of the nurse cells rather than by distance from the oocyte alone.

Current work extends these simulations to an experimentally reconstructed egg-chamber geometry, nurse-cell uptake of the chemoattractant, and growth of the egg chamber, which elongates mainly along the anterior–posterior axis during oogenesis.

## References

1. A. K. Aydin, N. Akhavan, A. S. George, M. Starz-Gaiano, B. E. Peercy. _Cell surface geometry guides three-dimensional border cell migration in the Drosophila egg chamber._ In preparation.
2. N. Akhavan, A. George, M. Starz-Gaiano, B. E. Peercy. _Cell migration boundary motion in Drosophila egg chambers: a combined phase field and chemoattractant model._ arXiv:2604.01357 (2026). [arXiv](https://arxiv.org/abs/2604.01357) · [Code](https://github.com/Naghmeh-Akhavan/PFM_Feedback_Concentration_Model)
3. N. Akhavan, A. George, M. Starz-Gaiano, B. E. Peercy. _Phase-field modeling of border cell cluster migration in Drosophila._ PLOS Computational Biology 22(4), e1014176 (2026). [Article](https://doi.org/10.1371/journal.pcbi.1014176)
