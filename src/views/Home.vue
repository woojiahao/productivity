<template>
  <div class="home">
    <h1>Productivity</h1>
    <p>
      I created this site to document my productivity tools and share about what methods I use to stay productive. I am
      by no means a productivity expert nor are these methods scientifically proven, these methods work for me
      personally so I thought I'd share them so others might be able to learn from it!
    </p>

    <p>
      I have been applying these techniques for varying durations ever since 2015 and I have discovered that some
      techniques in particular work especially well for me.
    </p>

    <Schedule/>

    <Tasks/>

    <footer>
      This project is created with 💖 using Vue and TypeScript. The repository can be found <a href="https://github.com/woojiahao/productivity">here.</a>
    </footer>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import Schedule from "@/components/Schedule.vue"
  import Tasks from "@/components/Tasks.vue"

  @Component({
    components: {
      Tasks,
      Schedule
    }
  })
  export default class Home extends Vue {
  }
</script>

<style scoped>
  footer {
    margin: 2em 0;
    text-align: center;
  }
</style>
