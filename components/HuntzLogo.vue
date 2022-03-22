<script setup>
const {size} = defineProps({
  size: String
})
</script>
<template>
  <NuxtLink to="/">
    <div class="bg-gray-400 text-center" :class="{'w-24 h-24': size === 'small', 'h-40 w-40': size === 'large'}">LOGO
    </div>
  </NuxtLink>
</template>
