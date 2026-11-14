---
layout: about
title: About
permalink: /
subtitle: Ph.D. Candidate in Applied Mathematics

selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # social links are shown below the introduction instead

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<style>
  @media (min-width: 840px) {
    .post .profile {
      width: 184px;
    }
  }

  /* The theme hard-codes these section headings in lowercase ("news", "selected publications"). */
  .post article > h2 {
    text-transform: capitalize;
  }

  .home-social {
    margin: 1.5rem 0 2rem;
  }

  .home-research {
    clear: both;
    margin: 2.5rem 0;
  }

  .home-research-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }

  .home-research-card {
    display: block;
    overflow: hidden;
    border: 1px solid var(--global-divider-color, #d1d5db);
    border-radius: 0.5rem;
    background: var(--global-card-bg-color, var(--global-bg-color));
    color: var(--global-text-color);
    text-decoration: none;
  }

  .home-research-card:hover,
  .home-research-card:focus-visible {
    border-color: var(--global-theme-color);
    color: var(--global-theme-color);
    text-decoration: none;
  }

  .home-research-card:focus-visible {
    outline: 2px solid var(--global-theme-color);
    outline-offset: 3px;
  }

  .home-research-card img,
  .home-research-card video {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  .home-research-card--navier-stokes img,
  .home-research-card--observability video,
  .home-research-card--piezoelectric video,
  .home-research-card--cell-migration video {
    aspect-ratio: 764 / 531;
    object-fit: contain;
  }

  .home-research-card--featured {
    grid-column: 1 / -1;
  }

  .home-research-card--cell-cluster video {
    aspect-ratio: 4 / 1;
    object-fit: contain;
  }

  .home-research-card-body {
    display: block;
    padding: 1rem;
  }

  .home-research-card-title {
    display: block;
    font-size: 1.2rem;
  }

  @media (max-width: 767px) {
    .home-research-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<!-- Headshot is placed here instead of via `profile.image` so it can have real alt text (the theme uses the file name). -->
<div class="profile float-right">
  {% include figure.liquid loading="eager" path="assets/img/prof_pic.jpg" class="img-fluid z-depth-1 rounded" sizes="(min-width: 840px) 184px, (min-width: 576px) 30vw, 95vw" alt="Portrait of Ahmet Kaan Aydin" cache_bust=true %}
</div>

I am a Ph.D. Candidate in Applied Mathematics at the University of Maryland, Baltimore County (UMBC). My current research interests include numerical analysis, scientific computing, uncertainty quantification, low-rank methods based on tensor decomposition, and the observer/controller design for partial differential equations. I also build 3D phase-field simulations of collective cell migration, following border cells as they travel through the growing _Drosophila_ egg chamber.

You can explore my [research]({{ '/research/' | relative_url }}), [publications]({{ '/publications/' | relative_url }}), and [teaching]({{ '/teaching/' | relative_url }}) on this website.

<div class="social home-social">
  <div class="contact-icons">{% social_links %}</div>
  <div class="contact-note">{{ site.contact_note }}</div>
</div>

<section class="home-research" aria-labelledby="home-research-title">
  <h2 id="home-research-title">Research Highlights</h2>
  <div class="home-research-grid">
    <a class="home-research-card home-research-card--featured home-research-card--cell-cluster" href="{{ '/projects/cell-cluster-migration/' | relative_url }}">
      <video src="{{ '/assets/img/research-highlights/cell-cluster-home.mp4' | relative_url }}" poster="{{ '/assets/img/research-highlights/cell-cluster-home-poster.webp' | relative_url }}" width="1000" height="250" autoplay muted loop playsinline preload="metadata" aria-label="Simulated cluster of ten cells traveling between nurse cells toward the egg cell, shown in 3D and in two cuts"></video>
      <span class="home-research-card-body">
        <strong class="home-research-card-title">Border Cell Migration, Cell by Cell: Interactions Inside the Cluster</strong>
      </span>
    </a>
    <a class="home-research-card home-research-card--cell-migration" href="{{ '/projects/cell-migration/' | relative_url }}">
      <video src="{{ '/assets/img/research-highlights/cell-migration-home.mp4' | relative_url }}" poster="{{ '/assets/img/research-highlights/cell-migration-home-poster.webp' | relative_url }}" width="640" height="446" autoplay muted loop playsinline preload="metadata" aria-label="Three-dimensional border-cell cluster traveling to the oocyte while the egg chamber grows"></video>
      <span class="home-research-card-body">
        <strong class="home-research-card-title">Border Cell Migration in the Drosophila Egg Chamber</strong>
      </span>
    </a>
    <a class="home-research-card home-research-card--navier-stokes" href="{{ '/projects/low-rank-stochastic-navier-stokes/' | relative_url }}">
      <img src="{{ '/assets/img/research-highlights/navier-stokes.webp' | relative_url }}" alt="Animation of flow streamlines and pressure through a constricted channel" width="745" height="540" loading="lazy">
      <span class="home-research-card-body">
        <strong class="home-research-card-title">Low-Rank Stochastic Navier–Stokes Solvers</strong>
      </span>
    </a>
    <a class="home-research-card home-research-card--observability" href="{{ '/projects/observability-preserving-discretizations/' | relative_url }}">
      <video src="{{ '/assets/img/research-highlights/observability-home.mp4' | relative_url }}" poster="{{ '/assets/img/research-highlights/observability-home-poster.webp' | relative_url }}" width="480" height="348" autoplay muted loop playsinline preload="metadata" aria-label="Unfiltered and ORFD beam animations with energy, sensor, and actuator gauges"></video>
      <span class="home-research-card-body">
        <strong class="home-research-card-title">Observability-Preserving Discretizations</strong>
      </span>
    </a>
    <a class="home-research-card home-research-card--piezoelectric" href="{{ '/projects/piezoelectric-beam-stabilization/' | relative_url }}">
      <video src="{{ '/assets/img/research-highlights/piezoelectric-home.mp4' | relative_url }}" poster="{{ '/assets/img/research-highlights/piezoelectric-home-poster.webp' | relative_url }}" width="640" height="444" autoplay muted loop playsinline preload="metadata" aria-label="Piezoelectric beam stabilization simulation with energy, sensor, and actuator gauges"></video>
      <span class="home-research-card-body">
        <strong class="home-research-card-title">Piezoelectric Beam Stabilization</strong>
      </span>
    </a>
  </div>
</section>
