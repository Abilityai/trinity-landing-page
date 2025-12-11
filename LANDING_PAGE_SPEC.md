# Trinity Landing Page Specification

**URL:** trinity.ability.ai
**Purpose:** Brief introduction to Trinity with clear next steps
**Tone:** Professional, confident, minimal

---

## Deployment Status

**Status:** DEPLOYED

| Item | Value |
|------|-------|
| Live URL | https://trinity.ability.ai |
| GitHub Repository | https://github.com/Abilityai/trinity-landing-page |
| Hosting | Vercel (auto-deploys from GitHub) |
| Framework | Next.js 14 + Tailwind CSS |
| DNS | CNAME `trinity` → `cname.vercel-dns.com` at 101domain.com |

**Local Development:**
```bash
cd ~/Dropbox/Coding/N8N_Main_repos/trinity-landing-page
npm install
npm run dev  # http://localhost:3000
```

**Deployment:** Push to `main` branch triggers automatic Vercel deployment.

---

## Page Structure

### 1. HERO SECTION

**Logo:** Trinity trefoil logo + "TRINITY"

**Headline:**
`Deep Agent Orchestration Platform`

**Subheadline:**
`Orchestrate Claude Code agents running in YOLO mode in Docker containers.`

**CTA Buttons:**
- Primary: `View on GitHub` → github.com/abilityai/trinity
- Secondary: `Request Demo` → Calendly or contact form

---

### 2. VIDEO SECTION

**Heading:** `See Trinity in Action`

**Embed:** https://youtu.be/tZ4TN9ySMBE

**Caption:** `5-minute overview of what Trinity does and why it matters.`

---

### 3. FOUR PILLARS (Brief)

**Heading:** `The Four Pillars of Deep Agency`

**Layout:** 4 columns or 2x2 grid, icons + short text

| Pillar | One-liner |
|--------|-----------|
| **Planning** | Task DAGs that persist and recover |
| **Delegation** | Orchestrator-Worker with permissions |
| **Memory** | State that survives across sessions |
| **Context** | Structured reasoning, not just prompts |

**Link:** `Learn more about the architecture →` (to detailed docs)

---

### 4. WHY SOVEREIGN

**Heading:** `Your Infrastructure. Your Control.`

**Body (2-3 lines max):**
`Sovereign deployment means security plus agility. No vendor lock-in. No data leaving your perimeter. Adapt your agent strategy tonight, not next quarter.`

---

### 5. OPEN SOURCE

**Heading:** `Open Source. Production Ready.`

**Body:**
`Trinity is free and open source. Deploy in 60 seconds with Docker. Enterprise features available for teams that need more.`

**CTA:** `Star on GitHub` → github.com/abilityai/trinity

---

### 6. FOOTER

**Left:** Ability.ai logo + "An Ability.ai Open Source Project"

**Center:** Links
- GitHub
- Documentation (future)
- Contact

**Right:**
- Eugene Vyborov, Founder & CEO
- eugene@ability.ai

---

## Design Notes

**Font:** DM Sans (consistent with Ability brand)

**Colors:**
- Primary accent: #FF0000 (red)
- Text: #363B45 (dark grey)
- Background: White with subtle gradient (match banner style)

**Style:** Clean, lots of white space, minimal text, let video do the heavy lifting

**Mobile:** Single column, video prominent, CTAs sticky

---

## What NOT to Include

- Pricing details (keep for separate page)
- Technical deep-dives (link to docs)
- Competitor comparisons (keep for docs)
- Long feature lists (Four Pillars summary is enough)
- Multiple CTAs competing for attention

---

## Content Checklist

- [x] YouTube video recorded and uploaded (https://youtu.be/tZ4TN9ySMBE)
- [x] GitHub repo public and ready (https://github.com/Abilityai/trinity-landing-page)
- [ ] Calendly/demo booking link set up
- [x] Four Pillars icons designed (using Lucide icons)
- [ ] Documentation site live (for "Learn more" link)
- [x] Landing page deployed to Vercel
- [x] DNS configured at 101domain.com

---

## Metrics to Track

- Video plays / completion rate
- GitHub clicks
- Demo requests
- Time on page
- Scroll depth

---

*Keep it simple. If they want more, they'll click through.*
