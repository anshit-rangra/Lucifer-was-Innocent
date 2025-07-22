# Lucifer Was Innocent

A visually striking, interactive React web app based on the book **"Lucifer Was Innocent"**. This website is created for influencer **Tirth Parsana**, the author of the book. The site offers a unique book-ordering experience and showcases the message and story behind the book.

---

## 🚀 Features

- **Animated Landing Page:** Eye-catching book animation and dramatic text using GSAP and TailwindCSS.
- **Order Flow:** Users can order the book "Lucifer Was Innocent" by filling out a detailed, animated form.
- **Responsive Design:** Fully responsive for mobile, tablet, and desktop.
- **Reusable Components:** Modular UI components for easy maintenance and scalability.
- **Modern Stack:** Built with React, Vite, TailwindCSS, GSAP, and React Router.

---

## 📁 Project Structure

```
LUCIFER WAS INNOCENT/
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public/
│   ├── 1img.jpg
│   ├── 3eye.jpg
│   ├── blood.svg
│   ├── cover.jpg
│   └── main.jpg
├── README.md
├── src/
│   ├── App.jsx
│   ├── index.css         # Global styles
│   ├── main.jsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── SocialIcon.jsx
│   │   │   └── header/
│   │   │       ├── Header.jsx
│   │   │       ├── HearderIcons.jsx
│   │   │       ├── MobileNavButton.jsx
│   │   │       └── NavButton.jsx
│   │   └── ui/
│   │       ├── animation.css   # UI-specific styles
│   │       ├── Animation.jsx
│   │       ├── BuyForm.jsx
│   │       ├── CustomParticles.jsx
│   │       ├── Loader.jsx
│   │       ├── SmokeEffect.jsx
│   │       └── SucessMessageBox.jsx
│   └── pages/
│       ├── About.jsx
│       ├── BuyProduct.jsx
│       ├── Home.jsx
│       ├── ProductDetails.jsx
│       └── Witness.jsx
└── vite.config.js
```

---

## 🖥️ Main Pages

- **Home:** Animated landing page with book visual and navigation.
- **About:** Information about the book, its message, and the author Tirth Parsana.
- **BuyProduct / ProductDetails:** Interactive form to order the book, with real-time price calculation and success message.
- **Witness:** Additional content or testimonials.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

```bash
git clone https://github.com/your-username/lucifer-was-innocent.git
cd lucifer-was-innocent
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🧩 Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/gsap/)
- [React Router](https://reactrouter.com/)
- [Three.js](https://threejs.org/) (for potential 3D/visual effects)

---

## 📦 Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint code with ESLint

---

## 📄 License

This project is for educational and demonstration purposes.
