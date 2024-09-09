<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
// import LoaderComponent from "@/components/LoaderComponent.vue";

const router = useRouter();
const profileResponse = ref("");

const profileFormData = ref({
  brand: "",
  headerImage: "",
  headerTitle: "",
  headerDescription: "",
  facebookLink: "",
  twitterLink: "",
  linkedinLink: "",
  githubLink: "",
});

const submitProfileInfo = () => {
  if (profileFormData.value) {
    fetchData();
    router.push("/profile-details");
  } else {
    alert("Not working");
  }
};

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:1000/details");
    profileResponse.value = response.data;
  } catch (error) {
    console.log("Error");
  }
};

// onMounted(() => {
//   fetchData();
// });
</script>

<template>
  <div class="home-container">
    {{ profileResponse.value }}
    <div class="profile-generator-block">
      <h1>Profile Generator</h1>
      <table class="profile-table">
        <tbody>
          <tr>
            <td>
              <h4>Brand name</h4>
            </td>
            <td>
              <input
                type="text"
                placeholder="your brand or logo here"
                v-model="profileFormData.brand"
              />
            </td>
          </tr>
          <tr>
            <td>
              <h4>Brand Logo <span class="badge">coming soon</span></h4>
            </td>
            <td>
              <input
                disabled
                type="file"
                placeholder="your brand or logo here"
              />
            </td>
          </tr>
          <tr>
            <td>
              <h4>Header Image</h4>
            </td>
            <td>
              <input type="text" v-model="profileFormData.headerImage" />
            </td>
          </tr>
          <tr>
            <td>
              <h4>Header Title</h4>
            </td>
            <td>
              <input type="text" v-model="profileFormData.headerTitle" />
            </td>
          </tr>
          <tr>
            <td>
              <h4>Header Description</h4>
            </td>
            <td>
              <textarea
                name=""
                id=""
                v-model="profileFormData.headerDescription"
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Social Links</h3>
      <table class="social-link-table">
        <tbody>
          <tr>
            <td>
              <h4>Facebook</h4>
            </td>
            <td>
              <input
                type="text"
                placeholder="Your Facebook Profile Link"
                v-model="profileFormData.facebookLink"
              />
            </td>
          </tr>
          <tr>
            <td>
              <h4>Twitter</h4>
            </td>
            <td>
              <input
                type="text"
                placeholder="Your Twitter Profile Link"
                v-model="profileFormData.twitterLink"
              />
            </td>
          </tr>
          <tr>
            <td>
              <h4>Linkedin</h4>
            </td>
            <td>
              <input
                type="text"
                placeholder="Your Linkedin Profile Link"
                v-model="profileFormData.linkedinLink"
              />
            </td>
          </tr>
          <tr>
            <td>
              <h4>Github</h4>
            </td>
            <td>
              <input
                type="text"
                placeholder="Your Github Profile Link"
                v-model="profileFormData.githubLink"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button @click="submitProfileInfo">Generate Profile</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- <LoaderComponent /> -->
</template>

<style lang="scss" scoped>
@import "../assets/sass/_home";
</style>
