# Polymorphic Button

## Overview

Create a type‑safe `Button` that can render as **`<button>`** or **`<a>`**.

### Time Estimate

⏱ \~1 hour

### Your Tasks

1. Define two prop variants – link vs action – using a **discriminated union**.
2. Render the appropriate underlying element.
3. Forward refs with `React.forwardRef`.

### Acceptance Criteria

* TS forbids `href` **and** `onClick` together.
* Consumers can pass extra HTML props for the chosen element.

### Stretch Goals

* Add a generic `as` prop for **full polymorphism** (any element/component).
* Create a `ButtonGroup` compound component.

### Key Concepts Practiced

Discriminated unions · Polymorphism · ForwardRef · Composition
