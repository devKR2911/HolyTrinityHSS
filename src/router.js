import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Home from "./views/Home/Home.vue";
import Teachers from "./views/Teachers/Teachers.vue";
import About from "./views/About/About.vue";
import Contact from "./views/Contact/Contact.vue";
import Courses from "./views/Courses/Courses.vue";
import Blog from "./views/Blog/Blog.vue";
import Gallery from "./views/Gallery/Gallery.vue";
import HTSSNavBar from "./components/Shared/NavBar/NavBar.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [{
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/home",
      name: "home",
      components: {
        header: HTSSNavBar,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: "/teachers",
      name: "teachers",
      components: {
        header: HTSSNavBar,
        default: Teachers,
        footer: AppFooter
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: HTSSNavBar,
        default: About,
        footer: AppFooter
      }
    },
    {
      path: "/blog",
      name: "blog",
      components: {
        header: HTSSNavBar,
        default: Blog,
        footer: AppFooter
      }
    },
    {
      path: "/contact",
      name: "contact",
      components: {
        header: HTSSNavBar,
        default: Contact,
        footer: AppFooter
      }
    },
    {
      path: "/courses",
      name: "courses",
      components: {
        header: HTSSNavBar,
        default: Courses,
        footer: AppFooter
      }
    },
    {
      path: "/gallery",
      name: "gallery",
      components: {
        header: HTSSNavBar,
        default: Gallery,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});