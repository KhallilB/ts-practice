# Compound Tabs UI

## Overview

Create a fully‑typed **Tabs** system using the compound component pattern.

### Time Estimate

⏱ \~1 hour

### Your Tasks

1. Build `<Tabs>` parent managing `activeIndex`.
2. Implement `<Tabs.List>`, `<Tabs.Tab>`, and `<Tabs.Panel>`.
3. Use **Context API** to share state; avoid prop drilling.
4. Support **controlled** (`activeIndex` + `onChange`) and **uncontrolled** modes.

### Acceptance Criteria

* Consumers can arrange `Tab` and `Panel` children in any order.
* Keyboard navigation (← → Home End) works.

### Stretch Goals

* Add fade/slide animation on panel change.
* Provide a **render prop** alternative (`<Tabs>{({activeIndex}) => …}</Tabs>`).

### Key Concepts Practiced

Compound components · Context · Controlled vs uncontrolled · A11y
