<script setup>
useMeta({
  title: 'Farhan Rahmadi Fajar'
})
</script>
<template>
  <div class="font-serif text-4xl lg:text-6xl text-white flex h-screen flex-col  justify-center px-10">
    <div class="mb-12 fade-in first">I'm
      <NuxtLink to="/about-me"
                class="text-slate-700 hover:text-slate-800 transition duration-300">Farhan Rahmadi Fajar
      </NuxtLink>
    </div>
    <div class="mb-12 fade-in second">
      Work at <a href="https://www.digitalavenues.com/" target="_blank"
                 class="text-slate-700 hover:text-slate-800 transition duration-300 mb-6">Digital
      Avenues</a></div>
    <div class="mb-12 fade-in third">And I
      <NuxtLink to="/blog" class="text-slate-700 hover:text-slate-800 transition duration-300 mb-6">Write</NuxtLink>
      About It
    </div>
  </div>

</template>
