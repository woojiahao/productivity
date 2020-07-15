<template>
  <div class="calendar">
    <div v-for="item in items" :key="item.start.hour">
      <CalendarBlock v-bind:item="item"/>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"
  import CalendarItem from "@/classes/CalendarItem"
  import CalendarBlock from "@/components/CalendarBlock.vue"

  @Component({
    components: {CalendarBlock}
  })
  export default class Calendar extends Vue {
    @Prop() readonly start: number | undefined
    @Prop() readonly end: number | undefined
    @Prop() readonly items: Array<CalendarItem> | undefined
  }
</script>

<style scoped>
  .calendar {
    width: 100%;
  }
</style>
