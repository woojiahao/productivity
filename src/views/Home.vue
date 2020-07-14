<template>
  <div class="home">
    <h1>Productivity</h1>
    <p>
      I created this site to document my productivity tools and share about what methods I use to stay productive. I am
      by no means a productivity expert nor are these methods scientifically proven, these methods work for me
      personally so I thought I'd share them so others might be able to learn from it!
    </p>
    <CalendarBlock v-bind:block="block"/>
    <CalendarBlock v-bind:block="block2"/>
    <CalendarBlock v-bind:block="block"/>
    <CalendarBlock v-bind:block="block2"/>
  </div>
</template>

<script lang="ts">
  // @ts-nocheck
  import CalendarBlock from "@/components/CalendarBlock"
  import {Component, Vue} from "vue-property-decorator"
  import CalendarBlockColor from "@/classes/CalendarBlockColor"

  @Component({
    components: {
      CalendarBlock
    }
  })
  export default class Home extends Vue {
    private block = CalendarBlockColor.EVENT
    private block2 = CalendarBlockColor.EXERCISE
  }
</script>
