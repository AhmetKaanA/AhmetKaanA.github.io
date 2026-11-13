# ahmetkaana.github.io

Personal academic website of Ahmet Kaan Aydin, Ph.D. Candidate in Applied Mathematics at the University of Maryland, Baltimore County.

Live site: <https://ahmetkaana.github.io>

## Where things live

| Content           | Location                            |
| ----------------- | ----------------------------------- |
| Home page / bio   | `_pages/about.md`                   |
| Research projects | `_projects/`                        |
| Publications      | `_bibliography/*.bib`               |
| Teaching          | `_pages/teaching.md`, `_teachings/` |
| News              | `_news/`, `_pages/news.md`          |
| Upcoming events   | `_data/upcoming.yml`                |
| CV (web and PDF)  | `_data/cv.yml`, `assets/pdf/`       |
| Social links      | `_data/socials.yml`                 |
| Site settings     | `_config.yml`                       |

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000/>.

Pushing to `master` builds and deploys the site through GitHub Actions (`.github/workflows/deploy.yml`).

## Credits

Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme (MIT License).
