# Aman Rai — Portfolio

A one-page React portfolio built with Vite, React, and Tailwind CSS, pre-filled
with your resume content. The design uses an "API request/response" motif
throughout (nav links as routes, section labels as `GET /endpoint`) since it
fits a backend/.NET developer's world.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## Project structure

```
src/
  App.jsx              # stacks all sections together
  index.css            # global styles + Tailwind
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Experience.jsx
    Projects.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
```

Each section is its own file — edit the one you want to change without
touching the others.

## Things to customize before you publish

- **Projects.jsx** — add a real GitHub repo link and/or live demo link to
  each project card once you have public ones. Right now they're informational
  only.
- **Hero.jsx** — the JSON "response" panel is the signature visual; keep it
  in sync if your role/stack changes.
- **Contact.jsx** — double check phone/email are ones you're comfortable
  publishing publicly.
- Consider adding a resume PDF download button in the Hero or Contact section
  once you're happy with this build.

## Deploy it (free, ~2 minutes)

1. Push this project to a new GitHub repository.
2. Go to [vercel.com](https://vercel.com) → New Project → import your repo.
   Vercel auto-detects Vite and deploys with zero config.
3. You'll get a live URL like `aman-rai-portfolio.vercel.app`
   (you can rename it in Vercel's project settings).
4. Every future `git push` auto-redeploys.

(Netlify works the same way if you prefer it.)

## Add it to LinkedIn

Profile → **Add profile section** → **Featured** → **Add a link** → paste
your deployed URL. You can also add it as your Website under **Contact info**.
