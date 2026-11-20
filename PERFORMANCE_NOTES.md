# ORADO initial performance and responsive fixes

Changes in this review:
- Removed the full-screen 2.6-second intro overlay that delayed access to the page on every initial load.
- Changed scroll-reveal behavior so sections already inside the first viewport are not hidden while IntersectionObserver initializes. This protects above-the-fold rendering and perceived LCP.
- Removed a mobile global `height: auto` override on all main/section images. That override could defeat component-level fixed-height image layouts and object-fit behavior on mobile.
- Kept the existing ORADO visual design, product data, category routing, and WebP image assets.

Validation:
- Audited 593 local product image references in `catalogueProducts.ts`; all 593 referenced local files were present in `public`.
- Audited the local paths in `productImages.ts`; all 29 referenced local files were present.
- Confirmed the three About Us WebP image paths exist in `public`.
- A production build was not run in this environment because dependency installation (`npm ci`) timed out. Run `npm ci`, then `npm run typecheck`, `npm run lint`, and `npm run build` locally before deployment.

Next recommended work:
- Test actual mobile/tablet/desktop layouts at 360px, 390px, 768px, 1024px, and 1440px.
- Re-run PageSpeed Insights and compare LCP, INP, CLS and total transferred bytes.
- Consider converting the remaining large certificate/key-feature JPG/PNG assets to WebP, updating their references only after verifying each generated file.
