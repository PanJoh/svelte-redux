<script lang="ts">
  import type { Store } from "redux";
  import { setContext, type Snippet } from "svelte";
  import { ReduxContext } from "./hooks";

  let { store, children }: {store: Store, children: Snippet} = $props();
  setContext(ReduxContext, store);
</script>

{@render children()}