<script setup>
import {collection, getDocs} from "firebase/firestore";
const data = ref([])
onMounted(async () => {
  const {$firebaseDb} = useNuxtApp()
  const postRef = collection($firebaseDb, "post");
  const docSnap = await getDocs(postRef)
  docSnap.forEach((doc, i) => {
    // doc.data() is never undefined for query doc snapshots
    data.value.push({...doc.data(), id: doc.id})
  });
})

</script>
<template>
  <h1>Blog</h1>
  <span v-for="d in data" :key="d.id">{{d.title}}</span>
</template>
