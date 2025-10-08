# Insular Casa de Cambio - React Application

A modern, responsive web application for Insular Casa de Cambio built with React, TypeScript, Vite, and GSAP animations.

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── api/              # Mock API for exchange rates
├── app/              # Main app component
├── components/       # Reusable components
│   ├── Header/
│   ├── Footer/
│   ├── CTAButton/
│   ├── Card/
│   ├── RateCards/
│   ├── Accordion/
│   ├── Carousel/
│   └── Section/
├── pages/            # Page components
│   ├── Home/
│   ├── Conocenos/
│   ├── Servicios/
│   ├── Aliados/
│   └── Contacto/
├── styles/           # Global styles and design tokens
│   ├── globals.css
│   ├── variables.css
│   └── typography.css
├── utils/            # Utility functions
│   └── animations.ts
├── main.tsx          # Application entry point
└── router.tsx        # React Router configuration
```

## 🎨 Design System

### Color Tokens

The application uses the following color palette:

- `--color-caja-fuerte`: #101021 (Deep Navy)
- `--color-firma-azul`: #131a4e (Signature Blue)
- `--color-red-electrica`: #422BE2 (Electric Purple)
- `--color-alerta`: #f93243 (Alert Red)
- `--color-billete-nuevot`: #9bd1b8 (Fresh Mint)
- `--color-saldo-claro`: #e7e9e4 (Light Balance)

### Typography

- **Headings**: Bricolage Grotesk (Medium, ExtraLight)
- **Body**: Bricolage Grotesk
- **Responsive sizing** using clamp() for fluid typography

### Module Shape

The signature Insular shape with diagonal rounded corners:
```css
border-radius: 0 24px 0 24px;
```

## 🎬 Animations

GSAP animations are implemented throughout the application:

- **Entrance animations**: Fade, fade-up, fade-down, fade-left, fade-right
- **ScrollTrigger**: Elements animate as they enter the viewport
- **Counter animations**: Dynamic number counting for exchange rates
- **Parallax effects**: Available for hero sections
- **Carousel**: Infinite scroll for partner logos

### Animation Attributes

Add these attributes to HTML elements:

- `data-animate="fade-up"` - Fade in from bottom
- `data-animate="fade-down"` - Fade in from top
- `data-animate="fade-left"` - Fade in from right
- `data-animate="fade-right"` - Fade in from left
- `data-animate="scale"` - Scale in animation
- `data-delay="0.2"` - Add delay (in seconds)
- `data-counter` - Animate number counting
- `data-parallax` - Enable parallax scrolling

## 🔧 Adjusting Brand Tokens

To modify the design system:

1. **Colors**: Edit `/src/styles/variables.css`
2. **Typography**: Modify `/src/styles/typography.css`
3. **Spacing**: Update spacing values in `variables.css`
4. **Components**: Each component has its own `.module.css` file

## 📦 Webflow Export Instructions

### Preparing for Export

1. **Disable GSAP animations** (for initial Webflow setup):
   ```javascript
   // In src/utils/animations.ts
   // Comment out the animation initialization
   ```

2. **Build the production version**:
   ```bash
   npm run build
   ```

3. **Extract HTML structure**:
   - The built files will be in the `dist` folder
   - Copy the HTML structure from the rendered pages
   - Maintain the class names and data attributes

### Webflow Implementation

1. **Create pages** in Webflow matching the routes:
   - Home (/)
   - Conócenos (/conocenos)
   - Servicios (/servicios)
   - Aliados (/aliados)
   - Contacto (/contacto)

2. **Import CSS variables**:
   - Copy the CSS variables from `variables.css`
   - Add them to Webflow's custom code section

3. **Recreate components**:
   - Use Webflow's component system
   - Maintain the same class names
   - Apply the module shape using custom CSS

4. **Add interactions**:
   - Use Webflow's native interactions
   - Reference the GSAP animations as a guide

### Clean HTML/CSS Export

The application is built with clean, semantic HTML that's easy to port:

- Semantic HTML5 elements (header, main, section, footer)
- BEM-style class naming
- CSS modules for component isolation
- No framework-specific attributes (except React-specific ones)

## ♿ Accessibility

The application follows WCAG AA+ standards:

- Semantic HTML structure
- ARIA labels and attributes
- Keyboard navigation support
- Focus management
- Reduced motion support
- Alt text for images
- Color contrast compliance

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2024 Insular Casa de Cambio. All rights reserved.

## 🛠️ Development

### Adding New Components

1. Create a new folder in `/src/components/ComponentName/`
2. Add `index.tsx` and `ComponentName.module.css`
3. Import and use in pages

### Adding New Pages

1. Create a new folder in `/src/pages/PageName/`
2. Add `index.tsx` and `PageName.module.css`
3. Add route in `/src/router.tsx`

### Modifying Exchange Rates

Edit the mock data in `/src/api/rates.ts` to adjust:
- Available currencies
- Exchange rates
- Update intervals

## 🚨 Important Notes

- The application uses mock data for exchange rates
- Replace API endpoints with real services in production
- Test all animations on mobile devices
- Ensure all forms have proper validation before production

