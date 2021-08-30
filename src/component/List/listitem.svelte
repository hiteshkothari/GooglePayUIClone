<script>
  import Icon from "svelte-awesome";

  export let icon = "";
  export let text = "";
</script>

<div class="flex">
  <Icon name={icon} />
  <div>{text}</div>
</div>
