<script setup lang="ts">

const props = defineProps({
  id: String,
  name: String,
  image: String,
  file: String,
  format: String,
  price: Number,
  slug: String,
});

</script>

<template>
  <Card>
    <template #header>
      <div>
        <img alt="user header" :src="image" width="150" height="150"/>
      </div>
    </template>
    <template #title> {{ props.name }} </template>
    <template #subtitle><span style="font-weight: bold;"> {{ props.price !== 0 ? props.price + '$' : 'Free' }}</span></template>
    <template #content>
      <p>Формат:{{ " " + props.format }}</p>
    </template>
    <template #footer>
      <Button icon="pi pi-eye" label="Переглянути" @click="$router.push({ name: 'model', params: { item: props.slug } })" />
      <Button
        icon="pi pi-times"
        label="Cancel"
        severity="secondary"
        style="margin-left: 0.5em; visibility: hidden;"
      />
    </template>
  </Card>
</template>

<style scoped lang="css"></style>
