<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { toastSuccess, toastError } from "@/core/toast";
import router from "@/router";
const store = useUserStore();

let username = "";
let password = "";

const onSubmit = async () => {
  const logged = await store.loginUser({ username, password });
  if (logged) {
      toastSuccess(`Успішно авторизовано як користувач:  ${username}`);
      router.push('/')
      return;
  }
  toastError('Користувача не існує');
};
</script>

<template>
  <div class="center surface-card p-4 shadow-4 border-round w-full lg:w-6">
    <div class="text-center mb-5">
      <img
        src="user-icon.png"
        alt="Image"
        height="50"
        class="mb-3"
      />
      <div class="text-900 text-3xl font-medium mb-3">Форма авторизації</div>
      <span class="text-600 font-medium line-height-3"
        >Не створили аккаунт?</span
      >
      <router-link
        to="register"
        class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
        >Створіть прямо зараз!</router-link
      >
    </div>

    <div>
      <form @submit.prevent="onSubmit">
        <label for="email1" class="block text-900 font-medium mb-2"
          >Username</label
        >
        <InputText
          required
          v-model="username"
          id="email1"
          type="text"
          placeholder="Введіть нікнейм"
          class="w-full mb-3"
        />

        <label for="password1" class="block text-900 font-medium mb-2"
          >Password</label
        >
        <InputText
          required
          v-model="password"
          id="password1"
          type="password"
          placeholder="Введіть пароль"
          class="w-full mb-3"
        />

        <Button
          type="submit"
          label="Увійти"
          icon="pi pi-user"
          class="w-full mt-6"
        ></Button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="css">
.center {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
</style>
