# Generic List Component

## Overview

Build a reusable **`<GenericList<T>>`** component that takes:

1. `items: T[]` – an array of any shape.
2. `renderItem: (item: T) => ReactNode` – a render prop.
3. `onSelect?: (item: T) => void` – optional click callback.

### Time Estimate

⏱ \~1 hour

### Your Tasks

1. **Type the props** using a generic parameter `T`.
2. Render the list with stable keys – add a generic constraint requiring an `id` or accept a `keyExtractor` prop.
3. Invoke `onSelect` when an item is clicked.
4. Provide simple demo usage with at least two different item types (e.g., `User` and `Product`).

### Acceptance Criteria

* The component compiles with **zero `any`**.
* Consumers get full IntelliSense for `renderItem`/`onSelect`.
* Clicking an item logs or displays its details.

### Stretch Goals

* Add support for rendering in **table** or **grid** layout via a `variant` prop.
* Write **unit tests** asserting that passing the wrong item type causes a compile‑time error.

### Key Concepts Practiced

Generics · Utility types · Prop typing · React children as functions
