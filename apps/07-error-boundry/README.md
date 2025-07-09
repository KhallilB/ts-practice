# Error Boundary

## Overview

Write a reusable `ErrorBoundary` class component.

### Time Estimate

⏱ \~1 hour

### Your Tasks

1. Create a class with `state = {hasError: false}`.
2. Implement `static getDerivedStateFromError` + `componentDidCatch`.
3. Render `props.fallback` when `hasError` is true.
4. Wrap a component that intentionally throws to demonstrate.

### Acceptance Criteria

* Error is logged; UI swaps to fallback without full crash.

### Stretch Goals

* Use `react-error-boundary` and compare bundle size/API.
* Capture errors in an **async** `useEffect` and show alt UI.

### Key Concepts Practiced

Class components · Lifecycle methods · Error handling · Fallback UIs
