<template>
  <Html lang="en-US">
  <Head>
    <Title>Farhan Rahmadi Fajar</Title>
  </Head>
  </Html>
  <div class="bg-teal-500 w-screen h-screen flex">
    <div class="h-screen w-1/3 bg-teal-800 flex flex-col items-center">
      <div class="flex flex-col items-center mt-4">
        <div class="bg-gray-400 w-40 h-40 text-center">LOGO</div>
        <p class="text-center mt-6 px-10 text-slate-300 font-['Patrick_Hand'] text-base">
          Hi you can call me huntz if you want, i code enthusiast love coding eating and
          reading</p>
      </div>
      <nav class="text-center h-2/3 flex flex-col justify-center">
        <NuxtLink to="/blog" class="text-white text-5xl transition hover:text-gray-800 duration-300 mb-6">
          Blog
        </NuxtLink>
        <NuxtLink to="/about-me" class="text-white text-5xl transition hover:text-gray-800 duration-300">
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
    <div class="w-2/3 h-screen"></div>
  </div>
</template>
