<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const profileContent = ref("");

const getProfileContent = async () => {
  try {
    const response = await axios.get(
      "http://localhost:1000/profile-generated-page"
    );
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
  <div class="profile-details-wrapper">
    <!-- <p @click="$router.push('/')">👈 Back</p> -->
    <div class="profile-details" v-html="profileContent"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/sass/_profile-details";
* {
  text-decoration: none !important;
}
.navbar-brand {
  font-size: 30px;
}
.profile-wrapper {
  margin-top: 100px;
}
.image-right img {
  width: 350px;
}
</style>
