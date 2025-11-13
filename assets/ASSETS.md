Project assets and where to place your files

This file explains where to drop local logos, videos, and other media so the site will use them.

Files you can add (recommended filenames):

1) Hero background video (optional)
   - Path: assets/videos/hero-bg.mp4
   - Notes: If this file exists the hero background will use it. Otherwise the site falls back to the hosted video.

2) Overview video (recommended)
   - Path: assets/videos/mech-overview.mp4
   - Notes: This is used by the "Watch Mechanical Overview" modal. Use an MP4 (H.264) for widest compatibility.

3) Logo variants
   - Path: assets/images/logo.svg (default, used in header)
   - Additional variants: assets/images/logo-variant-1.svg, assets/images/logo-variant-2.svg
   - Notes: SVG is preferred for crisp rendering. Use same dimensions or edit the CSS `.logo-img`.

4) Favicon
   - Path: assets/images/favicon.svg
   - Notes: Modern browsers support SVG favicons. You can also add a 32x32 PNG and update the link in the head if needed.

5) Resume (optional)
   - Path: assets/Minh_Nguyen_Resume.pdf
   - Notes: Update the Download Resume link in index.html to point to this file.

How to replace:

- Drop your files into the paths above. No build step required — refresh the page in your browser.
- For local video playback, use a lightweight (1-10MB) MP4 optimized for web. If you need, I can compress videos for you.

Troubleshooting:
- If the video doesn't autoplay, browsers may block autoplay when not muted. The modal video is controllable by the user.
- If your SVG looks too large/small, edit `.logo-img` in `assets/css/style.css`.

If you'd like, I can compress and add sample MP4s (small sizes) into `assets/videos/` for you — say "Add sample videos" and I'll include small web-optimized mp4s.