# Anthromorphic.ai

**Transform businesses. Compound value.**

Corporate website for Anthromorphic.ai: the top-level brand bringing together two complementary branches:

1. AI Transformation & Technology (advisory, AI engineering, operating-model redesign, platforms and proprietary IP).
2. Acquisitions & Operations (acquiring, operating and strengthening established businesses).

These are strategic branches, not a statement of finalized legal entities. Proprietary technologies and acquisitions are described as ambitions rather than completed outcomes.

## Run locally

```bash
npm install
npm run dev
npm run build
```

## Deploy

Production deploys through Cloudflare Workers Builds on the Worker `anthromorphic-website`, connected to this repository. A push to the production branch (`main`) builds with `npm run build` and deploys. Other branches are preview builds and do not replace production. `wrangler.jsonc` serves `dist` as a single-page app, so `/thesis` loads on a direct request. Preserve all existing mail DNS records when updating website DNS.

## Contact

The website uses a mailto CTA for hello@anthromorphic.ai. Confirm this mailbox or alias exists before launch. There is no server-side contact form, backend or data collection.
