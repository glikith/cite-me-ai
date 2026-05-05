# CiteMe AI

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

> AI-powered citation generator - paste a source, get a properly formatted citation instantly.

---

## Overview

CiteMeAI takes a URL, DOI, or raw text and uses AI to extract metadata and generate citations in standard academic formats. Built with Next.js 14 App Router, it runs server-side AI calls and delivers results with a clean shadcn/ui interface.

---

## Live Demo

https://v0-cite-me-ai.vercel.app

---

## Features

| Feature | Description |
|---|---|
| AI Citation Generation | Extracts author, title, date, publisher from any source and formats it |
| Multiple Citation Formats | Supports APA, MLA, Chicago, and IEEE styles |
| URL / DOI / Text Input | Works with live links, DOIs, or pasted raw content |
| One-Click Copy | Copy formatted citation to clipboard instantly |
| App Router Architecture | Server components handle AI calls; client stays lightweight |
| Responsive UI | shadcn/ui + Tailwind with dark mode support via `next-themes` |

---

## Tech Stack

```
Framework       : Next.js 14 (App Router)
Language        : TypeScript 5
Styling         : Tailwind CSS v4, shadcn/ui (New York), Radix UI
Icons           : Lucide React
Animation       : Motion (Framer Motion)
Charts          : Recharts
Forms           : React Hook Form + Zod
Analytics       : Vercel Analytics
Package Manager : pnpm
```

---

## Author

[Gummadi Likith](https://github.com/glikith)
