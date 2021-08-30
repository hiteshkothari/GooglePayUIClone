<script>
  import { push } from "svelte-spa-router";

  // TODO: Location access here
  // TODO: Login check and Validation
  //  To make the black dots fill and animate it

  setInterval(() => {});
  let pin = "";
  let pinDots = [, , , ,];
  let maxLength = 4;
  let errorMessage = "";
  function checkPIN() {
    console.log(pin);
    if (pin.length == 4) {
      if (pin == "1234") {
        setTimeout(() => {
          push("/Landing");
        }, 1000);
      } else {
        pin = "";
        errorMessage = "Incorrect PIN";
      }
    } else {
      errorMessage = "";
    }
  }
</script>

<div class="flex flex-col items-center text-center dark:bg-black">
  <img
    src="img/google.png"
    alt="google"
    width="50px"
    height="50px"
    class="my-8"
  />
  <div class="text-xl">Enter Google PIN</div>
  <div class="text-sm">hitesh***@gmail.com</div>
  <div class="relative">
    <div class="flex my-4 ">
      <!-- this is for the animations -->
      <!-- bg-gray-500 border-gray-500  -->
      <!-- this is for the text  -->
      <!--  bg-black -->
      {#each pinDots as dots, i}
        <div
          class="rounded-full borderDedd border-black mx-2 h-5 w-5   {pin.length ==
          maxLength
            ? 'bg-gray-600 border-gray-600  example wiggle animate-example '
            : pin.length > i
            ? 'bg-gray-800'
            : ''}"
          style="animation-delay: {i * 0.25}s;"
        />
        <!-- style="animation-delay: {i / 50}s;" -->
      {/each}
      <!-- <div class="rounded-full border-2 border-black mx-2 h-4 w-4" />
      <div
      class="rounded-full border-2 border-black mx-2 h-4 w-4 bg-gray-800 border-gray-800 animate-pulse"
      />
      <div
      class="rounded-full border-2 border-black mx-2 h-4 w-4 bg-black animate-pulse"
      /> -->
      <!-- <span /> -->
    </div>
    <input
      type="text"
      class="absolute inset-x-0 top-0 h-8 border-0 bg-transparent text-transparent outline-none"
      bind:value={pin}
      maxlength="4"
      on:input={checkPIN}
    />
    <div class="text-red-500">{errorMessage}</div>
  </div>
  <!-- <div>
    Keyboard
</div> -->
</div>

<style>
  /* animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; */
  /* opacity: 0; */
  /* .animate-pulse {
    animation: pulse 1s linear infinite;
    transform: scale(0.5);
  } */
  .borderDedd {
    border-width: 1.5px;
  }
  /* @keyframes pulse {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
  } */

  /* Now done using this  */
  /* .example-animation {
    animation: tw-example-animation 1s infinite;
    transform: scale(0.75);
  }
  @keyframes example {
    0% {
      background-color: gray;
    }
    20% {
      background-color: black;
    }
    25% {
      background-color: gray;
    }
  } */
</style>
