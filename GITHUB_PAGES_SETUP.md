# 🚀 GitHub Pages Staging Deployment Guide

## ✅ COMPLETED SETUP

### 1. Staging Branch Created ✅
- Created `staging` branch with production build
- Configured for GitHub Pages base path (`/Insular/`)
- Added 404.html for SPA routing support
- Pushed to GitHub repository

### 2. GitHub Actions Workflow ✅
- Created `.github/workflows/deploy-staging.yml`
- Automatic deployment on staging branch updates
- Builds and deploys to GitHub Pages

## 🌐 GITHUB PAGES CONFIGURATION

### Step 1: Enable GitHub Pages
1. **Go to your repository**: https://github.com/vanalva/Insular
2. **Click "Settings"** tab
3. **Scroll to "Pages"** section (left sidebar)
4. **Source**: Select "GitHub Actions"
5. **Save** the settings

### Step 2: Deploy Staging Branch
The staging branch is already pushed and ready! GitHub Actions will automatically:
- Build the project
- Deploy to GitHub Pages
- Make it available at: `https://vanalva.github.io/Insular/`

## 🔄 AUTOMATIC DEPLOYMENT

### How it works:
1. **Push to staging branch** → Automatic deployment
2. **Manual trigger** → Available in GitHub Actions tab
3. **Build process** → Runs on every push
4. **Deployment** → Updates GitHub Pages automatically

### To update staging:
```bash
# Make changes to your code
git checkout master
# ... make changes ...
git add .
git commit -m "Update feature"
git push

# Deploy to staging
git checkout staging
git merge master
npm run build:prod
xcopy "dist\*" "." /E /H /Y
git add .
git commit -m "Deploy to staging"
git push
```

## 📱 STAGING URL

Your staging site will be available at:
**https://vanalva.github.io/Insular/**

## 🧪 TESTING STAGING

### Test these pages:
- ✅ Home: `https://vanalva.github.io/Insular/`
- ✅ Conocenos: `https://vanalva.github.io/Insular/conocenos`
- ✅ Servicios: `https://vanalva.github.io/Insular/servicios`
- ✅ Aliados: `https://vanalva.github.io/Insular/aliados`
- ✅ Contacto: `https://vanalva.github.io/Insular/contacto`
- ✅ Legal: `https://vanalva.github.io/Insular/legal`

### Test features:
- ✅ Images load properly
- ✅ Animations work
- ✅ Mobile responsive
- ✅ Page refresh works (no 404s)
- ✅ All links functional

## 🔧 TROUBLESHOOTING

### If GitHub Pages doesn't work:
1. **Check Actions tab** for build errors
2. **Verify Pages settings** (Source: GitHub Actions)
3. **Check repository permissions** (Pages write access)
4. **Wait 5-10 minutes** for deployment

### If pages show 404:
- The 404.html file handles SPA routing
- GitHub Pages should redirect properly
- Check browser console for errors

### If images don't load:
- Verify all assets are in the staging branch
- Check file paths in browser dev tools
- Ensure base path is correct (`/Insular/`)

## 🚀 PRODUCTION DEPLOYMENT

### For GoDaddy (Production):
1. **Switch back to master branch**:
   ```bash
   git checkout master
   ```

2. **Update Vite config for production**:
   ```bash
   # Change base path back to './'
   # In vite.config.ts: base: './'
   ```

3. **Build for production**:
   ```bash
   npm run build:prod
   ```

4. **Upload dist/ folder to GoDaddy**

## 📊 DEPLOYMENT WORKFLOW

```
master branch (development)
    ↓
staging branch (GitHub Pages)
    ↓
production (GoDaddy hosting)
```

## 🎯 BENEFITS

### Staging Environment:
- ✅ **Free hosting** on GitHub Pages
- ✅ **Automatic deployment** via GitHub Actions
- ✅ **Easy testing** before production
- ✅ **Version control** for deployments
- ✅ **Public URL** for client review

### Production Environment:
- ✅ **Custom domain** on GoDaddy
- ✅ **Full control** over hosting
- ✅ **Professional setup** for live site

---

## 🎉 READY TO DEPLOY!

Your staging environment is ready! Just enable GitHub Pages in your repository settings and your site will be live at:

**https://vanalva.github.io/Insular/**

The GitHub Actions workflow will handle all future deployments automatically! 🚀
