<script lang="ts">
  let name = $state('Svelte User');
  let volume = $state(50);
  let isAdmin = $state(false);
  let color = $state('#ff3e00');
</script>

<div class="concept-card">
  <h2>Concept: Bindings (bind:)</h2>

  <section>
    <input bind:value={name} placeholder="Enter name" />
    <p>Hello: {name}</p>
  </section>

  <section>
    <input type="range" bind:value={volume} min="0" max="100" />
    <p>Volume: {volume}%</p>
  </section>

  <section>
    <label>
      <input type="checkbox" bind:checked={isAdmin} />
      Admin Access: {isAdmin ? "Yes" : "No"}
    </label>
  </section>

  <section>
    <input type="color" bind:value={color} />
    <p class="color-text" style:color={color}>
      The selected color is {color}
    </p>
  </section>
</div>

<style>
  .concept-card {
    border: 1px solid #ff3e00;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 8px;
  }

  section {
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }

  section:last-child {
    border-bottom: none;
  }

  .color-text {
    font-weight: bold;
  }
</style>