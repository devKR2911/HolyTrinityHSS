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
          <a class="nav-link nav-link-icon" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#">Teachers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#">Courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#">Contact</a>
        </li>
      </ul>
    </base-nav>
  </div>
</template>
<script src="./NavBar.js"></script>
<style>
</style>
