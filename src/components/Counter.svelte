<script lang="ts">
  import { useDispatch, useSelect } from "../lib";

  const count$ = useSelect((state: {value: number}) => state.value);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({type: 'Counter/increment'});
  }
</script>

<button onclick={increment}>
  count is {$count$}
</button>
