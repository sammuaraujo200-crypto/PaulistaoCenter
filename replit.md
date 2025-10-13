# Paulistão Center - Materiais de Construção

## Overview

This is a construction materials business website for Paulistão Center, built as a faithful clone based on reference screenshots. The application is a full-stack TypeScript project using React for the frontend and Express for the backend, designed to showcase products, company information, and facilitate customer contact for a construction materials store in Francisco Morato, São Paulo.

The website serves as a professional business presence with emphasis on credibility, showcasing 20+ years of experience, 1000+ customers served, and quality guarantees. It includes sections for company information (Sobre Nós), product catalog (Catálogo), and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Client-side routing using Wouter (lightweight alternative to React Router)
- Single Page Application (SPA) architecture

**UI Component System:**
- Shadcn/ui component library (New York style variant)
- Radix UI primitives for accessible, unstyled components
- Tailwind CSS for styling with custom design tokens
- Class Variance Authority (CVA) for component variants
- Custom color palette: Navy Blue (215 100% 27%), Vibrant Orange (25 100% 50%), neutral grays

**State Management:**
- TanStack Query (React Query) for server state management
- React hooks for local component state
- Custom query client configuration with credential-based requests

**Design System:**
- CSS custom properties for theming
- Responsive breakpoint at 768px for mobile/desktop
- Design guidelines documented in `design_guidelines.md`
- Component aliasing via `@/components`, `@/lib`, `@/hooks` path mapping

### Backend Architecture

**Server Framework:**
- Express.js server with TypeScript
- HTTP server creation for request handling
- Development/production environment configuration
- Vite middleware integration for development HMR

**API Structure:**
- RESTful API pattern with `/api` prefix for all routes
- Request logging middleware with duration tracking and JSON response capture
- Error handling middleware for centralized error responses
- Session-based architecture prepared (no authentication currently implemented)

**Development Features:**
- Hot Module Replacement (HMR) in development
- Runtime error overlay via Replit plugin
- Development banner and cartographer tools for Replit environment
- Source map support for debugging

### Data Storage Solutions

**Database Configuration:**
- Drizzle ORM for type-safe database operations
- PostgreSQL dialect configured (via `@neondatabase/serverless`)
- Schema-first approach with Drizzle-Zod integration for validation
- Migration system configured in `./migrations` directory

**Current Schema:**
- Users table with UUID primary keys, username, and password fields
- Schema defined in `shared/schema.ts` for isomorphic usage
- In-memory storage implementation (`MemStorage`) as development fallback

**Storage Interface:**
- Abstracted storage layer through `IStorage` interface
- CRUD operations: `getUser`, `getUserByUsername`, `createUser`
- Easy migration path from in-memory to persistent database

### External Dependencies

**UI & Styling:**
- Tailwind CSS with PostCSS for production optimization
- Inter font family from Google Fonts
- Lucide React for icon library
- Embla Carousel for image carousels
- Date-fns for date formatting

**Form Management:**
- React Hook Form with Hookform Resolvers
- Zod schema validation
- Form components from Shadcn/ui

**Database & ORM:**
- Neon Database serverless driver for PostgreSQL
- Drizzle ORM and Drizzle Kit for migrations
- Connect-pg-simple for PostgreSQL session storage (configured but not active)

**Development Tools:**
- ESBuild for server-side bundling
- TSX for TypeScript execution in development
- Replit-specific plugins for development experience
- TypeScript strict mode enabled

**Build & Deployment:**
- Production build outputs to `dist/public` (client) and `dist` (server)
- Server bundle uses ESM format with external packages
- Static asset serving in production mode
- Environment-based configuration (NODE_ENV)