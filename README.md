# **BURGER Website 🍔**

A modern Next.js 15 project showcasing a burger-themed website built with modular components.

---

## 🏗️ Project & Folder Structure

```
BURGER
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx  
│   └── page.tsx    # Root page importing component
├── components      # All React components
│   ├── App
│   │   └── page.tsx  # App & Customer service
│   ├── Hero        
│   │   └── page.tsx  # Hero section component
│   ├── layout
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── Menu
│   │   └── page.tsx  # Menu section
│   ├── Offers
│   │   └── page.tsx  # Offers & Blog Section
│   └── ui          # Reusable UI elements
├── public          # Static files (SVGs, images)
├── package.json
├── README.md
```

---

## 💡 Development Workflow

1. Run the development server:

```bash
npm run dev
```

2. Make your changes or add new features.
3. Commit your changes locally.
4. Push your branch to the repository:

```bash
git push origin feat/YourFeature
```

5. **Open a Pull Request (PR) to the `dev` branch** for review before merging.

---

## 🛠️ Scripts

```bash
npm run dev     # Start development server
npm run build   # Build production version
npm run start   # Start production server
npm run lint    # Run ESLint
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to your branch (`git push origin feat/YourFeature`)
5. Open a Pull Request (PR) to the **`dev` branch** for review and merge

---

Made with ❤️ by **\[OpenStag]**
