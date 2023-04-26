<template>
  <div class="hero mt-[67px]">
    <div class="relative">
      <div class="headingXl lg:w-[635px]">
        A <span>super solution</span> for your <span>business</span>.
      </div>
      <div class="body w-[350px] mb-[52px] mt-[40px]">
        Our marketing and sales automations help you scale your outreach to get
        more leads for your company.
      </div>
      <a href="/" class="primary_btn">Request Beta Access</a>
    </div>
    <div
      class="lg:w-[350px] h-[600px] bg-contain"
      :style="{ backgroundImage: `url(${herolg})` }"
    ></div>
    <div>
      <div class="grid gap-y-[63px]">
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

<script setup>
import herolg from "~~/assets/images/image-hero-portrait@2x.webp";
</script>

<style scoped>
.hero {
  @apply grid grid-cols-1 lg:grid-cols-3 gap-[124px] place-content-center items-center;
}
</style>
