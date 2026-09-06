# Automatic PDF metadata

The admin can drop or select one PDF, receive suggested title, description, levels, topics, document types and tags, plus a cover rendered from its first page, then review and save. Analysis does not publish or upload automatically. Existing manually entered values remain unless the admin explicitly starts a new document. Failures preserve manual entry. Scanned/encrypted/unreadable PDFs display a clear message. No external analysis service or cost without configuration/authorization.

Implementation:

- Test metadata classification and sampled-page selection against explicit fixtures, ambiguous grades, scan-only content and cancellation.
- Use locally bundled Mozilla PDF.js 5.6.205, retaining its license, for browser-only text extraction and first-page cover. No remote CDN dependency.
- Add drag-and-drop entry to the existing editor; cancel stale results when selecting another document and avoid overwriting manual edits.
- Verify unit tests, production build and an actual PDF extraction path; retain the existing authentication and direct storage upload flow.

