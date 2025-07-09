# Component & Hook Testing

## Overview

Write Jest + React Testing Library tests for the **Debounced Search Hook** and **Generic List**.

### Time Estimate

⏱ \~1 hour

### Your Tasks

1. Add tests that:

   * Render the hook with `renderHook` and assert debounce timing.
   * Render `GenericList` and verify `onSelect` fires.
2. Mock timers (`jest.useFakeTimers`).
3. Ensure TypeScript test files compile (`ts-jest` or `babel-jest`).

### Acceptance Criteria

* All tests pass with `npm test`.
* Coverage shows lines in both components exercised.

### Stretch Goals

* Test an **ErrorBoundary** catching a thrown child.
* Snapshot test the rendered list.

### Key Concepts Practiced

RTL · Jest · Mocks/spies · Unit vs integration
