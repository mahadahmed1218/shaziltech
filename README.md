# Mahad - Modern Learning Platform

A modern, responsive React 18 + TypeScript application built with Vite, featuring Tailwind CSS, React Router, and Framer Motion animations.

## 🚀 Features

- ⚛️ **React 18** with TypeScript for type safety
- 🎨 **Tailwind CSS** for modern, responsive styling
- 🎭 **Framer Motion** for smooth animations
- 🌓 **Dark/Light Mode** toggle with persistent theme preference
- 🧭 **React Router** for client-side routing
- 📱 **Fully Responsive** design for all devices
- 🎯 **Modern UI/UX** with clean, professional design

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── Navbar.tsx  # Navigation bar with theme toggle
│   ├── Hero.tsx    # Hero section with animations
│   └── Footer.tsx  # Footer with links and social media
├── pages/          # Page components
│   ├── Home.tsx    # Home/Landing page
│   ├── About.tsx   # About page
│   └── Contact.tsx # Contact page with form
├── context/         # React Context providers
│   └── ThemeContext.tsx  # Theme management context
├── hooks/          # Custom React hooks (future use)
├── assets/         # Static assets (images, icons, etc.)
├── App.tsx         # Main app component with routing
├── main.tsx        # Application entry point
└── index.css       # Global styles with Tailwind
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "Mahad"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)
   - The app will automatically reload when you make changes

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Styling

The project uses **Tailwind CSS** with a custom configuration:

- **Dark mode** is enabled via class-based toggling
- Custom animations are defined in `index.css`
- Responsive breakpoints follow Tailwind's default system
- Color scheme supports both light and dark themes

## 🌓 Theme Toggle

The theme toggle button is located in the navbar. The selected theme preference is:
- Saved to `localStorage` for persistence
- Automatically detects system preference on first visit
- Smoothly transitions between light and dark modes

## 🧭 Routing

The app includes three main routes:

- `/` - Home page with hero section and features
- `/about` - About page with mission, values, and team
- `/contact` - Contact page with form and contact information

## 🎭 Animations

Animations are powered by **Framer Motion**:

- Page transitions
- Hover effects on buttons and cards
- Scroll-triggered animations
- Smooth theme transitions
- Mobile menu animations

## 🔧 Technologies Used

- **React 18.2.0** - UI library
- **TypeScript 5.2.2** - Type safety
- **Vite 5.0.8** - Build tool and dev server
- **React Router 6.20.1** - Client-side routing
- **Framer Motion 10.16.16** - Animation library
- **Tailwind CSS 3.3.6** - Utility-first CSS framework

## 📱 Responsive Design

The application is fully responsive across all screen sizes:

- **Mobile**: Optimized for phones (< 640px)
- **Tablet**: Optimized for tablets (640px - 1024px)
- **Desktop**: Optimized for large screens (> 1024px)

## 🎯 Best Practices Implemented

- ✅ Functional components with hooks
- ✅ TypeScript for type safety
- ✅ Proper prop typing with interfaces
- ✅ Organized folder structure
- ✅ Consistent naming conventions
- ✅ Accessible HTML with ARIA labels
- ✅ Semantic HTML structure
- ✅ Performance optimizations with lazy loading potential

## 🚀 Building for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready to be deployed to any static hosting service.

## 📄 License

This project is open source and available for use.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ using React, TypeScript, and modern web technologies.**

