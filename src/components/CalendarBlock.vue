<template>
  <div class="block-container">
    <p class="start">
      {{item.start.toReadable()}}
    </p>
    <p class="task-name">
      {{item.taskName}}
    </p>
    <div class="block" v-bind:style="{backgroundColor: item.color, width: `100%`, height: `${height}px`}">
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import CalendarItem from "@/classes/CalendarItem"

  @Component
  export default class CalendarBlock extends Vue {
    @Prop() readonly item!: CalendarItem
    height: number | undefined

    data() {
      return {
        height: 0
      }
    }

    mounted() {
      const diff = this.item.end.subtract(this.item.start).toMinutes()
      this.height = (diff / 30) * 30
    }
  }
</script>

<style scoped>
  .block-container {
    display: flex;
    position: relative;
  }

  .block-container p {
    padding: 0;
    margin: 0;
  }

  .block-container .start {
    position: absolute;
    left: -5%;
  }

  .block-container .task-name {
    flex-basis: 12.5%;
  }

  .block {
    border-radius: 5px;
    margin-bottom: calc(var(--base-unit) / 3);
  }
</style>
