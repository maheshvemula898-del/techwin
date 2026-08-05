# Design QA — Desktop hero image

**Findings**

- No actionable P0, P1, or P2 differences remain. The supplied AI artwork is visible only in the desktop hero image panel, preserves the focal profile and circuit detail, and fills the panel without distortion.

**Comparison Setup**

- Source visual truth: `C:\Users\octaleads\Downloads\AdobeStock_1390610693.jpeg`
- Source pixels: 4800 × 6000
- Optimized web asset: `public/techwin-ai-hero.webp`, 900 × 1125 WebP (approximately 104 KB)
- Browser-rendered full-view evidence: `design-qa-desktop-top.png`, 1425 × 900
- Focused implementation evidence: `design-qa-desktop-adjusted.png`, desktop viewport capture
- Side-by-side comparison evidence: `design-qa-desktop-comparison.png`, 1100 × 760
- Requested CSS viewport: 1440 × 900; observed browser content width: 1425 CSS px
- Device density normalization: browser capture and focused crop compared at 1× CSS-pixel density; source was proportionally downsampled for comparison.
- State: home page, desktop default state.

**Required Fidelity Surfaces**

- Fonts and typography: unchanged from the existing approved hero.
- Spacing and layout rhythm: the existing three-column desktop grid and 630 px minimum hero height are unchanged.
- Colors and visual tokens: the cyan/navy artwork matches the established dark navy enterprise palette; the existing restrained image filter remains applied.
- Image quality and asset fidelity: the source is optimized to WebP without stretching; `object-cover object-center` fills the complete image panel without a top gap.
- Copy and content: hero copy and service shortcuts are unchanged.

**Responsive and Functional Checks**

- The new artwork is desktop-only; the previous mobile hero presentation remains unchanged.
- No horizontal overflow at 390 CSS px.
- The primary hero CTA successfully navigates to `/services`.
- Browser console errors checked: none.
- TypeScript and production build checks pass.

**Comparison History**

- Pass 1: the supplied image was added with a full-panel crop.
- Pass 2: the image was reduced to 900 × 1125 for delivery efficiency.
- Pass 3: full-panel `object-cover` rendering was restored to remove the top gap and cover the complete hero height. No actionable P0/P1/P2 mismatch remains.

**Follow-up Polish**

- None required for this asset replacement.

final result: passed
