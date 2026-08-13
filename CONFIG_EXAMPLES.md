# 🔧 Configuration Examples - What to Edit

This file shows exactly what and where to edit in your website configuration.

## 📝 File Location: `src/config.js`

### ⚠️ REQUIRED EDITS

#### 1. Phone Number
**Line 10**
```javascript
// CHANGE THIS:
phone: '[Your Phone Number]',

// TO THIS (example):
phone: '+91-40-2345-6789',

// OR THIS:
phone: '+919876543210',

// OR THIS:
phone: '040-2345-6789',
```

**Where it appears:**
- Navbar "Get in Touch" link (if enabled)
- Location section
- Contact CTA section
- Footer

#### 2. Email Address
**Line 11**
```javascript
// CHANGE THIS:
email: '[Your Email Address]',

// TO THIS (example):
email: 'info@medigenixpharma.com',

// OR THIS:
email: 'contact@medigenixpharma.in',

// OR THIS:
email: 'medigenix.pharma@gmail.com',
```

**Where it appears:**
- Location section
- Footer
- Contact form handling (when backend added)

#### 3. WhatsApp Number
**Line 12**
```javascript
// CHANGE THIS:
whatsapp: '[Your WhatsApp Number]',

// TO THIS (example):
whatsapp: '+91-98765-43210',

// OR THIS:
whatsapp: '+919876543210',
```

**Where it appears:**
- Floating WhatsApp button
- Hero section "Chat on WhatsApp" button
- Photo Banner WhatsApp link
- Contact CTA section

### ⚠️ IMPORTANT EDITS

#### 4. Map Coordinates
**Lines 70-73**
```javascript
// CHANGE THIS:
maps: {
  placeName: 'MEDIGENIX PHARMA, Bandlaguda, Hyderabad',
  latitude: 17.3850,        // ← Change this
  longitude: 78.5205,       // ← Change this
}

// TO YOUR COORDINATES (example):
maps: {
  placeName: 'MEDIGENIX PHARMA, Bandlaguda, Hyderabad',
  latitude: 17.385052,      // Your latitude
  longitude: 78.520554,     // Your longitude
}
```

**How to get coordinates:**
1. Open [Google Maps](https://maps.google.com)
2. Search for: "18-13-9/78 Bandlaguda Hyderabad"
3. Right-click on the location
4. Click "What's here"
5. Coordinates appear at the bottom
6. Format: 17.385052, 78.520554

**Where it appears:**
- Location section Google Maps embed
- Google Maps link generation

### 📸 OPTIONAL EDITS

#### 5. Replace Images
**Lines 43-52**
```javascript
// KEEP THESE (they're royalty-free from Unsplash):
images: {
  hero: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?w=1200&h=600&fit=crop',
  about: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=600&fit=crop',
  services: 'https://images.unsplash.com/photo-1576110397969-55248dba9bf1?w=600&h=400&fit=crop',
  photoBanner: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=1200&h=600&fit=crop',
  prescription: 'https://images.unsplash.com/photo-1576110397969-55248dba9bf1?w=600&h=600&fit=crop',
  whyChoose: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?w=600&h=600&fit=crop',
  contactCta: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop',
}

// OR REPLACE WITH YOUR OWN (example):
images: {
  hero: 'https://cloudinary.com/your-pharmacy-interior.jpg',
  about: 'https://cloudinary.com/your-pharmacist.jpg',
  // ... etc
}
```

**Image Sources:**
- Use Unsplash (free, no credit needed)
- Use Pexels (free, no credit needed)
- Use Pixabay (free, no credit needed)
- Upload to Cloudinary (free account)
- Upload to ImgBB (free image hosting)

#### 6. Business Hours (Optional - Not Displayed Yet)
**Lines 14-20**
```javascript
// Current setting:
hours: {
  mon_fri: '9:00 AM - 8:00 PM',
  sat: '9:00 AM - 6:00 PM',
  sun: 'Closed',
}

// Update if needed:
hours: {
  mon_fri: '8:00 AM - 9:00 PM',        // Your hours
  sat: '8:00 AM - 7:00 PM',           // Your hours
  sun: '10:00 AM - 6:00 PM',          // Your hours (or 'Closed')
}
```

**Note:** Hours are stored but not displayed on website yet. Can be added in future.

### ✅ ALREADY CONFIGURED

These fields are already filled correctly and don't need changes:

#### Business Name & Info
```javascript
businessName: 'MEDIGENIX PHARMA',      // ✓ Correct
businessType: 'Chemist & Druggist',    // ✓ Correct
established: 'June 13, 2023',          // ✓ Correct
establishedShort: '2023',              // ✓ Correct
```

#### Address (Already Correct)
```javascript
address: {
  businessName: 'MEDIGENIX PHARMA',                    // ✓
  street: '18-13-9/78',                               // ✓
  area: 'Bandlaguda',                                 // ✓
  circle: 'Chandrayangutta, Circle 1',               // ✓
  city: 'Hyderabad',                                  // ✓
  state: 'Telangana',                                 // ✓
  country: 'India',                                   // ✓
}
```

#### Registration (Already Correct)
```javascript
registration: {
  number: 'SEA/HYD/ACL/A4/1309294/2026',             // ✓
  registeredDate: '11 April 2026',                    // ✓
  businessType: 'Chemist & Druggist',                // ✓
  act: 'Telangana Shops & Establishments Act, 1988', // ✓
}
```

#### SEO (Good Defaults)
```javascript
seo: {
  title: 'MEDIGENIX PHARMA | Trusted Pharmacy in Hyderabad',
  description: 'MEDIGENIX PHARMA is a chemist and druggist...',
  keywords: 'pharmacy, chemist, druggist, Hyderabad...',
}

// Can update if desired:
title: 'MEDIGENIX PHARMA - Your Local Pharmacy',
description: 'Professional pharmacy services in Hyderabad',
```

## 🎨 Color Customization (Advanced)

File: `tailwind.config.js`
Lines: 5-11

```javascript
// Current colors:
colors: {
  'medical-blue': '#0D47A1',        // Primary blue
  'medical-dark-blue': '#0A3A7C',   // Darker blue
  'medical-light-blue': '#1565C0',  // Lighter blue
  'pharmacy-green': '#10B981',      // Accent green
  'pharmacy-light-green': '#34D399', // Light green
  'dark-navy': '#1F2937',           // Text color
  'light-off-white': '#F9FAFB',     // Background
}

// To change colors:
colors: {
  'medical-blue': '#1976D2',        // Your blue
  'pharmacy-green': '#00AA55',      // Your green
  // ... etc
}
```

**Color Picker:** Use [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors) for hex codes

## 🔤 Font Customization (Advanced)

File: `tailwind.config.js`
Lines: 12-14

```javascript
// Current font (system fonts):
fontFamily: {
  'sans': ['Inter', 'system-ui', 'avenir', 'helvetica', 'arial', 'sans-serif'],
}

// To use Google Fonts (example):
// 1. Add to index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

// 2. Update tailwind.config.js:
fontFamily: {
  'sans': ['Poppins', 'system-ui', 'sans-serif'],
}
```

## 📱 Business Hours Display

Currently stored but not displayed. To show on website, add to a component:

```javascript
import { config } from '../config';

export function Hours() {
  return (
    <div>
      <p>Monday-Friday: {config.hours.mon_fri}</p>
      <p>Saturday: {config.hours.sat}</p>
      <p>Sunday: {config.hours.sun}</p>
    </div>
  );
}
```

## ✨ SEO Customization

File: `src/config.js`
Lines: 55-61

```javascript
seo: {
  title: 'MEDIGENIX PHARMA | Trusted Pharmacy in Hyderabad',
  description: 'MEDIGENIX PHARMA is a chemist and druggist in Bandlaguda, Chandrayangutta, Hyderabad, providing professional pharmacy services and customer assistance.',
  keywords: 'pharmacy, chemist, druggist, Hyderabad, Bandlaguda, Chandrayangutta, prescription, medicine enquiry',
}

// To customize (example):
seo: {
  title: 'MEDIGENIX PHARMA - Best Pharmacy Hyderabad',
  description: 'Professional pharmacy services near Bandlaguda. Prescription enquiries, medicine assistance, trusted pharmacist.',
  keywords: 'pharmacy near me, chemist hyderabad, druggist bandlaguda, prescription service',
}
```

## 🔗 Social Links

File: `src/config.js`
Lines: 69-73

```javascript
social: {
  whatsapp: 'https://wa.me/',    // Auto-generated from phone number
  facebook: '#',                  // Optional
  instagram: '#',                 // Optional
}

// To add social (example):
social: {
  whatsapp: 'https://wa.me/919876543210',
  facebook: 'https://facebook.com/medigenixpharma',
  instagram: 'https://instagram.com/medigenixpharma',
}
```

## 📋 Summary of Edits

| Field | Required | Location | Current Value | Example |
|-------|----------|----------|----------------|---------|
| Phone | ✅ YES | Line 10 | [Your Phone] | +91-40-XXXX-XXXX |
| Email | ✅ YES | Line 11 | [Your Email] | info@medigenix.com |
| WhatsApp | ✅ YES | Line 12 | [WhatsApp #] | +919876543210 |
| Maps Lat | ✅ YES | Line 71 | 17.3850 | 17.385052 |
| Maps Lon | ✅ YES | Line 72 | 78.5205 | 78.520554 |
| Images | ❓ OPT | Lines 43-52 | Unsplash URLs | Your image URLs |
| Hours | ❓ OPT | Lines 14-20 | 9-8, 9-6 | Your hours |

## 🎯 Quick Edit Steps

1. **Open file:** `src/config.js`

2. **Edit phone number** (line 10)
   ```javascript
   phone: '+91-40-XXXX-XXXX',
   ```

3. **Edit email** (line 11)
   ```javascript
   email: 'your-email@medigenix.com',
   ```

4. **Edit WhatsApp** (line 12)
   ```javascript
   whatsapp: '+91-98765-43210',
   ```

5. **Edit map coordinates** (lines 71-72)
   - Get from Google Maps (right-click → What's here)
   - Update latitude and longitude

6. **Save file**

7. **Test:** Visit http://localhost:5173/ (auto-updates!)

8. **Done!** 🎉

---

**Questions about editing?** Check SETUP.md or QUICK_START.md
