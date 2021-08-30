<script>
  import { push } from "svelte-spa-router";
  setTimeout(() => {
    push("/Login");
  }, 2000);
</script>

<div class="flex flex-col">
  <div class="flex flex-col justify-center items-center">
    <img src="img/logoIcon.svg" alt="Logo" class="h-32 w-32 my-32" />
  </div>
  <div class="fixed bottom-24 right-0 left-0">
    <div class="m-2 text-gray-300 text-3xl text-center">Google</div>
  </div>
</div>

<!-- <style></style> -->
