# Security Policy

## Project Scope

This repository contains a static frontend portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

The app does not use:

- A backend service
- A database
- Private environment variables
- Server-side sensitive configuration
- Authentication
- Payment processing

## Intentionally Public Information

This portfolio intentionally publishes the following information:

- Name and professional title
- Public email address
- LinkedIn profile URL
- GitHub profile URL
- Portfolio site URL
- Downloadable CV PDF
- Work experience, skills, selected projects, and certificates

Do not add private keys, API credentials, private documents, or local `.env` files to this repository.

## Dependency Checks

Run the security audit command before publishing dependency changes:

```bash
npm run audit
```

The CI workflow also runs `npm run audit` for moderate-or-higher vulnerability checks.

## Reporting A Security Issue

If you find an accidental credential exposure or dependency issue, please report it through GitHub Issues:

<https://github.com/andriimaksymov/portfolio/issues>

If the issue contains sensitive information, avoid posting the sensitive value itself. Describe where it appears and how to reproduce the finding.
