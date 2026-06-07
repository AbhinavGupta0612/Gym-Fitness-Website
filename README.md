# 🏋️ FOREVER FIT — Gym Fitness Website

![Forever Fit](https://img.shields.io/badge/FOREVER%20FIT-Forge%20Your%20Legacy-e8192c?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

> A modern, fully responsive gym fitness website built with **React + Vite**, featuring a login/signup system, multi-section landing page, and sleek dark UI.

---

## 🌐 Live Demo

🔗(https://gym-fitness-website-khaki.vercel.app/)

---

## 📸 Screenshots

| Page | Description |
|------|-------------|
| 🏠 Home / Hero | Full-screen hero with animated background |
| 🔐 Login | Login & Signup with tab switcher |
| 💪 Programs | 6 training program cards |
| 👥 Trainers | Coach profiles with gradient avatars |
| 💰 Pricing | 3-tier membership plans |
| 💬 Testimonials | Member success stories |
| 📬 Contact | Working contact form |

---

## ✨ Features

- 🔐 **Authentication UI** — Login & Signup with form validation and demo credentials
- 🧭 **Sticky Navbar** — Smooth scroll navigation with mobile hamburger menu
- 🎬 **Animated Hero** — Massive typography with grid background, glows & stripe animations
- 📢 **Marquee Ticker** — Infinite scrolling program names strip
- 🏋️ **Programs Section** — 6 training programs with level badges and metadata
- 👨‍🏫 **Trainers Section** — 4 coaches with specialty tags and hover effects
- 💳 **Pricing Section** — 3 membership plans (₹999 / ₹1,999 / ₹3,499) with featured highlight
- ⭐ **Testimonials** — 4 member reviews with star ratings
- 📬 **Contact Form** — With success state feedback
- 🌑 **Dark Theme** — Full dark UI with red accent color system
- 📱 **Fully Responsive** — Mobile-first, works on all screen sizes

---

## 🗂️ Project Structure

```
ForeverFit/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx                   
    ├── index.jsx                  
    ├── data/
    │   └── gymData.js        
    │
    ├── pages/
    │   ├── LoginPage.jsx          
    │   └── HomePage.jsx           
    │
    ├── components/
    │   ├── Navbar.jsx             
    │   ├── HeroSection.jsx       
    │   ├── StatsBar.jsx           
    │   ├── ProgramsSection.jsx    
    │   ├── TrainersSection.jsx    
    │   ├── PricingSection.jsx     
    │   ├── TestimonialsSection.jsx
    │   ├── ContactSection.jsx     
    │   └── Footer.jsx            
    │
    └── styles/
        ├── globals.css            
        ├── Navbar.css
        ├── HeroSection.css
        ├── StatsBar.css
        ├── ProgramsSection.css
        ├── TrainersSection.css
        ├── PricingSection.css
        ├── TestimonialsSection.css
        ├── ContactSection.css
        ├── LoginPage.css
        ├── HomePage.css
        └── Footer.css
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/forever-fit.git

# 2. Navigate into the project
cd forever-fit

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 Demo Login Credentials

Use these on the Login page to test authentication:

| Field    | Value                     |
|----------|---------------------------|
| Email    | `demo@foreverfit.com`     |
| Password | `forever123`              |

---

## 🏗️ Build for Production

```bash
npm run build
```

The output will be in the `/dist` folder, ready for deployment.

---

## ☁️ Deploy on Vercel

### Option 1 — Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# For production deployment
vercel --prod
```

### Option 2 — Vercel Dashboard (No CLI needed)

1. Push your code to **GitHub**
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects **Vite** — no extra config needed
5. Click **Deploy** ✅

### Vercel Settings (auto-detected)

| Setting | Value |
|---------|-------|
| Framework Preset | **Vite** |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI component library |
| **Vite 5** | Build tool & dev server |
| **CSS Modules** | Per-component styling |
| **Google Fonts** | Bebas Neue, Barlow Condensed, Barlow |
| **Vercel** | Hosting & deployment |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Color | `#e8192c` (Red) |
| Background | `#0a0a0a` (Near Black) |
| Card Background | `#161616` |
| Display Font | Bebas Neue |
| UI Font | Barlow Condensed |
| Body Font | Barlow |

---

## 📍 Business Info (Customizable)

Located in **Dehradun, Uttarakhand, India** — edit `gymData.js` and `ContactSection.jsx` to update:
- Gym name, address, phone
- Programs, trainers, pricing
- Testimonials

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Built with ❤️ for fitness in Dehradun.

> ⭐ If you found this useful, consider giving it a star on GitHub!
