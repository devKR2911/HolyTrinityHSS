<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape-skew alpha-4 banner-image-container">
        <div class="banner-image-content about-background">
          <h3>Teachers</h3>
        </div>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="text-center mt-4">
              <b-img :src="getImageSrc(staffGroupObj)" fluid-grow alt="Responsive image"></b-img>
            </div>
            <div class="text-center mt-5">
              <h4>2019 Faculties</h4>
            </div>
            <div class="mt-5 py-5 border-top text-justify">
              <b-container fluid class="p-4">
                <div class="row">
                  <div
                    class="col-lg-2 col-md-4 col-6"
                    v-for="staff in facultiesListOne"
                    :key="staff.id"
                  >
                    <b-img :src="getImageSrc(staff)" thumbnail fluid-grow alt="Responsive image"></b-img>
                    <div class="title-container">
                      <p class="staff-name">{{staff.name}}</p>
                      <p class="designation">{{staff.designation}}</p>
                    </div>
                  </div>
                </div>
              </b-container>

              <b-container fluid class="p-4">
                <div class="row">
                  <div
                    class="col-lg-2 col-md-4 col-6 image-container"
                    v-for="staff in facultiesListTwo"
                    :key="staff.id"
                  >
                    <b-img :src="getImageSrc(staff)" thumbnail fluid-grow alt="Responsive image"></b-img>
                    <!-- <img :src="getImageSrc(staff)" alt /> -->
                    <div class="title-container">
                      <p class="staff-name">{{staff.name}}</p>
                      <p class="designation">{{staff.designation}}</p>
                    </div>
                  </div>
                </div>
              </b-container>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script src="./Teachers.js"></script>
<style lang="scss">
@import "./Teachers.scss";
</style>

