# VercelDrive Docs

Documentation site for [VercelDrive](https://github.com/Astear17/VercelDrive), a self-hosted OneDrive file browser built with Next.js and TypeScript.

**Live site**: [https://2drv-docs.vercel.app](https://2drv-docs.vercel.app)

**Main app repo**: [https://github.com/Astear17/VercelDrive](https://github.com/Astear17/VercelDrive)

## What this docs site covers

- Getting started with one-click Vercel deployment
- Microsoft Entra App Registration and OAuth setup
- Environment variable configuration
- Read-only and read/write access modes
- Protected folders and upload password
- File preview, grid view, search, and direct links
- Cache behavior and edge caching
- Troubleshooting and FAQ

This documentation tracks the **Astear17 fork** of VercelDrive, not the archived upstream project.

## Local development

```bash
pnpm install
pnpm dev
```

The site runs at `http://localhost:3000` by default.

## Build

```bash
pnpm build
```

This is a [Nextra](https://nextra.site) documentation site using `nextra-theme-docs`.

## Folder and content structure

```
src/pages/
├── en/                     # English locale
│   ├── index.mdx           # Homepage
│   ├── docs/
│   │   ├── _meta.js        # Sidebar navigation order
│   │   ├── getting-started.mdx
│   │   ├── custom-configs.mdx
│   │   ├── cache.mdx
│   │   ├── advanced.mdx
│   │   ├── security.mdx
│   │   ├── features/       # Feature docs
│   │   ├── showcase/       # Visual showcase pages
│   │   ├── faqs/           # Troubleshooting and FAQ
│   │   └── migration/      # Version migration guides
│   ├── blog/
│   └── sponsor/
├── vi/                     # Vietnamese locale (mirrors en/ structure)
└── docs/
    └── _images/            # Shared screenshot assets
```

## Screenshot and asset conventions

- **Language-neutral assets** (no UI text visible): `public/assets/general/`
- **English UI screenshots**: `public/assets/en/`
- **Vietnamese UI screenshots**: `public/assets/vi/`
- **Existing shared images**: `src/pages/docs/_images/` (used by both locales via relative paths)

When a screenshot shows UI text in a specific language, use the language-specific asset folder. When the image has no language-dependent content (e.g. diagrams, icons, code blocks), use the general folder.

## Translation convention

Every English page under `src/pages/en/` should have a Vietnamese counterpart under `src/pages/vi/`. The `_meta.js` files in each locale control sidebar labels and ordering. Content should be equivalent but not necessarily word-for-word identical.

If a screenshot exists in English but not yet in Vietnamese, use the English screenshot on the English page and create a Vietnamese placeholder for the Vietnamese page.

## Contributing

1. Fork this repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm build` to verify the site builds
5. Submit a pull request

For content changes, update both English and Vietnamese pages when applicable.

## License

[MIT](LICENSE)
