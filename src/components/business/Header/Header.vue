<template>
  <div id="ftco-navbar" class="ftco_navbar ftco-navbar-light">
    <div class="py-2 bg-primary">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img class="logo" src="@assets/header/logotrans.png" alt="logo" />
          THE HOLY TRINITY ENGLISH MEDIUM HSS
        </a>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container d-flex align-items-center">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="oi oi-menu"></span> Menu
        </button>
        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <!-- <a href="index.html" class="nav-link pl-0">Home</a> -->
              <span class="nav-link pl-0">
                <router-link to="/dashboard">Home</router-link>
              </span>
            </li>
            <li class="nav-item">
              <!-- <a href="about.html" class="nav-link">About</a> -->
              <span class="nav-link">
                <router-link to="/about">About</router-link>
              </span>
            </li>
            <li class="nav-item">
              <!-- <a href="teacher.html" class="nav-link">Faculty</a> -->
              <span class="nav-link">
                <router-link to="/teachers">Teachers</router-link>
              </span>
            </li>
            <li class="nav-item">
              <!-- <a href="courses.html" class="nav-link">Courses</a> -->
              <span class="nav-link">
                <router-link to="/courses">Courses</router-link>
              </span>
            </li>
            <li class="nav-item">
              <!-- <a href="gallery.html" class="nav-link">Gallery</a> -->
              <span class="nav-link">
                <router-link to="/gallery">Gallery</router-link>
              </span>
            </li>
            <li class="nav-item">
              <!-- <a href="blog.html" class="nav-link">Blog</a> -->
              <span class="nav-link">
                <router-link to="/blog">Blog</router-link>
              </span>
            </li>
            <li class="nav-item">
              <!-- <a href="contact.html" class="nav-link">Contact</a> -->
              <span class="nav-link">
                <router-link to="/contact">Contact</router-link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script src="./Header.js"></script>

<style lang="scss">
@import './Header.scss';
</style>
