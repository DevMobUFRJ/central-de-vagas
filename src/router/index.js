import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/template/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  routes
});

export default router;
