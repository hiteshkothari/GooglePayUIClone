<script>
  export let heading = "";
  export let peopleList = [];
  export let extraButtonLayout = "false";
  let randonColour = [
    "bg-pink-900",
    "bg-indigo-500",
    "bg-purple-900",
    "bg-red-100",
    "bg-pink-100",
    "bg-yellow-100",
    "bg-blue-800",
    "bg-yellow-50",
    "bg-yellow-800",
    "bg-red-800",
    "bg-gray-500",
    "bg-purple-600",
    "bg-yellow-300",
    "bg-blue-500",
    "bg-green-200",
    "bg-pink-700",
    "bg-green-400",
    "bg-indigo-100",
    "bg-yellow-200",
    "bg-purple-300",
    "bg-pink-600",
    "bg-green-50",
    "bg-red-300",
    "bg-blue-200",
    "bg-blue-400",
    "bg-purple-800",
    "bg-gray-50",
    "bg-indigo-400",
    "bg-indigo-50",
    "bg-blue-700",
    "bg-purple-200",
    "bg-gray-900",
    "bg-indigo-600",
    "bg-purple-100",
    "bg-indigo-300",
    "bg-red-200",
    "bg-red-50",
    "bg-purple-700",
    "bg-green-700",
    "bg-red-900",
    "bg-pink-400",
    "bg-gray-400",
    "bg-blue-900",
    "bg-yellow-500",
    "bg-pink-300",
    "bg-gray-200",
    "bg-purple-500",
    "bg-gray-300",
    "bg-gray-600",
    "bg-red-700",
    "bg-gray-700",
    "bg-yellow-400",
    "bg-yellow-600",
    "bg-pink-50",
    "bg-green-900",
    "bg-indigo-700",
    "bg-green-500",
    "bg-red-600",
    "bg-indigo-900",
    "bg-blue-50",
    "bg-gray-800",
    "bg-indigo-200",
    "bg-green-600",
    "bg-blue-600",
    "bg-gray-100",
    "bg-blue-300",
    "bg-yellow-900",
    "bg-yellow-50",
    "bg-yellow-700",
    "bg-green-100",
    "bg-indigo-800",
    "bg-pink-200",
    "bg-pink-800",
    "bg-red-500",
    "bg-green-300",
    "bg-purple-400",
    "bg-blue-100",
    "bg-red-400",
    "bg-green-800",
    "bg-pink-500",
  ];
  let peopleListShowMore = false;
</script>

<div class="mx-3">
  {#if extraButtonLayout == "true"}
    <div class="text-sm">
      <div class="flex justify-between">
        <div class=" font-bold mx-2">{heading}</div>
        <button
          class="rounded-full p-2 px-4 bg-blue-100 text-blue-500 font-bold"
        >
          Explore
        </button>
      </div>
      <div
        class="flex flex-nowrap overflow-x-auto  whitespace-nowrap gap-2 items-start my-2"
      >
        <button class="rounded-full p-2 px-4 bg-white font-bold border">
          Bills
        </button>
        <button class="rounded-full p-2 px-4 bg-white font-bold border">
          Recharge
        </button>
        <button class="rounded-full p-2 px-4 bg-white font-bold border">
          DTH / Cable
        </button>
        <button class="rounded-full p-2 px-4 bg-white font-bold border">
          Google Play Store
        </button>
        <button class="rounded-full p-2 px-4 bg-white font-bold border">
          Electricity
        </button>
      </div>
    </div>
  {:else}
    <div class="text-sm font-bold mx-2">{heading}</div>
  {/if}
  <div class="flex flex-wrap  justify-start ">
    {#each peopleList as people, i}
      <div
        class="text-center w-16 max-w-16 h-24 max-h-24  truncate m-1  relative {i <
          11 || peopleListShowMore
          ? ''
          : 'hidden'}"
      >
        {#if people.opened != "n"}
          <div
            class="absolute right-2.5 top-2.5 h-3 w-3 bg-blue-400 border-white border-2 rounded-full "
          />
        {/if}
        {#if people.profileImg.trim() != ""}
          <div class="h-12 w-12 text-3xl rounded-full  m-2">
            <img src={people.profileImg} alt="sd" class="h-12 w-12 " />
          </div>
        {:else}
          <div
            class="h-12 w-12 text-3xl rounded-full {randonColour[
              people.name.length
            ]} m-2 p-1"
          >
            <span class=""> {people.name.trim()[0]} </span>
          </div>
        {/if}
        {people.name.trim()}
      </div>
    {/each}
    <div
      class="text-center w-16 max-w-16 h-24 max-h-24  truncate m-1 {peopleList.length >
      11
        ? ''
        : 'hidden'}"
      on:click={() => {
        peopleListShowMore = !peopleListShowMore;
      }}
    >
      <div
        class="h-12 w-12 text-3xl rounded-full  m-2 p-1 bg-gray-100 transform {peopleListShowMore
          ? 'rotate-90'
          : '-rotate-90'}"
      >
        <span>
          <!-- {peopleListShowMore ? ">" : "<"} -->
          &lt;
        </span>
      </div>
      {!peopleListShowMore ? "More" : "Less"}
    </div>
  </div>
</div>

<style>
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
</style>
