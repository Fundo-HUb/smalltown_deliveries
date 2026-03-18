# Smalltown Deliveries

A modern, fully-functional delivery service website built with React, TypeScript, Tailwind CSS, and shadcn/ui.

![Smalltown Deliveries](https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop)

## Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations** - Framer Motion powered scroll animations and interactions
- **Interactive Components**:
  - Order tracking modal with simulated tracking data
  - Contact form with validation
  - Newsletter subscription
  - Mobile navigation drawer
- **Modern Tech Stack**:
  - React 18 + TypeScript
  - Vite for fast builds
  - Tailwind CSS for styling
  - shadcn/ui components
  - Framer Motion animations

## Sections

1. **Hero** - Eye-catching landing with animated stats and floating cards
2. **Features** - 6 key features with animated counters
3. **How It Works** - 4-step process with connecting line animation
4. **App Download** - Phone mockup with app features
5. **Services** - 6 service cards with hover effects
6. **Testimonials** - Customer reviews with app ratings
7. **CTA** - Call-to-action with app store buttons
8. **Newsletter** - Email subscription with social links
9. **Footer** - Full navigation and contact info

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/smalltown-deliveries.git
cd smalltown-deliveries
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select "GitHub Actions" as the source
4. Use the following workflow (create `.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Copy the `dist/` folder contents to your GitHub Pages branch (usually `gh-pages`)

3. Or use `gh-pages` npm package:
```bash
npm install -g gh-pages
gh-pages -d dist
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── FeatureCard.tsx
│   ├── StepCard.tsx
│   ├── ServiceCard.tsx
│   ├── TestimonialCard.tsx
│   ├── TrackingModal.tsx
│   ├── ContactModal.tsx
│   └── ...
├── sections/           # Page sections
│   ├── HeroSection.tsx
│   ├── FeaturesSection.tsx
│   ├── HowItWorksSection.tsx
│   └── ...
├── hooks/              # Custom React hooks
│   ├── useScrollPosition.ts
│   ├── useCountUp.ts
│   └── useScrollAnimation.ts
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## Customization

### Colors

Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary: 142 71% 45%;  /* Green - change this */
  /* ... */
}
```

### Content

Update the content in each section file under `src/sections/`.

## License

MIT License - feel free to use this project for personal or commercial purposes.

---

Made with ❤ for small towns everywhere
