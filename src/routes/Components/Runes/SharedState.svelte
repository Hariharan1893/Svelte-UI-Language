<script lang="ts">
  // 1. Import the reactive state and the function from your .ts file
  import { userStats, incrementAge } from './shared.svelte.ts';
</script>

<section class="concept-card">
  <h2>Shared Global State ($state in .ts)</h2>

  <p>Age: {userStats.age}</p>
  <p>Logins: {userStats.loginCount}</p>

  <button onclick={incrementAge}>
    Add Age
  </button>

  <button onclick={() => userStats.loginCount++}>
    Add Login
  </button>
</section>

<style>
  .concept-card {
    border: 1px solid #ff3e00;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 8px;
  }
</style>