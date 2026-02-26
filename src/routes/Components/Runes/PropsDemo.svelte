<script lang="ts">
  let { name, age = 25 }: { name: string; age?: number } = $props();
</script>

<div class="concept-card">
  <h4>Concept: Props</h4>
  <p>Hello, welcome.. <strong>{name}</strong>!</p>
  <p>Age: <strong>{age}</strong></p>
</div>

<style>
  .concept-card {
    border: 1px solid #ff3e00;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 8px;
  }
</style>