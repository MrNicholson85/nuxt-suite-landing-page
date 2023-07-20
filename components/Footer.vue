<template>
  <div class="footer flex justify-between mt-[91px] mb-[71px]">
    <div><img :src="Logo" /></div>
    <div class="body text-[15px] text-ashyBlue">Copyright - Suite</div>
    <div class="flex lg:w-[116px] justify-between items-center">
      <div class="icons bg-[url('~~/assets/images/icon-facebook.svg')] hover:bg-[url('~~/assets/images/icon-facebook-hover.svg')]"></div>
      <div class="icons bg-[url('~~/assets/images/icon-twitter.svg')] hover:bg-[url('~~/assets/images/icon-twitter-hover.svg')]"></div>
      <div class="icons bg-[url('~~/assets/images/icon-instagram.svg')] hover:bg-[url('~~/assets/images/icon-instagram-hover.svg')]"></div>
    </div>
  </div>
</template>

<script setup>
import Logo from "~~/assets/images/suite.svg";
import fb from "~~/assets/images/icon-facebook.svg";
import tw from "~~/assets/images/icon-twitter.svg";
import ig from "~~/assets/images/icon-instagram.svg";
import fbHover from "~~/assets/images/icon-facebook-hover.svg";
import twHover from "~~/assets/images/icon-twitter-hover.svg";
import igHover from "~~/assets/images/icon-instagram-hover.svg";


  function btn_changer() {
    if(hover) {
      btn_img = "";
    } else {
      btn_img = ""
    }
  }

</script>

<style scoped>
.icons {
  @apply w-[20px] h-[20px] cursor-pointer bg-center bg-no-repeat
}
</style>
