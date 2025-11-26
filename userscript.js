// ==UserScript==
// @name         Redirect Medium Anywhere to scribe.rip
// @namespace    https://davidblue.wtf
// @version      0.3
// @description  Auto-redirect Medium articles even on custom domains
// @match        *://*/*
// @run-at       document-start
// @license      Unlicense
// ==/UserScript==

(function () {
    "use strict";

    const url = location.href;

    // detect Medium article format
    const isMediumURL =
        /\/p\/[a-f0-9]{12}$/i.test(url) ||          // canonical Medium article ids
        /-[a-f0-9]{12,}$/i.test(url);               // slug ending in long id

    if (!isMediumURL) return;
    if (url.includes("scribe.rip")) return;

    const newUrl = "https://scribe.rip" + location.pathname + location.search + location.hash;
    location.replace(newUrl);
})();
