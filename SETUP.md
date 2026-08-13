# MEDIGENIX PHARMA - Setup & Configuration Guide

## ✅ Installation Complete!

Your premium MEDIGENIX PHARMA website is ready. Follow these steps to customize and deploy it.

## 🎯 Step 1: Update Business Information

Edit `src/config.js`:

### Contact Information (REQUIRED)
```javascript
export const config = {
  phone: '[Your Phone Number]',
  email: '[Your Email Address]',
  whatsapp: '[Your WhatsApp Number]',
```

**Example:**
```javascript
phone: '+91-40-XXXX-XXXX',
email: 'info@medigenixpharma.com',
whatsapp: '+91-98765-43210',
```

### Business Hours (OPTIONAL)
```javascript
hours: {
  mon_fri: '9:00 AM - 8:00 PM',
  sat: '9:00 AM - 6:00 PM',
  sun: 'Closed',
}
```

### Maps Location (IMPORTANT)
```javascript
maps: {
  placeName: 'MEDIGENIX PHARMA, Bandlaguda, Hyderabad',
  latitude: 17.3850,    // REPLACE WITH YOUR LOCATION
  longitude: 78.5205,   // REPLACE WITH YOUR LOCATION
}
```

**To find your coordinates:**
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your pharmacy location
3. Right-click and select "What's here"
4. Copy the coordinates shown

## 🖼️ Step 2: Update Images (Optional)

Edit image URLs in `src/config.js` - `images` section:

Current images are from Unsplash (royalty-free). To use your own:

1. Upload your images to:
   - [Cloudinary](https://cloudinary.com) (Free tier available)
   - [ImgBB](https://imgbb.com) (Free image hosting)
   - Your own server

2. Replace URLs in config:
```javascript
images: {
  hero: 'https://your-image-url.com/hero.jpg',
  about: 'https://your-image-url.com/about.jpg',
  // ... etc
}
```

**Image recommendations:**
- Hero: 1200x600px (pharmacy interior)
- About: 600x600px (pharmacist/customer)
- Services: 600x400px
- All images should be compressed (<500KB each)

## 🎨 Step 3: Customize Design (Optional)

Edit `tailwind.config.js` to change colors:

```javascript
colors: {
  'medical-blue': '#0D47A1',      // Primary color
  'pharmacy-green': '#10B981',    // Accent color
  'dark-navy': '#1F2937',         // Text color
  // ... more colors
}
```

## 🔐 Step 4: Set Up Forms (Backend Integration)

### Option A: Email Integration (Recommended)

For contact forms to send emails, integrate with:
- [Formspree.io](https://formspree.io) - Free tier available
- [Netlify Forms](https://www.netlify.com/products/forms/) - If hosting on Netlify
- [Firebase](https://firebase.google.com) - Backend service

### Option B: Simple Backend

Create a backend endpoint that handles form submissions and sends emails.

### For Now:

Forms show success/error messages locally but don't actually send.
To enable email submissions, contact your developer.

## 🚀 Step 5: Local Development

```bash
# Navigate to project
cd medigenix-pharma

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/` to see your website.

**Hot reload enabled**: Changes to code are instant!

## 🏗️ Step 6: Build for Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npm run preview
```

This creates a `dist/` folder with optimized files ready to deploy.

## 🌐 Step 7: Deploy Your Website

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

Free tier includes:
- Free domain (project-name.vercel.app)
- Automatic HTTPS
- CDN globally
- Easy rollbacks

### Option 2: Netlify

1. Build the project: `npm run build`
2. Go to [Netlify.com](https://www.netlify.com)
3. Sign up / login
4. Drag-and-drop the `dist/` folder

### Option 3: GitHub Pages

```bash
# Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Deploy using GitHub Pages
npm run build
# Then enable GitHub Pages in repository settings
```

### Option 4: Any Web Hosting

1. Build: `npm run build`
2. Upload `dist/` folder via FTP/SFTP
3. Point your domain to the hosting

## 🌍 Custom Domain

### Buying a Domain

1. Buy from: [Namecheap](https://www.namecheap.com), [GoDaddy](https://www.godaddy.com), or local registrars
2. Suggested domains:
   - medigenixpharma.com
   - medigenixpharma.in
   - medigenixchandrayangutta.com

### Connecting Domain to Vercel

1. In Vercel dashboard → Project settings
2. Go to Domains
3. Add your custom domain
4. Update DNS settings (Vercel provides instructions)
5. Takes 24-48 hours to propagate

## ✉️ Email Setup (Optional)

To receive enquiry notifications:

### Using Netlify Forms (Easiest)

If hosting on Netlify, forms automatically work:

```jsx
<form name="contact" method="POST" netlify>
  {/* Your form fields */}
</form>
```

### Using Formspree.io

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form (get form ID)
3. Update contact form submission:

```javascript
const handleSubmit = async (e) => {
  const formData = new FormData();
  // Add form fields
  
  await fetch(`https://formspree.io/f/YOUR_FORM_ID`, {
    method: 'POST',
    body: formData,
  });
};
```

## 📊 Analytics (Optional)

### Google Analytics

1. Create account at [Google Analytics](https://analytics.google.com)
2. Get tracking ID
3. Add to `src/App.jsx`:

```javascript
useEffect(() => {
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=GA_ID`;
  document.head.appendChild(script);
  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
}, []);
```

## 🔍 SEO Checklist

- ✅ Page title: `MEDIGENIX PHARMA | Trusted Pharmacy in Hyderabad`
- ✅ Meta description: Automatically set
- ✅ H1 tag: In Hero section
- ✅ Image alt text: All images have descriptions
- ✅ Mobile responsive: Fully optimized
- ✅ Fast loading: Optimized assets
- ✅ Medical disclaimer: Footer section

**Additional SEO:**
- Submit sitemap to Google Search Console
- Add schema markup for local business
- Build backlinks from local Hyderabad directories

## 🆘 Troubleshooting

### Forms not working?
→ Forms show success/error locally. For real email submission, set up backend integration.

### Images not loading?
→ Check image URLs are valid and accessible
→ Check CORS headers if using external images

### Maps not showing?
→ Verify latitude/longitude are correct
→ Check coordinates are in India region

### Styling issues?
→ Clear cache: `npm run build` and reload
→ Check Tailwind config is correct

## 📋 Pre-Launch Checklist

- [ ] All contact info updated (phone, email, WhatsApp)
- [ ] Business hours correct
- [ ] Maps coordinates accurate
- [ ] Images uploaded and working
- [ ] Forms tested (even if not sending emails yet)
- [ ] Mobile version tested on phone
- [ ] All links working
- [ ] Medical disclaimer visible
- [ ] Domain purchased and configured
- [ ] Build tested: `npm run build`
- [ ] Production preview working: `npm run preview`
- [ ] Deployed to hosting service

## 🚀 Launch!

Once deployed:

1. Share link with friends/family
2. Verify all features work
3. Check on mobile devices
4. Monitor analytics
5. Gather feedback

## 📞 Getting Help

### Quick Links

- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

### For Code Issues

1. Check browser console for errors (F12)
2. Check terminal output while dev server runs
3. Review component files in `src/components/`
4. Test in different browser

## 📝 Notes

- **Backup your work**: Commit to GitHub regularly
- **Test before updating**: Always test changes locally first
- **Keep dependencies updated**: `npm update` periodically
- **Monitor performance**: Check Vercel/Netlify analytics

---

**Your website is ready! 🎉**

Start with Step 1 (Update Business Info) and you'll be online in minutes.

Questions? Check the main README.md file.
