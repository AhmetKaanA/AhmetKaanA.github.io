# Home page research showcase

## Goals

- Put the CV, email, ResearchGate, and every other configured social link below the introductory text. Show the contact note there too, with no duplicate icon row at the bottom.
- Place five research highlights after the bio and before Upcoming and News. The newest highlight is a full-width banner card at the top; the other four use a two-column grid on desktop. Phones use one column throughout.
- Give each highlight a research image or animation and a working project link.
- Match each card title to its Research page title and keep the cards free of separate description text.

## Current implementation

The home page is `_pages/about.md`. It renders the existing `social_links` Liquid tag near the introduction and disables the layout's bottom social block with `social: false`. The research cards use the following media assets and destinations:

| Topic               | Home-page media                                                                             | Project page                                          |
| ------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Cell cluster (OT)   | `assets/img/projects/cell-cluster-migration/home-thumbnail-v2.gif`                          | `/projects/cell-cluster-migration/`                   |
| Cell migration      | `assets/img/research-highlights/cell-migration-growing.gif`                                 | `/projects/cell-migration/`                           |
| Navier–Stokes       | `assets/img/research-highlights/navier-stokes.webp`                                         | `/projects/low-rank-stochastic-navier-stokes/`        |
| Observability       | `assets/img/research-highlights/observability-comparison.gif`                               | `/projects/observability-preserving-discretizations/` |
| Piezoelectric beams | `assets/img/projects/piezoelectric-beam-stabilization/piezoelectric-beam-stabilization.gif` | `/projects/piezoelectric-beam-stabilization/`         |

The cards run from the newest work to the oldest, in the same order as the Research page, which sorts by each project's `importance` (1 comes first). The four grid cards share a 764 × 531 image frame, so the titles in each row line up.

The cell migration page is a plain-language overview of the 3D phase-field model in the reconstructed, growing egg chamber (run `exp_gd_G2_k0`), with no equations. Its media live in `assets/img/projects/border-cell-migration/` and were made from that run's `migration.avi` and the `videos_growth_density/` folder of the PFM_Naghmeh project. Labels for growth factor, κ, and model time were removed and replaced with plain titles, and the 3D animation was cropped to the chamber with its JPEG background cleaned to white. The slice figure `push-arrows-slice.png` was redrawn in Python from the `slices.mat` that the project's `tools/tim_slice_figures/make_tim_slice_figures.m` writes for this run at 50% progress. Its arrows are the in-plane part of the TIM vector on the plane along the cluster path. The research index uses `thumbnail-growing-3x2.png`, the 3D still padded with white to 3:2. The home card uses `cell-migration-growing.gif`, the same 3D animation at half the frame rate, padded with white to the 764 × 531 card ratio.

The Navier–Stokes home card uses an animated WebP made from the supplied `flow_pressure_cropped.mp4`: 40 frames sampled across the 20-second video, scaled to 745 × 540 at two frames per second. The observability thumbnail combines `assets/img/projects/observability-preserving-discretizations/unfiltered-discretization.gif` and `assets/img/projects/observability-preserving-discretizations/orfd-discretization.gif`, labeled Unfiltered and ORFD. Each beam plot fills the card width, while the energy, sensor, and actuator gauges sit below it at a uniform scale. The time and gauge labels retain their proportions. The 480 × 348 thumbnail matches the Navier–Stokes image height, and its new filename avoids a stale cached version. The full animations remain on the project page. The home thumbnail uses half their original frame rate to keep its download smaller. The piezoelectric card reuses its project page's GIF directly and shows its full frame.

The supplied publishing notes asked for a final check of the three-dimensional manuscript's “in preparation” status. The arXiv and PLOS reference details were checked against their public records.

At desktop widths of 840 px and above, the profile photo is 184 px wide so its bottom lines up with the contact note. Smaller layouts keep the theme's original photo sizing.

## Updating the media

1. To change a thumbnail, update that card's `img src` in `_pages/about.md`, or replace its current asset while keeping the same filename. Video can be converted to an animated WebP for an image-based card. If embedding a video directly, add it under `assets/video/`, replace the card's `<img>` with a `<video>` element, and provide a poster image and a useful caption or transcript.
2. Keep each card title aligned with its project title on the Research page. Update image alternative text when the media changes. If a video's meaning depends on motion or narration, add a nearby caption or transcript.
3. Run `npm run lint:prettier`, `npm run lint:style-contract`, and `bundle exec jekyll build --baseurl /al-folio`. Check the home page in desktop and mobile views, including all four links and the News section below the showcase.

The cell-cluster card (`.home-research-card--featured`) spans both grid columns. Its 1000 × 250 banner GIF is cropped from `02_migration_3d_and_sections.mp4` in the research folder's `webpage_highlights/videos/`. The crop keeps the 3D view and both cuts and drops the title, the time and the legends. The project page `_projects/cell-cluster-migration.md` is a plain-language overview of the ten-cell optimal-transport cluster model. Its media come from the 13 November 2026 version of that folder, whose main run is `ot_eq8_base`. The GIFs were cropped below the title row (which carries the time), subsampled, and given a 128-color dithered palette for 3D renders and a 96-color undithered palette for flat sections. The page shows only the four-version comparison (`05_four_variants_side_by_side.mp4`), not the single-ingredient videos, and has no work-in-progress section. `chamber-overview-v2.png`, `four-moments-v2.png` and `guidance-signal-v2.png` are resized copies of `new01`, `new02` and `new04` in `figures/`. The `-v2` suffix on the regenerated media keeps browsers from showing cached copies of the earlier versions. The research-index `thumbnail-3x2.png` is a frame of `01_migration_3d.mp4`, padded to 3:2 so it matches the other Research cards (all between about 1.4 and 1.6). `cell-polarity-slices.png` was drawn with the research folder's `webpage_highlights/scripts/render_web_media.m` section style, using an added `arrows` job, on run `ot_eq8_base` at 60% and 82% of its arrival time. Its arrows are the in-plane part of each border cell's polarity `p`, drawn only for cells whose centroid lies within 0.16 of the cut. The production build converts each GIF into animated WebP at 480, 800, and 1400 px, so the GIFs are only the fallback download.
