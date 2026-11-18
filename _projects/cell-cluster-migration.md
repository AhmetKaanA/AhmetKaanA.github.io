---
layout: page
title: "Optimal Transport for Border Cell Migration: Interactions Inside the Cluster"
description: A 3D model of the border-cell cluster built from individual cells, with cell shapes from optimal transport, to study how the cells of the cluster work together on their way through the egg chamber.
img: assets/img/projects/cell-cluster-migration/thumbnail-3x2.png
importance: 1
category: Research
related_publications: false
---

<link rel="stylesheet" href="{{ '/assets/css/transparent-media.css' | relative_url }}">

Inside the egg chamber of a fruit fly, a tiny group of about ten cells makes a remarkable journey. It leaves the tip of the chamber and squeezes between fifteen much larger neighbors until it reaches the egg cell. Biologists study this **border-cell cluster** because cells moving together in a group is how many tissues form, how wounds heal, and how some cancers spread.

Our [3D phase-field model]({{ '/projects/cell-migration/' | relative_url }}) treats the whole cluster as one soft body. Here we open up that body. The cluster is built from individual cells that are bonded to each other, push against each other, and each lean in their own direction. This lets us ask how the interactions between the cells shape the journey. Every animation on this page is a computer simulation.

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    <figure>
      <video src="{{ '/assets/img/projects/cell-cluster-migration/journey-v2.mp4' | relative_url }}" poster="{{ '/assets/img/projects/cell-cluster-migration/journey-v2-poster.webp' | relative_url }}" class="img-fluid rounded z-depth-1" width="1100" height="348" autoplay muted loop playsinline preload="metadata" title="The cluster traveling through the egg chamber" aria-label="The cluster traveling through the egg chamber"></video>
    </figure>
  </div>
</div>
<div class="caption">
  The whole journey. Left: the egg chamber in 3D, with the path of the cluster drawn as a line. Middle and right: a cut along the chamber and a cut across it, both following the cluster.
</div>

## The setting

The egg chamber is shaped like a small egg. Most of it is filled with large **nurse cells** (gray in 3D, red in the cuts), and the **oocyte**, the future egg (purple), sits at one end. A thin **outer cell layer** (dashed line) wraps everything. The cluster (blue and orange) starts at the opposite tip and has to cross the whole chamber. The cells in this model have soft edges, which the cuts show as a light band around each cell.

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/cell-cluster-migration/chamber-overview-v2.png" title="The egg chamber in the model" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  The egg chamber in the model: in 3D (left) and cut open along its length (right).
</div>

## The journey

The cluster first waits in the tip for more than half of the travel time. Then it pushes between the nurse cells and speeds up as it gets close to the oocyte. The nurse cells are soft: they make way for the cluster and close up again behind it. The cluster stays in one piece the whole way.

<div class="row justify-content-center">
  <div class="col-12 col-lg-10 mt-3">
    <figure>
      <video src="{{ '/assets/img/projects/cell-cluster-migration/section-v2.mp4' | relative_url }}" poster="{{ '/assets/img/projects/cell-cluster-migration/section-v2-poster.webp' | relative_url }}" class="img-fluid rounded z-depth-1" width="860" height="476" autoplay muted loop playsinline preload="metadata" title="The nurse cells make way for the cluster" aria-label="The nurse cells make way for the cluster"></video>
    </figure>
  </div>
</div>
<div class="caption">
  A cut along the chamber. The nurse cells (red) move aside as the cluster passes and close in behind it.
</div>

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/cell-cluster-migration/four-moments-v2.png" title="Four moments of the journey" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Four moments: the start, leaving the tip, passing between the nurse cells, and arrival at the oocyte.
</div>

## Ten cells, not one blob

The real cluster has two kinds of cells: several **border cells** on the outside, which do the moving, and two smaller **polar cells** in the middle, which the border cells carry along. Our model cluster has eight border cells and two polar cells. Each cell has its own shape and keeps its own size as it moves, and bonds between the cells hold the cluster together.

<div class="row justify-content-center">
  <div class="col-12 col-lg-10 mt-3">
    <figure>
      <div class="tmedia-labels" aria-hidden="true">
        <span style="left: 18.2%">Outside view</span>
        <span style="left: 76%">See-through view</span>
      </div>
      <span class="tmedia" style="aspect-ratio: 1280 / 404" role="img" title="The cluster up close" aria-label="The cluster up close, seen from outside and with the border cells made see-through">
        <img src="{{ '/assets/img/projects/cell-cluster-migration/cluster-closeup-alpha-poster.webp' | relative_url }}" alt="" width="1280" height="404" loading="lazy">
        <canvas></canvas>
        <video src="{{ '/assets/img/projects/cell-cluster-migration/cluster-closeup-alpha.mp4' | relative_url }}" muted loop playsinline preload="none"></video>
      </span>
      <div class="tmedia-legend"><span style="--swatch: #0072b2">border cells</span><span style="--swatch: #d55e00">polar cells</span></div>
    </figure>
  </div>
</div>
<div class="caption">
  The cluster up close during the journey, turning slowly. Left: seen from outside. Right: the border cells (blue) are made see-through so the two polar cells (orange) inside can be seen.
</div>

### Sharing space fairly

How do ten cells pack together without overlapping, while changing shape to fit through narrow gaps? We use a mathematical idea called **optimal transport**. It started as the question of how to move a pile of sand into a hole with the least effort. Here it answers a related question: how to divide the space the cluster occupies among its cells so that every cell gets exactly the room it needs, no two cells overlap, and each bit of space goes to a cell that is close by. Each cell is tracked by a single point near its center, and the cell shapes are recomputed from these points as they move.

The cell shapes are not drawn by hand. They follow from this division of space and adjust on their own to the gaps between the nurse cells. The polar cells also stay near the middle of the cluster without any rule placing them there. This follows from the bonds between the cells.

Each border cell also leans in the direction it wants to go. On a cut through the cluster, an arrow for each border cell shows that direction. The border cells all lean toward the oocyte and carry the polar cells along in the middle.

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/cell-cluster-migration/cell-polarity-slices.png" title="The direction each border cell leans" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Close-ups of the cut along the chamber at two moments of the journey. The oocyte is to the right. Each arrow starts at the center of a border cell that the cut passes through and shows the direction that cell leans.
</div>

## What guides the cluster

The oocyte releases a chemical signal that spreads through the narrow spaces between the cells. The signal is strongest around the oocyte, so it works like a scent trail. The border cells sense it and also crawl along the surfaces of the nurse cells, in the direction in which the signal gets stronger.

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/cell-cluster-migration/guidance-signal-v2.png" title="The guiding signal in the egg chamber" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  The signal released by the oocyte on a cut along the chamber, from low (light) to high (dark), with the path of the cluster's center in blue.
</div>

## What if one ingredient is missing?

A model lets us do experiments that are hard to do in a living fly: switch off one ingredient and watch what happens.

<div class="row justify-content-center">
  <div class="col-12 mt-3">
    <figure>
      <video src="{{ '/assets/img/projects/cell-cluster-migration/four-runs-v2.mp4' | relative_url }}" poster="{{ '/assets/img/projects/cell-cluster-migration/four-runs-v2-poster.webp' | relative_url }}" class="img-fluid rounded z-depth-1" width="960" height="556" autoplay muted loop playsinline preload="metadata" title="Four versions of the model side by side" aria-label="Four versions of the model side by side"></video>
    </figure>
  </div>
</div>
<div class="caption">
  Four versions of the model on the same clock: the full model, no bonds between the cells, weaker bonds to the polar cells, and no crawling along the nurse cells.
</div>

Without bonds, the cluster breaks apart and the cells travel on their own. With weaker bonds to the polar cells, the polar cells are no longer held in the middle and slide to the back. Without crawling along the nurse cells, the cluster barely leaves the start. So the bonds between the cells keep the cluster together and keep the polar cells in the middle, while crawling along the nurse cells is what really moves the cluster.

Compared with our earlier one-blob model, both clusters wait in the tip at first. After that, the blob stretches strongly between the nurse cells, while the cluster made of cells stays rounder and moves more slowly.

## Related work

This project builds on joint work with N. Akhavan, A. George, M. Starz-Gaiano, and B. E. Peercy.

1. N. Akhavan, A. K. Aydin, A. S. George, M. Starz-Gaiano, B. E. Peercy. _Optimal transport for border cell cluster coupled with phase field model of egg chamber._ In preparation.
2. N. Akhavan, A. George, M. Starz-Gaiano, B. E. Peercy. _Phase-field modeling of border cell cluster migration in Drosophila._ PLOS Computational Biology 22(4), e1014176 (2026). [Article](https://doi.org/10.1371/journal.pcbi.1014176)
3. [Border Cell Migration in the Drosophila Egg Chamber]({{ '/projects/cell-migration/' | relative_url }}): our 3D phase-field model, in which the cluster is one soft body.

<script src="{{ '/assets/js/transparent-media.js' | relative_url }}" defer></script>
