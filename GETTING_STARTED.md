# 🚀 Getting Started - MEDIGENIX PHARMA Website

Welcome! Your premium pharmacy website is ready to customize and deploy. Follow these steps.

## ⏱️ Time Estimate: 5 Minutes

This guide will get you from zero to a live website in about 5 minutes!

---

## 📍 Step 1: Navigate to Project (1 minute)

Open your terminal/command prompt and go to the project folder:

```bash
cd "c:\Users\Mohammed Anas\OneDrive\Desktop\medical\medigenix-pharma"
```

## 🌐 Step 2: Check If Dev Server is Running (1 minute)

The dev server should already be running. Open your browser:

```
http://localhost:5173/
```

You should see your website! 🎉

If not, start it:
```bash
npm run dev
```

## ✏️ Step 3: Edit Your Business Information (2 minutes)

### Open Configuration File
Navigate to: **`src/config.js`**

### Find and Edit These Lines

**Line 10 - Phone Number:**
```javascript
// Change from:
phone: '[Your Phone Number]',

// To:
phone: '+91-40-2345-6789',
```

**Line 11 - Email:**
```javascript
// Change from:
email: '[Your Email Address]',

// To:
email: 'info@medigenixpharma.com',
```

**Line 12 - WhatsApp:**
```javascript
// Change from:
whatsapp: '[Your WhatsApp Number]',

// To:
whatsapp: '+91-98765-43210',
```

**Lines 71-72 - Map Coordinates:**
```javascript
// Change from:
maps: {
  latitude: 17.3850,
  longitude: 78.5205,

// To (example):
maps: {
  latitude: 17.385052,
  longitude: 78.520554,
```

**How to get map coordinates:**
1. Go to [Google Maps](https://maps.google.com)
2. Search for: "18-13-9/78 Bandlaguda Hyderabad"
3. Right-click the location pin
4. Select "What's here"
5. Two numbers appear at bottom - that's your coordinates!

### Save File

Press: **Ctrl + S** (Windows) or **Cmd + S** (Mac)

## 🔄 Step 4: See Changes Instantly (1 minute)

Your website should auto-update! Check your browser:

```
http://localhost:5173/
```

- Phone number shows in location section ✓
- Email shows in location section ✓
- WhatsApp button sends to your number ✓
- Maps shows your location ✓

**Pro Tip:** If changes don't appear, press **Ctrl + F5** to force refresh.

## 🎊 Step 5: You're Done! 

Your website is now personalized with your business information!

---

## 🌍 Next: Deploy Your Website

Ready to go live? Choose one:

### Option A: Vercel (Recommended - 5 minutes)

**What you need:** GitHub account

**Steps:**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Import your project
5. Done! Get a free URL

**Features:**
- Free hosting forever
- Custom domain support
- Automatic HTTPS
- Global CDN

### Option B: Netlify (Easy - 5 minutes)

**Steps:**
1. Run: `npm run build`
2. Go to [netlify.com](https://www.netlify.com)
3. Drag the `dist/` folder
4. Done! Get a free URL

**Features:**
- Very fast deployment
- Good free tier
- Easy custom domain

### Option C: Traditional Hosting (Your choice)

**Steps:**
1. Run: `npm run build`
2. Upload `dist/` folder via FTP
3. Point domain to hosting
4. Done!

---

## 📚 Documentation Guide

### For Different Needs:

| Need | Read This |
|------|-----------|
| 🏃 **Quick Setup** | This file (Getting Started) |
| ⚙️ **Detailed Config** | `CONFIG_EXAMPLES.md` |
| 🔧 **Setup & Deploy** | `SETUP.md` |
| ✅ **Pre-Launch Check** | `LAUNCH_CHECKLIST.md` |
| 📋 **Quick Reference** | `QUICK_START.md` |
| 📄 **Full Docs** | `README.md` |
| 📊 **Project Overview** | `PROJECT_SUMMARY.md` |

### Quick Links Inside Files:

- **Config Examples** → See exactly what to edit
- **Setup Guide** → Detailed instructions
- **Launch Checklist** → Before going live
- **Quick Start** → Fast reference

---

## 🎯 Common Questions

### Q: Where do I add my phone number?
**A:** Open `src/config.js` line 10. Change `phone: '[Your Phone Number]'` to your actual number.

### Q: How do I change the map location?
**A:** Get coordinates from Google Maps (right-click → What's here), then update lines 71-72 in `src/config.js`.

### Q: Can I change the images?
**A:** Yes! Update image URLs in `src/config.js` lines 43-52. Upload your images to Cloudinary or ImgBB first.

### Q: Is my website live now?
**A:** Only locally. To go live, deploy to Vercel/Netlify (see Step 5).

### Q: How do I deploy?
**A:** See SETUP.md for detailed instructions, or use Vercel (easiest).

### Q: Can I change the colors?
**A:** Yes! Edit `tailwind.config.js` lines 5-11 (advanced).

### Q: Why aren't forms sending emails?
**A:** Forms work locally but need backend setup to send emails. See SETUP.md for email service integration.

### Q: Will the website work on mobile?
**A:** Yes! Fully responsive. Test with your phone.

---

## 🔒 Important Reminders

- ✅ **Do NOT** add fake phone numbers
- ✅ **Do NOT** add fake emails
- ✅ **Do NOT** make medical claims
- ✅ **Do** keep medical disclaimer visible
- ✅ **Do** use real, current business information

---

## 📝 Checklist: First 5 Minutes

- [ ] Website loads at http://localhost:5173/
- [ ] You've opened `src/config.js`
- [ ] You've updated phone number
- [ ] You've updated email
- [ ] You've updated WhatsApp number
- [ ] You've added map coordinates
- [ ] Website shows your info (refresh page)

**Done? Great! Next step: Deploy or customize more.**

---

## 🚀 What's Next?

### After Customizing (This Tutorial):

1. **Deploy** - Go live with Vercel/Netlify
2. **Add Images** - Upload pharmacy photos (optional)
3. **Get Domain** - Buy a custom domain (optional)
4. **Share** - Tell customers about your website
5. **Monitor** - Check form submissions & feedback

### Advanced Options (See SETUP.md):

- Set up email notifications
- Integrate with payment systems
- Add appointment booking
- Add blog section
- Add WhatsApp Business API
- Set up analytics tracking

---

## 📞 Help & Support

**Stuck?** Check these files:
1. `CONFIG_EXAMPLES.md` - See exact examples
2. `SETUP.md` - Detailed setup instructions
3. `QUICK_START.md` - Quick reference
4. `README.md` - Full documentation

**Browser issue?**
- Press F12 to open Developer Tools
- Check Console tab for error messages
- Try refreshing page (Ctrl + F5)
- Try a different browser

---

## ✨ You're Ready!

Your MEDIGENIX PHARMA website is:
- ✅ Fully built
- ✅ Fully designed
- ✅ Fully responsive
- ✅ Ready to personalize
- ✅ Ready to deploy

### Your Website Currently Shows:
- ✅ Premium pharmacy design
- ✅ All business sections
- ✅ Contact forms
- ✅ Google Maps
- ✅ WhatsApp integration
- ✅ Mobile responsive
- ✅ Professional layout

### Next Action:
**👉 Edit `src/config.js` with your business info (5 minutes)**

---

## 🎉 Welcome!

Welcome to your professional online presence!

**Time to transform MEDIGENIX PHARMA into a digital success story.**

---

### Need More Help?

| Question | File to Read |
|----------|--------------|
| How do I configure the website? | `CONFIG_EXAMPLES.md` |
| How do I deploy it? | `SETUP.md` |
| What should I check before launch? | `LAUNCH_CHECKLIST.md` |
| Quick reference | `QUICK_START.md` |
| Everything | `README.md` |

---

**Let's get your pharmacy online! 🚀**

Start by editing `src/config.js` now!
