<script lang="ts">
  // Snippets are received as props of type 'Snippet'
  let { header, children, footer } = $props<{
    header: any;
    children: any;
    footer?: any; // Optional snippet
  }>();
</script>

<div class="card">
  <header>
    {@render header()}
  </header>

  <main>
    {@render children()}
  </main>

  {#if footer}
    <footer>
      {@render footer()}
    </footer>
  {/if}
</div>

<style>
  .card {
    border: 1px solid #ff3e00;
    padding: 1rem;
    margin: 1rem 0;
    width: 300px;
    border-radius: 8px;
  }
  header {
    background: #eee;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  main {
    padding: 10px;
  }
  footer {
    padding: 10px;
    border-top: 1px dashed #ccc;
    font-size: 0.8rem;
  }
</style>