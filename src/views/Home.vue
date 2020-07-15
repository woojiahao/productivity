<template>
  <div class="home">
    <h1>Productivity</h1>
    <p>
      I created this site to document my productivity tools and share about what methods I use to stay productive. I am
      by no means a productivity expert nor are these methods scientifically proven, these methods work for me
      personally so I thought I'd share them so others might be able to learn from it!
    </p>
    <Calendar start="6.3" end="10.45" v-bind:items="items"/>
  </div>
</template>

<script lang="ts">
  import CalendarBlock from "@/components/CalendarBlock.vue"
  import {Component, Vue} from "vue-property-decorator"
  import CalendarBlockColor from "@/classes/CalendarBlockColor"
  import Calendar from "@/components/Calendar.vue"
  import CalendarItem from "@/classes/CalendarItem"
  import TimeUnit from "@/classes/TimeUnit"

  @Component({
    components: {
      Calendar,
      CalendarBlock
    }
  })
  export default class Home extends Vue {
    private items = [
      new CalendarItem(new TimeUnit("0630"), new TimeUnit("0700"), CalendarBlockColor.MISC, "Wake up"),
      new CalendarItem(new TimeUnit("0700"), new TimeUnit("1200"), CalendarBlockColor.WORK, "Work"),
    ]
  }
</script>
