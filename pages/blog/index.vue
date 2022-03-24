<script setup>
import axios from "axios"
var data = JSON.stringify({
  "collection": "post",
  "database": "farhan-blog",
  "dataSource": "Cluster0",
});
const posts = ref([])

var config = {
  method: 'post',
  url: 'https://data.mongodb-api.com/app/data-ashey/endpoint/data/beta/action/find',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': 'QK9xt5we2EuuLbs0wvPoeCCzc8VSfdHuHVQQfalJXH4yjVsgoQO98UOAJ9LWuLal'
  },
  data : data
};

axios(config)
    .then(function (response) {
      posts.value = response.data.documents
      console.log(response.data.documents);
    })
    .catch(function (error) {
      console.log(error);
    });
console.log(posts);
</script>
<template>
  <h1>Blog</h1>
  <span v-for="d in posts" :key="d['_id']">{{d.title}}</span>
</template>
