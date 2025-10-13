# Design Guidelines: Paulistão Center - Materiais de Construção (Clone Fiel)

## Design Approach
**Reference-Based Clone**: Exact replication of the construction materials store website based on provided screenshots. This is a utility-focused business website requiring professional credibility and clear product showcasing.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Navy Blue: 215 100% 27% (main brand color for headers, footer, key elements)
- Vibrant Orange: 25 100% 50% (CTAs, accents, highlights)
- White: 0 0% 100% (backgrounds, text on dark)
- Light Gray: 220 15% 97% (section backgrounds)
- Dark Text: 220 20% 20% (body text)

### Typography
- **Headings**: Bold, sans-serif (Inter or similar), large sizes for impact
- **Body**: Regular weight, 16px base, high readability
- **Buttons**: Uppercase, semi-bold for emphasis
- **Hierarchy**: H1 (48px+), H2 (36px), H3 (24px), Body (16px)

### Layout System
- **Container**: max-w-7xl centered
- **Spacing**: Use p-6, p-8, p-12, p-16, p-20 for sections
- **Grid**: 3-column for categories, 2-column for features
- **Borders**: Rounded corners (rounded-lg, rounded-xl) throughout

## Component Library

### Header (Navy Blue Background)
- Logo on left (white version)
- Horizontal navigation menu: Início, Sobre Nós, Catálogo, Contato
- Orange "Ligue Agora" button on right with phone icon
- Contact info and business hours displayed

### Hero Section
- Large bold headline in navy blue
- Descriptive subtitle
- Three credential badges in horizontal row: "+20 anos de experiência", "+1000 clientes atendidos", "Qualidade garantida"
- Two CTAs: Orange primary button + secondary outline button
- Hero image showing store facade/products on right side

### Sobre Nós Section
- Two-column layout: text content left, visual elements right
- Mission statement in highlighted box
- Values list with blue checkmark icons (✓)
- Colored info cards (blue and orange) with icons and statistics

### Catálogo Section (Light background)
- Grid of 5 product categories with overlay images
- Categories: Materiais Básicos, Hidráulica, Ferramentas, Elétrica, Pisos e Revestimentos
- Each card: Image background, category title, "Ver produtos" button
- Hover effect: slight zoom on images

### WhatsApp CTA Banner (Orange background)
- Centered text: "Não encontrou o que procura?"
- Large orange WhatsApp button with icon
- Full-width banner between sections

### Contato e Localização
- Information cards in grid: Phone numbers, Address, Business hours
- Payment methods card (navy blue background) with brand icons
- Integrated map section
- Orange action buttons

### Footer (Navy Blue)
- Company name and brief description
- Contact information columns
- Business hours
- Copyright notice
- All text in white/light gray

## Images
**Required Images:**
1. **Hero Image**: Store facade or warehouse interior showing construction materials - positioned right side of hero section
2. **Product Category Images**: 5 overlay images for catalog grid (construction materials, plumbing, tools, electrical, flooring)
3. **Payment Method Icons**: Visa, Mastercard, PIX, Boleto logos
4. **Map**: Google Maps embed showing store location

## Key Visual Characteristics
- **Professional Industrial Aesthetic**: Clean, trustworthy, business-focused
- **High Contrast**: Navy and orange create strong visual hierarchy
- **Badge System**: Credentials displayed prominently for trust
- **Icon Usage**: Checkmarks, phone, WhatsApp, location pins throughout
- **Rounded Elements**: Soft corners on cards and buttons (8-12px radius)
- **Shadow Usage**: Subtle shadows on cards for depth
- **Responsive Grid**: Adapts from 3 columns desktop to 1 column mobile

## Accessibility & Interactions
- Maintain WCAG AA contrast ratios (navy on white, white on navy)
- Orange buttons have sufficient contrast with backgrounds
- Hover states: Slight darkening of orange buttons, image zoom on category cards
- Focus states: Visible outline on interactive elements
- Mobile: Hamburger menu, stacked sections, touch-friendly buttons (min 44px)