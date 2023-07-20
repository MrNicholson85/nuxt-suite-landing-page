<template>
  <div class="hero">
    <div class="flex relative">
      <div class=" translate-7-[10px] relative">
        <div class="headingXl relative md:w-[500px] lg:w-[635px] text-royal">
          <img class="absolute right-[57px] -top-[53px]" :src="curvePath" />
          A <span>super solution</span> for your <span>business.</span>
        </div>
        <div class="body w-[350px] mb-[52px] mt-[40px]">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </div>
        <a href="/" class="primary_btn">Request Beta Access</a>
      </div>
      <div class="hero_graphic"></div>
    </div>
    <div>
      <div class="flex justify-between lg:grid lg:gap-y-[63px]">
        <div>
          <div class="headingLg hero_count_heading">2K+</div>
          <div class="hero_count_type">
            Companies
          </div>
        </div>
        <div>
          <div class="headingLg hero_count_heading">8</div>
          <div class="hero_count_type">
            Languages
          </div>
        </div>
        <div>
          <div class="headingLg hero_count_heading">1.2M</div>
          <div class="hero_count_type">
            Leads
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import curvePath from '../assets/images/curvePath.svg';
</script>

<style scoped>
.hero {
  @apply grid
    mt-[119px]
    h-[600px]
    md:h-[482px]
    grid-cols-1
    lg:grid-cols-[824px_190px]
    place-content-center
    items-center
    md:gap-[96px];
}

.hero_graphic {
  @apply md:w-[350px]
  lg:h-[600px]
  md:h-[482px]
  w-[281px]
  bg-cover
  lg:bg-contain
  bg-no-repeat
  absolute
  right-0
  -top-[92px]
  -z-10
  lg:bg-hero-bg-lg
  md:bg-[url('assets/images/image-hero-portrait.webp')];
}

.hero_count_heading {
  @apply font-bold text-royal
}

.hero_count_type {
  @apply text-base leading-[26px] text-[16px] text-ashyBlue tracking-[2.5px] uppercase
}
</style>
