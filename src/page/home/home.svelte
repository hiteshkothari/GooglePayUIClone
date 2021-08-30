<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "svelte-awesome";
  import {
    arrowRight,
    bank,
    copy,
    creditCard,
    plusCircle,
    rupee,
    trophy,
    user,
  } from "svelte-awesome/icons";
  import { push } from "svelte-spa-router";
  import { fade, fly } from "svelte/transition";
  import Navbar from "../../component/navbar.svelte";
  import { checkScrolling } from "../../constants";

  //   import { "arrow-right"   } from "svelte-awesome/icons";
  // import { storeAlt } from "fortawesome/free-regular-svg-icons";
  onMount(() => {
    checkScrolling("userprofile", "down");
    // checkScrolling("userprofile", "up");
  });
</script>

<!-- transition:fade|local -->

<div id="userprofile">
  <!-- Profile Page -->
  <div>
    <div class="pb-3 bg-gradient-to-b from-white to-blue-200 ">
      <Navbar />
      <div class="flex justify-between mx-6 mt-6">
        <div>
          <div class="">Hitesh Kothari</div>
          <div class="text-xs mt-1">
            <div>+91 77180 81377</div>
            <div>hitesh390@okicic</div>
          </div>
        </div>

        <!-- <div>
        <div
          class="bg-black h-16 w-16 mx-12 border-2 border-dashed rounded-full relative flex"
        >
          <img src="img/hitesh_.jpg" class="rounded-full" alt="hitesh" />
          <div class="h-3 w-3 absolute bottom-0 right-0 ">
            <Icon data={sunO} class="h-3 w-3 absolute bottom-0 right-0 " />
          </div>
        </div>
      </div> -->
        <div>
          <img
            src="img/gpayCodeProfile.png"
            alt="Code Profile"
            class="h-24 w-24 relative -top-4"
          />
        </div>
      </div>
      <div class="flex gap-4 mx-6 mb-4">
        <div>
          <Icon data={trophy} class="text-yellow-500" />
        </div>
        <div>
          <Icon data={rupee} />
          <span>671</span>
          <span class="text-xs"> Rewards earned </span>
        </div>
      </div>
    </div>
    <div
      class="pb-4"
      in:fly|local={{ y: window.innerHeight / 2, duration: 500, delay: 200 }}
      out:fly|local={{ y: window.innerHeight, duration: 500 }}
    >
      <div class="relative h-40 -top-4 ">
        <div class="bg-white mx-6 rounded-xl shadow-lg text-xs">
          <div class="flex justify-between p-4">
            <span class="font-semibold"> Set up payment methods 1/2 </span>
            <Icon data={arrowRight} class="h-6 w-6 text-blue-700 " />
          </div>
          <div class="flex justify-center gap-12 pb-3">
            <div class="flex flex-col text-center ">
              <div class="flex justify-center items-center">
                <div class="relative ">
                  <div
                    class="flex justify-center items-center w-12 h-12 m-2 text-blue-700 "
                  >
                    <Icon data={bank} class="w-6 h-6" />
                  </div>
                  <!-- <Icon data={plusCircle} class="absolute right-1 bottom-1" /> -->
                </div>
              </div>
              <span class="font-bold">Bank Account </span>
              <span class=""> 2 accounts</span>
            </div>
            <div class="flex flex-col text-center ">
              <div class="flex justify-center items-center">
                <div class="relative ">
                  <div
                    class="flex justify-center items-center border-dashed border-gray-400 border-2 rounded-full w-12 h-12 bg-blue-100 m-2 text-blue-700"
                  >
                    <Icon data={creditCard} />
                  </div>
                  <Icon data={plusCircle} class="absolute right-1 bottom-1" />
                </div>
              </div>
              <span class="font-bold">Pay Business </span>
              <span class=""> Debit/credit card</span>
            </div>
          </div>
        </div>
      </div>

      <div class="m-4">
        <div class="flex flex-col gap-4">
          <div class="flex gap-4 justify-between">
            <div><Icon data={user} /></div>
            <div class="flex-grow">
              <div class="font-bold text-sm">Business Page</div>
              <div class="text-xs">
                Publish & share information about tyour business
              </div>
            </div>
            <div class="text-blue-500 text-sm font-bold">Create</div>
          </div>
          <div class="flex gap-4 justify-between">
            <div><Icon data={user} /></div>
            <div class="flex-grow">
              <div class="font-bold text-sm">Invite friends, get rewards</div>
              <div class="text-xs">
                Share your code <b>i03fl <Icon data={copy} /></b>
              </div>
            </div>
            <div class="text-blue-500 text-sm font-bold">Share</div>
          </div>
          <div
            class="flex gap-4 justify-between"
            on:click={() => {
              push("/Settings");
            }}
          >
            <div><Icon data={user} /></div>
            <div class="flex-grow">
              <div class="font-bold text-sm">Settings</div>
              <!-- <div>Publish & share information about tyour business</div> -->
            </div>
            <!-- <div class="text-blue-500">Create</div> -->
          </div>

          <div
            class="flex gap-4 justify-between"
            on:click={() => {
              push("/HelpNFeedback");
            }}
          >
            <div><Icon data={user} /></div>
            <div class="flex-grow">
              <div class="font-bold text-sm">Help & feedback</div>
              <!-- <div>Publish & share information about tyour business</div> -->
            </div>
            <!-- <div class="text-blue-500">Create</div> -->
          </div>
          <div
            class="flex gap-4 justify-between"
            on:click={() => {
              push("/Login");
            }}
          >
            <div><Icon data={user} /></div>
            <div class="flex-grow">
              <div class="font-bold text-sm">Logout</div>
              <!-- <div>Publish & share information about tyour business</div> -->
            </div>
            <!-- <div class="text-blue-500">Create</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
