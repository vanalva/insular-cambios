# 🚀 GoDaddy Hosting Deployment Guide

## Pre-Deployment Checklist

### 1. Build the Production Version
```bash
npm run build:prod
```

### 2. Test Locally (Optional)
```bash
npm run preview
```

## 📁 Files to Upload to GoDaddy

After running `npm run build:prod`, upload the **entire contents** of the `dist/` folder to your GoDaddy hosting:

### Required Files:
- `index.html` (main entry point)
- `assets/` folder (contains all CSS, JS, and optimized images)
- `.htaccess` (for routing and optimization)

## 🌐 GoDaddy Upload Instructions

### Method 1: File Manager (Recommended)
1. **Login to GoDaddy**
   - Go to your GoDaddy account
   - Navigate to "My Products" → "Web Hosting" → "Manage"

2. **Access File Manager**
   - Click "File Manager" in the hosting control panel
   - Navigate to `public_html/` folder

3. **Upload Files**
   - Delete any existing files in `public_html/`
   - Upload all contents from your `dist/` folder
   - Make sure `.htaccess` is uploaded (it might be hidden)

### Method 2: FTP Client
1. **Get FTP Credentials**
   - In GoDaddy hosting panel, go to "FTP Accounts"
   - Note your FTP host, username, and password

2. **Connect with FTP Client**
   - Use FileZilla, WinSCP, or similar
   - Connect to your domain
   - Upload `dist/` contents to `public_html/`

## ⚙️ GoDaddy Configuration

### 1. Domain Settings
- Ensure your domain points to the hosting account
- DNS should be managed by GoDaddy

### 2. SSL Certificate (Recommended)
- Enable SSL certificate in hosting panel
- Uncomment HTTPS redirect in `.htaccess` after SSL is active

### 3. PHP Version
- Set PHP version to 8.1 or higher in hosting panel

## 🔧 Post-Deployment

### 1. Test Your Site
- Visit your domain
- Test all pages: `/`, `/conocenos`, `/servicios`, `/aliados`, `/contacto`, `/legal`
- Check that images load properly
- Test mobile responsiveness

### 2. Performance Optimization
- Enable Gzip compression (already configured in `.htaccess`)
- Set up browser caching (already configured)
- Consider CDN for faster global loading

### 3. SEO Setup
- Submit sitemap to Google Search Console
- Set up Google Analytics (if needed)
- Test page speed with Google PageSpeed Insights

## 🚨 Troubleshooting

### Common Issues:

1. **404 Errors on Page Refresh**
   - Ensure `.htaccess` is uploaded correctly
   - Check that mod_rewrite is enabled

2. **Images Not Loading**
   - Verify all files in `assets/` folder are uploaded
   - Check file permissions (should be 644 for files, 755 for folders)

3. **Slow Loading**
   - Enable compression in hosting panel
   - Consider upgrading hosting plan

4. **SSL Issues**
   - Wait 24-48 hours for SSL to propagate
   - Clear browser cache

## 📞 Support

If you encounter issues:
1. Check GoDaddy hosting status page
2. Contact GoDaddy support
3. Verify all files are uploaded correctly

## 🔄 Future Updates

To update your site:
1. Make changes locally
2. Run `npm run build:prod`
3. Upload new `dist/` contents to `public_html/`
4. Clear any caching if needed

---

**Your site is now ready for production! 🎉**
