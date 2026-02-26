<script lang="ts">
  let { name, ...others } = $props();
</script>

<div class="concept-card">
  <h2>Spread Props Demo</h2>

  <h3>Name: {name}</h3>

  <p>Description: {others.description}</p>
  <p>Version: {others.version}</p>
  <a href={others.website}>website</a>
</div>

<style>
  .concept-card {
    border: 1px solid #ff3e00;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 8px;
  }
</style>