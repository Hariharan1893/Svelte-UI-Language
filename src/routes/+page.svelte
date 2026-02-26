<script>
  // Runes and Props
  import RunesDemo from "./Components/Runes/RunesDemo.svelte";
  import PropsDemo from "./Components/Runes/PropsDemo.svelte";
  import SharedState from './Components/Runes/SharedState.svelte';
  import SpreadProps from "./Components/Runes/SpreadProps.svelte";

  // Data for the 'Spread Props' concept
  const pkgData = {
    name: "Svelte 5",
    version: "5.0.1",
    description: "A reactive UI framework",
    website: "https://svelte.dev"
  };

  // Async Block
  import AsyncBlock from "./Components/AsyncBlock/AsyncBlock.svelte";

  // Conditional Blocks
  import IfBlock from "./Components/ConditionalBlock/IfBlock.svelte";
  import EachBlock from "./Components/ConditionalBlock/EachBlock.svelte";

  // DOM Events
  import DomEvents from "./Components/DomEvents/DomEvents.svelte";

  // Bindings
  import Bindings from "./Components/Bindings/Bindings.svelte";

  // Snippets
  import SnippetsDemo from "./Components/SnippetsDemo/SnippetsDemo.svelte";
</script>

<RunesDemo />

<PropsDemo name="Developer" />

<PropsDemo name="Svelte Expert" age={30} />

<SharedState />

<SpreadProps {...pkgData} />

<AsyncBlock />

<IfBlock />

<EachBlock />

<DomEvents />

<Bindings />

<SnippetsDemo />