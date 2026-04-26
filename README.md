<div align="center">

# PasteClean

**Clean tracking junk from links before you share them.**

[![Platform](https://img.shields.io/badge/Windows-x64-111111?style=for-the-badge&labelColor=050505)](https://github.com/iiXotic/PasteClean/releases)
[![Version](https://img.shields.io/badge/v0.1.0-PasteClean-111111?style=for-the-badge&labelColor=050505)](https://github.com/iiXotic/PasteClean/releases)
[![Privacy](https://img.shields.io/badge/local-first-111111?style=for-the-badge&labelColor=050505)](#privacy)

[Download for Windows](https://github.com/iiXotic/PasteClean/releases) · [What It Removes](#what-it-removes) · [Privacy](#privacy)

</div>

---

## Overview

PasteClean is a small Windows desktop app for cleaning messy URLs. Paste a link, remove tracking parameters, then copy the clean version.

It is built for a simple promise: **your links stay on your machine, and the shared URL gets quieter.**

## Features

- **Manual link cleaning:** paste, clean, copy.
- **Local-first privacy:** no account, no cloud processing, no URL logs.
- **Common tracker removal:** strips UTMs, click IDs, and social/ad tracking parameters.
- **Windows installer:** packaged as a normal standalone desktop app.

## What It Removes

PasteClean removes common tracking parameters including:

```text
utm_source    utm_medium    utm_campaign    utm_term
utm_content   utm_id        gclid           fbclid
igshid        _gl           msclkid         mc_eid
yclid         ref           ref_src         ref_url
click_id
```

It also removes:

- any parameter starting with `utm_`
- any parameter ending with `clid`

Example:

```text
https://shop.com/item?id=123&utm_source=email&fbclid=ABC123
```

becomes:

```text
https://shop.com/item?id=123
```

## Privacy

PasteClean runs locally on your PC. The current app does not require an account, analytics dashboard, server-side URL processing, or cloud sync.

## Download

Download the latest Windows installer from:

**[GitHub Releases](https://github.com/iiXotic/PasteClean/releases)**

Look for a file named:

```text
PasteClean_0.1.0_x64-setup.exe
```

---

<div align="center">

Made by [iiXotic](https://github.com/iiXotic)

</div>
