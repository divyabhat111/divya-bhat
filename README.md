# Divya Bhat — Portfolio

A static, framework-free portfolio site styled as an engineering drawing sheet (beige "paper," dark-red "redline" ink, title block, tick-mark dividers). Built with semantic HTML, plain CSS, and a small vanilla-JS file for interactivity.

## Structure

```
.
├── index.html        Home: hero, about, skills, experience, education, project preview, awards, hobbies, contact
├── projects.html      Full index of all 8 projects
├── styles.css          Shared design system + layout
├── script.js           Nav, scroll-reveal, copy-to-clipboard, back-to-top
└── assets/
    └── Divya_Bhat_Resume.pdf   Downloadable résumé (linked from both pages)
```

## Before you publish — fill these in

1. **Portfolio link** — your résumé header references a "Portfolio" URL that wasn't in the source PDFs. Add it to the contact section in `index.html` if you have one.
2. **Profile photo (optional)** — the hero intentionally uses the title block instead of a photo. If you'd like a photo, add an `<img>` inside `.hero-grid` and I can help style it to match.
3. **Double-check the Innovative Wind Energy dates/location** — your résumé lists Jacksonville, FL (May–Aug 2021); your LinkedIn export lists Remote (May–Jul 2021). The site currently uses "Remote, May 2021 – Aug 2021." Correct it if needed.
4. **Phone number visibility** — it's currently public in the Contact section and on the résumé download. Remove the `<div class="c-item">` phone block in `index.html` if you'd rather keep it résumé-only.

## Deploying to GitHub Pages

1. **Create a repository** on GitHub — e.g. `divyabhat.github.io` (for a root domain) or any name like `portfolio` (for a project page at `username.github.io/portfolio`).
2. **Push these files to the repo root:**
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. **Turn on Pages:** in the repo, go to **Settings → Pages**. Under "Build and deployment," set **Source** to "Deploy from a branch," branch `main`, folder `/ (root)`. Save.
4. **Wait ~1 minute**, then visit the URL GitHub shows you (typically `https://<your-username>.github.io/<repo-name>/`).
5. **Custom domain (optional):** add a `CNAME` file with your domain, or set it under Settings → Pages → Custom domain, then point your DNS at GitHub's IPs/CNAME per [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

No build step, no dependencies — it's plain HTML/CSS/JS, so it will run exactly as-is on Pages.

## Future improvements

- Add real links/case studies for individual projects (currently text-only).
- Add a lightweight contact form (GitHub Pages is static, so this needs a third-party form handler like Formspree or a Cloudflare Worker).
- Add an Open Graph image + meta tags for nicer link previews when shared on LinkedIn/Slack.
- Consider a print stylesheet so the site itself prints cleanly as a leave-behind, separate from the PDF résumé.
- If you want analytics, add a privacy-respecting option like Plausible or GoatCounter rather than full tracking scripts.
- Optional: a light/dark "blueprint" toggle (inverting to white-on-navy) as an Easter egg, since blueprints were historically white-on-blue before becoming the diazo beige/brown convention used here.
