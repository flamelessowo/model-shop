<script setup lang="ts">
import { ref } from 'vue';
  const images = ref([
    {image: 'pistol.jpg', thumb: '1.png', alt: 'pistol model'},
    {image: 'gitara.jpg', thumb: '3.jpg', alt: 'guitar model'},
    {image: 'radio.jpg', thumb: '2.jpg', alt: 'radio model'},
    {image: 'axe.jpg', thumb: '4.jpg', alt: 'axe model'}
  ]);
  const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
</script>
<template>
    <Card>
      <template #title>
        <h2 style="text-align: center">
          Завдяки цьому сайту можна придбати багато високополігональних моделей
        </h2>
      </template>
      <template #content>
        <h3 style="text-align: center">
          3DSH - це сайт з продажами 3D моделей, онлайн-магазин, де можна
          придбати готові 3D-моделі різних предметів, які можна використовувати
          в графічних проектах, архітектурних візуалізаціях, ігровій розробці,
          дизайні, виробництві та багатьох інших галузях.
        </h3>
      </template>
    </Card>
    <div class="card md:flex md:justify-content-center">
        <Galleria autoPlay circular :value="images" :responsiveOptions="responsiveOptions" :numVisible="4" containerStyle="max-width: 800px; margin-top: 15px">
            <template #item="slotProps">
                <img :src="slotProps.item.image" :alt="slotProps.item.alt" style="width: 100%" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumb" :alt="slotProps.item.alt" />
            </template>
        </Galleria>
    </div>
</template>

<style lang="css"></style>
