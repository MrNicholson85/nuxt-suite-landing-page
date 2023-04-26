<template>
  <div class="work slp-container">
    <div class="lg:w-[359px]"><img :src="jImg" /></div>
    <div class="ml-[35px] mr-[52px]"><img :src="curved_2" /></div>
    <div class="lg:w-[350px] grid gap-[40px]">
      <div class="headingLg">It just <span>works.</span></div>
      <div class="body">
        “I really like how it is an all-in-one solution that handle many of the
        tasks that you would normally need separate tools to do the same job.
        This thing is a miracle worker.”
      </div>
      <div>
        <div class="text-lg uppercase font-bold">JEREMY ROBINSON</div>
        <div class="body">CMO, FYLO</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import jImg from "~~/assets/images/image-jeremy-large.webp";
import curved_2 from "~~/assets/images/pattern-curved-line-2.svg";
</script>

<style scoped>
.work {
  @apply flex
    justify-center
    items-center
    text-offWhite
    mt-[200px];
}

.work::after {
  content: "";
  @apply bg-royal rounded-md -z-10 slp-container absolute h-[545px] mt-[42px];
}
</style>
