<template>
  <div class="hero">
    <div class="flex relative">
      <div class="hero_content relative">
        <div class="headingXl md:w-[500px] lg:w-[635px]">
          A <span>super solution</span> for your <span>business</span>.
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
          <div class="headingLg font-bold">2+</div>
          <div class="text-baseleading-[26px] tracking-[2.5px] uppercase">
            Companies
          </div>
        </div>
        <div>
          <div class="headingLg font-bold">8</div>
          <div class="text-baseleading-[26px] tracking-[2.5px] uppercase">
            Languages
          </div>
        </div>
        <div>
          <div class="headingLg font-bold">1.2M</div>
          <div class="text-baseleading-[26px] tracking-[2.5px] uppercase">
            Leads
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero {
  @apply grid
    mt-[67px]
    h-[600px]
    md:h-[482px]
    grid-cols-1
    lg:grid-cols-[824px_190px]
    place-content-center
    items-center
    md:gap-[96px];
}

.hero_graphic {
  @apply w-[350px]
  lg:h-[600px]
  md:h-[482px]
  md:w-[281px]
  bg-cover
  lg:bg-contain
  absolute
  right-0
  -top-[112px]
  -z-10
  lg:bg-hero-bg-lg
  md:bg-[url('assets/images/image-hero-portrait.webp')];
}

.hero_content {
}
</style>
