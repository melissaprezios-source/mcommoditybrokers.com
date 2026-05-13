# MP Commodity Brokers Website

A professional Next.js website for MP Commodity Brokers - specializing in energy commodity deal facilitation.

## Features

- Modern, responsive design built with React and Tailwind CSS
- Smooth animations with Framer Motion
- Professional form handling for enquiry submissions
- Mobile-friendly navigation
- Optimized for search engines (SEO)

## Tech Stack

- **Next.js 14** - React framework for production
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Using Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js and deploy automatically

### Option 3: Manual Upload

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "New Project"
3. Upload your project files
4. Follow the deployment wizard

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables needed
```

## File Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   ├── globals.css         # Global styles
│   └── api/
│       └── enquiry/
│           └── route.ts    # Form submission API
├── components/
│   └── ui/                 # Reusable UI components
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static files
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── vercel.json
```

## API Routes

- `POST /api/enquiry` - Submit commodity enquiry (currently logs to console, needs email integration)

## TODO / Next Steps

1. **Email Integration** - Set up SendGrid, Resend, or AWS SES for form submissions
2. **Database** - Consider adding MongoDB, PostgreSQL, or Supabase for enquiry storage
3. **Contact Info** - Update phone numbers and email addresses in contact section
4. **Form Validation** - Add more robust client and server-side validation
5. **Analytics** - Integrate Google Analytics or Vercel Analytics
6. **CMS** - Consider adding a CMS like Contentful or Sanity for content management

## Issues Fixed

✅ Converted to Next.js app structure  
✅ Added missing UI component files  
✅ Created configuration files (tsconfig, tailwind, next.config)  
✅ Added form handling with API endpoint  
✅ Optimized for Vercel deployment  
✅ Added proper type safety with TypeScript  

## Support

For issues or questions about the code, please check the GitHub repository.

## License

© 2026 MP Commodity Brokers. All rights reserved.
