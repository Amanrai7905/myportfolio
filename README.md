# Aman Rai — .NET Developer Portfolio

A modern, high-performance one-page developer portfolio built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically around an **"API request/response" motif** (`GET /about`, `GET /projects`, `response.json`, status pills) tailored for a **.NET & Full-Stack Developer**.

---

## 🚀 Quick Start (Run Locally)

```bash
cd portfolio
npm install
npm run dev
```

Open the printed URL in your browser (usually `http://localhost:5173`).

To build for production:
```bash
npm run build
```

---

## 📁 Clean Architecture & Structure

All content is cleanly separated from UI components into dedicated data files inside `src/data/`:

```
portfolio/
├── public/                 # Static assets (Resume PDF, icons)
├── src/
│   ├── components/         # Modular UI sections
│   │   ├── Navbar.jsx      # Sticky nav with scrollspy & social links
│   │   ├── Hero.jsx        # Terminal code block, CV download, CTAs
│   │   ├── About.jsx       # Summary & quick metrics
│   │   ├── Skills.jsx      # Categorized competencies & tech stack
│   │   ├── Experience.jsx  # Career timeline & quantified impact
│   │   ├── Projects.jsx    # Project cards with category filters & private repo badges
│   │   ├── Education.jsx   # Degree, institution & apprenticeship details
│   │   ├── Contact.jsx     # Direct copy-to-clipboard, mailto form & socials
│   │   └── Footer.jsx      # Back-to-top button & copyright
│   │
│   ├── data/               # Edit your portfolio content here!
│   │   ├── personal.js     # Name, titles, email, phone, LinkedIn, GitHub
│   │   ├── skills.js       # Grouped technical skills and proficiencies
│   │   ├── projects.js     # Projects, architecture highlights, links, categories
│   │   ├── experience.js   # Work experience, roles, achievements
│   │   └── education.js    # Academic qualifications
│   │
│   ├── hooks/
│   │   ├── useActiveSection.js # Scrollspy for navbar section tracking
│   │   └── useInView.js        # Smooth viewport entrance animations
│   │
│   ├── App.jsx             # Main layout
│   ├── main.jsx            # React root mount
│   └── index.css           # Custom styles, custom scrollbar & animations
```

---

## 🛠️ Personalization Checklist

1. **Add Your Resume PDF**:
   - Place your resume PDF in the `portfolio/public/` folder named `resume.pdf` (or update `resumeUrl` in `src/data/personal.js`).
2. **Update Contact Info**:
   - In `src/data/personal.js`, make sure your email, phone, LinkedIn, and GitHub URLs are up to date.
3. **Projects**:
   - In `src/data/projects.js`, add your real GitHub repositories or live URLs whenever they become available.
   - For confidential client projects, simply leave `isPrivate: true` to display the "Enterprise (Closed Source)" badge.

---

## 🌐 Deploy to Vercel or Netlify (Free, 2 Minutes)

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete modern .NET portfolio"
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com) → Click **Add New Project** → Import your repo.
3. Vercel automatically detects Vite. Set Root Directory to `portfolio` if deploying the subfolder, then click **Deploy**.
4. You will get a live URL (e.g. `aman-rai-portfolio.vercel.app`) with automatic SSL and fast global CDN!
