<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape-skew alpha-4 banner-image-container">
        <div class="banner-image-content about-background">
          <h3>Courses</h3>
        </div>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12" v-for="course in courseList" :key="course.id">
              <div class="row px-4 p-0 m-4 course-container">
                <div
                  class="col-lg-6 col-md-6 col-12 course-image"
                  v-bind:style="{ backgroundImage: 'url(' + getImageSrc(course) + ')' }"
                ></div>
                <div class="col-lg-6 col-md-6 col-12 course-details">
                  <h5 class="course-name">{{course.name}}</h5>
                  <h6>
                    <span class="class-time-key">Class time:&nbsp;</span>
                    <span>{{course.classTime}}</span>
                  </h6>
                  <p class="course-desc">
                    <small>{{course.description}}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script src="./Courses.js"></script>
<style lang="scss">
@import "./Courses.scss";
</style>