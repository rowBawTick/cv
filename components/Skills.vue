<template>
  <div class="mt-10">
    <!-- Skills -->
    <div>
      <h1 class="uppercase text-2xl text-darkGrey font-semibold">Skills</h1>
      <hr class="bg-darkGrey h-0.75 mb-2" />
      <div class="mt-5">
        <div v-for="language in languages" class="flex items-center">
          <h3 class="w-1/2 text-lg font-medium">{{ language.name }}</h3>
          <img v-for="star in language.rating" src="~/assets/img/icons/star.svg" alt="" class="h-5 pr-1 -mt-0.5">
          <img v-for="star in (5 - language.rating)" src="~/assets/img/icons/empty-star.svg" alt="" class="h-5 pr-1 -mt-0.5">
        </div>
      </div>
    </div>

    <!-- I Know About -->
    <div class="mt-10">
      <h1 class="uppercase text-2xl text-darkGrey font-semibold">I know about</h1>
      <hr class="bg-darkGrey h-0.75 mb-2" />
      <div class="flex flex-wrap justify-center mt-5">
        <button v-for="skill in skills" class="btn btn--animate">{{ skill }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        "PHP", "Symfony", "HTML", "CSS", "TailwindCSS", "JavaScript", "Vue", "Nuxt", "Python", "SQL", "Doctrine",
        "REGEX", "Linux", "CLI", "Bash", "Git", "Composer", "Docker", "Vagrant", "Ansible", "REST", "APIs", "HTTP",
        "Balsamiq", "Figma", "Invision", "Photoshop", "SOLID", "OOP", "DDD", "TDD"
      ],
      languages: [
        {
          name: "HTML",
          rating: 4,
        },
        {
          name: "CSS",
          rating: 4,
        },
        {
          name: "JavaScript",
          rating: 3,
        },
        {
          name: "PHP",
          rating: 4,
        },
        {
          name: "MySQL",
          rating: 4,
        },
        {
          name: "Python",
          rating: 2,
        },
      ]
    }
  }

}
</script>

<style scoped>

</style>
