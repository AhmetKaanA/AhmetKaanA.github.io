---
layout: page
title: Border Cell Migration in the Drosophila Egg Chamber
description: 3D simulations of a small group of cells traveling through a fruit-fly egg chamber that is reconstructed from microscope images and grows during the journey.
img: assets/img/projects/border-cell-migration/thumbnail-growing-3x2.png
importance: 2
category: Research
related_publications: false
---

## Overview

In the egg chamber of the fruit fly _Drosophila_, a small group of **border cells** breaks away from the outer cell layer at one tip. It then squeezes between fifteen large **nurse cells** until it reaches the **oocyte**, the future egg, at the other end. A chemical signal released by the oocyte shows the way, and the cluster moves by crawling along the surfaces of the nurse cells.

We simulate this journey in 3D. The shape of the egg chamber comes from microscope images of a real chamber. The egg chamber is not standing still during the journey either: it grows, and the oocyte grows much faster than the nurse cells around it. In this model the cluster is a single soft body; a companion model builds it [cell by cell]({{ '/projects/cell-cluster-migration/' | relative_url }}).

_All animations on this page are computer simulations, not microscope recordings._

<div class="row justify-content-center">
  <div class="col-10 col-sm-8 col-md-6 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/border-cell-migration/migration-3d-growing.gif" title="The border-cell cluster migrating through the growing egg chamber" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The whole journey in 3D. The cluster (red) starts at the tip and travels between the nurse cells (gray) to the oocyte (blue), while the chamber grows around it.
</div>

<div class="row justify-content-center">
  <div class="col-12 col-lg-10 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/border-cell-migration/start-and-arrival.png" title="Start and arrival" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  The start and the end of the journey. By the time the cluster arrives, the chamber is clearly bigger, and the oocyte has grown the most.
</div>

## Inside the chamber

Cutting the chamber open shows the path of the cluster. It first presses slowly into the nurse cells at the tip, then breaks through and travels along the middle of the chamber toward the oocyte. The nurse cells make way as it passes. As the chamber grows, the cells take up the extra room, so the spaces between them get tighter along the way.

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/border-cell-migration/cut-along-chamber.gif" title="A cut along the chamber" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: the chamber in 3D with the cutting plane and the path of the cluster. Right: the cells on that cut. The cluster (green) moves toward the oocyte (blue), and the red line marks its front.
</div>

Cuts across the chamber show the cluster wedged between the nurse cells, and the narrow spaces it is about to enter.

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/border-cell-migration/cross-sections.gif" title="Cuts across the chamber that follow the cluster" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Two cuts across the chamber that move with the cluster: one just ahead of it (blue frame) and one through it (orange frame).
</div>

## Following the signal

The oocyte releases a chemical signal that spreads through the narrow spaces between the cells. The signal is strongest at the oocyte, so it works like a scent trail. The border cells sense it, and they crawl along the nurse cells in the direction in which the signal gets stronger.

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/border-cell-migration/guidance-signal.gif" title="The guidance signal along the chamber" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The guidance signal on the cut along the chamber, from low (blue) to high (yellow). It is strongest around the oocyte.
</div>

The push from crawling acts where the cluster touches the nurse cells. On a cut through the cluster, the arrows show which way the push points.

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/border-cell-migration/push-arrows-slice.png" title="The crawling push around the cluster" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Left: a cut along the chamber, midway through the journey. Right: a close-up of the cluster (green). The arrows are strongest along the surfaces it shares with the nurse cells, and they point toward the oocyte.
</div>

## Does crowding matter?

How fast the cluster travels depends on how tightly the cells are packed. We repeated the journey with a chamber that does not grow, and with growing chambers that leave more or less space between the cells. When the cells are packed more tightly, the cluster reaches the oocyte sooner. One likely reason is that a crowded cluster touches more nurse-cell surface to crawl on.

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/border-cell-migration/packing-comparison.gif" title="The journey with different amounts of space between the cells" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Four runs on the same clock, each shown on the cut along the chamber. Each panel is scaled to fit, so chamber sizes are not comparable between panels. With less space between the cells, the cluster (green) arrives sooner.
</div>

## At the end of the journey

Once the cluster has reached the oocyte, a cut swept through the whole chamber shows how the cells are arranged: from the narrow tip, through the rings of nurse cells, to the large oocyte.

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/border-cell-migration/slice-sweep.gif" title="A cut sweeping through the chamber after arrival" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  A cut across the chamber moving from the tip to the oocyte, after the cluster (green) has arrived.
</div>

## Main observations

- The cluster spends more than half of its journey time pressing into the nurse cells at the tip. Then it breaks out and moves quickly to the oocyte.
- The signal from the oocyte is channeled through the narrow spaces between the cells, so the cluster follows a trail shaped by the arrangement of the nurse cells, not just by the distance to the oocyte.
- In a growing chamber, the cells fill in the extra room. The more tightly they are packed, the sooner the cluster arrives.

## References

1. A. K. Aydin, N. Akhavan, A. S. George, M. Starz-Gaiano, B. E. Peercy. _Cell surface geometry guides three-dimensional border cell migration in the Drosophila egg chamber._ In preparation.
2. N. Akhavan, A. George, M. Starz-Gaiano, B. E. Peercy. _Cell migration boundary motion in Drosophila egg chambers: a combined phase field and chemoattractant model._ arXiv:2604.01357 (2026). [arXiv](https://arxiv.org/abs/2604.01357) · [Code](https://github.com/Naghmeh-Akhavan/PFM_Feedback_Concentration_Model)
3. N. Akhavan, A. George, M. Starz-Gaiano, B. E. Peercy. _Phase-field modeling of border cell cluster migration in Drosophila._ PLOS Computational Biology 22(4), e1014176 (2026). [Article](https://doi.org/10.1371/journal.pcbi.1014176)
