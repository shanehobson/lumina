# Aspire Modeling School

A single-page brochure website for a modeling school built with Next.js 14, TypeScript, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server (for testing)
npm run start
```

## Static Export

This project is configured for static export with no server runtime required.

```bash
# Build and export static files
npm run build

# Output will be in the 'out' directory
```

## Deployment

The static export can be deployed to any static hosting service:

### Vercel
1. Push to GitHub
2. Import project in Vercel
3. Deploy (automatic static export detection)

### Other Static Hosts
1. Run `npm run build`
2. Upload contents of `out/` directory
3. Configure host to serve `index.html` for all routes

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main landing page
│   ├── globals.css     # Global styles
│   ├── not-found.tsx   # 404 page
│   ├── robots.ts       # Robots.txt generation
│   └── sitemap.ts      # Sitemap generation
```

## Features

- Fully static export
- Responsive design
- Accessible markup
- SEO optimized
- System font stack
- Smooth scrolling
- Focus visible states