# ChefFlow Landing Page - Multi-Page Vite Build

A modern, responsive landing page for ChefFlow, converted from Next.js to Vite with multi-page support for LWS hosting.

![ChefFlow Logo](public/images/logo.png)

## 🚀 Project Overview

ChefFlow is a mobile-first kitchen management app for independent restaurants and small chains. This landing page showcases the app's features, testimonials, pricing, and includes a privacy policy page.

### Key Features
- ⚡ **Vite-powered** for ultra-fast builds
- 🎨 **Tailwind CSS** for responsive design
- 📱 **Mobile-first** responsive layout
- 🔄 **Framer Motion** animations
- 📄 **Multi-page support** for LWS hosting
- 🎯 **Optimized** for production deployment

## 🏗️ Technical Architecture

### From Next.js to Vite Migration

This project was successfully migrated from Next.js to Vite to achieve:
- **Single HTML file output** (original requirement)
- **Multi-page structure** for LWS hosting
- **Faster development** and build times
- **Flexible deployment options**

### Multi-Page Setup

The application supports multiple pages with proper LWS hosting structure:

```
htdocs/
├── index.html                    → https://chefflowapp.net/
├── privacy-policy/
│   └── index.html               → https://chefflowapp.net/privacy-policy/
├── assets/
│   ├── CSS and JavaScript files
│   └── favicon and fonts
└── images/
    └── Static assets (logos, testimonials)
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Benefits/        # Feature benefits section
│   ├── Pricing/         # Pricing table components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Main hero section
│   ├── Footer.tsx       # Site footer
│   ├── FAQ.tsx          # Frequently asked questions
│   ├── CTA.tsx          # Call-to-action section
│   ├── Stats.tsx        # Statistics section
│   └── Testimonials.tsx # Customer testimonials
├── pages/               # Page components
│   ├── Home.tsx         # Main landing page
│   └── PrivacyPolicy.tsx # Privacy policy page
├── data/                # Configuration and content
│   ├── siteDetails.ts   # Site metadata
│   ├── menuItems.ts     # Navigation items
│   ├── hero.ts          # Hero section content
│   ├── testimonials.ts  # Customer testimonials
│   ├── faq.ts          # FAQ content
│   └── pricing.ts      # Pricing information
├── app/
│   ├── globals.css     # Global styles
│   └── favicon.ico     # Site icon
├── main.tsx            # Main app entry point
└── main-privacy.tsx    # Privacy page entry point

scripts/
└── post-build.js       # Build post-processing for LWS structure

dist/                   # Build output (LWS-ready)
├── index.html
├── privacy-policy/
│   └── index.html
├── assets/
└── images/
```

## 🛠️ Development Setup

### Prerequisites
- **Node.js** 18 or later
- **npm** 8 or later

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **View the application**
   - Main page: [http://localhost:5173](http://localhost:5173)
   - Privacy policy: [http://localhost:5173/privacy-policy.html](http://localhost:5173/privacy-policy.html)

## 📦 Build Process

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production + LWS structure |
| `npm run build:vite` | Build only (no post-processing) |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Build Output

The build process generates:
1. **Vite compilation**: Creates optimized HTML, CSS, JS
2. **Post-processing**: Reorganizes files for LWS hosting structure
3. **Deployment package**: Ready-to-upload zip file

### Build Process Details

```bash
npm run build
```

**Steps:**
1. **TypeScript compilation** (`tsc`)
2. **Vite build** (creates `dist/` folder)
3. **Post-build script** (reorganizes for LWS)
4. **Output**: LWS-ready file structure

## 🚀 Deployment

### LWS Hosting Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy files (IMPORTANT: Handle .htaccess carefully)**
   ```bash
   # Upload contents EXCEPT .htaccess first
   # Upload: index.html, privacy-policy/, assets/, images/
   # DON'T overwrite existing .htaccess yet
   ```

3. **Configure .htaccess for privacy policy routing**
   
   **If you have existing .htaccess (like LWS Panel users):**
   - **DON'T** overwrite your existing `.htaccess`
   - **ADD** these rules to the END of your existing server `.htaccess`:
   ```apache
   # ChefFlow custom rules - Enable directory index files
   DirectoryIndex index.html index.htm
   
   # Handle clean URLs for subdirectories
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^([^/]+)/?$ $1/index.html [L]
   
   # Handle trailing slashes for subdirectories
   RewriteRule ^([^/]+)/$ $1/index.html [L]
   ```
   
   **If you DON'T have existing .htaccess:**
   - Upload the generated `.htaccess` from `dist/` folder

4. **Verify URLs**
   - Main page: `https://chefflowapp.net/`
   - Privacy policy: `https://chefflowapp.net/privacy-policy/` ← Should now work!

### Alternative: Zip Deployment

The build automatically creates a deployment zip file, but you can also create one manually:

**Automatic Zip (included in build):**
```bash
npm run build
# Creates: chefflow-lws-multipage-YYYYMMDD.zip
```

**Manual Zip Creation:**
```bash
# After building, zip the dist folder
cd dist
zip -r ../chefflow-deployment-$(date +%Y%m%d).zip .
cd ..

# Or create zip from project root
zip -r chefflow-deployment-$(date +%Y%m%d).zip dist/
```

**For Windows:**
```powershell
# Using PowerShell
Compress-Archive -Path "dist/*" -DestinationPath "chefflow-deployment-$(Get-Date -Format 'yyyyMMdd').zip"
```

**Deploy the zip file:**
1. Upload zip to your server
2. Extract in `htdocs/` directory:
   ```bash
   # On your server
   cd /path/to/htdocs/
   unzip chefflow-deployment-*.zip
   ```
3. **Configure .htaccess** (CRITICAL for privacy policy links):
   - **If no existing .htaccess**: The extracted `.htaccess` works as-is
   - **If existing .htaccess** (like LWS Panel): 
     - **DON'T** overwrite your existing server `.htaccess`
     - **ADD** rules from `htaccess-rules-to-add.txt` to your existing file
     - **Test** that HTTPS redirects still work after adding rules
3. Verify the structure:
   ```
   htdocs/
   ├── index.html
   ├── privacy-policy/
   │   └── index.html
   ├── assets/
   └── images/
   ```

**Quick Reference - Zip Commands:**
```bash
# Auto zip (recommended)
npm run build

# Manual zip from project root  
zip -r deployment.zip dist/

# Manual zip from inside dist
cd dist && zip -r ../deployment.zip . && cd ..

# Windows PowerShell
Compress-Archive -Path "dist/*" -DestinationPath "deployment.zip"
```

## 🔧 Configuration

### Site Details
Edit `src/data/siteDetails.ts`:
```typescript
export const siteDetails = {
    siteName: 'ChefFlow',
    siteUrl: 'https://chefflow.app/',
    metadata: {
        title: "ChefFlow – All your kitchen's daily paperwork. Finally digitised.",
        description: "ChefFlow is the mobile-first kitchen management app...",
    },
    siteLogo: '/images/logo.png',
    googleAnalyticsId: '', // Add your GA ID
}
```

### Navigation Menu
Edit `src/data/menuItems.ts`:
```typescript
export const menuItems: IMenuItem[] = [
    { text: "Features", url: "#features" },        // Same page section
    { text: "CTA", url: "/#cta" },                 // Main page section (from any page)
    { text: "Privacy Policy", url: "/privacy-policy.html" }, // Different page
];
```

**URL Patterns:**
- `#section` → Section on current page
- `/#section` → Section on main page (from any page) 
- `/page.html` → Different page
- `/page.html#section` → Section on different page

### Adding New Pages

1. **Create page component** in `src/pages/NewPage.tsx`
2. **Create HTML entry point** `new-page.html` in root
3. **Create entry script** `src/main-new-page.tsx`
4. **Update Vite config** input in `vite.config.ts`
5. **Update post-build script** if folder structure needed

## 📊 Performance & Optimization

### Build Statistics
- **Main page**: ~55KB JavaScript + ~45KB CSS
- **Privacy page**: ~4KB JavaScript (shared assets)
- **Images**: Optimized WebP format
- **Fonts**: Preloaded for better performance

### Optimization Features
- **Tree-shaking**: Unused code eliminated
- **Asset optimization**: Images and fonts optimized
- **CSS purging**: Tailwind CSS purged of unused styles
- **Code splitting**: Separate bundles per page
- **Gzip compression**: All assets compressed

## 🎨 Styling & UI

### Tailwind CSS Configuration
- **Custom colors**: Primary, secondary, background variants
- **Custom fonts**: Manrope and Source Sans 3
- **Responsive breakpoints**: Mobile-first approach
- **Dark mode**: Ready for implementation

### Component System
- **Modular components**: Reusable across pages
- **Consistent spacing**: Using Tailwind spacing scale
- **Responsive design**: Mobile-first breakpoints
- **Accessible**: ARIA labels and semantic HTML

## 🌐 LWS Hosting Specific Considerations

### .htaccess Configuration Challenges

**Problem Discovered**: LWS Panel generates its own `.htaccess` file with HTTPS redirects that shouldn't be modified. Our privacy policy routing (`/privacy-policy/` → `/privacy-policy/index.html`) required additional rewrite rules.

**Solution**: 
- Created `htaccess-rules-to-add.txt` with only the necessary rules
- Updated build process to include complete `.htaccess` with LWS + ChefFlow rules
- Provided both merge and replace options for deployment

**Files Generated**:
- `public/.htaccess` - Complete file with LWS Panel + ChefFlow rules
- `htaccess-rules-to-add.txt` - Just the rules to add to existing server file
- `dist/.htaccess` - Built version ready for deployment

### Directory Structure for Clean URLs

The post-build script reorganizes files specifically for LWS hosting:
```bash
# From Vite output
privacy-policy.html

# To LWS structure  
privacy-policy/
└── index.html
```

This enables clean URLs (`/privacy-policy/`) while maintaining compatibility with static file serving.

## 🔍 Technical Decisions

### Why Vite over Next.js?

1. **Single file output**: Vite + vite-plugin-singlefile for initial requirement
2. **Multi-page flexibility**: Easy to configure multiple entry points
3. **Faster builds**: Significantly faster than Next.js for this use case
4. **LWS compatibility**: Better control over output structure
5. **Simpler deployment**: No Node.js server required

### Multi-Page Architecture

Instead of client-side routing, we chose:
- **Multiple HTML entries**: Each page is a separate HTML file
- **Shared components**: Common UI components across pages
- **Static assets**: Centralized in `assets/` and `images/`
- **Post-build processing**: Automatic LWS structure creation

### Navigation Handling

**Development vs Production:**
- **Development**: Uses `.html` extensions (`/privacy-policy.html`)
- **Production**: Uses folder structure (`/privacy-policy/`)
- **Post-build script**: Automatically reorganizes files for LWS

## 📝 Content Management

### Adding Content

1. **Hero section**: Edit `src/data/hero.ts`
2. **Testimonials**: Edit `src/data/testimonials.ts`
3. **FAQ**: Edit `src/data/faq.ts`
4. **Pricing**: Edit `src/data/pricing.ts`
5. **Site details**: Edit `src/data/siteDetails.ts`

### Images
- **Main images**: Place in `public/images/`
- **Icons**: Using React Icons library
- **Logo**: Update `public/images/logo.png`

## 🐛 Troubleshooting

### Common Issues

1. **Privacy Policy "Not Found" error on deployment**
   - **Problem**: Server can't resolve `/privacy-policy/` to `/privacy-policy/index.html`
   - **Solution A**: If no existing `.htaccess` - use the generated one
   - **Solution B**: If existing `.htaccess` (like LWS Panel) - merge rules manually
   - **Rules to add**: See `htaccess-rules-to-add.txt` file for specific rules

2. **Privacy Policy link not working in dev**
   - Check URL in `menuItems.ts` uses correct path for your setup
   - **Dev mode**: Use `/privacy-policy.html`
   - **Production**: Use `/privacy-policy/`

2. **Build fails with TypeScript errors**
   ```bash
   # Check for missing imports or type errors
   npm run lint
   ```

3. **Assets not loading**
   - Check file paths in `public/` folder
   - Verify Vite asset handling in config

4. **LWS structure incorrect**
   - Check `scripts/post-build.js`
   - Verify dist/ folder structure after build

### Development Issues

1. **Hot reload not working**
   ```bash
   # Restart dev server
   npm run dev
   ```

2. **CSS not updating**
   - Check Tailwind config
   - Clear cache: `rm -rf node_modules/.vite`

## 🔄 Migration Summary

### What Was Changed

**From Next.js to Vite:**
1. ✅ Removed Next.js dependencies (`next`, `next/image`, `next/link`)
2. ✅ Added Vite dependencies (`vite`, `@vitejs/plugin-react`)
3. ✅ Converted Next.js components to standard React
4. ✅ Replaced `Image` components with `img` tags
5. ✅ Replaced `Link` components with `a` tags
6. ✅ Removed `"use client"` directives
7. ✅ Created separate entry points for each page
8. ✅ Added post-build script for LWS structure

**Multi-Page Implementation:**
1. ✅ Created `pages/` directory with `Home.tsx` and `PrivacyPolicy.tsx`
2. ✅ Added separate HTML entry points (`index.html`, `privacy-policy.html`)
3. ✅ Created separate main scripts (`main.tsx`, `main-privacy.tsx`)
4. ✅ Updated Vite config for multi-page input
5. ✅ Added post-build processing for folder structure
6. ✅ Updated navigation to support both dev and production URLs

## 📈 Future Enhancements

### Planned Features
- [ ] **Single file mode**: Toggle for single HTML output
- [ ] **More pages**: Terms of service, contact, about
- [ ] **CMS integration**: Headless CMS for content management
- [ ] **A/B testing**: Component variants for optimization
- [ ] **Analytics**: Enhanced tracking and conversion metrics

### Performance Improvements
- [ ] **Image optimization**: WebP conversion pipeline
- [ ] **Critical CSS**: Inline critical styles
- [ ] **Preloading**: Strategic resource preloading
- [ ] **Service worker**: Offline functionality

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open pull request**

## 📄 License

This project is open-source and available under the MIT License.

## 📞 Support

For questions or support:
- **Email**: support@chefflow.app
- **Website**: [https://chefflow.app](https://chefflow.app)

---

**Built with ❤️ using Vite + React + Tailwind CSS**