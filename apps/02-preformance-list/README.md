
# Performance Optimized List

## Overview

Render 1,000+ items with a live filter input while keeping 60 fps.

### Time Estimate

⏱ \~1 hour

### Your Tasks

1. Store a large array in state (`useState`).
2. Use `useMemo` to compute the **filtered list** based on the search term.
3. Memoize each row with `React.memo` **or** wrap the row component with `memo()`.
4. Lazily load a heavyweight detail component via `React.lazy` + `<Suspense>`.

### Acceptance Criteria

* Typing in the search bar does **not** cause noticeable lag.
* React DevTools shows minimal re‑renders for list items.

### Stretch Goals

* Plug in **`react‑window`** for virtualization.
* Add a chart that is **code‑split** and only loaded when expanding an item.

### Key Concepts Practiced

`useMemo` · `React.memo` · Code splitting · Lazy loading
