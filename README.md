# 🌐 Babin Bid — Personal Portfolio

This repository contains my **personal portfolio single-page application** built using **React + TypeScript + Vite ⚡**.  
It showcases my **projects, skills, research, and contact details**, all wrapped in a **modern, responsive, and elegant UI** styled with **Tailwind CSS 🎨**.

---

## 🗂️ Project Structure

```text
📁 src/
 ┣ 📁 components/           → Page sections (Hero, About, Projects, Skills, Contact, Research)
 ┣ 📁 components/ui/        → Design primitives (Card, Button, Collapsible, Carousel, etc.)
 ┣ 📁 lib/                  → Shared helper functions
 ┗ 📁 pages/                → Top-level pages (Index, NotFound)

📁 public/                  → Static assets (images, resume, favicon)
⚙️ vite.config.ts, tsconfig.*, tailwind.config.js, package.json
```

---

## ✨ Key Features

✅ **Hero Section** — Animated intro with name & call-to-action buttons  
✅ **About Section** — Profile, primary skills, and upskilling highlights  
✅ **Projects Carousel** — Interactive display with live demo & GitHub links  
✅ **Skills Grid** — Categorized list of technical expertise  
✅ **Contact Form** — Configurable endpoint or fallback to `mailto:`  
✅ **Fully Responsive** — Optimized for desktop 💻, tablet 📱, and mobile 📲  

---

## ⚙️ Tech Stack

🧠 **Frontend:** React (Vite) + TypeScript  
🎨 **Styling:** Tailwind CSS  
🧩 **Icons:** lucide-react  
⚡ **Animations:** react-intersection-observer  
🧱 **UI System:** Custom lightweight components under `src/components/ui`

---

## 🧰 Run Locally

### 🔹 Prerequisites  
- Node.js ≥ 18  
- npm / pnpm / yarn  

### 🔹 Steps  

1️⃣ Install dependencies  
```bash
npm ci
```

2️⃣ Start the dev server  
```bash
npm run dev
```

Then open 👉 **[http://localhost:5173](http://localhost:5173)** to view your site live 🚀  

---

## 🏗️ Build for Production

```bash
npm run build
```

Your optimized static site will appear in the **`dist/`** folder 🌟

---

## 🌍 Deploy to GitHub Pages

You can easily deploy using **GitHub Pages**:

1. Push your repo to GitHub  
2. Go to **Settings → Pages** and select the `gh-pages` branch  
3. Optionally, add a **GitHub Actions workflow** that runs:
   ```bash
   npm ci
   npm run build
   ```
   and publishes the `dist/` folder automatically 🚀  

📝 *If you already have a workflow file, ensure it’s in `.github/workflows/` and uses the correct branch name.*

---

## 📄 Resume & Contact

📑 **Resume Buttons:**  
- View or download directly from `/public/Resume_Babin.pdf`  

📬 **Contact Form:**  
- If `VITE_CONTACT_ENDPOINT` is defined, the form POSTs JSON to that URL  
- Otherwise, it defaults to a `mailto:` fallback  

Example `.env`:  
```
VITE_CONTACT_ENDPOINT=https://your-endpoint.example/contacts
```

---

## 🎨 Tailwind & Stylelint Notes

If you encounter stylelint warnings for Tailwind at-rules (`@apply`, `@tailwind`), you can:  
- Install `stylelint-config-tailwindcss`, **or**  
- Add `src/index.css` to `.stylelintignore`  

To fully configure stylelint:  
```bash
npm install -D stylelint stylelint-config-tailwindcss
```

---

## 💡 Tips for Editing & Customization

🧩 Reuse UI components from `src/components/ui` for consistent design  
🖼️ Store images, PDFs, and icons in `/public` and reference them as `/filename.ext`  
🌈 Add gradient text easily with Tailwind:
```html
<span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-emerald-400">
  Your Text Here
</span>
```

---

## ✅ Development Checklist

- [x] Install dependencies  
- [x] Run dev server (`npm run dev`)  
- [x] Type-check (`npx tsc --noEmit`)  
- [x] Lint and fix issues  
- [x] Build production site (`npm run build`)  

---

## 🚀 Future Enhancements

🔧 Add **GitHub Actions CI** for automated TypeScript & Stylelint checks  
🧪 Implement **e2e visual testing** for core sections  
🌐 Configure **serverless contact endpoint** (Netlify / Firebase / Vercel)  

---

## 🪪 License

This repository contains **personal portfolio code and content.**  
Feel free to **learn, remix, and inspire** from it 💙  

---

## 🧠 Optional Add-ons I Can Include

✨ GitHub Actions workflow for **auto-build & deploy to Pages**  
🎯 `.stylelintignore` and Tailwind-aware **stylelint setup**  
🏷️ README **badges (build, deploy, pages status)** for visual flair  

---

💬 Would you like me to add those add-ons (badges + deploy workflow + stylelint config) right now?  
That’ll make this README 100% *developer-grade polished* 💥
 (See <attachments> above for file contents. You may not need to search or read the file again.)
