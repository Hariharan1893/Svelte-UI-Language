# Svelte 5 Core Concepts

This repository serves as a technical reference and implementation guide for the **Svelte 5 UI language**. It covers the fundamental shift from legacy Svelte syntax to the modern **Runes-based** reactivity system, providing modular examples of reactive patterns, component composition, and DOM interaction.

---

## Core Features

### 1. Reactive Runes

The heart of Svelte 5's fine-grained reactivity:

- **`$state`**: Deeply reactive state declarations.
- **`$derived`**: Efficient, cached computations based on state dependencies.
- **`$props`**: Modern component communication using type-safe destructuring.
- **`$effect`**: Managing side effects and synchronizing with the browser DOM.

### 2. Control Flow & Logic

Native-feeling syntax for handling dynamic UI states:

- **Promise Lifecycle**: Managing asynchronous data with `{#await}` blocks.
- **Conditional Rendering**: Branching logic using `{#if}`, `{:else if}`, and `{:else}`.
- **Optimized Loops**: High-performance list rendering with `{#each}` and keyed reconciliation.

### 3. DOM & Event Systems

Direct interaction with the browser environment:

- **Event Handling**: Implementation of pointer events, event capturing, and bubbling modifiers.
- **Declarative Bindings**: Two-way data flow using `bind:value`, `bind:checked`, and reactive `style:` directives.
- **Global Listeners**: Using `<svelte:window>` to handle window-level events like scroll and resize.

### 4. Advanced Component Composition

Moving beyond the limitations of slots:

- **Snippets**: Defining reusable UI blocks with `{#snippet}`.
- **Rendering**: Explicit UI injection using `{@render}`.
- **Parameterized UI**: Passing arguments into snippets for dynamic, type-safe content generation.

### 5. Shared Logic

- **External State**: Leveraging `.svelte.ts` modules to share reactive state across the component tree without traditional stores.

---

## Project Structure

```plaintext
src/routes/
├── Components/
│   ├── Runes/          # Reactivity ($state, $derived, $props)
│   ├── AsyncBlock/     # Asynchronous UI patterns ({#await})
│   ├── Conditional/    # Logic blocks ({#if}, {#each})
│   ├── DomEvents/      # Interaction and Event systems
│   ├── Bindings/       # Data synchronization (bind:)
│   └── SnippetsDemo/   # Advanced composition
├── Snippets/
│   └── Card.svelte     # Reusable layout component using @render
└── +page.svelte        # Entry point demonstrating all core concepts

```

---

## Technical Stack

- **Core**: [Svelte 5](https://svelte.dev)
- **Logic**: TypeScript
- **Environment**: Vite / SvelteKit

---

## Getting Started

1. **Clone the repository**
   **`git clone https://github.com/Hariharan1893/Svelte-UI-Language.git`**
2. **Install dependencies**
   **`npm install`**

3. **Run the development server**
   **`npm run dev`**

4. **View in browser**
   Navigate to **`http://localhost:5173`**
