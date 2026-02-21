# Yimisda - Personal Academic Portfolio

[![Deploy to GitHub Pages](https://github.com/Yimisda/yimisda.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Yimisda/yimisda.github.io/actions/workflows/deploy.yml)

A modern, elegant personal portfolio website for academic and research purposes, built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **🎨 Refined Design** - Clean, professional aesthetic suitable for academic portfolios
- **🌙 Dark Mode** - Automatic system theme detection with manual toggle
- **📐 LaTeX Support** - High-performance mathematical formula rendering with KaTeX
- **🔗 GitHub Integration** - Automatic project showcase via GitHub API
- **📱 Responsive** - Optimized for all devices and screen sizes
- **⚡ Smooth Animations** - Subtle, professional animations with Framer Motion
- **🎯 SEO Optimized** - Complete meta tags and structured data
- **♿ Accessible** - WCAG 2.1 AA compliant

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Math Rendering**: KaTeX
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm or pnpm

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

Visit `http://localhost:5173` to see your site.

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## 📁 Project Structure

```
.
├── .github/workflows/    # GitHub Actions CI/CD
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   │   ├── ui/          # shadcn/ui components
│   │   └── custom/      # Custom components
│   ├── contexts/        # React Context providers
│   ├── hooks/           # Custom React hooks
│   ├── sections/        # Page section components
│   │   ├── Hero.tsx     # Landing section
│   │   ├── About.tsx    # About section
│   │   ├── Articles.tsx # Research/articles
│   │   └── ...
│   ├── App.tsx          # Main app component
│   ├── index.css        # Global styles
│   └── main.tsx         # App entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS config
└── package.json         # Dependencies
```

## 🎨 Customization

### Personal Information

Edit the following files to update your information:

- `src/sections/Hero.tsx` - Name, title, research interests
- `src/sections/About.tsx` - Biography, education, skills
- `src/sections/Articles.tsx` - Publications and articles

### Theme Colors

Modify color variables in:
- `src/index.css` - CSS custom properties
- `tailwind.config.js` - Tailwind theme configuration

### Content

1. **Research Interests**: Update the interests array in `Hero.tsx`
2. **Education**: Modify the education array in `About.tsx`
3. **Skills**: Update the skills object in `About.tsx`
4. **Social Links**: Edit social links in `Footer.tsx`

## 🚀 Deployment

### GitHub Pages (Automatic)

This project is configured for automatic deployment via GitHub Actions.

1. Go to **Settings** > **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` branch to trigger deployment

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm install -g gh-pages
gh-pages -d dist
```

## 📝 Configuration

### Base Path

For GitHub Pages deployment, ensure `vite.config.ts` has the correct base path:

```typescript
export default defineConfig({
  base: './', // For username.github.io
  // OR
  base: '/repo-name/', // For username.github.io/repo-name
})
```

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_GITHUB_USERNAME=your-username
VITE_GITHUB_TOKEN=your-token (optional, for private repos)
```

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Code Style

This project uses:
- ESLint for code linting
- Prettier for code formatting (recommended)
- TypeScript for type safety

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [KaTeX](https://katex.org/) - Fast math rendering
- [Lucide](https://lucide.dev/) - Icon library

## 📧 Contact

For questions or suggestions, please open an issue or contact:
- Email: your.email@pku.edu.cn
- GitHub: [@Yimisda](https://github.com/Yimisda)

---

**Note**: Remember to update all placeholder content (email, social links, etc.) with your actual information before deploying.
