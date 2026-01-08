# ✨ Buttons Collection

A curated collection of high-performance, modular animated buttons built with **Qwik** & **Tailwind CSS**.

---

## 🚀 Features

- **⚡ Instant-On**: Leveraging Qwik's resumability, code for button animations only loads when the user interacts with them.
- **🎨 Rich Animations**: Includes hover effects ranging from SVG path drawing and rainbow "steam" borders to geometric "spin" transitions.
- **🧩 Modular Architecture**: Each button (`B01`–`B10`) is a self-contained component with scoped styling.
- **📦 Pre-configured SSG**: Includes a static site generator (SSG) configuration for lightning-fast deployments.

---

## 📂 Project Structure

- `src/components/bXX/`: Standalone button components.
  - `index.tsx`: Component logic and structure.
  - `layout.css`/`layout.scss`: Scoped CSS/SASS for the button's specific animation.
- `src/assets/fonts/`: Local font assets for specialized button aesthetics.
- `src/routes/classic/`: The main showcase page aggregating all buttons in a responsive grid.

---

## 🕹️ Button Styles Overview

| Component | Style Description                                  | Tech Used              |
| :-------- | :------------------------------------------------- | :--------------------- |
| **B01**   | Classic typography with subtle corner transitions. | CSS / Scoped           |
| **B02**   | Rainbow "Steam" animated gradient border.          | CSS / Linear Gradients |
| **B03**   | Structural corner brackets with highlight.         | CSS                    |
| **B04**   | SVG path "Draw" effect on hover.                   | SVG / Stroke Dash      |
| **B05**   | Double-layer "Draw" border transition.             | SASS                   |
| **B06**   | "Draw & Meet" border animation.                    | SASS                   |
| **B07**   | Centered scaling "Center" border expansion.        | SASS / CSS             |
| **B08**   | Circular "Spin" border rotation.                   | SASS                   |
| **B09**   | Rounded "Spin" with circular geometry.             | SASS                   |
| **B10**   | Thick "Fill & Spin" high-contrast effect.          | SASS                   |

---

## 🛠️ Tech Stack

- **Qwik**: The resumable web framework.
- **Vite**: Ultra-fast build tool.
- **Tailwind CSS**: Utility-first styling for layouts.

---

## 🏃‍♂️ Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Run Development Server

```bash
pnpm start
```

### 3. Build for Production (SSG)

```bash
pnpm run build
```

### 4. Preview Production Build

```bash
pnpm run preview
```

---

## 📚 Learn More

- [Qwik Documentation](https://qwik.io/docs/)
- [SASS Modern Compiler](https://sass-lang.com/documentation/js-api/interfaces/modernoptions/)
- [Vite Config Guide](https://vitejs.dev/config/)

---

_Handcrafted for performance and style._ 🚀
