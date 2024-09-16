<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const profileResponse = ref("");

const profileFormData = ref({
  brand: "",
  headerTitle: "",
  headerDescription: "",
  facebookLink: "",
  twitterLink: "",
  linkedinLink: "",
  githubLink: "",
});

const submitProfileInfo = () => {
  if (
    profileFormData.value.brand &&
    profileFormData.value.headerTitle &&
    profileFormData.value.headerDescription &&
    profileFormData.value.facebookLink &&
    profileFormData.value.twitterLink &&
    profileFormData.value.linkedinLink &&
    profileFormData.value.githubLink
  ) {
    submitFormData();
    router.push("/profile-details");
  } else {
    alert("Not working");
  }
};

const submitFormData = async () => {
  try {
    const response = await axios.post("http://localhost:1000/profile-data", {
      brand: profileFormData.value.brand,
      headerTitle: profileFormData.value.headerTitle,
      headerDescription: profileFormData.value.headerDescription,
      facebookLink: profileFormData.value.facebookLink,
      twitterLink: profileFormData.value.twitterLink,
      linkedinLink: profileFormData.value.linkedinLink,
      githubLink: profileFormData.value.githubLink,
    });
    profileResponse.value = response.data;
  } catch (error) {
    console.log("Error");
  }
};
</script>

<template>
  <div class="home-container">
    <div class="profile-generator-block row">
      <div class="col-12 col-md-6">
        <div class="profile-block">
          <div class="mb-3">
            <label class="d-block mb-2 fw-bold">Brand Name</label>
            <input
              type="text"
              placeholder="your brand or logo here"
              v-model="profileFormData.brand"
              class="form-control shadow-none"
            />
          </div>
          <div class="mb-3">
            <label class="d-block mb-2 fw-bold">Brand Logo</label>
            <input
              disabled
              type="file"
              placeholder="your brand or logo here"
              class="form-control shadow-none"
            />
          </div>
          <div class="mb-3">
            <label class="d-block mb-2 fw-bold">Header Title</label>
            <input
              type="text"
              v-model="profileFormData.headerTitle"
              class="form-control shadow-none"
            />
          </div>
          <div class="mb-3">
            <label class="d-block mb-2 fw-bold">Header Description</label>
            <textarea
              name=""
              id=""
              v-model="profileFormData.headerDescription"
              class="form-control shadow-none"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="social-link-block">
          <div class="mb-3">
            <label class="d-block mb-2 fw-bold">Facebook</label>
            <input
              type="text"
              placeholder="Your Facebook Profile Link"
              v-model="profileFormData.facebookLink"
              class="form-control shadow-none"
            />
          </div>
          <div class="mb-3">
            <label class="d-block mb-2 fw-bold">Twitter</label>
            <input
              type="text"
              placeholder="Your Twitter Profile Link"
              v-model="profileFormData.twitterLink"
              class="form-control shadow-none"
            />
          </div>
          <div class="mb-3">
            <label class="d-block mb-2 fw-bold">Linkedin</label>
            <input
              type="text"
              placeholder="Your Linkedin Profile Link"
              v-model="profileFormData.linkedinLink"
              class="form-control shadow-none"
            />
          </div>
          <div class="mb-3">
            <label class="d-block mb-2 fw-bold">Github</label>
            <input
              type="text"
              placeholder="Your Github Profile Link"
              v-model="profileFormData.githubLink"
              class="form-control shadow-none"
            />
          </div>
          <button
            class="btn mt-3 generate-profile-btn"
            @click="submitProfileInfo"
          >
            Generate Profile
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/sass/_home";
</style>
