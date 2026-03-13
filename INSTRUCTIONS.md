# 📖 Portfolio Instructions & Documentation

Welcome to the documentation for **Babin.Portfolio**. This guide provides a comprehensive walkthrough of the project, from initial setup to deployment and customization.

---

## 📂 Project Structure

A high-level overview of the workspace organization:

```text
.
├── api/                # Vercel Serverless Functions
│   └── send-email.js   # Nodemailer contact form logic (handles email delivery)
├── public/             # Static assets (images, fonts, metadata)
│   ├── Achievements/   # Hierarchical certificate storage (AWS, Cisco, IBM, etc.)
│   ├── projects/       # Project showcase thumbnails and screenshots
│   ├── particles/      # JSON configuration files for tsparticles
│   ├── manifest.json   # Progressive Web App (PWA) configuration
│   └── sitemap.xml     # Search engine optimization (SEO) mapping
├── src/                # Frontend Source Code (React + TypeScript)
│   ├── components/     # Application-specific UI components
│   │   ├── ui/         # Base Shadcn/UI primitives (buttons, inputs, cards)
│   │   ├── Hero.tsx    # Animated landing section with typing effects
│   │   └── ...         # Feature components (About, Projects, Skills, etc.)
│   ├── pages/          # Router-level page views (Home, About, Achievements)
│   ├── data/           # Structured application data (achievements.ts)
│   ├── hooks/          # Custom React hooks (use-mobile, use-toast)
│   ├── lib/            # Shared utilities and Shadcn/UI helper (utils.ts)
│   ├── animations.css  # Global Framer Motion and Keyframe definitions
│   ├── App.tsx         # Main application shell and routing logic
│   └── main.tsx        # React DOM entry point
├── package.json        # Project dependencies, metadata, and scripts
├── tailwind.config.ts  # Tailwind CSS theme and design system configuration
└── vercel.json         # Vercel deployment and routing configuration
```

---

## ⚙️ Local Development Setup

Follow these steps to get the project running on your machine:

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- A terminal (PowerShell, Bash, or Zsh)

### 1. Clone the Repository

```bash
git clone https://github.com/KGFCH2/Babin.Portfolio.git
cd Babin.Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory by copying `.env.example`:

```env
# Copy this file to .env.local and fill in your actual values

# Gmail Configuration for Contact Form
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password

# Instructions:
# 1. Copy this file to .env.local
# 2. Replace the placeholder values with your actual Gmail credentials
# 3. For EMAIL_PASS, use a Gmail App Password (not your regular password)

```

> **Note:** For Gmail, you must use an [App Password](https://support.google.com/accounts/answer/185833).

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

#### 4a. Start the API Server (Vercel) 🔧

The contact API lives in `api/send-email.js` and runs as a Vercel Serverless Function. To run it locally, set your environment variables and start the Vercel dev server.

- Set environment variables (PowerShell):

```powershell
$env:EMAIL_USER='your-gmail@gmail.com'
$env:EMAIL_PASS='your-app-password'
$env:PORT='3001' # optional — the test script uses port 3001 by default
```

- Start the API server (recommended):

```powershell
npm run dev:api
```

Or, without npm script:

```powershell
# using local vercel package via npx
npx vercel dev --listen 3001
# or, if you have vercel installed globally
vercel dev --listen 3001
```

The function will be available at `http://localhost:3001/api/send-email` when using port `3001`.

---

## 📧 Contact Form System

The contact form uses **Nodemailer** integrated with **Vercel Serverless Functions**.

### How it works:

1. **Frontend**: The form in `src/components/Contact.tsx` uses `react-hook-form` and `zod` for validation.
2. **Backend**: `api/send-email.js` receives the POST request and sends the email via SMTP.
3. **Security**: Ensure your credentials are set as environment variables in your deployment platform (e.g., Vercel Dashboard).

---

## 🚀 Available Scripts

| Command | Description |
|:---|:---|
| `npm run dev` | Starts the development server with Hot Module Replacement (HMR). |
| `npm run dev:api` | Starts the Vercel development server for local API testing. |
| `npm run build` | Compiles the project into the `dist/` folder for production. |
| `npm run build:dev` | Compiles the project in development mode. |
| `npm run lint` | Runs ESLint to find and fix code style issues. |
| `npm run preview` | Locally previews the production build. |
| `npm run deploy` | Deploys the project to GitHub Pages. |

---

## 🌐 Deployment

### Vercel (Recommended)

This project is optimized for Vercel.

1. Connect your GitHub repository to [Vercel](https://vercel.com).
2. Add your environment variables (`EMAIL_USER`, etc.) in the Vercel project settings.
3. Vercel will automatically detect the Vite config and deploy.

### GitHub Pages

1. run `npm run build`.
2. run `npm run deploy` (if configured with `gh-pages` package).

---

## 🔧 Customization Guide

### Updating Achievements

Add new entries to [src/data/achievements.ts](src/data/achievements.ts). Make sure to place the images in the corresponding folder within `public/Achievements/`.

### Modifying Theme & Colors

You can tweak the design in [tailwind.config.ts](tailwind.config.ts) and [src/index.css](src/index.css). The project uses **Shadcn/UI**, so you can also update components in `src/components/ui/`.

---

## ❓ FAQ & Troubleshooting

**Q: The contact form returns an error.**
A: Check if your SMTP credentials are correct and that "Less Secure Apps" (or App Passwords) are enabled on your email provider.

**Q: My images are not loading.**
A: Ensure the path in the data files matches exactly with the file structure in the `public/` directory (case-sensitive).

---

⭐ **Don't forget to give this repository a star if you find it helpful!**
