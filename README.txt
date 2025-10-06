You are a senior front-end engineer and design systems specialist.
Your task is to develop the full Insular Casa de Cambio website using React (Vite + TypeScript) and GSAP (ScrollTrigger, Motion) for animations, following the Style Specs and Sitemap already uploaded in the repository.

This project will later be ported to Webflow, so you must ensure that the HTML structure, CSS variables, and animation hooks are clean, semantic, and portable.

🧱 1. Base Setup

Stack: React 18 + TypeScript + Vite

Animations: GSAP + ScrollTrigger

Router: react-router-dom (5 main routes)

Styling: CSS Modules (or vanilla CSS) using CSS variables defined from the Style Specs

No Tailwind / no SCSS — just modular, readable CSS with reusable tokens

Global styles: /src/styles/globals.css, /src/styles/variables.css, /src/styles/typography.css

File tree:

src/
  api/
    rates.ts
  app/
    App.tsx
  main.tsx
  router.tsx
  components/
    Header/
    Footer/
    CTAButton/
    Card/
    RateCards/
    Accordion/
    Carousel/
    CountryList/
    ChatDrawer/
    GlobeGraphic/
    Section/
  pages/
    Home/
    Conocenos/
    Servicios/
    Aliados/
    Contacto/
  styles/
    globals.css
    variables.css
    typography.css

🎨 2. Design System Integration

Use the values directly from the Style Specs:

Color Tokens
:root {
  --color-caja-fuerte: #101021;
  --color-firma-azul: #131a4e;
  --color-red-electrica: #422BE2;
  --color-alerta: #f93243;
  --color-billete-nuevot: #9bd1b8;
  --color-saldo-claro: #e7e9e4;
  --color-white: #ffffff;
  --color-black: #000000;
}


Use 30% deep blue, 20% red, 10% mint, 10% dark according to brand proportions.

Typography

Headings: “Bricolage Grotesque” (Medium, ExtraLight)

Body: “Roboto”

Scaling:

--h1: clamp(36px, 5vw, 56px);
--h2: clamp(28px, 3.8vw, 40px);
--h3: clamp(22px, 3.2vw, 28px);
--body: 18px;

Spacing / Grid
:root {
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 40px;
  --space-xl: 64px;
  --container-max: 1200px;
}

Shapes

Use the Insular module geometry (top-left and bottom-right corners diagonally rounded):

.module {
  border-radius: 0 24px 0 24px;
}

Buttons
.btn-primary {
  background: var(--color-alerta);
  color: var(--color-white);
  border-radius: 32px;
  padding: 14px 32px;
  transition: transform .25s, box-shadow .25s;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}

Cards

Use soft shadows, dark backgrounds, and round corners:

.card {
  background: var(--color-firma-azul);
  border-radius: 0 24px 0 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

🌍 3. Page Routes (from Sitemap)

Use your Sitemap file as the architecture blueprint.
Each page should match the sections and hierarchy from it exactly.
Keep IDs and classes aligned with section names (for easy Webflow porting).

Routes

/ → Home

/conocenos → About

/servicios → Services

/aliados → Partners

/contacto → Contact

Each must include its own <Helmet> metadata, modular sections, and reusable components.

🎞️ 4. GSAP Animations

Entrance: gsap.from("[data-animate='fade']", {opacity:0, y:40, duration:1, stagger:0.2})

ScrollTrigger: fade-up sections and parallax hero elements

Counters: for dynamic exchange rates

Carousels: continuous logo loop using GSAP ticker

Prefers-reduced-motion: disable all but essential animations

🧩 5. Components Behavior
Component	Description
Header	Sticky top, smooth scroll to sections, highlight active route
Hero	Title + subtitle + CTA + background image (woman portrait)
RateCards	Dynamic rates from mock API (src/api/rates.ts)
Accordion	FAQ collapsible questions
Carousel	Infinite ally logos (B9, Papaya, etc.)
CountryList	Filterable countries with active state highlight
ChatDrawer	Right-side slide-in component triggered from CTA
GlobeGraphic	Animated SVG globe rotating slowly
Footer	Global navigation, legal info, social links
🧠 6. Accessibility / UX

Semantic HTML (header, main, section, footer)

aria-expanded, aria-controls on accordions

Keyboard-friendly navigation

Contrast ratios pass WCAG AA+

Focus rings on buttons

Alt text on all images, aria-hidden="true" for decorative SVGs

🧮 7. Animations + Motion Spec

Section reveals (fade/translate)

Button hover micro-lift

Icon pulse or rotation

Hero parallax image

Count-up effect on currency rates

Scroll-linked color shifts (ScrollTrigger background transitions)

📦 8. Deliverables

Claude should:

Scaffold full React/Vite project

Generate all component and page files

Implement design tokens from /Style Specs

Apply structure from /Sitemap

Connect GSAP animations per the specs

Include a README.md with:

How to run the project

How to adjust brand tokens

Instructions for Webflow export (copy HTML/CSS)

Disabling GSAP for export

✅ 9. Acceptance Criteria

Perfect parity with brand system (typography, color, shapes)

Lighthouse accessibility ≥ 90

Fully modular, reusable components

Responsive grid layout

Animations performant and subtle

No extra pages or elements beyond Sitemap

Code clean and ready to translate to Webflow’s structure

🧩 Final Instruction for Claude

Now, use the provided /Style Specs and /Sitemap files as the authoritative references.
Build the complete React + GSAP implementation of the Insular Casa de Cambio site, ensuring every section, token, and motion follows the brand system precisely.
Return the full codebase structure with comments and clearly labeled components for future export to Webflow.