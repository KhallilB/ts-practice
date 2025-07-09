# React + TypeScript Senior Interview Prep

This repo contains a curated set of **10 hands‑on mini projects** designed to prepare senior frontend engineers for interviews involving **React + TypeScript**. Each project takes roughly **1 hour** and focuses on a critical concept expected of a senior engineer. These challenges emphasize **type safety**, **reusability**, **performance**, **composition**, and **best practices** with modern React.

---

## 🔧 How to Use This Repo

Each project lives in its own directory under `/projects/`:

```bash
projects/
  01-generic-list/
  02-performance-list/
  03-use-debounce/
  04-tabs-ui/
  05-theme-context/
  06-form-validation/
  07-error-boundary/
  08-testing-suite/
  09-data-fetcher/
  10-polymorphic-button/
```

Inside each folder you will find:

* A **README.md** (the challenge brief)
* Optional **starter code** (when relevant)
* A deliberately failing **test suite** (for testing‑focused projects)
* A **solution** branch with one possible implementation

Clone the repo, check out any project folder, start a timer, and code away.

---

## 🧠 What You’ll Practice

| Area                       | Topics Covered                                                          |
| -------------------------- | ----------------------------------------------------------------------- |
| **React Fundamentals**     | Hooks, context, props, component patterns                               |
| **Advanced TypeScript**    | Generics, utility types, discriminated unions, keyof, conditional types |
| **Component Architecture** | Polymorphism, compound components, controlled/uncontrolled behavior     |
| **State Management**       | Local vs global state, Context API, Zustand/Redux integration           |
| **Performance**            | Memoization, code splitting, lazy loading, virtualization               |
| **Testing**                | Jest, React Testing Library, mocking, assertions                        |
| **Error Handling**         | Error boundaries, runtime and async edge cases                          |
| **API Integration**        | REST fetch, typed interfaces, error/loading handling, React Query       |
| **Reusable Hooks**         | `useDebounce`, `usePrevious`, `useThrottle`                             |

---

## 📂 Project Index

|  # | Folder                  | Title                      | Main Concepts                                  |
| -: | :---------------------- | :------------------------- | :--------------------------------------------- |
|  1 | `01-generic-list`       | Generic List Component     | Generics, utility types, prop typing           |
|  2 | `02-performance-list`   | Performance Optimized List | `useMemo`, `React.memo`, `React.lazy`          |
|  3 | `03-use-debounce`       | Debounced Search Hook      | Custom hooks, generics, debounce logic         |
|  4 | `04-tabs-ui`            | Compound Tabs UI           | Compound components, Context API               |
|  5 | `05-theme-context`      | Global State with Context  | Context, type‑safe global state, theming       |
|  6 | `06-form-validation`    | Form with Validation       | React Hook Form, validation, Zod/Yup           |
|  7 | `07-error-boundary`     | Error Boundary             | Class components, error handling, fallback UIs |
|  8 | `08-testing-suite`      | Component & Hook Testing   | RTL, Jest, unit vs integration tests           |
|  9 | `09-data-fetcher`       | Data Fetcher               | `useEffect`, loading states, typed APIs        |
| 10 | `10-polymorphic-button` | Polymorphic Button         | Discriminated unions, polymorphism, `as` prop  |

---

## 🧭 Suggested Flow

1. Start with **Projects 1‑3** to reinforce TypeScript fundamentals and hook patterns.
2. Move to **Projects 4‑6** for component architecture and form handling.
3. Tackle **Projects 7‑9** to cover robustness, testing, and real‑world data.
4. Finish with **Project 10** to cement advanced prop typing and composition.

---

## 📌 General Interview Tips

* **Narrate your thinking.** Interviewers care more about your reasoning than error‑free typing.
* **Type confidently.** Master generics, utility types, unions, and conditional types.
* **Practice without tools.** Disable autocomplete or linting on a run‑through to mimic whiteboard pressure.
* **Show trade‑offs.** Senior engineers weigh performance, testability, readability, and flexibility.

---

## 🧰 Requirements

* Node 18+
* TypeScript 5+
* React 18+
* (Optional per project) React Hook Form, Zod, React Query, Jest, RTL, etc.

---

> "Simplicity is the soul of efficiency." – Austin Freeman
