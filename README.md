# PROJECT 455 - Web Platform

A modern, multi-brand web platform for Project 455 SRL, featuring independent identities for Shaft Dominicana, Auto Servicios 455, and Nexx Helmets.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Data Source**: Google Sheets (Static JSON)
- **Automation**: GitHub Actions

## Project Structure
- `/src/app/(brands)/shaft`: Shaft Dominicana (Landing + Catalog)
- `/src/app/(brands)/auto-services`: Auto Servicios 455 (Informational)
- `/src/app/(brands)/nexx`: Nexx Helmets (Landing + Catalog)
- `/src/components`: Shared UI & Brand Loaders
- `/scripts`: Data fetching utility
- `/public/data`: Generated static JSON files

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Update Product Data**
   Fetch the latest data from Google Sheets and generate static JSON files:
   ```bash
   npm run update-products
   ```
   *Note: This runs automatically every month via GitHub Actions.*

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Data Management
Product catalogs for Shaft and Nexx are managed via Google Sheets.
- **Shaft Sheet**: [Google Sheet Link]
- **Nexx Sheet**: [Google Sheet Link]

The `update-products` script fetches these sheets, validates the data, and saves `shaft-products.json` and `nexx-products.json` to `/public/data`. The frontend consumes these static files.

## Features
- **Brand Portals**: Dedicated sub-paths for each brand.
- **Custom Loaders**: Unique animated transition for each brand identity.
- **Product Catalog**: Shaft & Nexx helmet showcases with WhatsApp integration.
- **Responsive**: Fully optimized for Mobile, Tablet, and Desktop.
