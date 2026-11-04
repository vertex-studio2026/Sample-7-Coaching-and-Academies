# Sample 7 — Coaching & Academies (EduVantage Academy)

A single-page site for a small-batch coaching academy, built as a portfolio sample for
[Vertex Studio](https://vertex-studio-coral.vercel.app/).

The point of this sample is not decoration. It is built around the two things a local coaching
academy actually gets judged on: **a price list a parent can read** and **claims that survive a
follow-up question**.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # single-file build in dist/index.html
```

Built with React 19, Vite 7, Tailwind CSS 4, Framer Motion and lucide-react.

## What is in the page

| Section | Purpose |
| --- | --- |
| Hero | Positioning: batch cap, free demo classes, monthly reports — no invented totals |
| How we teach | Six operating promises a parent can verify on a visit, plus what the centre does *not* do |
| Courses & fees | Six programmes, published fees, what is included, instalment and refund terms |
| Results | How results are reported (denominator, consent, including the misses) with a sample sheet |
| Faculty | Who actually teaches, with documents available at the front desk |
| Reviews | Short, non-specific quotes and how they are collected |
| Admission process | Four steps and the four things handed over in writing before payment |
| The centre | Real rooms, address, hours, directions |
| FAQ | Fees, demo classes, batch size, refunds, teacher changes, online classes |
| Contact | Enquiry form that hands off to WhatsApp or email — no fake "message sent" screen |

## Content rules for this sample

These exist because the previous version of this page carried numbers no academy could back up
("50,000+ students trained", "98% success rate", "AIR 42", year-wise award lists, named toppers
with colleges). That kind of copy is fragile: one question from a parent and the whole page loses
credibility.

Before launch, keep these rules:

1. **No unverifiable totals.** No "students trained", "selection rate", "top 1000 ranks", awards or
   "trusted by N families" unless there is a register that proves it.
2. **A result without a denominator is a slogan.** Publish batch strength, how many students wrote
   the exam, and the students who did not clear the cut-off.
3. **Names need consent.** Students, parents and teachers appear by name only with written consent.
4. **Reviews must have a source.** Publish quotes from the centre's own feedback form, unedited.
5. **No fake urgency.** No "only 2 seats left" countdowns and no "limited seats" unless the batch
   list is actually full.
6. **Fees up front.** A parent should be able to find the price, what is included and the refund
   terms without calling.
7. **Photographs must be the centre's own.** No stock classrooms, no images of students without
   consent.

Every piece of sample content on the page is labelled in the UI (see `SampleNote`), not hidden in
code comments. The footer carries a permanent demo note.

## Editing content

All copy, fees, contact details and the demo disclaimer live in one file:
[`src/data/site.ts`](src/data/site.ts). Change it there — no component edits needed for a rebrand.

- `site` — name, phone, WhatsApp, email, address, hours, demo note
- `courses`, `feeNotes` — programmes and the fine print
- `resultRules`, `sampleResultSheet` — the transparency section
- `faculty`, `reviews`, `facilities`, `faqs` — the sample content
- `site.studioCredit` — the "Site by Vertex Studio" link in the footer

## Form behaviour

The enquiry form has no backend by design. It validates the fields, then shows the enquiry with two
real hand-off actions (WhatsApp deep link and `mailto:`). Swap the "Send" step for a `fetch()` to the
academy's CRM or a form service when a real deployment needs it — but keep the confirmation honest
about what happened to the data.

## Accessibility & performance

- Skip link, visible focus rings, labelled form fields, `aria-expanded` accordions.
- Dialog traps focus, closes on Escape and on backdrop click, and locks background scroll.
- `prefers-reduced-motion` respected in CSS and through Framer Motion's `MotionConfig`.
- Anchor scrolling offsets for the fixed navbar; semantic headings and landmarks.
- Images are pre-sized and compressed; the production build inlines everything into one HTML file.
