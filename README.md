# Syed Abdullah Al Noman — Portfolio

A small static portfolio built with HTML, CSS, and vanilla JavaScript. It has no build step, backend, API keys, or required third-party services, and is suitable for GitHub Pages.

## Preview on your computer

Open `index.html` in a browser to view the page. For a local web-server preview, open a terminal in this folder and run:

```powershell
py -m http.server 8000
```

Then visit <http://localhost:8000>. Stop the server with `Ctrl+C`.

## Edit your portfolio

- **Projects:** Edit the `window.portfolioProjects` list in `js/projects.js`. Update each title, description, category, technology list, and status. Add only real repository/demo links to `github` and `demo`; leave either field as `""` to hide its link.
- **Profile photo:** Replace `assets/images/profile-photo.jpeg` with your preferred portrait. Keep the same filename, or update the image path and alt text in `index.html`.
- **CV:** The supplied CV was a Word document, so the current Download CV button downloads `assets/files/Syed_Abdullah_Al_Noman_CV.docx`. To use a PDF, add it to `assets/files/` and update the button's `href` in `index.html` to its relative path. Replace the downloaded file when you update your CV.
- **Personal details and sections:** Edit the text and links directly in `index.html`. Keep the email and social URLs current. The site deliberately does not include phone/address details from the CV.
- **Appearance and layout:** Adjust colors, spacing, typography, and responsive rules in `css/style.css`.

The mobile menu, in-page navigation, reduced-motion behavior, and light/dark switch are in `js/script.js`. Theme preference is saved in the browser when storage is available.

## Publish with GitHub Pages

1. Create a GitHub repository for the site and add these files at the repository root. Keep `index.html` at the root.
2. Push the repository to GitHub.
3. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select your publishing branch and its root (`/`), then save.
4. Wait for GitHub Pages to publish and open the URL shown in the Pages settings. Check the project page, mobile menu, social links, and CV download there.

All local asset references are relative, so the site works from a project path such as `/eportfolio/` as well as a custom domain.

## Before publishing: review these details

- **Degree/major mismatch:** Your message identifies your major as MIS, while the supplied CV identifies a BSc in Computer Science and Engineering with an AI major. The website follows the MIS profile from your message. Confirm which degree and major should appear, then update the Education and About sections and your CV consistently.
- **CV format and privacy:** The supplied file is DOCX, not PDF. It contains phone numbers and a street address, which would be publicly downloadable if you publish it. Review/redact those details if needed, and replace it with a PDF if you want the button to serve a PDF.
- **Project links:** No project repository or demo URLs were supplied. Add the correct URLs in `js/projects.js` when available; no links have been guessed.
- **Education detail:** Add your expected graduation date or academic details if you want them shown.
- **Photo:** The supplied `shared image.jpeg` has been copied into `assets/images/profile-photo.jpeg`; check that this is the portrait and crop you want publicly displayed.
- **Other details:** Review project descriptions/status, skills, activity dates, and any links, and edit anything that has changed.

No deployment has been performed by this project setup.
