# PROJECT 455 - Web Platform

A modern, multi-brand web platform for Project 455 SRL, featuring independent identities for Shaft Dominicana, Auto Servicios 455, and 455 Offroad.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: SQLite (via Prisma ORM) - Ready for PostgreSQL
- **Icons**: Lucide React

## Project Structure
- `/src/app/(brands)/shaft`: Shaft Dominicana (Landing + Catalog)
- `/src/app/(brands)/auto-services`: Auto Servicios 455 (Informational)
- `/src/app/(brands)/offroad`: 455 Offroad (Inspirational)
- `/src/app/admin`: Internal Admin Panel
- `/src/components`: Shared UI & Brand Loaders

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Setup Database**
   This project uses SQLite for local development.
   ```bash
   npx prisma db push
   ```

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

## Environment Variables
Create a `.env` file (already included for dev):
```
DATABASE_URL="file:./dev.db"
```

## Admin Access
- URL: `/admin/login`
- Demo Credentials:
  - Username: `admin`
  - Password: `shaft123`

## Features
- **Brand Portals**: Dedicated sub-paths for each brand.
- **Custom Loaders**: Unique animated transition for each brand identity.
- **Product Catalog**: Shaft helmet showcase with WhatsApp integration.
- **Responsive**: Fully optimized for Mobile, Tablet, and Desktop.
