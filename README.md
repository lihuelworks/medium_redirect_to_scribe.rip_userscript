# Redirect Medium Anywhere to scribe.rip

Redirects Medium articles to scribe.rip, even on custom domains (uxdesign.cc, towardsdatascience.com, etc.).

## What it does

Detects Medium articles by their unique ID format (`-[a-f0-9]{12,}`) instead of domain name, catching ALL Medium publications regardless of custom URLs.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://www.greasespot.net/)
2. Click [userscript.js](userscript.js) and install

## Credits

Based on [Redirect Medium URLs to scribe.rip](https://greasyfork.org/en/scripts/462045-redirect-medium-urls-to-scribe-rip/code) by David Blue.

**Improvement:** Grabs Medium article IDs to redirect ALL Medium content, not just medium.com domain.
