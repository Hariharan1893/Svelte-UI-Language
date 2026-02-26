<script lang="ts">
  interface Coordinates {
    x: number;
    y: number;
  }

  // Reactive state for tracking mouse
  let m = $state<Coordinates>({ x: 0, y: 0 });
  let keyPressed = $state('');

  // Pointer move handler
  function handleMove(event: PointerEvent) {
    m.x = event.clientX;
    m.y = event.clientY;
  }

  // Keyboard handler
  function handleKeydown(event: KeyboardEvent) {
    keyPressed = event.key;
  }
</script>

<div class="concept-card">
  <h2>Concept: DOM Events</h2>

  <div
    onpointermove={handleMove}
    class="move-area"
    role="presentation"
  >
    <p>Move mouse here: <strong>{Math.round(m.x)} x {Math.round(m.y)}</strong></p>
  </div>

  <div
    onkeydowncapture={(e) => console.log(`Outer Div (Capture): ${e.key}`)}
    class="capture-box"
    role="presentation"
  >
    <p>Event Capture (Check Console):</p>
    <input
      onkeydown={handleKeydown}
      placeholder="Type something..."
    />
    {#if keyPressed}
      <p>Last key: <kbd>{keyPressed}</kbd></p>
    {/if}
  </div>

  <button
    onclick={(e) => {
      e.preventDefault();
      alert('Button clicked!');
    }}
  >
    Click with preventDefault
  </button>
</div>

<style>
  .concept-card {
    border: 1px solid #ff3e00;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 8px;
  }

  .move-area {
    height: 100px;
    background: #f0f0f0;
    display: grid;
    place-items: center;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
  }

  .capture-box {
    padding: 10px;
    background: #fff8e1;
    border: 1px solid #ffe082;
    margin-bottom: 1rem;
  }

  kbd {
    background: #333;
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
  }
</style>