<script setup lang="ts">
import { onMounted, computed, ref, type Ref } from "vue";
import axios from "axios";
import { SERVER_URI, MODEL_PATH } from "@/core/constants";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import type { Model } from "@/core/models";
import { saveAs } from 'file-saver';
import { toastWarn } from "@/core/toast";

const route = useRoute();
const router = useRouter();
const user = useUserStore();
let model: Ref<Model> | Ref<null> = ref(null);
const slug = computed(() => route.params.item);

function onSubmit() {
  if (model.value?.price != 0) {
    toastWarn("Потрібно додати споіб оплати (буде в ближайший час)")
    return;
  }
  const file_uri = SERVER_URI + model.value?.file.substring(1);
  saveAs(file_uri);
}

onMounted(async () => {
  if (!user.isAuthenticated) {
    router.push('/');
    toastWarn('Ви повинні бути авторизовані щоб купити модель');
    return;
  }
  const response = await axios.get(
    `${SERVER_URI}${MODEL_PATH}${slug.value}`,
    {}
  );
  const data = response.data;
  model.value = data;
});
</script>

<template>
  <div class="center surface-card p-4 shadow-4 border-round w-full lg:w-6">
    <div class="text-center mb-5">
      <div class="m-3" style="font-size: 24px;">Price: {{ model?.price == 0 ? "Free" : model?.price }}</div>
      <img v-if="model?.image"
        :src="SERVER_URI + model?.image.substring(1)"
        alt="Image"
        height="200"
        class="mb-3"
      />
      <div class="text-900 text-3xl font-medium mb-3">Купити модель: {{ model?.name }}</div>
    </div>

    <div>
      <form @submit.prevent="onSubmit">
        <Button type="submit" label="Купити модель" icon="pi pi-user" class="w-full mt-4"></Button>
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

<style scoped lang="css"></style>