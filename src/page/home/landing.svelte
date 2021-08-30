<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "svelte-awesome";
  import { qrcode } from "svelte-awesome/icons";
  import { push } from "svelte-spa-router";
  import { fly } from "svelte/transition";
  import { checkScrolling } from "../../constants";
  import { dummyData } from "../../service";
  import FlexListShowMore from "./flexListShowMore.svelte";

  //   import { "arrow-right"   } from "svelte-awesome/icons";
  // import { storeAlt } from "fortawesome/free-regular-svg-icons";

  let peopleList = dummyData.peopleList;
  // [
  //   { name: "Ash", opened: "y", profileImg: "img/assetss/a1enr.png" },
  //   {
  //     name: "Vij 32 r ray                               er ",
  //     opened: "n",
  //     profileImg: "img/assetss/vijay1.png",
  //   },
  //   { name: "Divesh", opened: "y", profileImg: "img/assetss/vijay2.png" },
  //   { name: "Rame riz", opened: "y", profileImg: "img/assetss/random.jpg" },
  //   { name: "2we rwr we r 347687", opened: "n", profileImg: "" },
  //   { name: "Vije ay", opened: "n", profileImg: "" },
  //   { name: "Popatlal w eouhrewr ", opened: "n", profileImg: "" },
  //   { name: "Tarak", opened: "n", profileImg: "" },
  //   { name: "Bh ide", opened: "y", profileImg: "" },
  //   { name: "J ogi", opened: "n", profileImg: "" },
  //   { name: "Ia yr", opened: "n", profileImg: "" },
  //   { name: "Pa      q y", opened: "n", profileImg: "" },
  //   { name: "N itin", opened: "y", profileImg: "" },
  //   { name: "Mr CID 314 324 ", opened: "n", profileImg: "" },
  //   { name: "Mr wq eqw eq sdiu", opened: "y", profileImg: "" },
  //   { name: "sa diu", opened: "y", profileImg: "" },
  //   { name: " Mr wq u", opened: "y", profileImg: "" },
  //   { name: "Ma sd q sdiu wrqwurg qe8g13 ", opened: "y", profileImg: "" },
  // ];
  let businessList = dummyData.businessList;
  //  [
  //   { name: "VI Postpaid", opened: "y", profileImg: "" },
  //   { name: "BEST Mumbai", opened: "y", profileImg: "" },
  //   {
  //     name: "Jio Postpaid",
  //     opened: "y",
  //     profileImg: "",
  //   },
  //   {
  //     name: "Jio Prepaid",
  //     opened: "y",
  //     profileImg: "",
  //   },
  // ];
  let promotionsList = dummyData.promotionsList;
  //  [
  //   { name: "Rewards", opened: "y", profileImg: "img/assetss/rewards.png" },
  //   { name: "Offers", opened: "y", profileImg: "img/assetss/offers.png" },
  //   { name: "Referrals", opened: "y", profileImg: "img/assetss/referrals.png" },
  // ];

  // let scrollingUP;
  onMount(async () => {
    // Pull to refresh Code Start
    checkScrolling("landing", "up");
    // End
  });
</script>

<!-- 
<div class="refresher">
  <div class="loading-bar" />
  <div class="loading-bar" />
  <div class="loading-bar" />
  <div class="loading-bar" />
</div> -->
<!-- {scrollingUP} -->
<!-- in:fly={{ y: window.innerHeight / 2, duration: 500, delay: 500 }}
  out:fly={{ y: window.innerHeight, duration: 500 }} -->
<section in:fly|local={{ y: window.innerHeight / 2, duration: 200, delay: 200 }}
out:fly|local={{ y: window.innerHeight, duration: 200 }} 
  id="landing" 
>
  <!-- Landing Page  -->
  <div class="my-2">
    <div class="fixed top-0">
      <div class="flex justify-between m-2">
        <div
          class="flex rounded-full border p-2 items-center gap-1 text-blue-500 shadow"
        >
          <Icon data={qrcode} />
          <span> Scan any QR </span>
        </div>
        <div class="rounded-full border shadow text-green-500">
          <img
            src="img/assetss/profileimage.jpg"
            alt="Profile"
            class="h-10 w-10"
            on:click={() => {
              push("/Home");
            }}
          />
          <!-- <Icon data={user} class="h-6 w-6 text-blue-700" /> -->
        </div>
      </div>
      <img src="" alt="" />

      <div class="text-center ">
        <img src="img/assetss/covidaid.jpg" alt="Covid Aid" class="w-full " />
        <button
          class="bg-blue-800 text-white text-xs px-2 rounded-xl relative -top-8   "
          >Help India. Donate Now &gt;
        </button>
      </div>
    </div>

    <div class="rounded-t-2xl border border-b-0 relative -top-6 bg-white mt-44">
      <div class="text-center font-bold mt-2 max-h-2">
        <span class="border-2 border-b-0 border-r-0 border-l-0 ">
          &nbsp; &nbsp; &nbsp; &nbsp;
        </span>
      </div>
      <FlexListShowMore {peopleList} heading="People" />
      <div class="mt-4">
        <FlexListShowMore
          peopleList={businessList}
          heading="Businesses & bills"
          extraButtonLayout="true"
        />
      </div>
      <div class="mt-4">
        <FlexListShowMore peopleList={promotionsList} heading="Promotions" />
      </div>
    </div>
    <div class="fixed bottom-12 w-full">
      <div class="text-center">
        <button class="rounded-full bg-blue-500 py-1 px-4 text-white">
          <span class="text-2xl"> + </span><span
            class="text-md align-text-bottom"
          >
            New payment</span
          >
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  /* prevent scrolling */
  /* body.refreshing #inbox {
    filter: blur(1px);
    touch-action: none;
  }
  body.refreshing .refresher {
    transform: translate3d(0, 150%, 0) scale(1);
    z-index: 1;
  }
  .refresher {
    --refresh-width: 55px;
    pointer-events: none;
    width: var(--refresh-width);
    height: var(--refresh-width);
    border-radius: 50%;
    position: absolute;
    transition: all 300ms cubic-bezier(0, 0, 0.2, 1);
    will-change: transform, opacity;
  } */
</style>
