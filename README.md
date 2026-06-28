# Dhoomimal Art Gallery Website

A premium art gallery website for Dhoomimal Art Gallery, New Delhi — inspired by leading international gallery websites. Built with Next.js, deployable to Vercel.

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Pure CSS (no Tailwind, no UI library)
- **Fonts:** Cormorant Garamond (display) + Inter (body) via Google Fonts
- **Deployment:** Vercel

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage: Hero, Exhibitions, Artists, Art Fairs, Awards |
| `/artists` | Full artist roster |
| `/exhibitions` | Current & past exhibitions |
| `/collection` | Artwork collection grid |
| `/art-fairs` | Art fair participations |
| `/about` | Gallery history & story |
| `/contact` | Contact form + info |
| `/news` | Press & announcements |

---

## 🚀 Deploy to GitHub + Vercel

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and click **"New repository"**
2. Name it `dhoomimal-gallery` (or any name you prefer)
3. Set it to **Public** (required for free Vercel)
4. **Do NOT** initialize with README (we already have one)
5. Click **"Create repository"**

### Step 2: Push this code to GitHub

Open your terminal in this project folder and run:

```bash
git init
git add .
git commit -m "Initial commit: Dhoomimal Art Gallery website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dhoomimal-gallery.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Click **"Import"** next to your `dhoomimal-gallery` repository
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **"Deploy"**

Your site will be live at `https://dhoomimal-gallery.vercel.app` in ~60 seconds! 🎉

### Step 4: Add a Custom Domain (Optional)

1. In your Vercel project, go to **Settings → Domains**
2. Add your domain e.g. `dhoomimalgallery.com`
3. Follow the DNS instructions Vercel provides

---

## 🖼️ Adding Real Images

To replace the placeholder blocks with real photos:

1. Add images to `/public/images/` (e.g. `hero.jpg`, `exhibition-1.jpg`)
2. Use Next.js `<Image>` component:

```jsx
import Image from 'next/image'

<Image src="/images/hero.jpg" alt="Gallery" fill style={{ objectFit: 'cover' }} />
```

## ✏️ Customizing Content

All content (artists, exhibitions, art fairs) is defined as arrays at the top of each page file:

- `pages/index.js` → Homepage data (EXHIBITIONS, ARTISTS, ART_FAIRS, AWARDS)
- `pages/artists.js` → Full artist list
- `pages/exhibitions.js` → All exhibitions
- `pages/collection.js` → Artwork entries

Simply update those arrays with your real data.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
