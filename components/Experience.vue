<template>
  <!-- Experience -->
  <div>
    <h1 class="uppercase text-2xl text-darkGrey font-semibold">Experience</h1>
    <hr class="bg-darkGrey h-0.75" />

    <!-- Substantive Research -->

    <div class="mt-6">
      <div class="flex">
        <img src="~/assets/img/icons/draw-calendar.svg" alt="" class="mr-2 -mt-0.5 h-6">
        <h3 class="text-white font-medium"><span class="bg-brand p-1 px-2.5 rounded-lg">September 2021 - Present</span></h3>
      </div>
      <div class="flex text-lg font-semibold my-4 lg:my-1">
        <h3 class="pr-4 text-lg font-medium">Software Engineer</h3>
        <a href="https://substantiveresearch.com" class="px-4 text-brandDark hover:text-brand">
          Substantive Research
        </a>
        <a href="https://www.google.com/maps/place/Edinburgh/@55.9411809,-3.2877382,12z"
           class="flex px-4 text-brandDark hover:text-brand">
          <img src="~/assets/img/icons/location.svg" alt="" class="h-5 mt-1">
          <span class="block px-2">Edinburgh</span>
        </a>
      </div>
      <ul class="list-disc pl-5 lg:pt-1">
        <li class="my-2">
          Promoted to a senior role in a small team, involved in supporting and advising junior developers,
          fostering a collaborative and growth-oriented team environment.
        </li>
        <li class="my-2">
          Led the refactoring of an outsourced, inherited codebase into a maintainable, efficient system by
          implementing sound engineering principles.
        </li>
        <li class="my-2">
          Designed and implemented a CI/CD pipeline from scratch.
        </li>
        <li class="my-2">
          Introduced comprehensive testing strategies, enhancing code reliability and stability.
        </li>
        <li class="my-2">
          We have a strong emphasis on secure coding practices with annual penetration tests to safeguard sensitive
          data, ensuring compliance with industry standards.
        </li>
        <li class="my-2">
          Regularly engaged in client calls to gather feedback on existing products and discuss potential features,
          ensuring that our developments align with client needs and are delivering value.
        </li>
        <li class="my-2">
          Spearheaded the upgrade of our tech stack to the latest frameworks—Laravel 10, Vue 3, and Django—keeping
          our software up to date, secure and enhancing project efficiency.
        </li>
        <li class="my-2">
          Instigated a greater focus on growth and personal development within to our team by implementing monthly
          retrospectives, knowledge sharing sessions and hackathons.
        </li>
      </ul>
    </div>

    <!-- Gigabyte -->
    <div class="mt-6">
      <div class="flex">
        <img src="~/assets/img/icons/draw-calendar.svg" alt="" class="mr-2 -mt-0.5 h-6">
        <h3 class="text-white font-medium"><span class="bg-brand p-1 px-2.5 rounded-lg">April 2019 - August 2021</span></h3>
      </div>
      <div class="flex text-lg font-semibold my-4 lg:my-1">
        <h3 class="pr-4 text-lg font-medium">Software Engineer</h3>
        <a href="https://gigabyte.software" class="px-4 text-brandDark hover:text-brand">
          Gigabyte Group
        </a>
        <a href="https://www.google.co.uk/maps/place/London/@51.528308,-0.3817811"
           class="flex px-4 text-brandDark hover:text-brand">
          <img src="~/assets/img/icons/location.svg" alt="" class="h-5 mt-1">
          <span class="block px-2">London</span>
        </a>
      </div>
      <ul class="list-disc pl-5 lg:pt-1">
        <li class="my-2">
          Liaised with stakeholders of our main client to create new features and fix bugs for their bespoke
          enterprise system. Gained experience primarily with PHP, Symfony, testing, MySQL and Domain Driven
          Design.
        </li>
        <li class="my-2">
          Worked on various other small greenfield projects. Gained experience in Vue, Postgres, PHP, Tailwind,
          HTML and CSS.
        </li>
        <li class="my-2">
          Took the role of part-time scrum master to improve communication and effectiveness within the team.
          Aided sprint planning, lead retrospectives and collaborated with the team to remove blockers.
        </li>
      </ul>
    </div>

    <!-- Teaching -->
    <div class="grid grid-cols-2 lg:grid-cols-3 grid-flow-row gap-1 lg:gap-2">
      <div v-for="teachingJob in teachingJobs" class="mt-5 lg:mt-8 lg:mr-5 ml-2 lg:ml-0">
        <div class="flex">
          <img src="~/assets/img/icons/draw-calendar.svg" alt="" class="pr-2 -mt-0.5 h-6">
          <h3 class="text-white font-medium"><span class="bg-brand p-1 px-2.5 rounded-lg">{{ teachingJob.date }}</span></h3>
        </div>
        <div class="flex flex-col text-lg font-semibold my-1">
          <h3 class="text-lg font-medium">{{ teachingJob.jobTitle }}</h3>
          <a :href="teachingJob.website" v-if="teachingJob.hasWebsite" class="text-brandDark hover:text-brand">
            {{ teachingJob.company }}
          </a>
          <h3 v-else class="text-darkerGrey">{{ teachingJob.company }}</h3>
          <a :href="teachingJob.locationLink" v-if="teachingJob.hasLocation"
             class="flex text-brandDark hover:text-brand">
            <img src="~/assets/img/icons/location.svg" alt="" class="h-5 mt-1 -m-0.5">
            <span class="block px-2">{{ teachingJob.location }}</span>
          </a>
          <div v-else class="flex text-darkerGrey">
            <img src="~/assets/img/icons/location.svg" alt="" class="h-5 mt-1 -m-0.5">
            <span class="block px-2">{{ teachingJob.location }}</span>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      teachingJobs: [
        {
          date: '2013 - 2014',
          jobTitle: 'Physics & Science Teacher',
          company: 'Fraserburgh Academy',
          website: 'https://fraserburgh.aberdeenshire.sch.uk/',
          hasWebsite: true,
          location: 'Fraserburgh',
          locationLink: 'https://www.google.co.uk/maps/place/Fraserburgh/@57.6855265,-2.0356127',
          hasLocation: true,
        },
        {
          date: '2014 - 2016',
          jobTitle: 'Physics & Science Teacher',
          company: 'Preston Lodge High School',
          website: 'https://www.edubuzz.org/prestonlodge//',
          hasWebsite: true,
          location: 'Prestonpans',
          locationLink: 'https://www.google.co.uk/maps/place/Prestonpans/@55.9577862,-3.0000391',
          hasLocation: true,
        },
        {
          date: '2016 - 2017',
          jobTitle: 'English Teacher',
          company: "Self Employed",
          website: '#',
          hasWebsite: false,
          location: 'Buenos Aires',
          locationLink: 'https://www.google.co.uk/maps/place/Buenos+Aires,+Argentina/@-34.6157437,-58.5733847',
          hasLocation: true,
        },
        {
          date: '2017 - 2018',
          jobTitle: 'Physics & Science Teacher',
          company: "St. Andrew's Scots School",
          website: 'https://www1.sanandres.esc.edu.ar/Home/',
          hasWebsite: true,
          location: 'Buenos Aires',
          locationLink: 'https://www.google.co.uk/maps/place/Buenos+Aires,+Argentina/@-34.6157437,-58.5733847',
          hasLocation: true,
        },
        {
          date: '2018 - 2019',
          jobTitle: 'English & Science Teacher',
          company: 'Self Employed',
          website: '#',
          hasWebsite: false,
          location: 'Online',
          locationLink: '#',
          hasLocation: false,
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
