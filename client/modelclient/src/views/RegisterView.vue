<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { toastSuccess, toastError, toastWarn } from "@/core/toast";
import router from "@/router";
const store = useUserStore();

let username = "";
let password = "";
let password2 = "";

const onSubmit = async () => {
  if (password !== password2) {
    toastWarn('Паролі не співпадають');
    return;
  }
  const registered = await store.registerUser({ username, password });
  if (registered) {
    toastSuccess(`Успішно зараєстровано користувача: ${username}`);
    router.push('login');
  }
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
      <div class="text-900 text-3xl font-medium mb-3">Форма реєстрації</div>
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

        <label for="password2" class="block text-900 font-medium mb-2"
          >Repeat password</label
        >
        <InputText
          required
          v-model="password2"
          id="password2"
          type="password"
          placeholder="Повторіть пароль"
          class="w-full mb-3"
        />

        <Button type="submit" label="Увійти" icon="pi pi-user" class="w-full mt-4"></Button>
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
