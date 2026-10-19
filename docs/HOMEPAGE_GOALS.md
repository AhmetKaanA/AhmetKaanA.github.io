# Home page research showcase

## Goals

- Put the CV, email, ResearchGate, and every other configured social link below the introductory text. Show the contact note there too, with no duplicate icon row at the bottom.
- Place four research highlights after the bio and before Upcoming and News. Use a two-column grid on desktop and one column on phones.
- Give each highlight a research image or animation and a working project link.
- Match each card title to its Research page title and keep the cards free of separate description text.

## Current implementation

The home page is `_pages/about.md`. It renders the existing `social_links` Liquid tag near the introduction and disables the layout's bottom social block with `social: false`. The research cards use the following media assets and destinations:

| Topic               | Home-page media                                                                             | Project page                                          |
| ------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Navier–Stokes       | `assets/img/research-highlights/navier-stokes.webp`                                         | `/projects/low-rank-stochastic-navier-stokes/`        |
| Observability       | `assets/img/research-highlights/observability-comparison.gif`                               | `/projects/observability-preserving-discretizations/` |
| Piezoelectric beams | `assets/img/projects/piezoelectric-beam-stabilization/piezoelectric-beam-stabilization.gif` | `/projects/piezoelectric-beam-stabilization/`         |
| Cell migration      | `assets/img/research-highlights/cell-migration.gif`                                         | `/projects/cell-migration/`                           |

The cell migration page contains the supplied research description, equations, figures, animations, observations, and references. Its source media live in `assets/img/projects/border-cell-migration/`. The research index uses `thumbnail.png`; the home card uses a cropped copy of `migration_3d.gif` that removes the top 90 px time band. The crop preserves all 122 frames and their timing, and its 620 × 431 ratio closely matches the piezoelectric GIF. The full animation remains on the project page.

The Navier–Stokes home card uses an animated WebP made from the supplied `flow_pressure_cropped.mp4`: 40 frames sampled across the 20-second video, scaled to 745 × 540 at two frames per second. The observability thumbnail combines `assets/img/projects/observability-preserving-discretizations/unfiltered-discretization.gif` and `assets/img/projects/observability-preserving-discretizations/orfd-discretization.gif`, labeled Unfiltered and ORFD. Each beam plot fills the card width, while the energy, sensor, and actuator gauges sit below it at a uniform scale. The time and gauge labels retain their proportions. The 480 × 348 thumbnail matches the Navier–Stokes image height, and its new filename avoids a stale cached version. The full animations remain on the project page. The home thumbnail uses half their original frame rate to keep its download smaller. The piezoelectric card reuses its project page's GIF directly and shows its full frame.

The supplied publishing notes asked for a final check of the three-dimensional manuscript's “in preparation” status. The arXiv and PLOS reference details were checked against their public records.

At desktop widths of 840 px and above, the profile photo is 184 px wide so its bottom lines up with the contact note. Smaller layouts keep the theme's original photo sizing.

## Updating the media

1. To change a thumbnail, update that card's `img src` in `_pages/about.md`, or replace its current asset while keeping the same filename. Video can be converted to an animated WebP for an image-based card. If embedding a video directly, add it under `assets/video/`, replace the card's `<img>` with a `<video>` element, and provide a poster image and a useful caption or transcript.
2. Keep each card title aligned with its project title on the Research page. Update image alternative text when the media changes. If a video's meaning depends on motion or narration, add a nearby caption or transcript.
3. Run `npm run lint:prettier`, `npm run lint:style-contract`, and `bundle exec jekyll build --baseurl /al-folio`. Check the home page in desktop and mobile views, including all four links and the News section below the showcase.
