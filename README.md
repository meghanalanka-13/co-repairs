# Co-Repairs Hub

Lovable Prompt: Co-Repairs Website + Partner Portal + Analytics (Demo)

Build a premium, minimal website for a company called Co-Repairs with a Partner Portal experience. This is a demo, so authentication does not need to be real.

Brand & Style

Clean, architectural, premium

Light mode only

Colours: ivory / warm off-white surfaces, stone grey borders, charcoal text, subtle copper accents

Typography: Inter (or similar)

Rounded corners, soft shadows, generous spacing

Very corporate and calm — not flashy

Main Website Navigation

Home

Ecosystem

Benefits

Sustainability

Partner With Us

Partner Portal (button-style CTA)

Pages
Home

Hero:

Headline: Reimagining Post-Sales Service Infrastructure

Subtext: A shared authorized service-center ecosystem for appliance and electronics brands.
Buttons:

Explore Ecosystem

Partner With Us

Small link: Partner Portal (Demo)

Ecosystem

Explain:

Shared service centers under one roof

Brand onboarding

Infrastructure, manpower, compliance

SLAs and reporting

Benefits

Split into:

For Brands

For Customers

For Service Partners

Sustainability

Repair-first, reduced waste, circular economy, long product life.

Partner With Us

Simple form:

Brand name

Contact person

City

Email

Partnership intent

Partner Portal (Demo)

Create a product-style internal portal under route /portal.

Demo Login Screen

Route: /login

Email + Password fields

Button: Login (Demo)

On click → redirect to /portal

Show note: Demo portal – authentication disabled

Portal Sidebar Tabs

Overview

Onboarding Status

Service Center Performance

Operational Analytics

Reports

Support

Operational Analytics Tab (Important)

This is the embedded AI command center for Co-Repairs partners.

Title: Co-Repairs Command Center

Subtext: Real-time operational intelligence for partner brands

Embed an iframe using a placeholder URL:

<iframe
  src="PASTE_ANALYTICS_URL_HERE"
  style="width:100%; height:900px; border:0; border-radius:18px;"
></iframe>


If no URL is present, show a friendly placeholder card:
“Add your analytics dashboard link to activate this section.”

Overview Tab

3–4 KPI cards (dummy values)

“Partner health summary”

Reports

Dummy downloadable reports table

Support

Contact form + FAQs

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://co-repairs.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/985594dc-443a-4869-bfe5-33e2a951d1ef).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
