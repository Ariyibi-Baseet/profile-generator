<script setup>
import loadingLogo from "@/assets/img/loading-icon.gif";
</script>

<template>
  <Transition>
    <div class="loader-wrapper">
      <div class="loader">
        <img :src="loadingLogo" alt="" />
        <h4>Generating your profile... Please wait...</h4>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@import "../assets/sass/_loader";
</style>
