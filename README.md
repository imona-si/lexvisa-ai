# LexVisa AI Product

LexVisa AI is an AI-assisted immigration workflow product for Global Talent visa route assessment, evidence structuring, risk flagging and draft document support.

## Important

This product does not provide legal advice, immigration advice, legal representation or final eligibility decisions.  
All outputs are workflow support only and require review by a qualified immigration professional.

## Features

- Landing page
- Assessment page
- Global Talent route suitability analysis
- Evidence mapping
- Risk flags
- Recommended evidence checklist
- Draft structures for:
  - Recommendation letters
  - Client follow-up emails
  - Personal statement outlines
  - Evidence explanation notes

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Environment variable

Create `.env.local`:

```bash
OPENAI_API_KEY=your_api_key_here
```

Do not upload `.env.local` to GitHub.

## Deploy on Vercel

1. Create GitHub repository.
2. Upload this project.
3. Connect repository to Vercel.
4. Add environment variable in Vercel:
   - `OPENAI_API_KEY`
5. Deploy.

## Suggested LinkedIn description

Founder & LegalTech Developer — LexVisa AI

Developing an AI-assisted immigration workflow platform focused on UK Global Talent visa route assessment, evidence structuring, risk flagging and case preparation support.
