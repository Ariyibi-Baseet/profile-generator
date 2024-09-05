<script setup></script>

<template>
  <div class="home-container">
    <div class="profile-generator-block">
      <h1>Profile Generator</h1>
      <table class="profile-table">
        <tbody>
          <tr>
            <td>
              <h4>Brand name</h4>
            </td>
            <td>
              <input type="text" placeholder="your brand or logo here" />
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
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <h4>Header Title</h4>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <h4>Header Description</h4>
            </td>
            <td>
              <textarea name="" id=""></textarea>
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
              <input type="text" placeholder="Your Facebook Profile Link" />
            </td>
          </tr>
          <tr>
            <td>
              <h4>Twitter</h4>
            </td>
            <td>
              <input
                disabled
                type="file"
                placeholder="Your Twitter Profile Link"
              />
            </td>
          </tr>
          <tr>
            <td>
              <h4>Linkedin</h4>
            </td>
            <td>
              <input type="text" placeholder="Your Linkedin Profile Link" />
            </td>
          </tr>
          <tr>
            <td>
              <h4>Github</h4>
            </td>
            <td>
              <input type="text" placeholder="Your Github Profile Link" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td><button>Generate Profile</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/sass/_home";
</style>
