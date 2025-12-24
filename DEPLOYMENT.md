# Deployment Guide

This guide will help you deploy your SRT Storytelling project online.

## Prerequisites

1. A GitHub account (free at https://github.com)
2. Node.js and npm installed (you already have this)

## Step 1: Prepare Your Project for Git

First, create a `.gitignore` file if you don't have one:

```bash
# Create .gitignore
cat > .gitignore << 'EOF'
node_modules/
dist/
.DS_Store
*.log
.env
.env.local
EOF
```

## Step 2: Initialize Git and Push to GitHub

1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name it (e.g., `srt-storytelling`)
   - Don't initialize with README (you already have files)
   - Click "Create repository"

3. **Push your code to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/srt-storytelling.git
   git branch -M main
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your GitHub username)

## Step 3: Deploy to Vercel (Recommended)

### Option A: Via Vercel Website

1. Go to https://vercel.com
2. Sign up/Login with your GitHub account
3. Click "Add New Project"
4. Import your `srt-storytelling` repository
5. Vercel will auto-detect:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"
7. Wait 1-2 minutes for deployment
8. Your site is live! 🎉

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? srt-storytelling
# - Directory? ./
# - Override settings? No
```

## Step 4: Deploy to Netlify (Alternative)

1. Go to https://netlify.com
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"
7. Your site is live! 🎉

## Step 5: Update Vite Config for Production (Important!)

Since you're using React Router, you need to ensure the base path is correct. Update `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // This is correct for most deployments
  server: {
    port: 3000,
    open: true
  }
})
```

## Custom Domain (Optional)

Both Vercel and Netlify allow you to add a custom domain:
- **Vercel:** Go to Project Settings → Domains
- **Netlify:** Go to Site Settings → Domain Management

## Environment Variables (If Needed)

If you add environment variables later:
- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Build & Deploy → Environment Variables

## Continuous Deployment

Once connected to GitHub, both platforms will automatically:
- Deploy new versions when you push to `main` branch
- Create preview deployments for pull requests

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Run `npm run build` locally to test
- Check the build logs in Vercel/Netlify dashboard

### Routes Not Working
- Make sure your hosting supports client-side routing
- Vercel and Netlify handle this automatically
- For GitHub Pages, you may need a `_redirects` file

### Assets Not Loading
- Check that paths in your code use relative paths
- Ensure `base` in `vite.config.js` is set correctly

## Quick Deploy Commands

```bash
# Build locally to test
npm run build

# Preview production build
npm run preview

# Deploy to Vercel (after installing CLI)
vercel --prod
```

