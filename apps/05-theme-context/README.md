# Global State with Context

## Overview

Implement a `ThemeProvider` that toggles between **light** and **dark** modes.

### Time Estimate

⏱ \~1 hour

### Your Tasks

1. Create `ThemeContext` with `{theme, toggleTheme}`.
2. Type the context value **explicitly**.
3. Build a switch button that consumes the context.
4. Demonstrate both local component state and context state in the same app.

### Acceptance Criteria

* Toggling theme updates UI instantly across all children.
* No stray `any` in context types.

### Stretch Goals

* Persist theme to **`localStorage`**.
* Re‑implement using **Zustand** and compare DX.

### Key Concepts Practiced

Context API · Global vs local state · Theming · Typed context
