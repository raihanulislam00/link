# Social Media Links Website

A modern, simple website to showcase your social media profiles built with Next.js and React.

## Features

- ✨ Clean, modern design with dark mode
- 📱 Fully responsive layout
- 🎨 Beautiful gradient background
- 🔗 Quick links to LinkedIn, Facebook, Instagram, WhatsApp, Twitter, GitHub, and Email
- ⚡ Fast performance with Next.js
- 🎯 Easy to customize

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

Edit `app/page.tsx` to customize your profile:

- Replace "Your Name" with your actual name
- Update the profile image URL (currently a placeholder)
- Add your social media profile links
- Update your bio/professional title
- Modify colors and styling as needed

### Social Links Object Structure

```javascript
{
  id: 1,
  name: 'LinkedIn',
  url: 'https://linkedin.com/in/yourprofile',
  icon: FaLinkedin,
  color: 'hover:bg-blue-600',
  bgColor: 'bg-blue-500',
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **TypeScript** - Type safety

## License

MIT