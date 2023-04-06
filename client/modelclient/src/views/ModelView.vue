<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import ModelCard from '@/components/ModelCard.vue'
import axios from 'axios';
import {SERVER_URI, MODELS_PATH} from '@/core/constants'
import type { Model } from '@/core/models';

let models: Ref<Model[]> = ref([] as Array<Model>);

onMounted(async () => {
  const response = await axios.get(`${SERVER_URI}${MODELS_PATH}`, {});
  const data = response.data;
  models.value = data;
})
</script>

<template>
<div>
  <div class="flex flex-wrap justify-content-left align-content-center" >
    <div v-for="model in models" :key="model.id">
      <ModelCard :name="model.name" :image="model.image" :format="model.format" :price="Number(model.price)" :slug="model.slug" style="margin: 15px;"/>
    </div>
  </div>
</div>
</template>

<style scoped lang="css">

</style>