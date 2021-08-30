<script>
  import { arrowLeft, ellipsisV } from "svelte-awesome/icons";
  import Icon from "svelte-awesome";
  import { pop, push } from "svelte-spa-router";
  export let title = "";
  export let backAction = "";
  // export let options = "";
  function backActionCall() {
    if (backAction) {
      push(backAction);
    } else {
      pop();
    }
  }
</script>

<div class="flex justify-between mx-4 mb-4 pt-2">
  <div on:click={backActionCall}>
    <Icon data={arrowLeft} />
  </div>
  <div>
    {title}
  </div>
  <div>
    <Icon data={ellipsisV} />
    <!-- {console.log(JSON.stringify(options))} -->
  </div>
</div>
