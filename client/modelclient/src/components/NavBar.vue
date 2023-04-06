<script lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { generateTabNavigation } from "../core/navigation.ts";
import { toastSuccess, toastError, toastInfo } from "@/core/toast";
import router from "@/router";

export default {
  setup() {
    const items = ref(generateTabNavigation());
    const store = useUserStore();
    function handleUserButtonClick() {
      const user = store.getUser;
      if (user?.username) {
        toastInfo(`Ви ввійшли як: ${user.username}`);
        return;
      }
      router.push({name: "login"});
    }
    function handleLogoutClick() {
      toastInfo(`Ви вийшли з аккаунту: ${store.getUser?.username}`)
      store.logout();
      router.push("/")
    }
    return { items, store, handleUserButtonClick, handleLogoutClick };
  },
};
</script>

<template>
  <div>
    <MenuBar :model="items">
      <template #start>
        <img
          alt="logo"
          src="3dsh (1).png"
          height="40"
          class="mr-2"
        />
      </template>
      <template #end>
        <div class="flex">
          <Button
            title="Вийти з аккаунту"
            v-on:click="handleLogoutClick()"
            v-if="store.getUser"
            icon="pi pi-times"
            severity="danger"
            rounded
            aria-label="Cancel"
            style="margin-right: 10px"
          />
          <Button
            title="Авторизація"
            v-on:click="handleUserButtonClick()"
            icon="pi pi-user"
            style="margin-right: 10px"
            severity="info"
            rounded
            aria-label="User"
          />
        </div>
      </template>
    </MenuBar>
  </div>
</template>

<style lang="css"></style>
