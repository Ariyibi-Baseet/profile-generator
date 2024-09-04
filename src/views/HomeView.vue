<script setup></script>

<template>
  <div class="home-container">
    <div class="profile-generator-block">
      <h1>Profile Generator</h1>
      <table class="profile-table">
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
            <input disabled type="file" placeholder="your brand or logo here" />
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
      </table>

      <h3>Social Links</h3>
      <table class="social-link-table">
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
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap");
$bgBlue: #004f98;
$font-suse: "SUSE", sans-serif;

%flex-stuff {
  display: flex;
  align-items: center;
  justify-content: center;
}

%table-full {
  width: 100%;
}

%td-left-half {
  text-align: left;
  width: 50%;
}

.home-container {
  height: 100vh;
  background-color: $bgBlue;
  font-family: $font-suse;
  @extend %flex-stuff;
  .profile-generator-block {
    width: 500px;
    max-width: 500px;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    h1 {
      margin-bottom: 20px;
    }
    .profile-table {
      @extend %table-full;
      td {
        @extend %td-left-half;
      }
    }
    .social-link-table {
      @extend %table-full;
      td {
        @extend %td-left-half;
      }
    }
  }
}
</style>
