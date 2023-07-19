<template>
  <div class="footer flex justify-between mt-[91px] mb-[71px]">
    <div><img :src="Logo" /></div>
    <div class="body">Copyright - Suite</div>
    <div class="flex lg:w-[116px] justify-between">
      <img class="w-[20px] h-[20px]" :src="fb" />
      <img class="w-[20px] h-[20px]" :src="tw" />
      <img class="w-[20px] h-[20px]" :src="ig" />
    </div>
  </div>
</template>

<script setup>
import Logo from "~~/assets/images/suite.svg";
import fb from "~~/assets/images/icon-facebook.svg";
import tw from "~~/assets/images/icon-twitter.svg";
import ig from "~~/assets/images/icon-instagram.svg";
</script>

<style scoped></style>
