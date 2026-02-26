
<script lang="ts">

    import { roll } from './utils.ts';



    // In Svelte 5, we keep the promise itself reactive

    let promise = $state(roll());



    function handleRoll() {

        // Re-assigning the promise triggers the {#await} block to restart

        promise = roll();

    }

</script>



<div class="concept-card">

    <h2>Concept: Async Await Blocks</h2>

   

    <button onclick={handleRoll}>Roll the Dice</button>



    {#await promise}

        <p class="loading">Rolling...</p>



    {:then number}

        <p class="success">You rolled a <strong>{number}</strong>!</p>



    {:catch error}

        <p class="error">Error: {error.message}</p>

    {/await}

</div>



<style>

    .concept-card { border: 1px solid red; padding: 1rem; border-radius: 8px; }

    .loading { color: orange; }

    .success { color: green; font-size: 1.2rem; }

    .error { color: red; }

</style>