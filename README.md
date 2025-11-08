# 🌟 Babin.Portfolio — Personal Portfolio for Babin Bid

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=24&duration=3000&pause=1000&color=00FFFF&center=true&vCenter=true&width=700&lines=👨‍💻+Computer+Science+Engineer+👨‍💻;🚀+Full-Stack+Developer+🚀;🎨+UI%2FUX+Designer+🎨;🤖+AI+%26+ML+Enthusiast+🤖;📍+Adamas+University%2C+Kolkata+📍" alt="Typing Animation" />
</p>

<p align="center">
  <a href="https://github.com/KGFCH2/Babin.Portfolio/stargazers"><img src="https://img.shields.io/github/stars/KGFCH2/Babin.Portfolio?color=yellow&style=for-the-badge"></a>
  <a href="https://github.com/KGFCH2/Babin.Portfolio/network/members"><img src="https://img.shields.io/github/forks/KGFCH2/Babin.Portfolio?color=blue&style=for-the-badge"></a>
  <a href="https://github.com/KGFCH2/Babin.Portfolio/issues"><img src="https://img.shields.io/github/issues/KGFCH2/Babin.Portfolio?color=red&style=for-the-badge"></a>
  <a href="https://github.com/KGFCH2/Babin.Portfolio"><img src="https://img.shields.io/github/last-commit/KGFCH2/Babin.Portfolio?color=green&style=for-the-badge"></a>
</p>

---

## 🚀 Overview

A cutting-edge personal portfolio website built with **React 18 + TypeScript + Vite ⚡**

This fully responsive, production-ready portfolio showcases:
- 🎯 **Professional Profile** — Hero section with dynamic typing animations  
- 👤 **About Section** — Professional intro with skills cards and auto-closing accordion panels
- 💼 **8+ Projects** — Interactive Embla carousel showcase with GitHub & demo links
- 🛠️ **40+ Technical Skills** — Categorized skills (Programming, Web, Backend, Database, ML, etc.) with gradient hover effects
- 📚 **Research Publications** — Academic papers and research highlights with Framer Motion animations
- 📦 **Study Materials** — Learning resources and materials repository
- 📞 **Contact Section** — Validation contact form with equal-height cards and glow effects
- 🌊 **Wave Animations** — Smooth, character-level text animations with segmented colors on every section title

Modern, accessible UI/UX with smooth animations, dark/light mode toggle, particle effects, and fully responsive design.

---

## ✨ Key Features

- ⚡ **Lightning-Fast Performance** — Vite build in <15 seconds, ~666KB bundle size
- 📱 **100% Responsive** — Perfect on desktop, tablet, and mobile devices  
- 🌊 **Wave Text Animations** — Smooth character-by-character animations that replay on every scroll
- 🌓 **Dark/Light Mode** — System preference detection with seamless theme transitions via next-themes
- 🎨 **Modern UI Components** — Shadcn/UI + Radix UI for accessibility-first design
- ♿ **Fully Accessible** — Keyboard navigation, screen reader support, ARIA labels
- 🎬 **Smooth Animations** — Framer Motion for complex animations, CSS keyframes for lightweight effects
- 🌌 **Particle Effects** — tsParticles for lightweight, smooth background animations
- 🔒 **100% Type-Safe** — TypeScript strict mode throughout
- 🎯 **Interactive Elements** — Embla carousel, Radix accordion with auto-close, form validation with React Hook Form
- 💬 **Contact System** — Email form with validation, contact info cards, social media links
- 📥 **Resume Download** — One-click PDF resume download
- 🚀 **Optimized Build** — ESLint, PostCSS, Autoprefixer for production-grade code

---

## 🧰 Complete Tech Stack

| Category | Technologies |
|----------|--------------|
| ⚛️ **Frontend Framework** | React 18, TypeScript, JSX |
| ⚡ **Build & Bundling** | Vite 5.4.21, esbuild, SWC (@vitejs/plugin-react-swc) |
| 🎨 **Styling & CSS** | Tailwind CSS 3.4.17, PostCSS 8.5.6, Autoprefixer 10.4.21 |
| 🧩 **UI Components** | Shadcn/UI, Radix UI (20+ component types including accordion, carousel, dialog, form, etc.) |
| 🎬 **Animation** | Framer Motion 12.23.24, CSS3 keyframes, tsParticles |
| 🌈 **Icons & Graphics** | Lucide React 0.462.0, tsParticles 3.0.0 |
| 📋 **Forms & Validation** | React Hook Form 7.61.1, Zod 3.25.76, @hookform/resolvers |
| 🧠 **State & Routing** | React Router DOM 6.30.1, React Query (TanStack Query 5.83.0) |
| 🌓 **Theme Management** | next-themes 0.3.0 |
| 🎪 **Notifications** | Sonner 1.7.4 (toast notifications) |
| 📊 **Data Visualization** | Recharts 2.15.4, React Day Picker 8.10.1 |
| ⌨️ **Input Utilities** | input-otp 1.4.2, embla-carousel-react 8.6.0, vaul (drawer) |
| 🔧 **Development** | ESLint 9.32.0, TypeScript 5.8.3, Lovable Tagger |
| 📦 **Utilities** | clsx 2.1.1, class-variance-authority 0.7.1, tailwind-merge 2.6.0, styled-components 6.1.19 |

---

## 📂 Project Directory Structure

```
Babin.Portfolio/
│
├── 📁 src/
│   ├── 📁 components/              # All React components
│   │   ├── Hero.tsx                # Hero section with TypeAnimation
│   │   ├── About.tsx               # About section with avatar & accordion
│   │   ├── Projects.tsx            # Project carousel (Embla) with 8 projects
│   │   ├── Skills.tsx              # 40+ technical skills grid
│   │   ├── Research.tsx            # Research publications with Framer Motion
│   │   ├── Materials.tsx           # Study materials section
│   │   ├── Contact.tsx             # Contact form & info cards
│   │   ├── Header.tsx              # Navigation with animated underline
│   │   ├── Footer.tsx              # Footer with Quick Links
│   │   ├── SectionTitle.tsx        # Wave animation component (replays on scroll)
│   │   ├── ThemeToggle.tsx         # Dark/Light mode toggle
│   │   ├── ParticlesBackground.tsx # tsParticles background effect
│   │   ├── Splash.tsx              # Loading preloader with animations
│   │   └── 📁 ui/                  # Shadcn/UI components (40+ files)
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       └── use-toast.ts
│   ├── 📁 hooks/                   # Custom React hooks
│   │   ├── use-mobile.tsx          # Mobile detection hook
│   │   └── use-toast.ts            # Toast notifications hook
│   ├── 📁 lib/                     # Utility functions
│   │   └── utils.ts                # Helper functions (cn, previewThenDownload, etc.)
│   ├── 📁 pages/                   # Page-level components
│   │   ├── Index.tsx               # Main portfolio page (entry point)
│   │   └── NotFound.tsx            # 404 page
│   ├── App.tsx                     # Root App component with theme provider
│   ├── App.css                     # App-level CSS
│   ├── main.tsx                    # React entry point
│   ├── index.css                   # Tailwind directives & custom utilities
│   └── vite-env.d.ts               # Vite environment type definitions
│
├── 📁 public/                      # Static assets
│   ├── Babin.jpeg                  # Profile image (primary)
│   ├── Babin_Profile.jpg           # Alternative profile image
│   ├── Babin Bid Resume.pdf        # Resume (main filename)
│   ├── Babin_Bid_Resume.pdf        # Resume (alternative filename)
│   ├── Babin_Favicon.png           # Favicon (original)
│   ├── Babin_Favicon_New.png       # Favicon (updated)
│   ├── ML-Based Price Prediction for Agri-Horticultural Commodities.pdf  # Research paper
│   ├── placeholder.svg             # Placeholder image
│   ├── robots.txt                  # SEO robots configuration
│   └── 📁 projects/                # Project screenshots (8 projects)
│       ├── CargoConnect.png        # Cargo booking platform
│       ├── PersonaPath.png         # Career advisor web app
│       ├── BharatBus.jpeg          # Bus booking platform
│       ├── AquaWatch.jpeg          # Water quality monitoring
│       ├── CropAI India.png        # AI crop recommendation system
│       ├── Stock_Market.png        # Stock market analyzer
│       ├── ChatBot.png             # AI chatbot
│       └── ImpactSense.jpeg        # Environmental impact tracker
│
├── 📁 .github/                     # GitHub configurations
│
├── 📄 index.html                   # HTML entry point
├── 📄 package.json                 # Project dependencies & scripts
├── 📄 package-lock.json            # Dependency lock file
│
├── 📄 tsconfig.json                # TypeScript base configuration
├── 📄 tsconfig.app.json            # TypeScript app-specific config
├── 📄 tsconfig.node.json           # TypeScript Node config
│
├── 📄 vite.config.ts               # Vite build configuration
├── 📄 tailwind.config.ts           # Tailwind CSS configuration
├── 📄 postcss.config.js            # PostCSS configuration
│
├── 📄 eslint.config.js             # ESLint rules
├── 📄 .stylelintrc.json            # CSS linting rules
├── 📄 components.json              # Shadcn component registry
│
├── 📄 .gitignore                   # Git ignore rules (node_modules)
├── 📄 gitignore.txt                # Alternative gitignore
├── 📄 README.md                    # This file
└── 📁 node_modules/                # Installed dependencies

```

---

## 🎨 Component Breakdown

### 📑 Main Page Components

| Component | Purpose | Features |
|-----------|---------|----------|
| **Hero.tsx** | Hero section | Dynamic typing, resume download, social links |
| **About.tsx** | About section | Avatar with glow, skills cards, auto-closing accordion (4 panels) |
| **Projects.tsx** | Project showcase | Embla carousel, 8+ projects, GitHub/demo links |
| **Skills.tsx** | Skills display | 40+ categorized skills, hover gradients, animated entrance |
| **Research.tsx** | Research papers | Framer Motion animations, publication details |
| **Materials.tsx** | Study materials | Resources repository, learning materials |
| **Contact.tsx** | Contact form | Form validation, contact info cards, equal heights |

### � Supporting Components

| Component | Purpose |
|-----------|---------|
| **Header.tsx** | Navigation with animated underline & theme toggle |
| **Footer.tsx** | Footer with Quick Links & social media |
| **SectionTitle.tsx** | Wave animation text (replays on scroll) |
| **ThemeToggle.tsx** | Dark/Light mode toggle button |
| **ParticlesBackground.tsx** | tsParticles background animation |
| **Splash.tsx** | Loading preloader screen |

---

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git** for version control

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/KGFCH2/Babin.Portfolio.git
   cd Babin.Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm ci  # or npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open browser to `http://localhost:5173` �

---

## 💻 NPM Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Create optimized production build
npm run build:dev    # Create development build with optimizations
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint checks on all files
```

---

## 🚀 Build & Deployment

### Local Build

```bash
npm run build
```

Output: `dist/` folder ready for deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Select repository
4. Vercel auto-detects Vite config
5. Click "Deploy" 🚀

### Deploy to Other Platforms

- **Netlify**: Drag-drop `dist` folder
- **Firebase Hosting**: Deploy `dist` folder
- **GitHub Pages**: Configure for static hosting
- **AWS S3 + CloudFront**: Upload `dist` folder
- **Azure Static Web Apps**: Connect repository

---

## 🎨 Customization Guide

### 1️⃣ Personal Information

**Profile Image**: Replace `public/Babin.jpeg` with your image

**Resume**: Replace `public/Babin_Bid_Resume.pdf` with your resume

**Favicon**: Replace `public/Babin_Favicon_New.png` with your favicon

### 2️⃣ Edit Projects

Edit `src/components/Projects.tsx`:

```tsx
const projects = [
  {
    title: "Your Project Name",
    description: "Your project description",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/your-repo",
    demo: "https://your-demo.com",
    features: ["Feature 1", "Feature 2"],
    thumbnail: "/projects/your-image.png",
  },
  // ... more projects
];
```

### 3️⃣ Update Skills

Edit `src/components/Skills.tsx`:

```tsx
const skills = [
  { name: 'React', category: 'Web' },
  { name: 'Python', category: 'Programming' },
  // ... more skills
];
```

### 4️⃣ Customize Theme Colors

Edit `src/index.css`:

```css
:root {
  --primary: 262 83% 58%;           /* Primary - Violet */
  --secondary: 195 100% 65%;        /* Secondary - Cyan */
  --accent: 280 90% 65%;            /* Accent - Purple */
}

.dark {
  --background: 240 10% 8%;         /* Dark background */
  --foreground: 0 0% 98%;           /* Dark text */
}
```

### 5️⃣ Setup Contact Form

Add `.env.local` in root:

```env
VITE_CONTACT_ENDPOINT=https://your-api-endpoint.com/contact
```

### 6️⃣ Update Social Links

Edit `src/components/Header.tsx` and `src/components/Footer.tsx` to update GitHub, LinkedIn, email links.

### 7️⃣ Modify Section Titles

Edit section heading text in each component file (Hero.tsx, About.tsx, etc.)

---

## 📊 Project Statistics

- **Lines of Code**: 3000+ lines (React components + utilities)
- **Components**: 13 main + 40+ UI components = 53+ total
- **TypeScript**: 100% type coverage
- **Dependencies**: 30+ production dependencies
- **Dev Dependencies**: 15+ development dependencies
- **Build Size**: ~666 KB (minified)
- **Build Time**: < 15 seconds
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
   ```bash
   git clone https://github.com/YOUR-USERNAME/Babin.Portfolio.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes** and test locally
   ```bash
   npm run dev
   ```

4. **Run linting**
   ```bash
   npm run lint
   ```

5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request** on the main repository

### Contribution Guidelines

- Follow existing code style and TypeScript conventions
- Add proper TypeScript types to all new code
- Test changes on multiple devices (desktop, tablet, mobile)
- Update README if adding new features
- Keep commits focused and descriptive

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
npx tsc --noEmit
```

### Build Failures
```bash
npm run lint  # Check for linting issues
npm run build -- --mode development  # Debug build
```

### Wave Animations Not Showing
- Check that `SectionTitle` component is imported in section files
- Verify `animate-wave` CSS class exists in `src/index.css`
- Ensure section has proper `id` attribute for IntersectionObserver

---

## 📝 Environment Variables

Create `.env.local` for sensitive data:

```env
# Contact form endpoint (optional)
VITE_CONTACT_ENDPOINT=https://your-api.com/contact

# Analytics (optional)
VITE_GA_ID=your-google-analytics-id

# API endpoints (if needed)
VITE_API_URL=https://your-api.com
```

---

## 📬 Contact Information

**Babin Bid**  
📧 **Email**: [babinbid05@gmail.com](mailto:babinbid05@gmail.com)  
🔗 **LinkedIn**: [Babin Bid](https://www.linkedin.com/in/babin-bid-853728293)  
🐙 **GitHub**: [KGFCH2](https://github.com/KGFCH2)  
🌐 **Portfolio**: [babin-portfolio.vercel.app](https://babin-portfolio.vercel.app/)

---

## 📜 License

This project is open source and available under the **MIT License**. Feel free to use it as a template for your own portfolio!

---

## 🙏 Acknowledgments

Special thanks to:
- **React & TypeScript** communities for amazing tools
- **Vite** for blazing-fast build performance
- **Tailwind CSS** for utility-first CSS framework
- **Shadcn/UI** & **Radix UI** for accessible components
- **Framer Motion** for smooth animations
- **TsParticles** for particle effects
- All contributors and open-source libraries

---

<p align="center">
⭐ If you found this portfolio helpful, please give it a star! ⭐
</p>

<p align="center">
Made with ❤️ by <a href="https://github.com/KGFCH2">Babin Bid</a>
</p>

<p align="center">
Deploy with confidence • Code with passion • Build with pride
</p>

