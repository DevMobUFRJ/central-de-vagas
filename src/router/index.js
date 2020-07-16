import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/pages/Login";
import Feed from "../components/pages/Feed";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/feed",
    name: "feed",
    component: Feed
  }
];

const router = new VueRouter({
  routes, mode: 'history'
});

export default router;
