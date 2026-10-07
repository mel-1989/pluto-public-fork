---
tags: [type/method, for/human, status/live]
---

# Pluto Roadmap

Pluto is a fork of [Nimbalyst](https://github.com/nimbalyst/nimbalyst) (MIT), shaped into an AI-native workspace for notes, written work and code repositories in one tree. Design direction: **purple matrix**.

## Done (initial setup)

- Fork at `mel-1989/pluto`, with `upstream` pointing at Nimbalyst for pulling future releases.
- Purple Matrix theme (black and purple), the first-launch default.
- ASCII Pluto drawn faintly over the viewer under Purple Matrix; regenerate with `python3 scripts/pluto/generate-planet-art.py`.
- Window, tray and installer named Pluto.

## Feature list

| # | feature | notes |
|---|---|---|
| 1 | Comments and post-its on documents | Personal notes pinned to a spot in any file (markdown, code, PDF, docx, pptx), shown as movable sticky notes or margin comments, stored as plain files beside the document so git tracks them and agents can read and reply. Builds on the existing mockup-pin and canvas-note pieces; shared-document comments already exist but need a team sync account. |
| 2 | Word viewer (`.docx`) | Extension rendering through `docx-preview`; view first, editing later. |
| 3 | PowerPoint viewer (`.pptx`) | Headless LibreOffice to PDF (cached), shown in the existing PDF viewer. |
| 4 | `[[wikilinks]]` and backlinks | So the claudespace notes keep their cross-links. |
| 5 | Heavy-folder exclusions | Skip `node_modules`, `.git`, `.venv` and build output in the tree, search and watchers, so a 15 GB, 160k-file workspace stays fast. |
| 6 | Full rebrand | Remaining in-app "Nimbalyst" strings, icon, app ID and data folder; kept for later so upstream merges stay easy. |
| 7 | Telemetry off by default | Upstream ships PostHog analytics enabled (`analyticsEnabled: true`). |
