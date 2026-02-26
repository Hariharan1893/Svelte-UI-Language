<script lang="ts">
  import Card from '../../Snippets/Card.svelte';

  let user = $state({ name: 'Alpha', role: 'Admin' });
</script>

{#snippet cardHeader()}
  <strong>User Profile</strong>
{/snippet}

{#snippet statusLabel(role: string)}
  <span class="badge">{role}</span>
{/snippet}

<Card header={cardHeader}>
  <p>Name: {user.name}</p>

  <p>Status: {@render statusLabel(user.role)}</p>

  {#snippet footer()}
    <p>Last logged in: 2 mins ago</p>
  {/snippet}
</Card>

<style>
  .badge {
    background: #ff3e00;
    color: white;
    padding: 2px 5px;
    border-radius: 4px;
  }
</style>