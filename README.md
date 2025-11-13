# Portfolio Site Guide

This guide explains how to customize your portfolio site with your own content, images, and videos.

## Table of Contents
1. [Quick Start](#quick-start)
2. [File Structure](#file-structure)
3. [Adding Your Content](#adding-your-content)
4. [Customization Guide](#customization-guide)
5. [Development](#development)

## Quick Start

1. Clone/download this repository
2. Add your media files to the correct folders (see below)
3. Edit the HTML content in `index.html`
4. Test locally by opening `index.html` in a browser

For local development with live reload:
```bash
# Using Python's built-in server
python -m http.server 8000

# Or using Node's http-server if installed
npx http-server
```

## File Structure

```
portfolio/
├── index.html              # Main HTML file
├── site.webmanifest       # Web app manifest
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   ├── script.js      # Main JavaScript
│   │   └── starfield.js   # Star background animation
│   ├── images/
│   │   ├── logo.svg       # Your logo
│   │   ├── favicon.svg    # Site favicon
│   │   └── ...           # Your project images
│   ├── videos/
│   │   ├── hero-bg.mp4    # Hero background video
│   │   └── mech-overview.mp4  # Overview video
│   └── ASSETS.md          # Detailed asset guide
└── projects/              # Project detail pages
    ├── cervelo-c5.html
    └── formula-sae-braking.html
```

## Adding Your Content

### 1. Replace Videos
- Hero background: Place your video at `assets/videos/hero-bg.mp4`
- Overview video: Place at `assets/videos/mech-overview.mp4`
- Formats: MP4 (H.264) recommended, optimize for web
- If no local video found, external placeholder used

### 2. Update Images
- Logo: Replace `assets/images/logo.svg`
- Project images: Add to `assets/images/`
- Use descriptive names (e.g., `project-name-feature.jpg`)
- Recommended sizes:
  - Hero image: 1920x1080px
  - Project thumbnails: 600x400px
  - Logo: vector SVG preferred

### 3. Edit Content
In `index.html`, update:
- Your name and title
- About section
- Experience timeline
- Project descriptions
- Contact information

### 4. Projects
Each project can have its own page in `projects/`:
1. Copy a template: `projects/template.html`
2. Add images to `assets/images/`
3. Link from main page
4. Include:
   - Problem/challenge
   - Your solution
   - Technologies used
   - Results/impact

## Customization Guide

### Colors
Edit in `index.html` Tailwind config:
```javascript
colors: {
    'brand-blue': '#005792',
    'brand-dark': '#0A0A0F',
    'brand-light': '#F6F9FC',
    'brand-accent': '#00A8E8',
}
```

### Layout
Main sections in `index.html`:
- Hero (top banner)
- About & Skills
- Experience Timeline
- Projects Grid
- Contact Form

### Animations
- Scroll animations in `script.js`
- Star background in `starfield.js`
- Edit timing/effects in `style.css`

## Development

### Local Setup
1. Clone repository
2. No build required
3. Open `index.html` or use local server

### Adding Features
1. CSS: Add to `assets/css/style.css`
2. JavaScript: Add to `assets/js/script.js`
3. New pages: Copy project template

### Performance
- Optimize images with [Squoosh](https://squoosh.app)
- Compress videos with [HandBrake](https://handbrake.fr)
  - Resolution: 1920x1080 max
  - Codec: H.264
  - Bitrate: 2-4 Mbps
  - Audio: AAC 128kbps

### Testing
Test across browsers:
- Chrome
- Firefox
- Safari
- Edge

Mobile testing:
- iPhone/iOS
- Android Chrome
- Responsive breakpoints

## Questions?

Open an issue or contact [Your Contact Info]