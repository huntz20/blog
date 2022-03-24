<script setup>
const post = reactive({documents: []})
 await useAsyncData('post', async () => {
  console.log("is this run on severr")
   const response = await $fetch('/api/post')
   console.log(response);
   post.documents = response.documents
 })
</script>
<template>
  <h1>Blog</h1>
  <span v-for="d in post.documents" :key="d['_id']">{{d.title}}</span>
</template>
