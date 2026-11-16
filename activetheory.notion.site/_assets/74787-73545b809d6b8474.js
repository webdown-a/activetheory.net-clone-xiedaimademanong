"use strict";(globalThis.rspackChunknotion_next||=[]).push([[74787],{117038(e,t,a){function o(e){return void 0===e?g:f[e]??g}a(393626),a(740776),a(519015),a(777478);let n=[{id:"prd",value:"PRD",color:"purple"},{id:"rfc",value:"RFC",color:"blue"},{id:"spec",value:"Spec",color:"brown"},{id:"design-review",value:"Design Review",color:"pink"},{id:"decision",value:"Decision",color:"green"},{id:"postmortem",value:"Postmortem",color:"red"},{id:"runbook",value:"Runbook",color:"brown"},{id:"okrs",value:"OKRs",color:"yellow"},{id:"draft",value:"Draft",color:"default"},{id:"strategy",value:"Strategy",color:"blue"},{id:"guideline",value:"Guideline",color:"purple"}],i={startDate:"2026-05-08",endDate:"2026-05-22"},r={startDate:"2026-10-01",endDate:"2026-12-15"},s={key:"yourFirstDoc",title:"Your first doc",icon:"/icons/document_gray.svg",blocks:[{type:"callout",icon:"💡",paragraphs:["Here’s where you can start your doc — import existing files or create a new one.","Need a hand? Ask Notion AI to help get you started."]}]},l={title:"Remember to follow up on these",blocks:d(`- [ ] Reply to Alex re: the contract review — she asked twice already
- [ ] Book dentist appointment (yes, again, I keep writing this down)
- [ ] Figure out what's going on with the expense reimbursement from March
- [ ] Send Jamie the deck from last week's presentation
- [ ] Actually read the Figma file before tomorrow's design review, don't just skim it
- [ ] Also: pick up oat milk on the way home.`)};function c(e){return{title:e.title,blocks:d(e.markdown)}}function d(e){return function e(t,a,o){let n=[];for(;a.index<t.length;){let i=t[a.index],r=i.trim();if(""===r){a.index++;continue}let s=i.length-i.trimStart().length;if(s<o)break;if("<aside>"===r){a.index++;let e=[];for(;a.index<t.length&&"</aside>"!==t[a.index].trim();){let o=t[a.index].trim();""!==o&&e.push(o),a.index++}a.index++,n.push({type:"callout",paragraphs:e});continue}if(r.startsWith("|")){let e=[];for(;a.index<t.length&&t[a.index].trim().startsWith("|");)e.push(t[a.index].trim()),a.index++;n.push(function(e){let t=[],a=!1;for(let o of e){let e=o.split("|").slice(1,-1).map(e=>e.trim());if(e.length>0&&e.every(e=>/^:?-+:?$/.test(e))){a=t.length>0;continue}t.push(e)}return{type:"table",hasColumnHeader:a,rows:t}}(e));continue}if(r.startsWith(">")){let e=[];for(;a.index<t.length&&t[a.index].trim().startsWith(">");){let o=t[a.index].trim().replace(/^>\s?/,"");""!==o&&e.push(o),a.index++}n.push({type:"quote",text:e.join(" ")});continue}if("---"===r){n.push({type:"divider"}),a.index++;continue}if(r.startsWith("### ")){n.push({type:"subheading",text:r.slice(4)}),a.index++;continue}if(r.startsWith("## ")){n.push({type:"heading",text:r.slice(3)}),a.index++;continue}if(r.startsWith("# ")){n.push({type:"title",text:r.slice(2)}),a.index++;continue}if(/^- \[[ xX]\] /.test(r)){n.push({type:"todo",text:r.replace(/^- \[[ xX]\] +/,""),checked:/^- \[[xX]\] /.test(r)}),a.index++;continue}if(r.startsWith("- ")){let o=r.slice(2);a.index++;let i=e(t,a,s+1);n.push(i.length>0?{type:"toggle",text:o,children:i}:{type:"bullet",text:o});continue}n.push({type:"text",text:r}),a.index++}return n}(e.split("\n"),{index:0},0)}function p(e){return{key:"roleExampleDoc",title:e.title,icon:e.icon,docType:e.docType,status:"In progress",projectKey:e.projectKey,blocks:d(e.markdown)}}function u(e){return{key:"roleReferenceDoc",title:e.title,icon:e.icon,docType:e.docType,status:"In progress",projectKey:e.projectKey,blocks:d(e.markdown)}}function h(e){var t;let{projectA:a,projectB:o,taskTitles:c,taskContent:p,privateNote:u,kickoffMeeting:h,docExample:g,referenceDoc:f,docsTypeOptions:m,databaseDisplaySettings:y}=e,v=(null==y||null==(t=y.projects)?void 0:t.itemName.singular)??"project";return{databaseDisplaySettings:y,projectExamplePages:[{key:"exampleProjectA",title:a.title,icon:a.icon,stage:"In Progress",timeline:i,blocks:a.content?d(a.content):void 0},{key:"exampleProjectB",title:o.title,icon:o.icon,stage:"Planning",timeline:r,blocks:o.content?d(o.content):void 0},{key:"yourFirstProject",title:`Your first ${v}`,icon:"/icons/circle_gray.svg"}],taskExamplePages:[{title:c.upNextProjectA,status:"Up next",projectKey:"exampleProjectA",blocks:null!=p&&p.upNextProjectA?d(p.upNextProjectA):void 0},{title:c.doneProjectB,status:"Done",dueDate:"2026-04-10",projectKey:"exampleProjectB",blocks:null!=p&&p.doneProjectB?d(p.doneProjectB):void 0},{title:c.doneProjectA,status:"Done",dueDate:"2026-05-02",projectKey:"exampleProjectA",blocks:null!=p&&p.doneProjectA?d(p.doneProjectA):void 0}],privateNote:u,followUpNote:l,kickoffMeeting:h,docExamplePages:[s,g,f],docsTypeOptions:m??n}}let g=h({docExample:p({title:"App Launch Go-to-Market Strategy",icon:"/icons/airplane_green.svg",docType:"Strategy",projectKey:"exampleProjectB",markdown:`## Launch goals
- Drive 5,000 downloads in the first 30 days
- Generate press coverage in at least 3 relevant publications
- Convert 15% of downloads to activated users

## Target audience
Existing web users on mobile + new users discovering us via App Store search

## Channels
### Owned
- Email announcement to existing user base (segment: mobile browser users first)
- In-app banner on web
- Social media (LinkedIn, Twitter/X)

### Earned
- Outreach to tech/productivity press
- Product Hunt launch (coordinate with beta end date)

### Paid
- Apple Search Ads (post-launch, based on early ASO data)

## App Store optimization
- Primary keyword: [TBD based on research]
- Screenshots: highlight top 3 use cases
- Preview video: 30 seconds, no dialogue, captions only

## Open questions
- Do we launch iOS and Android simultaneously or iOS-first?
- What's our support plan for launch day volume?`}),referenceDoc:u({title:"Brand Guidelines",icon:"/icons/color-palette_yellow.svg",docType:"Guideline",projectKey:"exampleProjectA",markdown:`# Brand Guidelines

This document defines the visual identity standards for the Website Redesign. All design and marketing assets should adhere to these guidelines to ensure a consistent brand experience.

---

## Logo

- Always use the approved logo files — do not recreate or alter the logo
- Minimum size: 24px height for digital use
- Maintain clear space equal to the height of the logo mark on all sides

## Color Palette

| **Color** | **Hex** | **Usage** |
| --- | --- | --- |
| Primary Blue | #2D6CDF | CTAs, links, key UI elements |
| Off White | #F9F9F7 | Page backgrounds |
| Charcoal | #1A1A1A | Body text |
| Warm Gray | #6B6B6B | Secondary text, captions |

## Typography

- **Headings:** Inter, Bold (700) — sizes H1: 48px, H2: 32px, H3: 24px
- **Body:** Inter, Regular (400) — 16px, 1.6 line height
- **Captions / Labels:** Inter, Medium (500) — 12px, uppercase, 0.08em letter spacing

## Imagery

- Use high-contrast, human-centered photography
- Avoid stock photos that feel generic or staged
- Product screenshots should use the latest UI — no outdated screens
- All images must be optimized for web (WebP preferred, max 200kb)

## Do's and Don'ts

- ✅ Use approved color palette and typography only
- ✅ Maintain generous white space
- ✅ Keep the logo on solid or approved background colors
- ❌ Do not stretch, recolor, or add effects to the logo
- ❌ Do not use off-brand fonts or colors
- ❌ Do not use low-resolution images`}),kickoffMeeting:c({title:"Website Redesign Kickoff",markdown:`**Purpose**

- Align on goals, scope, and constraints for the website redesign.
- Confirm working team, milestones, and what "success" means for launch.

**Key decisions**

- Target launch: end of Q3 (subject to CMS decision by May 1).
- Prioritize: clearer navigation + faster page performance + stronger conversion on primary CTA.
- Homepage will include: refreshed hero, proof (logos + testimonials), feature overview, and a dedicated comparison section.
- Keep existing URL structure where possible; any changes require an explicit redirect plan.

**Immediate next steps**

- [ ] Create content inventory + owners (Marketing)
- [ ] Draft sitemap + top-nav proposal (Design)
- [ ] Define CMS requirements + options (Engineering)
- [ ] Baseline current metrics (Analytics)`}),projectA:{title:"Website Redesign",icon:"/icons/color-palette_yellow.svg",content:`**Vision:** Reimagine our marketing website as the definitive first impression of our brand: bold, clear, and conversion-driven. Every pixel should earn its place.

## Background

Our current website was built two years ago. It no longer reflects where we are as a company. Our product has matured, our audience has grown, and our brand has evolved. The site feels fragmented, loads slowly on mobile, and fails to communicate our core value proposition within the first five seconds.

This redesign is not a facelift. It is a ground-up rethinking of how we show up online.

## Objectives

- **Clarify the narrative**: A visitor should understand what we do, who it's for, and why it matters in under 10 seconds
- **Increase conversion**: Improve free trial sign-up rate by 30% within 60 days of launch
- **Elevate brand perception**: The site should feel premium, trustworthy, and unmistakably *us*
- **Mobile-first performance**: Core Web Vitals in the top 10% of our category
- **Enable the team**: Build on a flexible design system that marketing can update without engineering

## Target Audience

### Primary

**The Pragmatic Decision-Maker**

- Director / VP level
- Evaluating tools for their team
- Time-poor, skeptical of hype
- Needs: credibility, clear ROI, fast answers

### Secondary

**The Curious Practitioner**

- Individual contributor
- Researching solutions independently
- Influenced by design quality & community
- Needs: depth, docs, a reason to champion us internally

## Design Principles

- **Clarity over cleverness**: If it needs explaining, simplify it
- **Breathe**: Generous whitespace is not wasted space; it is confidence
- **Motion with intention**: Animate to reveal meaning, never for decoration
- **Type as personality**: Headlines carry the voice; body copy earns trust
- **Accessible by default**: WCAG AA minimum, WCAG AAA where possible

## Scope of Work

- **Homepage**: Complete redesign: hero, social proof, feature highlights, CTA
- **Product overview**: New narrative arc, interactive feature exploration
- **Pricing**: Simplify tiers, add comparison table, FAQ section
- **About / Team**: Founder story, culture signal, team photography
- **Blog / Resources hub**: New templates for articles, guides, changelogs
- **Case studies**: Visual storytelling format, pull-quote emphasis

## Creative Direction

> *"We want people to feel the product before they click a single button."*

### Mood & Tone

The aesthetic lives at the intersection of **editorial clarity** and **product precision**: think a high-design magazine that also happens to ship software. Warm, not cold. Confident, not arrogant. Human, not generic.

### Visual Language

- **Color**: Anchored in our brand navy and cream, with one punchy accent used sparingly for CTAs only
- **Typography**: Large, expressive headlines (editorial serif) paired with a clean, legible sans for body
- **Imagery**: Real product UI, real people, zero stock photos of people shaking hands in an office
- **Illustration**: Abstract geometric forms where needed; no cartoon characters or flat icons
- **Spacing**: 8pt grid. Consistent. Generous.

### Inspiration References

- Linear: *precision and craft in motion*
- Stripe: *trust through design consistency*
- Vercel: *developer-grade clarity for a broad audience*

## Timeline

| **Phase** | **Dates** | **Deliverables** |
| --- | --- | --- |
| Discovery | Week 1–2 | Audit, competitive analysis, stakeholder interviews, design principles |
| Strategy & Architecture | Week 3 | Sitemap, content hierarchy, IA sign-off |
| Wireframes | Week 4–5 | Lo-fi wireframes for all P0 pages, stakeholder review |
| Visual Design | Week 6–8 | Hi-fi designs, design system components, motion spec |
| Handoff & Build | Week 9–10 | Dev handoff, QA, performance testing |
| Launch | End of Q3 | Go live, post-launch monitoring |

## Success Metrics

- **Bounce rate** below 45% on homepage
- **Time to first meaningful interaction** under 3 seconds
- **Free trial CVR** up 30% from current baseline
- **Lighthouse performance score** 90 or above
- **Brand perception survey** net positive shift in "modern" and "trustworthy" attributes

## Team & Responsibilities

| Role | Responsible For |
| --- | --- |
| Lead Designer | Creative direction, visual design, design system |
| UX Researcher | User interviews, usability testing, copy validation |
| Content Strategist | Messaging framework, copy, SEO structure |
| Front-end Engineer | Component build, performance, accessibility |
| Product Marketing | Positioning, audience definition, launch |

## Open Questions

- Do we localize for launch or post-launch?
- Is the blog migration in scope or handled separately by content team?
- Video or static hero: TBD pending brand shoot availability`},projectB:{title:"Mobile App Launch",icon:"/icons/airplane_green.svg",content:`**Vision:** Build a best-in-class mobile experience that delights users from first launch — seamless onboarding, beautiful UI, and rock-solid performance.

### Goal

Ship a polished mobile app to market by Q4 2026, with a November beta and a strong GTM push driving 10K downloads in the first 30 days.

### Timeline

- **Oct 1** — Engineering kickoff
- **Nov 1** — Feature freeze
- **Nov 15** — Beta launch
- **Dec 15** — Public launch

---

## Current Status

**Stage: Planning** — Engineering is building core features. Onboarding flow and CI/CD pipeline are in progress. UI designs are approved. Beta tester recruitment is queued next.

## Launch Pillars

- **Engineering** — Core feature build-out, onboarding flow, CI/CD pipeline
- **Design** — UI approved; polish pass and accessibility review upcoming
- **Marketing** — GTM strategy in progress; beta teaser campaign drafting
- **Beta Program** — Recruitment starting soon; targeting 200 external testers
- **Support** — FAQ prep and in-app help content in review

---

## Key Milestones

- [x] Project kickoff & team alignment
- [x] UI designs approved
- [x] Engineering spec finalized
- [ ] Onboarding flow — *in progress*
- [ ] CI/CD pipeline setup — *in progress*
- [ ] Beta tester recruitment
- [ ] Internal QA & bug bash
- [ ] Beta launch (Nov 2026)
- [ ] App store submission
- [ ] Public launch (Dec 15, 2026)

---

## Launch Goals

| **Metric** | **Target** | **Timeframe** |
| --- | --- | --- |
| Beta signups | 200 testers | By Nov 15 |
| App downloads | 10,000 | First 30 days post-launch |
| App Store rating | 4.5★ or above | First 90 days |
| Day-7 retention | 40% | Post-launch cohort |

---

## Notes & Decisions

- Decision log
    - **Oct 3** — Decided to prioritize iOS for v1; Android to follow in Q1 2027.
    - **Oct 10** — Beta program limited to 200 users to keep feedback manageable.
    - **Oct 22** — Onboarding flow to use 3-step checklist pattern (approved by design).
- Open questions
    - Finalize beta recruitment channels (email list vs. social?)
    - Confirm App Store submission timeline with Eng
    - Align on PR strategy for launch day`},taskTitles:{upNextProjectA:"Update homepage copy",doneProjectB:"Define MVP feature scope",doneProjectA:"Write FAQ for launch"},taskContent:{upNextProjectA:`The current homepage copy is from last year's launch. Needs to reflect the new positioning and feature set.

- [ ] Draft new hero headline
- [ ] Rewrite product description section
- [ ] Get copy review from marketing`,doneProjectA:`Covers the top 10 questions from the last launch cycle. Support team signed off.

- [x] Draft initial FAQ list
- [x] Review with support team
- [x] Publish to staging site`},privateNote:{title:"Q2 planning — rough thoughts",intro:"Not ready to put this anywhere official yet but wanted to get it out of my head.",bullets:["We're probably trying to do too much this quarter. Three major launches feels like one too many.","The dashboard redesign keeps getting deprioritized — need to either commit or cut it","Talk to Jordan about resourcing before the roadmap gets locked","Should we push the beta date? Worth a real conversation, not just a Slack thread"],outro:"Revisit this before the Thursday planning sync."}}),f={eng:h({docExample:p({title:"API v2 Migration — Technical Spec",icon:"/icons/branch-merge_gray.svg",docType:"RFC",projectKey:"exampleProjectA",markdown:`## Summary
- Migrate all clients off the v1 REST API onto v2 (typed, paginated) by end of Q3
- Zero downtime — v1 stays read-only during the cutover window

## Goals
- Consistent pagination and error shapes across every endpoint
- Cut p95 latency on list endpoints by 30%
- Remove the three duplicated auth code paths

## Migration plan
- Stand up v2 behind a feature flag, dual-write where needed
- Move internal services first, then partner integrations
- Deprecate v1 endpoints with a 60-day sunset notice

## Rollout
- Stage 1: read traffic on v2 for 10% of internal calls
- Stage 2: ramp to 100% internal, open to partners
- Stage 3: flip v1 to read-only, watch the error budget

## Open questions
- Do we version the SDK in lockstep or ship a compatibility shim?
- Who owns the partner migration comms?`}),referenceDoc:u({title:"Code Review Guidelines",icon:"/icons/checkmark-square_blue.svg",docType:"Guideline",projectKey:"exampleProjectA",markdown:`## Purpose
- Keep reviews fast, kind, and focused on what actually matters

## Before you request review
- Self-review the diff first and leave comments on anything non-obvious
- Keep PRs under ~400 lines where you can — split large changes
- Make sure CI is green before tagging reviewers

## What reviewers look for
- Correctness and edge cases over style nits
- Tests that actually exercise the change
- Clear naming and a description that explains the why

## Turnaround
- First response within one business day
- Approve with comments for small follow-ups instead of blocking

## Merging
- Squash with a clean commit message; author merges once green`}),kickoffMeeting:c({title:"API v2 Migration Kickoff",markdown:`**Purpose**

- Align on scope and sequencing for the v2 API migration.
- Agree on what "done" means and how we avoid breaking existing clients.

**Key decisions**

- Cut over behind a feature flag; v1 stays read-only during the window.
- Freeze v1 endpoints to bug fixes only as of today.
- Partner integrations migrate last, after internal services are stable.

**Immediate next steps**

- [ ] Inventory every v1 endpoint and its callers (Backend)
- [ ] Draft the v2 schema + pagination spec (API)
- [ ] Set up the dual-write path behind a flag (Infra)
- [ ] Define the deprecation timeline + comms (Eng lead)`}),projectA:{title:"API v2 Migration",icon:"/icons/branch-merge_gray.svg",content:`**Vision:** Retire the v1 REST API for good. Ship a typed, paginated, consistently-shaped v2 that internal teams and partners actually enjoy building on — with zero downtime and no late-night cutover surprises.

## Background

The v1 API grew organically over three years. Pagination differs per endpoint, error shapes are inconsistent, and three separate auth code paths have drifted apart. Every new integration pays a tax in special-casing, and our p95 latency on list endpoints has crept past 800ms.

This migration is not a coat of paint. It is a clean, typed contract that we can hold partners to for the next five years.

## Objectives

- **Single contract**: Consistent pagination and error envelopes across every endpoint, generated from one schema
- **Performance**: Cut p95 latency on list endpoints by 30% under production load
- **Consolidate auth**: Collapse the three duplicated auth paths into one audited middleware
- **Zero downtime**: v1 stays read-only during the window; no client breaks without a 60-day notice
- **Self-serve migration**: Ship an SDK and a migration guide so partners move without filing tickets

## Scope of Work

- **v2 endpoint surface**: All list/read/write endpoints behind a feature flag, dual-write where state differs
- **Pagination + errors**: Cursor-based pagination and a shared error envelope, codegen-enforced
- **Auth consolidation**: One token-validation path, with the legacy paths deleted, not just bypassed
- **Release infra**: Staged rollout controls, per-cohort flags, and an error-budget dashboard wired to alerts
- **SDK + shim**: Versioned SDK plus a thin compatibility shim for slow-moving partners
- **Sunset tooling**: Deprecation headers, usage telemetry per caller, and an automated nudge for v1 callers

## Timeline

| **Phase** | **Dates** | **Deliverables** |
| --- | --- | --- |
| Inventory & schema | Week 1–2 | Endpoint/caller inventory, v2 schema, pagination spec |
| Build behind flag | Week 3–5 | v2 endpoints, dual-write path, error envelope, CI gates |
| Internal cutover | Week 6–7 | Internal services on v2, latency + error-budget watch |
| Partner migration | Week 8–9 | SDK GA, partner comms, compatibility shim |
| v1 read-only | End of Q3 | Flip v1 to read-only, 60-day sunset clock starts |

## Success Metrics

- **p95 latency** on list endpoints down 30% from baseline
- **100% of internal services** on v2 before partner ramp
- **Error budget** stays green through every rollout stage
- **Zero unplanned v1-breaking changes** during the window
- **80% of active partners** migrated before the read-only flip

## Open Questions

- Do we version the SDK in lockstep with the API or ship a compatibility shim for laggards?
- Who owns partner migration comms — DevRel or the integrations team?
- Can the dual-write path be retired before the sunset, or does it stay until v1 is fully dark?`},projectB:{title:"Mobile App Launch",icon:"/icons/airplane_green.svg",content:`**Vision:** Ship a mobile app that feels instant and never wakes anyone up at 3am. Solid release infrastructure, reliable push notifications, and an on-call rotation that sleeps soundly.

### Goal

Ship a production-ready iOS app by Q4 2026 with a November beta, backed by automated release infra, a push-notification service that survives launch-day traffic, and a documented on-call rotation before the first external tester touches it.

### Timeline

- **Oct 1** — Engineering kickoff, repo + CI scaffolding
- **Nov 1** — Feature freeze, release pipeline green end to end
- **Nov 15** — Beta build to TestFlight, on-call rotation live
- **Dec 15** — Public launch on the App Store

---

## Current Status

**Stage: Planning** — Core feature build is underway. The push-notification service and CI/CD pipeline are in progress; signing and provisioning are sorted. On-call rotation and runbooks are queued next.

## Workstreams

- **Release infra** — Fastlane lanes, automated signing, staged TestFlight rollout, crash-symbol upload
- **Push notifications** — APNs integration, token lifecycle, delivery retries, per-cohort throttling
- **On-call** — Rotation schedule, alert routing, runbooks, and a blameless incident template
- **Observability** — Crash reporting, release-health dashboards, and p95 startup-time tracking
- **QA & hardening** — Device matrix, bug bash, and a launch-day load test of the push path

## Key Milestones

- [x] Repo, CI, and signing scaffolded
- [x] Crash reporting and release-health dashboards wired up
- [x] APNs sandbox integration proven end to end
- [ ] Push-notification service — *in progress*
- [ ] CI/CD release pipeline — *in progress*
- [ ] On-call rotation + runbooks
- [ ] Internal QA & bug bash
- [ ] Beta build to TestFlight (Nov 2026)
- [ ] Launch-day load test of the push path
- [ ] App Store submission & public launch (Dec 15, 2026)

---

## Reliability Goals

| **Metric** | **Target** | **Timeframe** |
| --- | --- | --- |
| Crash-free sessions | 99.5% or above | First 30 days post-launch |
| Cold-start p95 | Under 1.5s | Beta cohort onward |
| Push delivery rate | 98% within 60s | Launch day |
| On-call pages per week | Under 3 | First 90 days |

---

## Notes & Decisions

- Decision log
    - **Oct 3** — iOS ships first; Android follows in Q1 2027. Shared backend from day one.
    - **Oct 11** — Push runs through APNs directly; no third-party push vendor for v1.
    - **Oct 24** — Staged TestFlight rollout at 10% → 50% → 100%, gated on crash-free rate.
- Open questions
    - Do we throttle launch-day push by cohort or send a single broadcast?
    - Who carries the pager during the beta window — the feature team or platform?
    - Can we reuse the web error-budget dashboard, or does mobile need its own?`},taskTitles:{upNextProjectA:"Fix flaky integration tests",doneProjectB:"Scope push notification service",doneProjectA:"Write migration runbook"},privateNote:{title:"Tech debt — rough thoughts",intro:"Not ready to put this anywhere official yet but wanted to get it out of my head.",bullets:["The retry logic in the sync worker is duplicated in three places — worth a shared helper","We keep paying for the legacy endpoints. Should we set a deprecation date?","Talk to Jordan about pairing on the auth service refactor","CI is slow again. Profile the test suite before adding more integration tests"],outro:"Revisit this before the Thursday planning sync."}}),product:h({docExample:p({title:"Saved Searches — PRD",icon:"/icons/light-bulb_blue.svg",docType:"PRD",projectKey:"exampleProjectA",markdown:`## Problem
- Users repeat the same searches daily and lose their filters every time
- No way to share a curated view of results with a teammate

## Goals
- Let users save a search with its filters and name it
- Surface saved searches one click from the search bar
- Lay the groundwork for shared, team-level saved searches

## Target users
Power users and team leads who run recurring searches across large workspaces

## Solution overview
- "Save this search" action in the results header
- Saved searches live in a collapsible section under the search bar
- Each saved search stores query text, filters, and sort

## Success metrics
- 25% of weekly active searchers save at least one search in 30 days
- 15% reduction in repeated identical queries per user

## Open questions
- Do saved searches sync across devices on day one?
- How do we handle a filter that references a deleted property?`}),referenceDoc:u({title:"PRD Writing Guidelines",icon:"/icons/light-bulb_blue.svg",docType:"Guideline",projectKey:"exampleProjectA",markdown:`## Purpose
- A consistent shape for PRDs so they're quick to write and read

## Structure
- Problem, goals, non-goals, users, solution, metrics, open questions
- Lead with the problem, not the feature

## What good looks like
- A crisp problem statement backed by evidence
- Success metrics defined before the solution
- Explicit non-goals to keep scope honest

## Review & sign-off
- Share a draft early for direction, not polish
- Eng and design sign off before the build starts`}),kickoffMeeting:c({title:"Search Improvements Kickoff",markdown:`**Purpose**

- Align on the problem, target users, and success metrics for search.
- Agree on scope for the first release vs. later iterations.

**Key decisions**

- Ship saved searches first; shared/team searches come next.
- Success = fewer repeated queries + higher result click-through.
- Hold scope at filters + sort; defer semantic ranking.

**Immediate next steps**

- [ ] Write the PRD for saved searches (PM)
- [ ] Pull baseline search metrics (Analytics)
- [ ] Spec the saved-search data model (Eng)
- [ ] Sketch the results-header entry point (Design)`}),projectA:{title:"Search Improvements",icon:"/icons/light-bulb_blue.svg",content:`**Vision:** Make search feel like a power tool, not a guessing game. People should find what they need on the first try — and never lose their filters again.

## Background

Search is one of our most-used surfaces, but it's stateless. Power users rebuild the same filtered query every morning, and there's no way to share a curated result set with a teammate. Repeated identical queries make up a meaningful slice of search volume — a clear signal that the tool is making people repeat themselves.

This project isn't a ranking overhaul. It's about giving search memory and making the best results easy to return to.

## Objectives

- **Save and reuse**: Let users save a search with its filters, sort, and a name they choose
- **One-click recall**: Surface saved searches a single click from the search bar
- **Reduce repetition**: Cut repeated identical queries per user by 15%
- **Lay groundwork**: Build the data model so team-level shared searches are a fast follow
- **Earn trust in results**: Improve top-result click-through so the first answer is usually the right one

## Scope of Work

- **Save action**: A "Save this search" affordance in the results header
- **Saved-search shelf**: A collapsible section under the search bar storing query, filters, and sort
- **Cross-device sync**: Saved searches follow the user across devices
- **Stale-filter handling**: Graceful behavior when a saved filter references a deleted property
- **Instrumentation**: Event coverage for saves, recalls, and result click-through to power metrics
- **MVP scope guardrails**: Defer semantic ranking and shared searches to a second iteration

## Timeline

| **Phase** | **Dates** | **Deliverables** |
| --- | --- | --- |
| Discovery | Week 1–2 | Baseline metrics, user interviews, PRD draft |
| Design & spec | Week 3–4 | Entry-point design, saved-search data model, eng sign-off |
| Build MVP | Week 5–7 | Save action, saved-search shelf, sync |
| Beta & polish | Week 8–9 | Internal beta, stale-filter handling, instrumentation QA |
| GTM & launch | End of Q3 | Changelog, in-product nudge, rollout to 100% |

## Success Metrics

- **25% of weekly active searchers** save at least one search within 30 days
- **15% reduction** in repeated identical queries per user
- **Top-result click-through** up from baseline
- **Saved-search recall** used by 40% of savers weekly
- **No regression** in search latency or result quality

## Open Questions

- Do saved searches sync across devices on day one, or is that a fast follow?
- How do we handle a saved filter that references a property the user later deletes?
- Is the in-product nudge worth the interruption, or do we let discovery happen organically?`},projectB:{title:"Mobile App Launch",icon:"/icons/airplane_green.svg",content:`**Vision:** Launch a mobile experience users reach for daily. Tight MVP scope, metrics that tell us the truth, and a GTM motion that turns the first thousand downloads into a habit.

### Goal

Ship a focused mobile MVP by Q4 2026 — November beta, December public launch — proving that mobile drives real engagement, with a GTM push targeting 10K downloads and 40% Day-7 retention in the first 30 days.

### Timeline

- **Oct 1** — MVP scope locked, beta plan approved
- **Nov 1** — Feature freeze, metrics instrumentation verified
- **Nov 15** — Beta launch to 200 testers
- **Dec 15** — Public launch + GTM campaign live

---

## Current Status

**Stage: Planning** — MVP scope is being finalized and the metrics plan is in review. Eng is building core features and design is approved. Beta recruitment and the GTM brief are queued next.

## Workstreams

- **Product** — MVP scope, prioritization, and the activation funnel definition
- **Metrics** — Instrumentation plan, North Star (Day-7 retention), and launch dashboard
- **Engineering** — Core feature build, onboarding flow, release pipeline
- **GTM** — Positioning, launch campaign, App Store listing, and press plan
- **Beta program** — 200-tester recruitment, feedback loop, and triage cadence

## Key Milestones

- [x] Project kickoff & team alignment
- [x] Activation funnel + North Star metric defined
- [x] MVP feature scope drafted
- [ ] Metrics instrumentation plan — *in progress*
- [ ] Onboarding flow — *in progress*
- [ ] Beta tester recruitment
- [ ] Internal QA & bug bash
- [ ] Beta launch (Nov 2026)
- [ ] GTM campaign assets ready
- [ ] Public launch (Dec 15, 2026)

---

## Launch Goals

| **Metric** | **Target** | **Timeframe** |
| --- | --- | --- |
| Beta signups | 200 testers | By Nov 15 |
| App downloads | 10,000 | First 30 days post-launch |
| Day-7 retention | 40% | Post-launch cohort |
| Activation rate | 60% reach first action | First session |

---

## Notes & Decisions

- Decision log
    - **Oct 3** — MVP is iOS-only; Android is a Q1 2027 fast follow.
    - **Oct 9** — North Star for launch is Day-7 retention, not raw downloads.
    - **Oct 21** — Onboarding uses a 3-step checklist; deferred social sign-in to post-launch.
- Open questions
    - Which activation moment best predicts retention — first doc, first invite, or first search?
    - Do we gate GTM spend on hitting a beta retention bar first?
    - What's the smallest scope that still proves the mobile thesis?`},taskTitles:{upNextProjectA:"Draft PRD for saved searches",doneProjectB:"Define MVP feature scope",doneProjectA:"Summarize user interview themes"},privateNote:{title:"Q2 planning — rough thoughts",intro:"Not ready to put this anywhere official yet but wanted to get it out of my head.",bullets:["We're probably trying to do too much this quarter. Three major launches feels like one too many.","The activation metric still doesn't capture retained value — revisit the definition","Talk to Jordan about resourcing before the roadmap gets locked","Should we push the beta date? Worth a real conversation, not just a Slack thread"],outro:"Revisit this before the Thursday planning sync."}}),product_design:h({docExample:p({title:"Onboarding Flow Redesign — Design Review",icon:"/icons/pencil_gray.svg",docType:"Design Review",projectKey:"exampleProjectB",markdown:`## Context
- Current onboarding drops 40% of new users before the first workspace action
- Three entry points each look and behave differently

## Goals
- One coherent flow from signup to first meaningful action
- Reduce steps from seven screens to four
- Make the value of the product obvious in the first 30 seconds

## Explorations
- Option A: progressive setup, ask for nothing up front
- Option B: template-first, pick a use case then customize
- Option C: guided checklist that persists in the sidebar

## Recommendation
Ship Option B for new workspaces and fold the Option C checklist in as a second-session nudge

## Open questions
- How does this interact with team invites mid-flow?
- Do we localize the template names for launch?`}),referenceDoc:u({title:"Design System Guidelines",icon:"/icons/color-palette_yellow.svg",docType:"Guideline",projectKey:"exampleProjectA",markdown:`## Purpose
- One source of truth for components, tokens, and patterns

## Components
- Use existing components before building new ones
- Propose additions through the contribution flow, not one-offs

## Tokens
- Color, spacing, and type come from tokens — never hard-coded values
- Prefer semantic tokens over raw values (surface, not gray-50)

## Accessibility
- Meet AA contrast; every interactive element is keyboard reachable

## Contribution
- New patterns need a usage example and a review before merge`}),kickoffMeeting:c({title:"Design System Refresh Kickoff",markdown:`**Purpose**

- Align on goals and scope for the design system refresh.
- Agree on what ships in v1 and how teams adopt it.

**Key decisions**

- Tokens are the source of truth; no hard-coded values.
- Refresh the core component set first (buttons, inputs, surfaces).
- Adoption is opt-in per surface, tracked in a migration checklist.

**Immediate next steps**

- [ ] Audit current components + variants (Design)
- [ ] Define the token set + naming (Design systems)
- [ ] Build the contribution + review flow (Eng)
- [ ] Draft the adoption guide (Design)`}),projectA:{title:"Design System Refresh",icon:"/icons/color-palette_yellow.svg",content:`**Vision:** Build a design system that makes doing the right thing the easy thing. One source of truth for tokens, components, and patterns — so every screen feels like it came from the same hand.

## Background

Our component library has drifted. Spacing tokens get overridden in dozens of places, empty states are inconsistent across the app, and teams rebuild the same patterns slightly differently each time. The result is subtle visual noise that erodes trust in the product.

This refresh consolidates the core system, makes tokens the single source of truth, and gives teams a contribution path so the system grows without fragmenting.

## Objectives

- **Tokens as truth**: Color, spacing, and type come from semantic tokens — never hard-coded values
- **Refresh the core**: Rebuild buttons, inputs, and surfaces with consistent states and variants
- **Accessible by default**: AA contrast minimum, every interactive element keyboard reachable
- **Frictionless adoption**: Opt-in per surface, tracked in a migration checklist
- **Sustainable growth**: A contribution flow so new patterns are reviewed, not one-off

## Scope of Work

- **Token set**: Define and document semantic tokens (surface, not gray-50) with clear naming
- **Core components**: Buttons, inputs, selects, and surfaces with full state coverage
- **Empty states**: A consistent pattern library to replace the ad hoc ones
- **Accessibility pass**: Contrast, focus order, and keyboard reachability across the refreshed set
- **Contribution flow**: Usage examples plus a lightweight review before anything merges
- **Adoption guide**: Per-surface migration checklist and a tracking dashboard

## Timeline

| **Phase** | **Dates** | **Deliverables** |
| --- | --- | --- |
| Audit | Week 1–2 | Component + variant inventory, override hot-spots, token gaps |
| Token foundation | Week 3 | Semantic token set, naming, documentation |
| Core components | Week 4–6 | Refreshed buttons, inputs, surfaces with states |
| Accessibility & docs | Week 7–8 | AA pass, contribution flow, adoption guide |
| Rollout | End of Q3 | First surfaces migrated, migration dashboard live |

## Success Metrics

- **Zero hard-coded** color/spacing/type values in refreshed surfaces
- **AA contrast** met across 100% of new components
- **50% of override hot-spots** removed within 60 days
- **First three surfaces** fully migrated by launch
- **Contribution flow** used for every new pattern, no one-offs merged

## Open Questions

- Do we ship a codemod to migrate overrides, or migrate surface by surface manually?
- Where does the line sit between a "core" component and a team-owned pattern?
- How do we keep the migration dashboard honest without it becoming busywork?`},projectB:{title:"Onboarding Flow Redesign",icon:"/icons/pencil_gray.svg",content:`**Vision:** Turn a confusing first run into a moment of clarity. One coherent flow from signup to first meaningful action — so new users feel the value before they have a chance to bounce.

### Goal

Redesign onboarding into a single coherent flow by Q4 2026, cutting it from seven screens to four and reducing first-session drop-off from 40% so most new users reach a meaningful action in their first 30 seconds.

### Timeline

- **Oct 1** — Design kickoff, current-flow audit complete
- **Nov 1** — Direction locked, four-screen flow specced
- **Nov 15** — Prototype in usability testing
- **Dec 15** — Redesigned flow ships to new workspaces

---

## Current Status

**Stage: Planning** — The current flow is audited and three directions are in exploration. Design review is scheduled; usability testing and the build are queued next.

## Workstreams

- **Flow architecture** — Collapse seven screens to four, define the single coherent path
- **Explorations** — Progressive setup vs. template-first vs. persistent guided checklist
- **Usability research** — Prototype testing, drop-off instrumentation, copy validation
- **Localization** — Template names and copy reviewed for launch locales
- **Build & handoff** — Component reuse from the design system, eng pairing through ship

## Key Milestones

- [x] Audit current onboarding & map drop-off points
- [x] Three direction explorations sketched
- [x] Drop-off instrumentation reviewed with analytics
- [ ] Design review & direction lock — *in progress*
- [ ] Four-screen flow specced — *in progress*
- [ ] Prototype built for testing
- [ ] Usability testing round
- [ ] Localization review
- [ ] Eng handoff & build
- [ ] Ship to new workspaces (Dec 15, 2026)

---

## Experience Goals

| **Metric** | **Target** | **Timeframe** |
| --- | --- | --- |
| First-session drop-off | Under 25% | Post-launch cohort |
| Screens to first action | 4 or fewer | At launch |
| Time to first action | Under 30s | Median, post-launch |
| Usability task success | 90% | Final testing round |

---

## Notes & Decisions

- Decision log
    - **Oct 4** — Ship Option B (template-first) for new workspaces as the primary flow.
    - **Oct 12** — Fold the Option C checklist in as a second-session nudge, not first run.
    - **Oct 23** — Reuse design-system components throughout; no bespoke onboarding UI.
- Open questions
    - How does the flow handle team invites that arrive mid-onboarding?
    - Do we localize template names for launch or default to English first?
    - Is the second-session checklist a nudge or a persistent sidebar element?`},taskTitles:{upNextProjectA:"Audit button and input components",doneProjectB:"Wireframe the welcome screens",doneProjectA:"Collect usability test feedback"},privateNote:{title:"Design critique — rough thoughts",intro:"Not ready to put this anywhere official yet but wanted to get it out of my head.",bullets:["The empty states are inconsistent across the app — worth a dedicated pass","Spacing tokens are being overridden in too many places. Tighten the guidance?","Talk to Jordan about research time before the next sprint locks","Should we prototype the new nav before committing? A day of work could save weeks"],outro:"Revisit this before the Thursday design review."},docsTypeOptions:[{id:"design-review",value:"Design Review",color:"pink"},{id:"spec",value:"Spec",color:"brown"},{id:"research",value:"Research",color:"blue"},{id:"critique-notes",value:"Critique Notes",color:"purple"},{id:"guideline",value:"Guideline",color:"purple"},{id:"decision",value:"Decision",color:"green"},{id:"draft",value:"Draft",color:"default"}]}),marketing:h({databaseDisplaySettings:{projects:{title:"Campaigns",itemName:{singular:"campaign",plural:"campaigns"}}},docExample:p({title:"Spring Campaign — Go-to-Market Strategy",icon:"/icons/megaphone_yellow.svg",docType:"Strategy",projectKey:"exampleProjectA",markdown:`## Launch goals
- Generate 2,000 qualified leads in the first 6 weeks
- Lift product-page conversion by 10%
- Earn coverage in at least 3 industry newsletters

## Target audience
Existing trial users who haven't converted, plus new prospects searching for alternatives

## Channels
### Owned
- Launch email to the trial segment
- Homepage banner and a dedicated landing page
- Organic social across LinkedIn and Twitter/X

### Earned
- Outreach to industry newsletters and reviewers
- Customer story co-marketing

### Paid
- Search ads on competitor and category keywords

## Content plan
- Launch blog post and a short explainer video
- Three social cutdowns and a comparison one-pager

## Open questions
- Do we gate the landing page behind a form or keep it open?
- What's the budget split between search and social?`}),referenceDoc:u({title:"Messaging & Style Guide",icon:"/icons/megaphone_yellow.svg",docType:"Brand Guidelines",projectKey:"exampleProjectB",markdown:`## Purpose
- Consistent messaging across campaigns and channels

## Positioning
- A one-line value prop everyone can repeat
- Who it's for and the problem it solves

## Messaging pillars
- Three core benefits, each with a proof point

## Voice & style
- Confident, concrete, jargon-free
- Title case for headlines, sentence case for body

## Channel notes
- Tighten for social; expand for the blog`}),kickoffMeeting:c({title:"Spring Campaign Kickoff",markdown:`**Purpose**

- Align on goals, audience, and channels for the spring campaign.
- Agree on the message and what "success" means.

**Key decisions**

- Lead with the trial-to-paid segment; expand to new prospects after.
- Primary channels: email, owned social, and search ads.
- A launch blog post + explainer video anchor the content plan.

**Immediate next steps**

- [ ] Finalize the campaign brief (Marketing)
- [ ] Draft launch email + landing page (Content)
- [ ] Set up paid search + tracking (Growth)
- [ ] Baseline current conversion metrics (Analytics)`}),projectA:{title:"Spring Campaign",icon:"/icons/megaphone_yellow.svg",content:`**Vision:** Make Spring Campaign the moment our trial users finally feel what they've been missing — a coordinated push that turns hesitation into "why didn't I upgrade sooner?"

## Background

We have a healthy top of funnel but a stubborn middle. Thousands of people start a trial each quarter, poke around, and quietly lapse. Our nurture emails haven't changed in a year, and our paid spend leans on the same two channels until they fatigue.

Spring Campaign is our bet that the problem isn't awareness — it's momentum. We'll re-engage the trial segment with a sharper message, give them a reason to act now, and measure conversion the whole way through.

## Objectives

- **Convert the trial backlog**: Generate 2,000 qualified leads and lift trial-to-paid conversion by 10% in the first six weeks
- **Sharpen the message**: One value prop, three proof points, repeatable across every channel
- **Diversify channels**: Prove out a third acquisition channel beyond search and owned social
- **Earn outside validation**: Land coverage in at least three industry newsletters
- **Build a reusable engine**: Templates and tracking the team can rerun next quarter without rebuilding

## Scope of Work

- **Campaign brief**: Audience, message, channels, and success criteria in one source of truth
- **Launch email series**: Re-engagement sequence to the trial segment, plus a net-new prospect track
- **Landing page**: Dedicated page with a comparison one-pager and a single primary CTA
- **Content anchor**: Launch blog post and a 60-second explainer video with three social cutdowns
- **Paid program**: Search ads on category and competitor keywords, with one experimental channel test
- **Earned outreach**: Newsletter and reviewer list, plus one customer co-marketing story

## Timeline

| **Phase** | **Dates** | **Deliverables** |
| --- | --- | --- |
| Brief & strategy | Week 1 | Campaign brief, audience definition, message house, baseline metrics |
| Asset production | Week 2–3 | Email series, landing page, blog post, explainer video, social cutdowns |
| Paid & tracking setup | Week 4 | Search ads live, UTM scheme, conversion tracking, channel experiment |
| Launch & earned push | Week 5–6 | Send sequence, publish content, newsletter outreach, co-marketing story |
| Optimize & report | Week 7 | Mid-flight optimization, results readout, learnings for next quarter |

## Success Metrics

- **Qualified leads**: 2,000 in the first six weeks
- **Trial-to-paid conversion**: up 10% from current baseline
- **Landing page CVR**: 6% or above on the primary CTA
- **Email engagement**: 35%+ open, 5%+ click on the re-engagement sequence
- **Earned coverage**: 3+ newsletter or reviewer placements

## Open Questions

- Do we gate the landing page behind a form or keep it open to maximize reach?
- What's the budget split between proven search and the experimental channel?
- Refresh the full nurture sequence now, or only the campaign-specific touches?`},projectB:{title:"Website Relaunch",icon:"/icons/color-palette_yellow.svg",content:`**Vision:** Relaunch our website as a site that sells while we sleep — fast, clear, and unmistakably us, with every page earning its conversion.

### Goal

Ship a fully redesigned marketing website by end of Q3, anchored on a rebuilt homepage and product story, with a measurable lift in trial sign-ups and a design system marketing can update without engineering.

### Timeline

- **Jul 1** — Discovery and content audit complete
- **Aug 1** — Designs approved and dev build begins
- **Sep 1** — Staging live for internal QA
- **Sep 22** — Public relaunch

---

## Current Status

**Stage: Planning** — Content audit is underway and the messaging house is drafted. Homepage wireframes are in review, the CMS decision is pending, and dev build is queued to start once designs are signed off.

## Workstreams

- **Content & messaging** — Audit complete, message house drafted, page copy in progress
- **Design** — Homepage and product wireframes in review; visual design next
- **Engineering** — CMS evaluation underway; component build queued
- **SEO & migration** — URL map and redirect plan in progress to protect rankings
- **Analytics** — Conversion tracking spec and baseline metrics being defined

---

## Key Milestones

- [x] Project kickoff & team alignment
- [x] Content audit & top-page inventory
- [x] Messaging house drafted
- [ ] Homepage wireframes approved — *in progress*
- [ ] CMS decision finalized — *in progress*
- [ ] Visual design sign-off
- [ ] Component build & page assembly
- [ ] Redirect plan & SEO QA
- [ ] Staging review & content load
- [ ] Public relaunch (Sep 22)

---

## Relaunch Goals

| **Metric** | **Target** | **Timeframe** |
| --- | --- | --- |
| Homepage trial CVR | +25% | First 60 days post-launch |
| Homepage bounce rate | Below 45% | First 30 days |
| Lighthouse performance | 90 or above | At launch |
| Organic traffic | Hold or grow | First 90 days (no SEO regression) |

---

## Notes & Decisions

- Decision log
    - **Jun 5** — Rebuild homepage and product pages first; blog migration handled separately.
    - **Jun 12** — Lead with the trial-conversion narrative over feature breadth.
    - **Jun 20** — Keep existing URL structure where possible; any change requires a redirect entry.
- Open questions
    - Headless CMS or stay on the current platform?
    - Localize at launch or as a fast follow?
    - Static hero or a short product loop, pending the brand shoot?`},taskTitles:{upNextProjectA:"Draft launch blog post",doneProjectB:"Audit landing page copy",doneProjectA:"Schedule social calendar"},privateNote:{title:"Campaign planning — rough thoughts",intro:"Not ready to put this anywhere official yet but wanted to get it out of my head.",bullets:["Paid performance is flattening — we lean on the same two channels too much","The nurture emails haven't been touched in a year. Refresh before the campaign?","Talk to Jordan about design support before locking the launch date","Should we test a webinar series this quarter? Worth a real conversation"],outro:"Revisit this before the Thursday marketing sync."},docsTypeOptions:[{id:"campaign-brief",value:"Campaign Brief",color:"purple"},{id:"blog-post",value:"Blog Post",color:"blue"},{id:"press-release",value:"Press Release",color:"red"},{id:"brand-guidelines",value:"Brand Guidelines",color:"brown"},{id:"strategy",value:"Strategy",color:"blue"},{id:"decision",value:"Decision",color:"green"},{id:"draft",value:"Draft",color:"default"}]}),sales:h({databaseDisplaySettings:{projects:{title:"Pipelines",itemName:{singular:"deal",plural:"deals"}},meetings:{title:"Calls",itemName:{singular:"call",plural:"calls"}}},docExample:p({title:"Discovery Call Playbook",icon:"/icons/book_blue.svg",docType:"Playbook",projectKey:"exampleProjectB",markdown:`## Goal
- Qualify fit on the first call and agree on a clear next step

## Ideal customer profile
- 50–500 employees, growing teams that have outgrown spreadsheets
- A champion who feels the pain weekly, not quarterly

## Discovery questions
- What does the process look like today, start to finish?
- Where does it break down, and what does that cost you?
- Who else needs to be in the room for a decision?

## Objection handling
- "Too expensive" → reframe around time saved per week
- "We already use X" → focus on the gap X leaves, not feature parity

## Next steps
- Recap the pain in writing the same day
- Book the technical deep-dive before the call ends

## Open questions
- Where do we draw the line between SMB and mid-market scripts?`}),referenceDoc:u({title:"Pricing & Discounting Guidelines",icon:"/icons/chart_purple.svg",docType:"Pricing",projectKey:"exampleProjectA",markdown:`## Purpose
- Clear rules so reps can quote with confidence

## List pricing
- Standard tiers and what's included in each

## Discount tiers
- Up to 10%: rep discretion
- 10–20%: manager approval
- Over 20%: VP approval, requires a multi-year or expansion commitment

## Terms
- Annual billing by default; quarterly on exception

## Approvals
- Log every non-standard deal in the deal record`}),kickoffMeeting:c({title:"Enterprise Pipeline Push Kickoff",markdown:`**Purpose**

- Align on target accounts and goals for the enterprise push.
- Agree on the motion and what a qualified deal looks like.

**Key decisions**

- Focus on 50–500 employee accounts with an active champion.
- Loop legal in early on security review to stop late-stage slips.
- Multi-year terms unlock the deepest discounts.

**Immediate next steps**

- [ ] Finalize the target account list (Sales)
- [ ] Update the discovery call playbook (Enablement)
- [ ] Refresh the demo environment (Sales eng)
- [ ] Confirm pricing + approval thresholds (Deal desk)`}),projectA:{title:"Enterprise Pipeline Push",icon:"/icons/chart_purple.svg",content:`**Vision:** Turn the enterprise segment from a handful of hopeful logos into a predictable, repeatable pipeline — disciplined qualification, clean handoffs, and deals that close on time.

## Background

We've proven enterprise accounts will buy, but the motion is ad hoc. Discovery quality varies by rep, late-stage deals stall on security review, and our demo environment doesn't show the new reporting that buyers actually ask about.

Enterprise Pipeline Push is about building a system, not chasing one quarter's number. We focus the team on a shared target list, fix the friction that slips deals, and make multi-year terms the default ask.

## Objectives

- **Build qualified pipeline**: Source $3M in new enterprise pipeline against the target account list
- **Raise discovery quality**: Every rep runs the same qualification framework with a documented champion
- **Stop late-stage slips**: Loop legal in on security review at the technical deep-dive, not at signature
- **Grow deal size**: Make multi-year terms the standard proposal and lift average ACV by 15%
- **Shorten the cycle**: Reduce time-to-close on enterprise deals by two weeks

## Scope of Work

- **Target account list**: 50–500 employee accounts with an identified, active champion
- **Discovery playbook**: Updated qualification questions, objection handling, and same-day recap template
- **Demo environment**: Refreshed to showcase the new reporting and real-feeling data
- **Security & legal track**: Early-engagement checklist so review starts before late stage
- **Pricing & approvals**: Confirmed discount thresholds and multi-year incentive structure
- **Deal hygiene**: Every non-standard deal logged with terms and approver in the record

## Timeline

| **Phase** | **Dates** | **Deliverables** |
| --- | --- | --- |
| Account targeting | Week 1 | Target list, champion mapping, territory assignments |
| Enablement | Week 2 | Updated playbook, refreshed demo, pricing thresholds confirmed |
| Outbound launch | Week 3–5 | First-meeting bookings, discovery calls, same-day recaps |
| Deep-dives & security | Week 6–8 | Technical deep-dives, early security reviews, proposals out |
| Close & review | Week 9–10 | Negotiation, signatures, pipeline review and learnings |

## Success Metrics

- **New pipeline**: $3M sourced against the target list
- **Qualified rate**: 60%+ of first meetings advance to a technical deep-dive
- **Average ACV**: up 15% from current enterprise baseline
- **Multi-year mix**: 50%+ of proposals include a multi-year term
- **Cycle time**: two weeks faster from deep-dive to close

## Open Questions

- Where do we draw the line between SMB and mid-market scripts on this list?
- Do we pilot multi-year discounts now or wait for deal-desk sign-off?
- Should we split the mid-market territory before outbound starts?`},projectB:{title:"Sales Playbook Refresh",icon:"/icons/book_blue.svg",content:`**Vision:** Give every rep a playbook so good that a strong call feels repeatable, not lucky — one source of truth for how we qualify, demo, and close.

### Goal

Rebuild the sales playbook end to end by end of quarter: discovery, objection handling, pricing, and next-step motion, validated on live calls and adopted by the whole team.

### Timeline

- **Jul 1** — Audit current materials and interview top reps
- **Jul 20** — Draft discovery and objection sections
- **Aug 10** — Field-test on live calls
- **Aug 31** — Team rollout and enablement session

---

## Current Status

**Stage: Planning** — We've audited the existing scripts and started top-rep interviews. The discovery section is drafted; pricing and objection handling are next, and a field test on live calls is queued.

## Workstreams

- **Discovery** — Qualification questions and ICP fit checklist drafted
- **Objection handling** — Top objections cataloged; reframes in progress
- **Pricing & terms** — Discount tiers and approval thresholds being confirmed
- **Demo flow** — Updated narrative to lead with new reporting
- **Enablement** — Rollout plan and certification check being designed

---

## Key Milestones

- [x] Project kickoff & team alignment
- [x] Audit existing scripts and materials
- [x] Top-rep interviews
- [ ] Discovery section drafted — *in progress*
- [ ] Objection handling section — *in progress*
- [ ] Pricing & approvals confirmed
- [ ] Demo flow updated
- [ ] Field test on live calls
- [ ] Team rollout session
- [ ] Adoption check (30-day)

---

## Adoption Goals

| **Metric** | **Target** | **Timeframe** |
| --- | --- | --- |
| Rep adoption | 90% of team | Within 30 days of rollout |
| First-meeting-to-deep-dive | +15% | First 60 days |
| Recap-sent-same-day | 95% of calls | Ongoing post-rollout |
| New-rep ramp time | Down 20% | First two cohorts |

---

## Notes & Decisions

- Decision log
    - **Jul 3** — Build separate discovery tracks for SMB and mid-market.
    - **Jul 11** — Standardize on a same-day written recap after every discovery call.
    - **Jul 19** — Lead the demo with reporting; defer feature-parity talk to deep-dives.
- Open questions
    - Do we require a certification check before reps use the new playbook?
    - How do we keep the playbook current after launch — owner and cadence?
    - Should objection scripts live in the CRM or in the playbook doc?`},taskTitles:{upNextProjectA:"Follow up with Acme Corp",doneProjectB:"Outline discovery call script",doneProjectA:"Update pricing one-pager"},privateNote:{title:"Pipeline review — rough thoughts",intro:"Not ready to put this anywhere official yet but wanted to get it out of my head.",bullets:["Late-stage deals keep slipping on security review — loop legal in earlier","The demo environment doesn't show the new reporting. Fix before next week's calls","Talk to Jordan about splitting the mid-market territory","Should we pilot multi-year discounts? Worth a real conversation, not just a Slack thread"],outro:"Revisit this before the Thursday pipeline review."},docsTypeOptions:[{id:"account-plan",value:"Account Plan",color:"purple"},{id:"call-notes",value:"Call Notes",color:"blue"},{id:"proposal",value:"Proposal",color:"yellow"},{id:"pricing",value:"Pricing",color:"green"},{id:"playbook",value:"Playbook",color:"brown"},{id:"decision",value:"Decision",color:"green"},{id:"draft",value:"Draft",color:"default"}]}),finance:h({docExample:p({title:"FY26 Operating Budget",icon:"/icons/chart-pie_orange.svg",docType:"Budget",projectKey:"exampleProjectA",markdown:`## Summary
- Plan holds spend flat as a percentage of revenue while funding two new hires
- Largest swing is software renewals, up 18% year over year

## Assumptions
- Revenue grows 30% with a linear ramp through the year
- Headcount up 12%, weighted to the second half
- No new office or major capex

## Budget by team
- Engineering: 46% — headcount and infrastructure
- Go-to-market: 31% — quota-carrying hires and programs
- G&A: 23% — tools, audit, and facilities

## Risks
- Cloud costs scaling faster than usage forecasts
- A slipped raise pushes the second-half hires

## Open questions
- Do we move to quarterly reforecasts this year?
- What's the contingency reserve target?`}),referenceDoc:u({title:"Expense Policy",icon:"/icons/chart-pie_orange.svg",docType:"Policy",projectKey:"exampleProjectB",markdown:`## Purpose
- What's reimbursable and how to submit it

## Categories
- Travel, meals, software, and office supplies

## Limits
- Meals capped per day; travel booked in advance where possible

## Approval
- Manager approval for anything over the standard threshold

## Reimbursement
- Submit within 30 days with receipts; paid on the next cycle`}),kickoffMeeting:c({title:"Q2 Budget Review Kickoff",markdown:`**Purpose**

- Align on assumptions and priorities for the Q2 budget.
- Agree on what gets funded and what waits.

**Key decisions**

- Hold spend flat as a percentage of revenue.
- Fund two new hires, weighted to the second half.
- Software renewals get an audit before approval.

**Immediate next steps**

- [ ] Reconcile vendor invoices (Finance)
- [ ] Draft the headcount forecast (FP&A)
- [ ] Run the software license audit (Ops)
- [ ] Prep the budget review deck (Finance)`}),projectA:{title:"Q2 Budget Review",icon:"/icons/chart-pie_orange.svg",content:`**Vision:** Make the Q2 budget review the moment the business gets honest about where its money goes — every dollar tied to a priority, every assumption written down, no surprises at close.

## Background

Spend has been creeping up faster than the plan assumed, and software renewals are the largest swing — up sharply year over year with no audit behind them. The forecast model still lives in one fragile spreadsheet that only a couple of people understand.

Q2 Budget Review is a reset. We reconcile what we actually spent, pressure-test the assumptions, fund the priorities that earn it, and leave behind a documented model the team can trust.

## Objectives

- **Hold spend discipline**: Keep total spend flat as a percentage of revenue
- **Audit the biggest swing**: Review every software renewal before it's approved
- **Fund deliberately**: Approve two new hires, weighted to the second half
- **De-risk the model**: Document the forecast model so it isn't one person's spreadsheet
- **Tighten the cadence**: Decide whether to move to quarterly reforecasts this year

## Workstreams

- **Reconciliation**: Match vendor invoices to budget and flag variances over threshold
- **Software license audit**: Inventory tools, usage, and renewals; cut or renegotiate the dead weight
- **Headcount forecast**: Model the two approved hires and their ramped cost by half
- **Model documentation**: Write down assumptions, drivers, and formulas in the forecast model
- **Risk review**: Stress-test cloud cost scaling and the second-half hiring timeline
- **Review deck**: Prep the budget review readout with priorities and trade-offs

## Timeline

| **Phase** | **Dates** | **Deliverables** |
| --- | --- | --- |
| Reconciliation | Week 1 | Invoice reconciliation, variance flags, current-state spend |
| Audits & forecasts | Week 2–3 | Software license audit, headcount forecast, assumption set |
| Model & risk | Week 4 | Documented forecast model, risk review, contingency target |
| Review prep | Week 5 | Budget review deck, funding recommendations |
| Decision & close | Week 6 | Review meeting, approved budget, reforecast decision |

## Success Metrics

- **Spend ratio**: total spend flat as a percentage of revenue
- **Renewal savings**: 10%+ reduction on audited software renewals
- **Variance closed**: 100% of over-threshold variances explained before close
- **Model coverage**: forecast model fully documented and peer-reviewed
- **On-time close**: review complete and budget approved before quarter end

## Open Questions

- Do we move to quarterly reforecasts this year?
- What's the contingency reserve target?
- How do we treat the contractor accrual before close?`},projectB:{title:"Annual Planning",icon:"/icons/calendar_green.svg",content:`**Vision:** Build an annual plan the whole company can stand behind — grounded in real assumptions, clear on trade-offs, and resilient enough to survive contact with reality.

### Goal

Deliver the FY27 operating plan by end of quarter: revenue and headcount models, budget by team, and a documented set of assumptions, ready for leadership sign-off and a clean board update.

### Timeline

- **Jul 1** — Gather inputs and prior-year actuals
- **Jul 25** — Draft revenue and headcount models
- **Aug 15** — Team budget reviews and trade-offs
- **Aug 31** — Leadership sign-off and board package

---

## Current Status

**Stage: Planning** — We've pulled prior-year actuals and agreed on top-line growth assumptions. Revenue and headcount models are in draft; team budget reviews and the trade-off pass are queued before leadership sign-off.

## Workstreams

- **Revenue model** — Growth assumptions set; ramp and scenarios in build
- **Headcount plan** — Hiring sequence and ramped cost by half being modeled
- **Budget by team** — Allocation drafts going out to team leads for input
- **Assumptions & risks** — Driver documentation and downside scenarios in progress
- **Board package** — Plan summary and narrative being assembled

---

## Key Milestones

- [x] Project kickoff & team alignment
- [x] Pull prior-year actuals
- [x] Agree on top-line growth assumptions
- [ ] Revenue model drafted — *in progress*
- [ ] Headcount plan drafted — *in progress*
- [ ] Team budget reviews
- [ ] Trade-off and prioritization pass
- [ ] Assumptions & risks documented
- [ ] Leadership sign-off
- [ ] Board package finalized

---

## Plan Goals

| **Metric** | **Target** | **Timeframe** |
| --- | --- | --- |
| Revenue growth | 30% year over year | FY27 |
| Spend as % of revenue | Flat or down | FY27 |
| Headcount growth | +12%, second-half weighted | FY27 |
| Plan delivered | Sign-off before quarter end | By Aug 31 |

---

## Notes & Decisions

- Decision log
    - **Jul 5** — Plan to 30% revenue growth with a linear ramp through the year.
    - **Jul 14** — Hold spend flat as a percentage of revenue; weight new hires to H2.
    - **Jul 23** — No new office or major capex assumed in the base plan.
- Open questions
    - Do we move to quarterly reforecasts for FY27?
    - What's the contingency reserve target as a percentage of spend?
    - How aggressively do we model cloud cost scaling against usage forecasts?`},taskTitles:{upNextProjectA:"Reconcile vendor invoices",doneProjectB:"Draft headcount forecast",doneProjectA:"Update expense policy summary"},privateNote:{title:"Budget season — rough thoughts",intro:"Not ready to put this anywhere official yet but wanted to get it out of my head.",bullets:["Software spend grew faster than headcount again — push for a license audit","The forecast model still lives in one fragile spreadsheet. Document it at minimum","Talk to Jordan about the contractor accrual before close","Should we move to quarterly reforecasts? Worth a real conversation"],outro:"Revisit this before the Thursday finance sync."},docsTypeOptions:[{id:"budget",value:"Budget",color:"green"},{id:"forecast",value:"Forecast",color:"blue"},{id:"policy",value:"Policy",color:"brown"},{id:"board-update",value:"Board Update",color:"purple"},{id:"decision",value:"Decision",color:"green"},{id:"draft",value:"Draft",color:"default"}]}),founder_or_ceo:h({docExample:p({title:"2026 Company Strategy",icon:"/icons/light-bulb_blue.svg",docType:"Strategy",projectKey:"exampleProjectA",markdown:`## Vision
- Where we want to be in three years, in one sentence the whole team can repeat

## Priorities
- Three bets for the year, no more
- What we are explicitly not doing

## Goals
- Company-level OKRs that ladder up to the bets
- The one metric that matters most this year

## Operating cadence
- Weekly leadership sync, monthly business review
- Quarterly strategy check against the bets

## Risks
- Spreading the team too thin across bets
- Hiring not keeping pace with the plan

## Open questions
- Do we raise earlier than planned to fund the second bet?`}),referenceDoc:u({title:"Q2 Board Update",icon:"/icons/chart_purple.svg",docType:"Board Update",projectKey:"exampleProjectA",markdown:`## Highlights
- Revenue up quarter over quarter; two key hires closed

## Metrics
- ARR, net retention, and runway against plan

## Risks
- Hiring pace behind plan for the second bet

## Asks
- Intros for the VP of Sales search

## Next quarter
- Ship the launch and close the strategy refresh`}),kickoffMeeting:c({title:"2026 Strategy Refresh Kickoff",markdown:`**Purpose**

- Align leadership on the 2026 strategy and priorities.
- Agree on the bets and what we are not doing.

**Key decisions**

- Three bets for the year, no more.
- Company OKRs ladder up to the bets.
- Establish a weekly leadership operating cadence.

**Immediate next steps**

- [ ] Draft the 2026 strategy doc (CEO)
- [ ] Define company-level OKRs (Leadership)
- [ ] Prioritize the key hires (People)
- [ ] Prep the next board update (CEO)`}),projectA:{title:"2026 Strategy Refresh",icon:"/icons/light-bulb_blue.svg",content:`**Vision:** Refocus the company on the few bets that matter for 2026 — a strategy clear enough that anyone on the team can repeat it, and sharp enough that it changes what we say no to.

## Background

We've grown fast, and with that growth our priorities have multiplied. The team is spread across too many bets, and even strong people feel the lack of focus. Leadership runs on a weekly standup rather than a real operating cadence, and our company OKRs no longer ladder cleanly to a small set of strategic bets.

This refresh resets that: three bets, an explicit list of what we are not doing, and a cadence that keeps us honest against the plan all year.

## Objectives

- **Name the bets**: Three strategic bets for the year, and no more
- **Make focus real**: An explicit list of what we are deliberately not doing
- **Align the org**: Company OKRs that ladder directly to the bets
- **One north-star metric**: The single measure that matters most this year
- **Run a cadence**: A leadership operating rhythm, not just a standup

## Scope of Work

- **Strategy narrative**: The three-year vision in one repeatable sentence
- **The three bets**: Each with a rationale, owner, and success measure
- **Anti-roadmap**: What we are explicitly cutting or deferring
- **OKR cascade**: Company OKRs and how each team's goals ladder up
- **Operating cadence**: Weekly leadership sync, monthly business review, quarterly strategy check
- **Board alignment**: How the refresh shows up in the next board update

## Timeline

| **Phase** | **Dates** | **Deliverables** |
| --- | --- | --- |
| Inputs | Week 1–2 | Market read, team input, honest assessment of current bets |
| Bets & focus | Week 3 | Three bets named, anti-roadmap drafted |
| OKR cascade | Week 4 | Company OKRs, team-level alignment |
| Cadence & rollout | Week 5 | Operating rhythm set, all-hands narrative |
| Board readout | Week 6 | Strategy refresh in the board update |

## Success Metrics

- **Bets in flight**: Exactly three, with named owners
- **OKR alignment**: 100% of team OKRs ladder to a bet
- **Team clarity**: Most of the company can state the strategy in one sentence
- **Cadence adherence**: Leadership sync and business review held on schedule
- **Focus**: Measurable reduction in active initiatives outside the three bets

## Open Questions

- Do we raise earlier than planned to fund the second bet?
- Which current initiatives move to the anti-roadmap, and who delivers that news?
- Does the partnerships track belong inside a bet or stay independent this year?`},projectB:{title:"Hiring Plan",icon:"/icons/groups_blue.svg",content:`**Vision:** Build a hiring plan that matches the strategy — the right roles, in the right order, filled by people who raise the bar. Hiring should accelerate the bets, not lag behind them.

### Goal

Define and execute a 2026 hiring plan that fills the critical roles behind our three strategic bets, with a sequenced plan, owned pipelines, and a process that protects the bar even as we move quickly.

### Timeline

- **Q1** — Lock the headcount plan and prioritize roles
- **Q2** — Open the top searches and build pipelines
- **Q3** — Close the leadership and senior IC hires
- **Q4** — Backfill and onboard the next wave

---

## Current Status

**Stage: Planning** — Sequencing roles against the three bets and confirming budget. The VP of Sales search is the first priority. Recruiting partner selection is queued next.

## Workstreams

- **Headcount plan** — Roles mapped to bets, sequenced by priority and budget
- **Leadership search** — VP of Sales and other senior hires
- **Pipeline** — Sourcing, referrals, and recruiting partner selection
- **Interview process** — Scorecards, panels, and a consistent bar
- **Onboarding** — Ramp plans so new hires land their first 90 days

---

## Key Milestones

- [x] Headcount budget approved
- [x] Roles mapped to the three bets
- [x] VP of Sales prioritized as the first search
- [ ] Recruiting partner selected
- [ ] Top three searches opened
- [ ] Interview scorecards standardized
- [ ] VP of Sales hire closed
- [ ] Senior IC pipeline built
- [ ] Onboarding plans drafted
- [ ] First-wave hires ramped

---

## Hiring Goals

| **Metric** | **Target** | **Timeframe** |
| --- | --- | --- |
| Critical roles filled | 100% | By Q3 |
| Time to fill, senior roles | Under 60 days | Per search |
| Offer acceptance rate | 80% or higher | Across the year |
| New-hire 90-day ramp | On plan | Per hire |

---

## Notes & Decisions

- Decision log
    - **Q1 wk 2** — Prioritized the VP of Sales search to unblock the revenue bet.
    - **Q1 wk 3** — Decided to use a recruiting partner for senior leadership roles only.
    - **Q1 wk 4** — Locked a consistent scorecard to protect the hiring bar.
- Open questions
    - Do we hire ahead of the second bet or wait until it's funded?
    - In-house recruiter versus agency for the senior IC pipeline?
    - Should Jordan own the partnerships hires alongside the track?`},taskTitles:{upNextProjectA:"Review quarterly OKRs",doneProjectB:"Prioritize the key hires",doneProjectA:"Prep the board update"},privateNote:{title:"Company direction — rough thoughts",intro:"Not ready to put this anywhere official yet but wanted to get it out of my head.",bullets:["We're spread across too many bets — the team feels it even if the board doesn't yet","The leadership team needs a real operating cadence, not just a weekly standup","Talk to Jordan about taking over the partnerships track","Should we raise earlier than planned? Worth a real conversation, not just a hallway chat"],outro:"Revisit this before the Thursday leadership sync."},docsTypeOptions:[{id:"strategy",value:"Strategy",color:"blue"},{id:"board-update",value:"Board Update",color:"purple"},{id:"okrs",value:"OKRs",color:"yellow"},{id:"investor-update",value:"Investor Update",color:"green"},{id:"decision",value:"Decision",color:"green"},{id:"draft",value:"Draft",color:"default"}]})};a.d(t,{Gj:()=>d,U$:()=>o},{Ct:"Your first meeting"})}}]);