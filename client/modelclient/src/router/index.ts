import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ModelView from "../views/ModelView.vue";
import ModelDetail from "../views/ModelDetail.vue"
import SendView from "../views/SendView.vue";

import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/models",
      name: "models",
      component: ModelView,
    },
    {
      path: "/model/:item",
      name: "model",
      component: ModelDetail,
      props: true,
    },
    {
      path: "/model/:item/buy",
      name: "model.buy",
      component: SendView,
    }
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const user = localStorage.getItem('auth');
  if (user) {
    const parsedUser = JSON.parse(user);
    userStore.setTokens(parsedUser.refreshToken, parsedUser.accessToken);
    userStore.setUser(parsedUser.username);
  }
  next()

});

export default router;
