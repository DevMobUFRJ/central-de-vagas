import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/pages/Home";
import Feed from "../components/pages/Feed";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/Feed",
    name: "feed",
    component: Feed
  }
];

const router = new VueRouter({
  routes
});

export default router;
