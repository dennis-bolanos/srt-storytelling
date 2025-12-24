# Vercel Deployment - Quick Start Guide

## ✅ Step 1: Git is Ready!
Your project has been initialized with Git and committed.

## 📝 Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `srt-storytelling` (or any name you prefer)
3. **Important:** Leave it as **Public** (or Private if you have a paid GitHub account)
4. **DO NOT** check "Initialize with README" (you already have files)
5. Click **"Create repository"**

## 🚀 Step 3: Push to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
cd "/Users/dennisbolanos/Documents/Cursor AI/srt-storytelling"
git remote add origin https://github.com/YOUR_USERNAME/srt-storytelling.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

If you get an authentication error, you may need to:
- Use a Personal Access Token instead of password
- Or use GitHub CLI: `gh auth login`

## 🎯 Step 4: Deploy to Vercel

### Option A: Via Vercel Website (Easiest)

1. Go to **https://vercel.com**
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account
5. Click **"Add New Project"**
6. Find and select your `srt-storytelling` repository
7. Vercel will auto-detect:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build` ✅
   - **Output Directory:** `dist` ✅
   - **Install Command:** `npm install` ✅
8. Click **"Deploy"**
9. Wait 1-2 minutes for the build to complete
10. **🎉 Your site is live!** You'll get a URL like: `srt-storytelling.vercel.app`

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to your project
cd "/Users/dennisbolanos/Documents/Cursor AI/srt-storytelling"

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? → Yes
# - Which scope? → (select your account)
# - Link to existing project? → No
# - Project name? → srt-storytelling (or press Enter)
# - Directory? → ./ (press Enter)
# - Override settings? → No (press Enter)

# For production deployment:
vercel --prod
```

## ✨ What Happens Next?

- ✅ **Automatic Deployments:** Every time you push to GitHub, Vercel will automatically deploy
- ✅ **Preview Deployments:** Pull requests get their own preview URLs
- ✅ **HTTPS:** Your site is automatically secured with SSL
- ✅ **Global CDN:** Fast loading worldwide

## 🔧 Custom Domain (Optional)

1. Go to your project on Vercel dashboard
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Follow the DNS configuration instructions

## 📊 Monitoring & Analytics

- View deployment logs in the Vercel dashboard
- Check build times and performance
- Monitor errors and analytics (if enabled)

## 🐛 Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Test locally: `npm run build`

### Routes Not Working
- Vercel handles React Router automatically
- If issues persist, check `vite.config.js` has `base: '/'`

### Environment Variables
- Go to Project Settings → Environment Variables
- Add any needed variables
- Redeploy after adding

## 🎉 You're Done!

Your SRT Storytelling app is now live on the internet!

**Next Steps:**
- Share your Vercel URL with others
- Continue developing - changes auto-deploy
- Add a custom domain if desired

