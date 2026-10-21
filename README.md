# Ravi Joshi — Portfolio

Personal portfolio showcasing my full-stack development work, technical skills, and resume.

## Features

- Responsive layout for desktop, tablet, and mobile
- About, skills, selected projects, and contact sections
- Individual project pages with screenshots, technology stacks, source code, and live demo links
- Scroll reveals, entrance animations, and hover interactions with reduced-motion support
- Mobile navigation and keyboard-accessible controls
- Embedded PDF résumé and direct email contact

## Tech stack

Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Lucide React. Animation uses CSS and the browser Intersection Observer API.

## Run locally

Requires Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Local development uses Webpack because Turbopack was stalling during compilation on this Windows setup. The homepage is `/`, not `/home`. If Next.js reports that another development server is running, stop the existing server with Ctrl+C in its terminal before starting a new one.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
app/
  page.tsx             Homepage
  layout.tsx           Root layout, fonts, and metadata
  globals.css          Shared styles and animations
  reveal.tsx           Scroll reveal component
  aboutMe/             Introduction and about section
  skills/              Technical skills
  projects/            Project gallery
    [name]/            Individual project details
  navbar/              Responsive navigation
  contact/             Contact section and footer
  resume/              PDF resume viewer
public/                Project screenshots and resume.pdf
```

## Update content

Edit the corresponding section in `app/` to update profile information, skills, or contact details. Project cards live in `app/projects/page.tsx`; their detailed descriptions and external links live in `app/projects/[name]/page.tsx`. Keep project slugs consistent between both files. Place screenshots in `public/` and replace `public/Ravi.pdf` to update the résumé.

## Deployment

Deploy with a Next.js-compatible host, or run `npm run build` followed by `npm start` on a Node.js server. The build downloads Geist fonts through `next/font/google`, so internet access is required during the build.

## Contact

- Email: [joshiravi96123@gmail.com](mailto:joshiravi96123@gmail.com)
- GitHub: [Ravijoshi28](https://github.com/Ravijoshi28)
