<template>
  <div class="grid-heading lg:grid-heading--large">
    <div class="block pt-3 font-semibold grid-heading__title self-center">
      <h1 class="text-3xl lg:text-5xl text-brandDarker">Chris Chambers</h1>
      <h1 class="text-2xl lg:text-3xl text-darkGrey py-2">Software Engineer</h1>
    </div>
    <!-- Avatar -->
    <div class="grid-heading__avatar py-2 lg:py-1 justify-self-end">
      <img src="~/assets/img/chris.svg" alt="Chris' Profile Picture"
           class="border-2 border-solid border-brandDarker rounded-full h-full w-auto"
      >
    </div>
    <!-- Contact Info -->
    <div class="grid-heading__info self-center flex flex-wrap lg:flex-row justify-between text-brandDark
      text-lg font-semibold my-3 lg:my-0"
    >
      <a :href="`mailto:${emailAddress}`" class="flex">
        <img src="~/assets/img/icons/mail.svg" alt="" class="h-5 mt-1">
        <span class="block px-2">{{emailAddress}}</span>
      </a>
      <a :href="`tel:${phoneNumber}`" class="flex">
        <img src="~/assets/img/icons/phone.svg" alt="" class="h-5 mt-1">
        <span class="block px-2">{{phoneNumber}}</span>
      </a>
      <a href="https://www.google.co.uk/maps/place/Edinburgh/@55.9411885,-3.2753784" class="flex">
        <img src="~/assets/img/icons/location.svg" alt="" class="h-5 mt-1">
        <span class="block px-2">Edinburgh</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading",
  data() {
    return {
      phoneNumber: "07563474883",
      emailAddress: "christopher.chambers@live.co.uk"
    }
  }
}
</script>

<style scoped>

</style>
