# Dropbox Asset Inventory

Downloaded from the shared Dropbox folder on May 18, 2026.

Raw files are stored locally at:

```text
C:\Projects\bridge-agent-network-portal\_incoming\dropbox-assets
```

The raw `_incoming/` folder is ignored by git so we do not accidentally commit large working files or unreviewed partner assets.

## Summary

Total files: 31

| Type | Count | Likely portal use |
| --- | ---: | --- |
| `.docx` | 13 | Scripts, email campaigns, SMS/text campaigns, internal planning docs |
| `.pdf` | 7 | Downloadable guides, broker packets, book/mini-book PDFs |
| `.png` / `.PNG` | 10 | Logos, flyers, visual previews, broker package thumbnails |
| `.jpg` | 1 | Deal Lab visual asset |

## Asset List

| File | Type | Suggested portal section |
| --- | --- | --- |
| `4 page script.docx` | Script | Training Center or Resource Library |
| `Assets\Broker Package.png` | Image | Resource preview image |
| `Assets\Broker_4page_visual (1).pdf` | PDF | Broker resources |
| `Assets\Buy Before you Sell email Campaign.docx` | Email campaign | Marketing Center |
| `Assets\Buy Before you Sell Texts.docx` | Text/SMS campaign | Marketing Center |
| `Assets\ChatGPT Image Mar 24, 2026, 03_55_06 PM.png` | Image | Needs review before use |
| `Assets\Copy of Video youtube links.docx` | Links/training | Training Center |
| `Assets\Elegant logo with gold bridge design.png` | Logo | Brand assets |
| `Assets\Elegant logo with golden bridge arch resize.png` | Logo | Brand assets |
| `Assets\Elegant logo with golden bridge arch.png` | Logo | Brand assets |
| `Assets\Final Bridge Agent Guide Fajardo no crop or bleed.pdf` | PDF guide | Resource Library |
| `Assets\Flyer.PNG` | Flyer | Marketing Center |
| `Assets\Helping Your Brokerage Win More Listings (2) (1).pdf` | Broker PDF | Broker resources |
| `Assets\Michelle McCaughey_Every Home Has 3 Values_DJ (4) (1).pdf` | PDF | Three Values resources |
| `Assets\presentations outlines (1 hr & 2.5 hr).docx` | Training outline | Training Center |
| `Assets\Refined_Broker_Packet (1).pdf` | Broker packet | Broker resources |
| `Assets\Reno to Sell Texts.docx` | Text/SMS campaign | Marketing Center |
| `Assets\RENOVATE MINI BOOK ALEX FAJARDO Without Bleed.pdf.pdf.pdf` | PDF/book | Book Requests or Resource Library |
| `Assets\Renovate to Buy email Campaign.docx` | Email campaign | Marketing Center |
| `Assets\Renovate to Buy Texts.docx` | Text/SMS campaign | Marketing Center |
| `Assets\Renovate to Sell Email Campaign.docx` | Email campaign | Marketing Center |
| `Assets\The Bridge Agent logo design.png` | Logo | Brand assets |
| `Assets\The Bridge Agent logo.png` | Logo | Brand assets |
| `Assets\The Deal Lab.jpg` | Image | Deal Lab / Opportunities |
| `Assets\Three Values Email Campaign.docx` | Email campaign | Marketing Center |
| `Assets\Three Values Text Messages.docx` | Text/SMS campaign | Marketing Center |
| `BRIDGE AGENT NETWORK - Partnership Structure - Working Draft.docx` | Internal planning | Admin/reference only |
| `BRIDGE_AGENT_DASHBOARD_CONTENT_CHECKLIST.md.docx` | Checklist doc | Admin/reference only |
| `Bridge_Agent_Network_Brainstorm.docx` | Brainstorm doc | Admin/reference only |
| `SIMPLE OWNERSHIP & Compensation Structure.docx` | Internal planning | Admin/reference only |
| `THE BRIDGE AGENT NETWORK.docx` | Internal planning | Admin/reference only |

## Recommended Next Use

1. Keep raw source assets in `_incoming/`.
2. Select only polished/public-safe assets for the portal.
3. Reference selected PDFs/images through hosted asset URLs instead of committing the binaries to GitHub.
4. Add preview thumbnails through hosted image URLs where available.
5. Add metadata to `lib/asset-library.ts` so the Resource Library can filter and search the real assets.

## Portal Update

The first curated batch is referenced from Dropbox-hosted direct file links in:

```text
C:\Projects\bridge-agent-network-portal\lib\asset-library.ts
```

Only agent-facing marketing, training, broker, guide, book, logo, and Deal Lab assets are exposed in the portal. Internal planning, ownership, compensation, and brainstorm documents remain in `_incoming/` only because GitHub Pages is public static hosting.

The asset binaries should not live in the GitHub repo. `public/resources` was removed after the Dropbox hosted links were verified.

## First Batch To Load Into Portal

Start with these because they map directly to the current MVP navigation:

| Portal area | Asset |
| --- | --- |
| Marketing Center | `Three Values Email Campaign.docx` |
| Marketing Center | `Three Values Text Messages.docx` |
| Marketing Center | `Renovate to Sell Email Campaign.docx` |
| Marketing Center | `Reno to Sell Texts.docx` |
| Resource Library | `Final Bridge Agent Guide Fajardo no crop or bleed.pdf` |
| Broker Resources | `Refined_Broker_Packet (1).pdf` |
| Book Requests | `RENOVATE MINI BOOK ALEX FAJARDO Without Bleed.pdf.pdf.pdf` |
| Training Center | `presentations outlines (1 hr & 2.5 hr).docx` |
| Deal Lab | `The Deal Lab.jpg` |
