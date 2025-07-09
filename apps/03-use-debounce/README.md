# Debounced Search Hook

## Overview

Implement a generic `useDebounce<T>(value: T, delay?: number)` custom hook.

### Time Estimate

⏱ \~1 hour

### Your Tasks

1. Write the hook using `useEffect` + `setTimeout`/`clearTimeout`.
2. Demonstrate with a search input that fetches or filters only after 500 ms of inactivity.
3. Ensure the hook works with **any type** (`string`, `number`, object refs).

### Acceptance Criteria

* ESLint/TypeScript report no implicit `any`.
* Debounced value updates **after** the timeout, never sooner.

### Stretch Goals

* Cancel an in‑flight **`fetch`** with `AbortController` when value changes.
* Add a sister hook `useThrottle` for comparison.

### Key Concepts Practiced

Custom hooks · Generics · Debounce logic · Cleanup effects
