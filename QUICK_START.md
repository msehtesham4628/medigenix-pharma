# 📋 MEDIGENIX PHARMA - Quick Reference Card

## 🏥 Business Information

**Name:** MEDIGENIX PHARMA
**Type:** Chemist & Druggist
**Established:** 13 June 2023
**Status:** Registered (11 April 2026)

### Registration Details
- **Number:** SEA/HYD/ACL/A4/1309294/2026
- **Act:** Telangana Shops & Establishments Act, 1988
- **Location:** Bandlaguda, Chandrayangutta, Hyderabad

### Contact Information (EDIT THESE!)
```
Phone:   [Your Phone Number]
Email:   [Your Email Address]
WhatsApp: [Your WhatsApp Number]
```

## 🗺️ Address

```
MEDIGENIX PHARMA
18-13-9/78
Bandlaguda
Chandrayangutta, Circle 1
Hyderabad, Telangana
India
```

## 🚀 Quick Start

### 1. Update Config
```bash
Edit: src/config.js
- Add phone number
- Add email
- Add WhatsApp number
- Add map coordinates
```

### 2. Test Locally
```bash
npm run dev
Visit: http://localhost:5173/
```

### 3. Build Production
```bash
npm run build
```

### 4. Deploy
```bash
Use Vercel, Netlify, or traditional hosting
```

## 📁 Key Files

| File | Purpose |
|------|---------|
| `src/config.js` | Business info, contact, images |
| `src/App.jsx` | Main app component |
| `src/components/` | All components |
| `tailwind.config.js` | Colors, fonts, spacing |
| `SETUP.md` | Detailed setup guide |
| `LAUNCH_CHECKLIST.md` | Pre-launch checklist |

## 🎨 Design Colors

| Color | Value | Usage |
|-------|-------|-------|
| Medical Blue | #0D47A1 | Primary buttons |
| Dark Blue | #0A3A7C | Hover states |
| Pharmacy Green | #10B981 | Accents |
| Dark Navy | #1F2937 | Text |
| Off White | #F9FAFB | Background |

## 📱 Website Sections

1. **Navigation** - Links to all sections
2. **Hero** - Main introduction
3. **Trust Strip** - Quick facts
4. **About** - Business info
5. **Approach** - Core values
6. **Services** - 6 service offerings
7. **Photo Banner** - Visual break
8. **Prescription Enquiry** - Form
9. **Why Choose Us** - Features
10. **Registration** - Credibility
11. **Location** - Map & address
12. **Contact CTA** - Call-to-action
13. **Contact Form** - Enquiry form
14. **WhatsApp Button** - Floating button
15. **Footer** - Links & info

## 🔧 Common Tasks

### Update Phone Number
**File:** `src/config.js` (Line 10)
```javascript
phone: '+91-40-XXXX-XXXX',
```

### Update Email
**File:** `src/config.js` (Line 11)
```javascript
email: 'your-email@medigenix.com',
```

### Update WhatsApp
**File:** `src/config.js` (Line 12)
```javascript
whatsapp: '+91-98765-43210',
```

### Update Map Location
**File:** `src/config.js` (Lines 70-73)
```javascript
maps: {
  latitude: YOUR_LATITUDE,
  longitude: YOUR_LONGITUDE,
}
```

### Change Colors
**File:** `tailwind.config.js` (Lines 5-11)
```javascript
colors: {
  'medical-blue': '#0D47A1',      // Change this
  'pharmacy-green': '#10B981',    // Or this
}
```

## 🌐 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
- Free tier: Excellent
- Custom domain: Easy
- HTTPS: Automatic

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
```
- Free tier: Good
- Forms: Built-in
- Custom domain: Easy

### Traditional Hosting
1. Build: `npm run build`
2. Upload `dist/` via FTP
3. Configure domain

## ✅ Pre-Launch Checklist

- [ ] Phone number added
- [ ] Email address added
- [ ] WhatsApp number added
- [ ] Map coordinates set
- [ ] Images loaded (or kept defaults)
- [ ] Mobile design verified
- [ ] Forms tested
- [ ] Links working
- [ ] Medical disclaimer visible
- [ ] Build successful: `npm run build`
- [ ] Deployed to hosting

## 📊 Analytics & SEO

**Page Title:** MEDIGENIX PHARMA | Trusted Pharmacy in Hyderabad
**Meta Description:** Automatically set in config

**To Track Visits:**
1. Create Google Analytics account
2. Add tracking code to `src/App.jsx`
3. Monitor dashboard

## 📞 Support Resources

| Topic | Link |
|-------|------|
| React Docs | https://react.dev |
| Vite Docs | https://vitejs.dev |
| Tailwind | https://tailwindcss.com |
| Vercel | https://vercel.com/docs |
| Netlify | https://docs.netlify.com |

## 🆘 Help & Troubleshooting

### Forms not working?
→ They work locally but need backend setup to send emails

### Images not loading?
→ Check URLs in config.js are valid and accessible

### Maps showing wrong location?
→ Update latitude/longitude in config.js

### Styling looks different?
→ Build and refresh: `npm run build`, then Ctrl+Shift+R

### Performance issues?
→ Optimize images (< 500KB), check network tab

## 🎯 Next Steps

1. **Update Contact Info** (5 minutes)
   - Edit `src/config.js`
   - Add phone, email, WhatsApp

2. **Test Locally** (2 minutes)
   - Run `npm run dev`
   - Check all pages work

3. **Set Up Hosting** (10 minutes)
   - Create Vercel/Netlify account
   - Connect GitHub repo

4. **Deploy** (5 minutes)
   - Push to GitHub
   - Auto-deploy to Vercel/Netlify

5. **Go Live!** 🎉
   - Add custom domain (optional)
   - Share with customers

## 📝 Detailed Guides

- See `SETUP.md` for detailed configuration
- See `LAUNCH_CHECKLIST.md` for complete checklist
- See `README.md` for full documentation

## 🎊 You're Ready!

Your MEDIGENIX PHARMA website is fully built and ready to customize.

Start with updating `src/config.js` with your actual business information, then deploy in minutes!

---

**Questions?** Check the documentation files:
- SETUP.md - Detailed setup guide
- LAUNCH_CHECKLIST.md - Pre-launch verification
- README.md - Full documentation

**Let's get your pharmacy online! 🚀**
