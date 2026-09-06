# PDF.js browser runtime

Unmodified `pdf.mjs` and the matching public worker/resources are from Mozilla pdfjs-dist **5.6.205**, supplied by the local workspace runtime. They are vendored so the feature does not need a CDN or extra package download. Apache-2.0 license is retained in LICENSE; resource folders retain their licenses. `pdf.d.mts` is the application's narrow interface declaration.

Source and API: https://mozilla.github.io/pdf.js/ and https://github.com/mozilla/pdf.js

When updating, replace the main module and `public/vendor/pdfjs` worker/resources together. They must have identical versions. Do not edit the vendored JavaScript.

