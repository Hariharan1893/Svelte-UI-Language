<script lang="ts">
  const colors = ['red', 'orange', 'pink', 'green', 'blue', 'yellow'];
  let selected = $state(colors[0]);
</script>

<div class="concept-card">
  <h2>Concept: Loops (#each)</h2>

  <p>Selected color: <span style="color: {selected}">{selected}</span></p>

  <div class="palette">
    {#each colors as color (color)}
      <button
        style="background-color: {color};"
        onclick={() => (selected = color)}
        aria-label="Select {color}"
      >
        {color}
      </button>
    {/each}
  </div>
</div>

<style>
  .concept-card {
    border: 1px solid #ff3e00;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 8px;
  }

  .palette {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  button {
    border: 2px solid transparent;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    transition: transform 0.1s;
  }
</style>