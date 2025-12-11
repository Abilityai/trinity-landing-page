# Trinity Landing Page Infrastructure Findings

**Date**: 2024-12-10
**Purpose**: Document DNS configuration, hosting setup, and recommendations for trinity.ability.ai landing page

---

## DNS Configuration Overview

### Domain Management Summary

| Domain | DNS Provider | Managed In | Status |
|--------|--------------|------------|--------|
| `ability.ai` | **101domain.com** | External registrar | Active |
| `abilityai.dev` | **Google Cloud DNS** | GCP zone: `abilityai-dev` | Active |
| `abilityai.io` | **Google Cloud DNS** | GCP zone: `abilityai-io` | Active |

### GCP Cloud DNS Zones

```
NAME                DNS_NAME        DESCRIPTION                         VISIBILITY
abilityai-dev       abilityai.dev.  DNS zone for domain: abilityai.dev  public
abilityai-dev-zone  abilityai.dev.  DNS zone for n8n instances          public
abilityai-io        abilityai.io.   DNS zone for domain: abilityai.io   public
```

### Existing DNS Records

#### abilityai.dev (GCP)
| Subdomain | Type | TTL | Target |
|-----------|------|-----|--------|
| `ability-services.abilityai.dev` | A | 300 | 34.30.144.252 |
| `agentos.abilityai.dev` | A | 300 | 34.30.144.252 |
| `trinity.abilityai.dev` | A | 300 | 34.30.144.252 |

#### abilityai.io (GCP)
| Subdomain | Type | TTL | Target |
|-----------|------|-----|--------|
| `abilityai.io` | A | 300 | 34.160.98.184 |
| `www.abilityai.io` | A | 300 | 34.160.98.184 |

#### ability.ai (101domain.com - External)
| Subdomain | Type | Target | Notes |
|-----------|------|--------|-------|
| `ability.ai` | A | 52.223.52.2, 35.71.142.77 | Main domain |
| `hub.ability.ai` | CNAME | cname.vercel-dns.com | **Vercel deployment** |

### Key Finding: ability.ai Nameservers
```
ns1.101domain.com.
ns2.101domain.com.
ns5.101domain.com.
```
**Important**: To create `trinity.ability.ai`, DNS records must be added at **101domain.com**, not GCP.

---

## Hub Ability AI Reference Implementation

The existing `hub.ability.ai` serves as a reference for how to deploy the Trinity landing page.

### Technical Stack
- **Framework**: Astro v5.7.13 (static site generator)
- **Repository**: `github.com/Abilityai/n8n-agents-hub`
- **Local Path**: `~/Dropbox/Coding/N8N_Main_repos/ability-ai-agent-hub/`
- **Hosting**: Vercel (auto-deploys from GitHub)
- **Domain**: CNAME at 101domain.com → `cname.vercel-dns.com`

### Astro Configuration
```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://hub.ability.ai',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
```

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

### Deployment Flow
1. Push changes to GitHub (`Abilityai/n8n-agents-hub`)
2. Vercel detects changes automatically
3. Builds and deploys to production
4. Available at `hub.ability.ai`

---

## Recommended Setup for trinity.ability.ai

### Hosting: Vercel (Recommended)

**Why Vercel:**
- Same setup as existing `hub.ability.ai`
- Zero-config deployments from GitHub
- Free SSL certificates
- Global CDN (fast worldwide)
- Preview deployments for PRs
- Easy rollbacks

### Framework Options

| Framework | Pros | Cons | Recommendation |
|-----------|------|------|----------------|
| **v0 + Next.js** | AI-generated UI, Tailwind CSS, perfect Vercel integration | Requires v0 design step | **Best for quick, polished results** |
| **Astro** | Extremely fast, zero JS by default, great SEO | Less interactive | Good for content-heavy pages |
| **SvelteKit** | Lightweight, great DX | Less ecosystem | Good for interactive pages |
| **Plain Vite + React** | Simple, flexible | More manual work | Full control needed |

### Recommended Approach: v0.dev + Next.js

1. **Design Phase**: Use v0.dev to generate landing page sections
   - Hero section with value proposition
   - Features/benefits grid
   - How it works section
   - Testimonials/social proof
   - Pricing (if applicable)
   - CTA sections

2. **Development Phase**: Export v0 output to Next.js project
   - Clean React + Tailwind CSS code
   - Responsive by default
   - Easy to customize

3. **Deployment Phase**: Connect to Vercel
   - Link GitHub repository
   - Configure custom domain
   - Enable auto-deployments

---

## DNS Setup Instructions

### For trinity.ability.ai (at 101domain.com)

**Action Required**: Add CNAME record at 101domain.com dashboard

| Field | Value |
|-------|-------|
| Type | CNAME |
| Host | trinity |
| Points to | cname.vercel-dns.com |
| TTL | 300 (or Auto) |

### Alternative: Use GCP-managed domain

If you prefer GCP management, use `trinity.abilityai.dev` which **already exists** and points to your VM.

---

## Repository Options

### Option A: Subfolder in project_trinity
```
project_trinity/
├── landing-page/           # New landing page
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vercel.json
├── src/
│   ├── backend/
│   ├── frontend/
│   └── ...
```
**Pros**: Everything in one place
**Cons**: Separate Vercel project needed, might complicate deployments

### Option B: Separate Repository (Recommended)
```
github.com/Abilityai/trinity-landing-page
```
**Pros**: Clean separation, independent deployments, matches hub pattern
**Cons**: Another repo to manage

---

## Infrastructure Checklist

### DNS Setup
- [ ] Access 101domain.com dashboard
- [ ] Add CNAME record: `trinity` → `cname.vercel-dns.com`
- [ ] Verify DNS propagation (use `dig trinity.ability.ai`)

### Vercel Setup
- [ ] Create new Vercel project
- [ ] Connect GitHub repository
- [ ] Add custom domain: `trinity.ability.ai`
- [ ] Configure SSL (automatic)
- [ ] Set up environment variables (if needed)

### Development Setup
- [ ] Create repository (or folder)
- [ ] Initialize Next.js project
- [ ] Design landing page in v0.dev
- [ ] Export and integrate v0 components
- [ ] Add any custom sections
- [ ] Test locally
- [ ] Deploy to Vercel

---

## Reference Links

- **Landing Page Spec**: `../LANDING_PAGE_SPEC.md` (content, design, sections defined)
- **Vercel Dashboard**: https://vercel.com/dashboard
- **v0.dev**: https://v0.dev
- **101domain.com**: (Login required for DNS management)
- **Hub Ability AI**: https://hub.ability.ai
- **Current Trinity App**: https://agentos.abilityai.dev
- **Target GitHub**: github.com/abilityai/trinity

---

## GCP Resources

- **Project**: (Check `gcloud config get-value project`)
- **VM IP**: 34.30.144.252
- **Existing subdomains on this IP**:
  - agentos.abilityai.dev (Trinity main app)
  - trinity.abilityai.dev (Available)
  - ability-services.abilityai.dev

---

## Notes

1. **No vercel.json needed** for basic Next.js deployments - Vercel auto-detects
2. **Hub has no .vercel folder** - connected via Vercel dashboard, not CLI
3. **101domain.com manages ability.ai** - all subdomains must be configured there
4. **GCP Cloud DNS only manages** abilityai.dev and abilityai.io
