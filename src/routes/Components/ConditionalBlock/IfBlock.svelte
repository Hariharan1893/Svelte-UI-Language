<script lang="ts">
  let num = $state(0);

  let label = $derived(num === 1 ? 'time' : 'times');
</script>

<div class="concept-card">
  <h2>Concept: Control Flow (#if)</h2>

  <button onclick={() => (num += 1)}>
    Clicked {num} {label}
  </button>

  <button onclick={() => (num = 0)} class="reset">Reset</button>

  {#if num > 10}
    <p class="match">{num} is <strong>greater</strong> than 10.</p>
  {:else if num === 10}
    <p class="match">{num} is <strong>exactly</strong> 10!</p>
  {:else}
    <p>{num} is <strong>less</strong> than 10.</p>
  {/if}
</div>

<style>
  .concept-card {
    border: 1px solid red;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 8px;
  }
  .match {
    color: #ff3e00;
    font-weight: bold;
  }
  .reset {
    background: #eee;
    margin-left: 10px;
  }
</style>