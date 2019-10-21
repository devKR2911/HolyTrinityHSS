<template>
  <div style="position: relative">
    <base-nav transparent type effect="light" expand>
      <a class="navbar-brand" href="#">Default Color</a>

      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
          <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
            <img src="https://demos.creative-tim.com/vue-argon-design-system/img/brand/blue.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav ml-lg-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link nav-link-icon">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link nav-link-icon">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/teachers" class="nav-link nav-link-icon">Teachers</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/courses" class="nav-link nav-link-icon">Courses</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/gallery" class="nav-link nav-link-icon">Gallery</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/blog" class="nav-link nav-link-icon">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link nav-link-icon">Contact</router-link>
        </li>
      </ul>
    </base-nav>
  </div>
</template>
<script src="./NavBar.js"></script>
<style>
</style>
