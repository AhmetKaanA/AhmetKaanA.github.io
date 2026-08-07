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
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

Hello! I am a Ph.D. Candidate in Applied Mathematics at the University of Maryland, Baltimore County (UMBC). My current research interests include numerical analysis, scientific computing, uncertainty quantification, low-rank methods based on tensor decomposition, and the observer/controller design for partial differential equations.

<!-- My recent research focuses on low-rank stochastic Galerkin solvers for the unsteady Navier–Stokes equations, including all-at-once formulations, tensor decompositions, and efficient preconditioners. I also work on numerical models for smart structures, with an emphasis on boundary observability, sensor design, and feedback stabilization for Euler–Bernoulli, sandwich, and piezoelectric beam equations.
-->

I enjoy contributing to the academic community through student leadership and professional service. I currently serve as President of the UMBC Graduate Student Association, where I work with graduate students and university partners to support the graduate community. I also serve as General Activities Co-Chair of IEEE CSS NextCom, helping organize activities that connect and support the next generation of control-systems researchers and professionals.

You can explore my [research]({{ '/research/' | relative_url }}), [publications]({{ '/publications/' | relative_url }}), and [teaching]({{ '/teaching/' | relative_url }}) on this website. Additional details are available in my [CV]({{ '/cv/' | relative_url }}).

## Upcoming

{% assign upcoming_events = site.data.upcoming | sort: "date" %}
{% assign current_time = site.time | date: "%s" | plus: 0 %}
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
