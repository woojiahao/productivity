<template>
  <div class="block" v-bind:style="{backgroundColor: color, width: `100%`, height: `200px`}">
    <p>{{taskName}}</p>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import CalendarBlockColor from "@/classes/CalendarBlockColor"

  @Component
  export default class CalendarBlock extends Vue {
    @Prop() readonly color: CalendarBlockColor | undefined
    @Prop() readonly taskName: string | undefined
  }
</script>

<style scoped>
  .block {
    border-radius: calc(var(--base-unit) / 2);
    margin-bottom: calc(var(--base-unit) / 3);
  }

  .block p {
    padding: var(--base-unit);
    color: var(--dark-text);
  }
</style>
