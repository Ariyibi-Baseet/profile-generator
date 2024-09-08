<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const profileContent = ref("");

const getProfileContent = async () => {
  try {
    const response = await axios.get("http://localhost:1000/details");
    profileContent.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getProfileContent();
});
</script>

<template>
  <div class="profile-details-wrapper" v-html="profileContent"></div>
</template>

<style lang="scss" scoped>
@import "../assets/sass/_profile-details";
</style>
