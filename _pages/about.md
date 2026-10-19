---
layout: about
title: About
permalink: /
subtitle: Ph.D. Candidate in Applied Mathematics

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
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

  .home-research-card img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  .home-research-card--navier-stokes img,
  .home-research-card--observability img {
    aspect-ratio: 149 / 108;
    object-fit: contain;
  }

  .home-research-card--piezoelectric img,
  .home-research-card--cell-migration img {
    aspect-ratio: 764 / 531;
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

I am a Ph.D. Candidate in Applied Mathematics at the University of Maryland, Baltimore County (UMBC). My current research interests include numerical analysis, scientific computing, uncertainty quantification, low-rank methods based on tensor decomposition, and the observer/controller design for partial differential equations.

<!-- My recent research focuses on low-rank stochastic Galerkin solvers for the unsteady Navier–Stokes equations, including all-at-once formulations, tensor decompositions, and efficient preconditioners. I also work on numerical models for smart structures, with an emphasis on boundary observability, sensor design, and feedback stabilization for Euler–Bernoulli, sandwich, and piezoelectric beam equations.


I enjoy contributing to the academic community through student leadership and professional service. I currently serve as President of the UMBC Graduate Student Association, where I work with graduate students and university partners to support the graduate community. I also serve as General Activities Co-Chair of IEEE CSS NextCom, helping organize activities that connect and support the next generation of control-systems researchers and professionals.
-->

You can explore my [research]({{ '/research/' | relative_url }}), [publications]({{ '/publications/' | relative_url }}), and [teaching]({{ '/teaching/' | relative_url }}) on this website.

<div class="social home-social">
  <div class="contact-icons">{% social_links %}</div>
  <div class="contact-note">{{ site.contact_note }}</div>
</div>

<section class="home-research" aria-labelledby="home-research-title">
  <h2 id="home-research-title">Research highlights</h2>
  <div class="home-research-grid">
    <a class="home-research-card home-research-card--navier-stokes" href="{{ '/projects/low-rank-stochastic-navier-stokes/' | relative_url }}">
      <img src="{{ '/assets/img/research-highlights/navier-stokes.webp' | relative_url }}" alt="Animation of flow streamlines and pressure through a constricted channel" width="745" height="540" loading="lazy">
      <span class="home-research-card-body">
        <strong class="home-research-card-title">Low-Rank Stochastic Navier–Stokes Solvers</strong>
      </span>
    </a>
    <a class="home-research-card home-research-card--observability" href="{{ '/projects/observability-preserving-discretizations/' | relative_url }}">
      <img src="{{ '/assets/img/research-highlights/observability-comparison.gif' | relative_url }}" alt="Unfiltered and ORFD beam animations with energy, sensor, and actuator gauges" width="480" height="348" loading="lazy">
      <span class="home-research-card-body">
        <strong class="home-research-card-title">Observability-Preserving Discretizations</strong>
      </span>
    </a>
    <a class="home-research-card home-research-card--piezoelectric" href="{{ '/projects/piezoelectric-beam-stabilization/' | relative_url }}">
      <img src="{{ '/assets/img/projects/piezoelectric-beam-stabilization/piezoelectric-beam-stabilization.gif' | relative_url }}" alt="Piezoelectric beam stabilization simulation with energy, sensor, and actuator gauges" width="1528" height="1062" loading="lazy">
      <span class="home-research-card-body">
        <strong class="home-research-card-title">Piezoelectric Beam Stabilization</strong>
      </span>
    </a>
    <a class="home-research-card home-research-card--cell-migration" href="{{ '/projects/cell-migration/' | relative_url }}">
      <img src="{{ '/assets/img/research-highlights/cell-migration.gif' | relative_url }}" alt="Cropped three-dimensional border-cell cluster animation without the time label" width="620" height="431" loading="lazy">
      <span class="home-research-card-body">
        <strong class="home-research-card-title">Border Cell Migration in the Drosophila Egg Chamber</strong>
      </span>
    </a>
  </div>
</section>

{% assign upcoming_events = site.data.upcoming | sort: "date" %}
{% assign current_time = site.time | date: "%s" | plus: 0 %}
{% assign has_upcoming_events = false %}
{% for event in upcoming_events %}
{% assign event_time = event.date | date: "%s" | plus: 0 %}
{% if event_time >= current_time %}
{% assign has_upcoming_events = true %}
{% break %}
{% endif %}
{% endfor %}

{% if has_upcoming_events %}

## Upcoming

{% assign displayed_events = 0 %}

<div class="news">
  <div class="table-responsive">
    <table class="table table-sm table-borderless">
      {% for event in upcoming_events %}
        {% assign event_time = event.date | date: "%s" | plus: 0 %}

        {% if event_time >= current_time and displayed_events < 3 %}
          <tr>
            <th scope="row" style="width: 20%">
              {{ event.date | date: "%b %-d, %Y" }}
            </th>

            <td>
              {% if event.url %}
                {% if event.external %}
                  <a href="{{ event.url }}" target="_blank" rel="noopener">
                    {{ event.title }}
                  </a>
                {% else %}
                  <a href="{{ event.url | relative_url }}">
                    {{ event.title }}
                  </a>
                {% endif %}
              {% else %}
                <strong>{{ event.title }}</strong>
              {% endif %}

              {% if event.description %}
                <br>
                {{ event.description }}
              {% endif %}

              {% if event.location %}
                <br><small>{{ event.location }}</small>
              {% endif %}
            </td>
          </tr>

          {% assign displayed_events = displayed_events | plus: 1 %}
        {% endif %}
      {% endfor %}
    </table>

  </div>
</div>
{% endif %}
