<template>
  <div class="h-28 bg-teal-800 flex flex-row w-screen topbar-nav items-center md:px-60">
    <huntz-logo size="small" />
  </div>
  <div class="h-screen w-0 md:w-1/3 bg-teal-800 flex flex-col items-center sidebar-nav active">
    <div class="flex flex-col items-center mt-4">
      <huntz-logo size="large" />
      <p class="text-center mt-6 px-10 text-slate-300 font-['Patrick_Hand'] text-base">
        Hi you can call me huntz if you want, i code enthusiast love coding eating and
        reading</p>
    </div>
    <nav class="text-center h-2/3 flex flex-col justify-center">
      <NuxtLink to="/blog" class="text-white text-5xl transition hover:text-gray-800 duration-300 mb-6" active-class="text-slate-800">
        Blog
      </NuxtLink>
      <NuxtLink to="/about-me" class="text-white text-5xl transition hover:text-gray-800 duration-300" active-class="text-slate-800">
        About Me
      </NuxtLink>
    </nav>
    <div class="flex justify-center ">
      <a class="mr-4" href="https://twitter.com/farhanrahmadif" target="_blank">
        <img src="/icon/twitter-logo.svg" alt="Twitter Logo">
      </a>
      <a class="mr-4" href="https://www.linkedin.com/in/farhan-rahmadi-fajar-9173b0176/" target="_blank">
        <img src="/icon/linkedin-logo.png" alt="Linkedin Logo">
      </a>
      <a href="https://www.github.com/huntz20" target="_blank">
        <img src="/icon/github-logo.png" alt="Github Logo">
      </a>
    </div>
  </div>
</template>

<script>
import HuntzLogo from "./HuntzLogo";
export default {
  components: {HuntzLogo}
}
</script>
