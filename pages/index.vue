<template>
  <div class="bg-gray-100 pt-2">
    <div class="w-11/12 mx-auto">
      <Heading />

      <div class="flex flex-col lg:grid lg:grid-cols-3 lg:gap-10 mt-8 lg:mt-4">
        <!-- main body -->
        <div class="lg:col-span-2">
          <Experience />
          <Education />
        </div>

        <!-- sidebar -->
        <div class="text-lg">
          <!-- Find me online -->
          <h1 class="uppercase text-2xl text-darkGrey font-semibold">Find me online</h1>
          <hr class="bg-darkGrey h-0.75" />
          <a href="https://www.linkedin.com/in/christopher-chambers-2403b912b" class="flex items-center mt-5 lg:mt-3 pl-3">
            <img src="~/assets/img/logos/linkedin.svg" alt="" class="h-10">
            <h3 class="px-3 text-brandDarker font-medium hover:text-brand">/christopher-chambers-2403b912b</h3>
          </a>
          <a href="https://github.com/rowBawTick" class="flex items-center mt-3 pl-3">
            <img src="~/assets/img/logos/github.svg" alt="" class="h-10">
            <h3 class="px-3 text-brandDarker font-medium hover:text-brand">/rowBawTick</h3>
          </a>

          <Skills />
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<style>
@import "assets/css/main.css";
</style>

<script>
export default {

}
</script>
