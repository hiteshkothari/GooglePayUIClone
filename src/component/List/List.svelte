<script>
  import Listitem from "./listitem.svelte";

  export let list;
</script>

<div>
  {#each list as item}
    <Listitem {...item} />
  {/each}
</div>
