<script lang="ts">
  import Counter from './components/Counter.svelte'
  import store from './store';
  import { StoreProvider } from './lib';
</script>

<main>
  <div class="card">
    <StoreProvider {store}>
      <Counter />
    </StoreProvider>
  </div>
</main>

