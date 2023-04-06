<script setup lang="ts">
import { onMounted, computed, ref, type Ref } from "vue";
import axios from "axios";
import { SERVER_URI, MODEL_PATH } from "@/core/constants";
import { useRoute, useRouter } from "vue-router";
import { toastWarn } from "@/core/toast";
import { useUserStore } from "@/stores/user";
import type { Model } from "@/core/models";

const route = useRoute();
const router = useRouter();
const user = useUserStore();
let model: Ref<Model> | Ref<null> = ref(null);
const slug = computed(() => route.params.item);

function buyModelClick() {
  if (!user.isAuthenticated) {
    toastWarn("Авторизуйтесь щоб купити модель");
    return;
  }
  router.push({name: 'model.buy'})
}

onMounted(async () => {
  const response = await axios.get(
    `${SERVER_URI}${MODEL_PATH}${slug.value}`,
    {}
  );
  const data = response.data;
  model.value = data;
});
</script>

<template>
  <div class="center surface-card p-4 shadow-6 border-round w-full lg:w-6">
    <img
      v-if="model?.image"
      :src="SERVER_URI + model?.image.substring(1)"
      width="300"
      height="300"
    />
  </div>
  <Card class="center surface-card p-4 shadow-8 border-round w-full lg:w-6">
    <template #title>
      <span style="text-align: center">{{ model?.name }}</span>
    </template>
    <template #content>
      <div style="display: flex; justify-content: space-between">
        <img
          v-if="model?.image"
          :src="SERVER_URI + model?.image.substring(1)"
          width="300"
          height="300"
        />
        <div style="display: flex; flex-direction: column; width: 50%; font-size: 24px; font-weight: bold;">
          <span class="mt-6">Price: {{ model?.price == 0 ? "Free" : model?.price }}</span>
          <span class="mt-6">Format: {{ model?.format }}</span>
          <Button
            @click="buyModelClick()"
            class="mt-auto"
            icon="pi pi-id-card"
            label="Купити"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
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
