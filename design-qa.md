# Contact Hero Design QA

- Source visual truth: `C:\Users\octaleads\Documents\Codex\2026-07-31\thi\outputs\techwin-systems\.design-qa\reference-contact-hero.png`
- Implementation screenshot: `C:\Users\octaleads\Documents\Codex\2026-07-31\thi\outputs\techwin-systems\.design-qa\contact-hero-full-width-final.png`
- Normalized comparison: `C:\Users\octaleads\Documents\Codex\2026-07-31\thi\outputs\techwin-systems\.design-qa\contact-hero-full-width-final-comparison.png`
- Mobile evidence: `C:\Users\octaleads\Documents\Codex\2026-07-31\thi\outputs\techwin-systems\.design-qa\contact-hero-mobile-final.png`
- Desktop viewport: 1890 × 900 CSS px, device scale factor 1
- Source pixels: 1890 × 345
- Implementation capture: 1875 × 423 pixels; hero content crop: 1875 × 351 pixels
- Normalization: the source and implementation hero content were scaled to a common 1890 px comparison width.
- State: contact route loaded, entrance animation settled, no interaction active

## Full-view comparison evidence

The final contact hero retains the reference composition: matte-white enterprise canvas, dark left-aligned copy, generous negative space, and a realistic headset-wearing contact professional anchored to the right. The image now spans the complete desktop hero width while keeping the subject's full face and hair safely inside the frame.

## Focused-region comparison evidence

A separate focused crop was not required because the source is a single compact hero and the full-width comparison keeps the typography, image subject, crop, and spacing clearly legible. Mobile was reviewed separately at 390 × 844 CSS px.

## Required fidelity surfaces

- Fonts and typography: existing Techwin type system preserved; heading hierarchy, weight, line height, and dark contrast align with the reference direction.
- Spacing and layout rhythm: left copy block, right image emphasis, section height, and wide negative space match the intended compact banner proportions.
- Colors and visual tokens: light neutral background and near-black type replace the default dark PageHero treatment only for this contact variant.
- Image quality and asset fidelity: original photorealistic source was extended into a 4140 × 755 panoramic asset and optimized to a 108 KB JPEG; subject remains fully framed on desktop and mobile with no stretching, halos, or synthetic illustration treatment.
- Copy and content: existing Techwin contact copy was intentionally preserved while applying the reference layout and imagery.

## Comparison history

1. Initial capture found a P2 crop issue: `cover` enlarged the photograph and cut into the subject's head. Fixed with right-aligned `contain` sizing and verified in the second capture.
2. Second capture exposed a P1 visual mismatch from the global dark PageHero gradient overriding the contact light theme. Fixed with a scoped `site-page-hero--light` override and verified in the third capture.
3. Final settled capture confirmed correct text contrast, subject framing, desktop composition, mobile stacking, zero horizontal overflow, and no browser console warnings or errors.
4. User-requested full-width revision initially made the portrait too large when using the original aspect ratio. A dedicated panoramic asset was created from the approved photograph, allowing true edge-to-edge coverage while preserving the complete face and hairline. The separate mobile crop was retained for legibility at 390 px.

## Findings

No actionable P0, P1, or P2 mismatches remain.

## Follow-up polish

The breadcrumb is intentionally retained from Techwin's existing navigation pattern; it is additional to the reference but does not reduce the requested image/layout fidelity.

final result: passed
