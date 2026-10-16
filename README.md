# Asia Le — Portfolio Website

A static, mobile-friendly professional portfolio ready for GitHub Pages. No coding or paid hosting required.

## Preview
Open `index.html` in your browser. Project cards link to individual case-study pages.

## Publish on GitHub Pages
1. Use the existing public repository `asxahml/asxahml.github.io`.
2. Upload the **contents** of this folder to the root of the repository (not the ZIP itself).
3. Under repository Settings → Pages, select **Deploy from a branch**, `master`, `/ (root)` and Save.
4. Visit `https://asxahml.github.io` once deployment finishes.

## Before publishing
- Review every case study for factual accuracy and verify individual contributions on team projects.
- No original employer slide decks, internal code, or confidential data are included.
- Original academic submissions and classmates' names are also excluded.
- Confirm permissions before adding screenshots, third-party charts, academic source datasets, or employer content.
- Replace the email or add a verified LinkedIn URL if desired.
- Optionally add a sanitized resume PDF later; no resume is included by default.

## Editing
Project descriptions are in the corresponding `.html` files. Colors, spacing, and layout are in `style.css`.


## Headshot, resume, and contact details

- `assets/asia-le-headshot.jpg` is the optimized portfolio headshot.
- `assets/Asia_Le_Resume_Oct_2026.pdf` is the public resume. **It includes a phone number**; replace this PDF if you want a version without that number.
- Contact email and LinkedIn are embedded in `index.html`.
- Upload all files and the `assets` folder to the root of the `master` branch.


## GA4 analytics setup
1. Create a Google Analytics 4 property and **Web** data stream for `https://asxahml.github.io`.
2. Copy the Measurement ID (format `G-XXXXXXXXXX`) from Admin → Data streams → Web stream details.
3. The Measurement ID `G-T26VRXSN2E` is already configured in `analytics.js`. Tracking starts only after visitors accept analytics.
4. Commit all files to the `master` branch, repository root.
5. On the live website, choose **Allow analytics**, then test with GA4 Realtime or DebugView.
6. Events: `page_view` (automatic), `project_view` (case-study pages), `project_click`, `resume_view`, `resume_download`, `linkedin_click`, `contact_click`. Note that resume events measure link clicks, not confirmed file opens or downloads.
7. Use URLs like `https://asxahml.github.io/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio`. GA4 acquisition reports show campaign traffic, subject to consent and attribution limits.
8. GA4 enhanced measurement can also report outbound clicks and file downloads separately; avoid counting both its automatic events and these custom events as the same conversion.
9. Review the `privacy.html` disclosure and applicable privacy requirements before going live.
