<script>
  // 1. $state: Declares reactive state
  let count = $state(0);
  let num1 = $state(5);
  let num2 = $state(4);
  let items = $state([1, 2, 3]);

  // 2. $derived: For simple calculations based on state
  let total = $derived(num1 + num2);

  // 3. $derived.by: For complex logic (loops, multiple steps)
  let squaredItems = $derived.by(() => {
    return items.map((n) => n * n);
  });

  // 4. $inspect: A dedicated rune for debugging (replaces console.log in effects)
  // This will trigger every time 'count' or 'total' changes
  $inspect(count, total);

  // 5. Functions to update state
  function increment() {
    count += 1;
  }

  function addNumber() {
    // Svelte 5 handles array mutations beautifully
    items.push(items.length + 1);
  }

  // 6. $effect: For side effects (DOM updates, API calls, manual logging)
  $effect(() => {
    if (count >= 10) {
      alert("You've reached 10 clicks!");
    }
  });
</script>

<section class="concept-card">
  <h2>Rune Demonstration</h2>

  <button onclick={increment}>
    Count is: {count}
  </button>

  <hr />

  <div>
    <input type="number" bind:value={num1} /> +
    <input type="number" bind:value={num2} /> =
    <strong>{total}</strong>
  </div>

  <hr />

  <div>
    <button onclick={addNumber}>Add to List</button>
    <p>Original: {items.join(', ')}</p>
    <p>Squared ($derived.by): {squaredItems.join(', ')}</p>
  </div>
</section>

<style>
  .concept-card {
    border: 1px solid #ff3e00;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 8px;
  }
</style>