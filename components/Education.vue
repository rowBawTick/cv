<template>
  <div class="mt-8">
    <h1 class="uppercase text-2xl text-darkGrey font-semibold">Education</h1>
    <hr class="bg-darkGrey h-0.75" />

    <div class="grid grid-cols-3 grid-flow-row gap-2">
      <div v-for="school in schools" class="mt-8 mr-5">
        <div class="flex">
          <img src="~/assets/img/icons/draw-calendar.svg" alt="" class="pr-2 -mt-0.5 h-6">
          <h3 class="text-white"><span class="bg-brand p-1 px-2.5 rounded-lg">{{ school.date }}</span></h3>
        </div>
        <div class="flex flex-col text-lg font-semibold my-1">
          <h3 v-if="school.degree">{{ school.degree }}</h3>
          <a :href="school.website" class="text-brandDark hover:text-brand">
            {{ school.name }}
          </a>
          <a :href="school.locationLink"
             class="flex text-brandDark hover:text-brand">
            <img src="~/assets/img/icons/location.svg" alt="" class="h-5 mt-1 -m-0.5">
            <span class="block px-2">{{ school.location }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "education",
  data() {
    return {
      schools: [
        {
          date: "2000 -2005",
          name: "Linlithgow Academy",
          website: "http://www.linlithgowacademy.org",
          location: "Linlithgow",
          locationLink: "https://www.google.co.uk/maps/place/Linlithgow/@55.9759537,-3.619942",
        },
        {
          date: "2005 -2009",
          name: "University of Edinburgh",
          website: "https://www.ed.ac.uk",
          location: "Edinburgh",
          locationLink: "https://www.google.co.uk/maps/place/Edinburgh/@55.9411885,-3.2753782",
          degree: "BSc with Hons in Astrophysics",
        },
        {
          date: "2010 -2012",
          name: "Utrecht University",
          website: "https://www.uu.nl/en",
          location: "Utrecht",
          locationLink: "https://www.google.co.uk/maps/place/Utrecht,+Netherlands/@52.084166,5.0124519",
          degree: "MSc in Astrophysics and Space Research",
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
