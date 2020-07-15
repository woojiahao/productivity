<template>
  <div class="calendar">
    <div v-for="item in items" :key="item.start">
      <CalendarBlock v-bind:color="item.color" v-bind:task-name="item.taskName"/>
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

    private readonly maxHeight = 700
  }
</script>

<style scoped>
  .calendar {
    max-height: 700px;
    width: 100%;
  }
</style>
