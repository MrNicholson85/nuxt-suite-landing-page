<template>
  <div class="work slp-container">
    <div >
      <img class="absolute -z-[1] w-[496px] left-[20px] -bottom-[50px]" :src="ovalEffect"/>
    </div>
    <div class="lg:w-[359px]"><img :src="jImg" /></div>
    <div class="ml-[35px] mr-[52px] relative -top-[60px]"><img :src="curved_2" /></div>
    <div class="lg:w-[350px] grid gap-[40px] mt-[40px]">
      <div class="headingLg font-epilogueReg">It just <span>works.</span></div>
      <div class="body text-[20px] leading-[2.1rem]">
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
import ovalEffect from "~~/assets/images/oval_gradient.svg";
</script>

<style>
.work {
  @apply
    relative
    flex
    justify-center
    items-center
    text-offWhite
    mt-[220px]
    after:content-['']
    after:bg-royal
    after:rounded-[15px]
    after:-z-10
    after:absolute
    after:h-[545px]
    after:w-full
    after:mt-[42px];
}
</style>
