# Personal Portfolio

[![Deploy to GitHub Pages](https://github.com/Yimisda/yimisda.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Yimisda/yimisda.github.io/actions/workflows/deploy.yml)

A modern personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Clean, professional design
- Dark mode support
- Responsive layout
- Smooth animations
- LaTeX math rendering
- SEO-friendly metadata

## Quick Start

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Yimisda/yimisda.github.io.git
cd yimisda.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the site.

### Build for Production

```bash
npm run build
```

## Customization

Edit the following files to update your information:

- `src/sections/Hero.tsx` - Landing section
- `src/sections/About.tsx` - Bio and background
- `src/sections/Articles.tsx` - Publications and notes
- `src/sections/Footer.tsx` - Social links and contact info

## Deployment

This project is configured for automatic deployment via GitHub Actions.

1. Push to `main`
2. GitHub Actions builds and deploys
3. Site is published at `https://yimisda.github.io`

## License

MIT License - see `LICENSE` for details.

## Contact

- GitHub: [@Yimisda](https://github.com/Yimisda)
