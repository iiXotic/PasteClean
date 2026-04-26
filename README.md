# PasteClean

PasteClean is a small Windows desktop app that removes tracking parameters from shared links.

The app is built with React, TypeScript, Vite, Tailwind CSS, and Tauri. It runs locally on Windows: paste a messy URL, clean it, then copy the cleaned result.

## What It Removes

PasteClean removes common tracking parameters such as:

- `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `utm_id`
- `gclid`, `fbclid`, `igshid`, `_gl`, `msclkid`, `mc_eid`, `yclid`
- `ref`, `ref_src`, `ref_url`, `click_id`
- any parameter starting with `utm_`
- any parameter ending with `clid`

## Desktop App

Prerequisites:

- Node.js
- Rust
- Microsoft Edge WebView2 Runtime
- Microsoft C++ Build Tools with the "Desktop development with C++" workload

Install dependencies:

```sh
npm.cmd install
```

Run the web UI:

```sh
npm.cmd run dev
```

Run the desktop app in development:

```sh
npm.cmd run tauri:dev
```

Build the Windows app and installer:

```sh
npm.cmd run tauri:build
```

The NSIS installer is generated at:

```text
src-tauri/target/release/bundle/nsis/PasteClean_0.1.0_x64-setup.exe
```

## Website

The landing page lives in `website/`.

```sh
cd website
npm.cmd install
npm.cmd run dev
npm.cmd run build
```

The website download button points to:

```text
website/public/downloads/PasteClean_0.1.0_x64-setup.exe
```
