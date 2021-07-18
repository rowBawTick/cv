<template>
  <div class="bg-gray-100">
    <div class="grid-heading mt-2">
      <div class="block pt-3 font-semibold grid-heading__title self-center">
        <h1 class="text-5xl text-brandDark">Chris Chambers</h1>
        <h1 class="text-3xl text-darkGrey py-2">Software Engineer</h1>
      </div>
      <!-- Avatar -->
      <div class="grid-heading__avatar py-1">
        <img src="~/assets/img/chris.svg" alt="Chris' Profile Picture"
             class="border-2 border-solid border-brand rounded-full h-full w-auto"
        >
      </div>
      <!-- Contact Info -->
      <div class="grid-heading__info self-center flex pb-3 justify-between text-brandDark text-lg font-semibold">
        <a :href="`tel:${phoneNumber}`" class="flex">
          <img src="~/assets/img/icons/phone.svg" alt="" class="h-5 mt-1">
          <span class="block px-2">{{phoneNumber}}</span>
        </a>
        <a :href="`mailto:${emailAddress}`" class="flex">
          <img src="~/assets/img/icons/mail.svg" alt="" class="h-5 mt-1">
          <span class="block px-2">{{emailAddress}}</span>
        </a>
        <a href="https://www.google.co.uk/maps/place/Edinburgh/@55.9411885,-3.2753784,12z" class="flex">
          <img src="~/assets/img/icons/location.svg" alt="" class="h-5 mt-1">
          <span class="block px-2">Edinburgh</span>
        </a>
      </div>
    </div>

    <div class="grid-body">
      <!-- main body -->
      <div class="grid-body__main">
        <!-- Experience -->
        <div>
          <h1 class="uppercase text-2xl text-darkGrey font-semibold">Experience</h1>
          <hr class="bg-darkerGrey h-1" />
          <!-- Gigabyte -->
          <div>
            <h3 >Software Engineer</h3>
          </div>
        </div>
        <!-- Education -->
        <h1>Education</h1>
        <!-- Projects -->
        <h1>Projects</h1>
      </div>

      <!-- sidebar -->
      <div class="grid-body__sidebar">
        <!-- Skills -->
        <h1>Skills</h1>
        <!-- Languages -->
        <h1>Languages</h1>
      </div>
    </div>

  </div>
</template>

<style>
@import "assets/css/main.css";
</style>

<script>
export default {
  data() {
    return {
      phoneNumber: "07563474883",
      emailAddress: "christopher.chambers@live.co.uk"
    }
  }
}
</script>
