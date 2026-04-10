# Warm Paws - Pet Care Service Platform

## Project Overview

**Warm Paws** is a modern web application designed to help pet owners discover, book, and manage winter pet care services. From heated pet boarding to specialized grooming and health checkups, Warm Paws connects pet owners with trusted care providers to keep their furry friends comfortable and healthy during the cold months.

## Live URL

The application is deployed and live on **Firebase Hosting**. Visit the site to explore available pet care services.

## Key Features

- **Service Browsing & Discovery** - Browse a wide range of winter pet care services with detailed descriptions and provider information
- **Service Details** - View comprehensive service information including pricing, ratings, availability slots, and provider contact details
- **User Authentication** - Secure user registration and login with Firebase Authentication
- **User Profiles** - Personalized user profiles to manage bookings and preferences
- **Service Booking** - Book pet care services with available time slots
- **Responsive & Modern UI** - Beautiful, mobile-friendly interface with smooth animations
- **Interactive Components** - Image carousels, service cards, and dynamic content loading
- **Toast Notifications** - Real-time feedback for user actions
- **Smooth Animations** - Elegant transitions and scroll animations for enhanced UX
- **Error Handling** - Custom error pages and graceful error management
- **Private Routes** - Protected pages requiring user authentication

## Technology Stack

### Frontend Framework & Build Tools

- **React 19** - Modern JavaScript library for building UI components
- **Vite 8** - Next-generation frontend build tool with fast HMR
- **Tailwind CSS 4** - Utility-first CSS framework for styling
- **DaisyUI 5** - Tailwind CSS component library for pre-built UI elements

### Routing & Navigation

- **React Router 7** - Client-side routing and navigation

### Backend & Authentication

- **Firebase 12** - Backend-as-a-Service for authentication, real-time database, and hosting

### UI Components & Animation

- **Framer Motion** - Production-ready animation library for React
- **Swiper 12** - Modern carousel/slider library
- **React Icons 5** - Popular icon library for React
- **Lucide React** - Beautiful, consistent icon set
- **AOS (Animate On Scroll)** - Scroll-triggered animations library

### Notifications & User Feedback

- **React Hot Toast 2** - Elegant toast notification system

### Development Tools

- **ESLint** - JavaScript linter for code quality
- **@Tailwindcss/Vite** - Vite plugin for Tailwind CSS optimization

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd warm-paws
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:

### Development

Start the development server:

```bash
npm run dev
```

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Lint

Check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
├── Components/        # Reusable React components
│   ├── home/         # Home page components
│   ├── services/     # Service-related components
│   └── shared/       # Shared components (Navbar, Footer, etc.)
├── pages/            # Page components for routes
├── layouts/          # Layout components
├── routes/           # Route configuration and PrivateRoute
├── firebase/         # Firebase configuration and authentication
├── data/             # Static data and JSON files
├── assets/           # Images and icons
├── App.jsx           # Main App component
├── main.jsx          # Application entry point
└── index.css         # Global styles
```

## NPM Packages Used

### Production Dependencies

| Package             | Version  | Purpose                    |
| ------------------- | -------- | -------------------------- |
| `react`             | ^19.2.4  | Core React library         |
| `react-dom`         | ^19.2.4  | React DOM rendering        |
| `react-router`      | ^7.14.0  | Client-side routing        |
| `firebase`          | ^12.11.0 | Backend and authentication |
| `tailwindcss`       | ^4.2.2   | CSS utility framework      |
| `@tailwindcss/vite` | ^4.2.2   | Vite plugin for Tailwind   |
| `daisyui`           | ^5.5.19  | Tailwind component library |
| `framer-motion`     | ^12.38.0 | Animation library          |
| `swiper`            | ^12.1.3  | Carousel/slider component  |
| `react-hot-toast`   | ^2.6.0   | Toast notifications        |
| `react-icons`       | ^5.6.0   | Icon library               |
| `lucide-react`      | ^1.8.0   | Icon set                   |
| `aos`               | ^2.3.4   | Scroll animation library   |

### Development Dependencies

| Package                       | Version | Purpose                     |
| ----------------------------- | ------- | --------------------------- |
| `vite`                        | ^8.0.4  | Build tool and dev server   |
| `@vitejs/plugin-react`        | ^6.0.1  | Vite React plugin           |
| `eslint`                      | ^9.39.4 | Code quality linter         |
| `@eslint/js`                  | ^9.39.4 | ESLint JavaScript config    |
| `eslint-plugin-react-refresh` | ^0.5.2  | ESLint React Refresh plugin |
| `eslint-plugin-react-hooks`   | ^7.0.1  | ESLint hooks plugin         |

## Deployment

This project is configured for deployment on **Firebase Hosting**. To deploy:

```bash
firebase deploy --only hosting
```

Ensure:

- Firebase CLI installed (`npm install -g firebase-tools`)
- Configured Firebase project locally with `firebase init`
- Built the project with `npm run build`

## License

This project is part of the Web BootCamp Assignment series.
