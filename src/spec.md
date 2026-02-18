# Specification

## Summary
**Goal:** Build a single-page, dark hacker-themed website that lets users look up Number Info and Vehicle Registration Info via two public APIs.

**Planned changes:**
- Create a single-page UI with two distinct lookup sections (tabs or segmented panels): “Number Info” and “Vehicle Info”, each with input, submit button, and results area.
- Implement Number Info lookup using `https://usesirosint.vercel.app/api/numinfo?key=salaarz&num=<USER_INPUT>` with loading, success rendering (readable JSON/table), and clear error handling.
- Implement Vehicle Info lookup using `https://vehicle-number-info.snipy-owner.workers.dev/?reg=<USER_INPUT>` with loading, success rendering (readable JSON/table), and clear error handling.
- Use React Query for both lookups, caching results keyed by the user input to avoid unnecessary refetching.
- Add a responsive, desktop-friendly layout that uses a centered/wider container and/or multi-column arrangement on large screens and stacks on mobile without horizontal scrolling.
- Apply a consistent dark “hacker/terminal” theme across the page with all user-facing text in English.
- Add generated static images under `frontend/public/assets/generated/` and visibly incorporate them into the UI.

**User-visible outcome:** Users can open the site (no login), switch between Number Info and Vehicle Info tools, run lookups against the provided APIs with loading/error states, and view results in a readable format within a dark hacker-themed, desktop-friendly interface.
