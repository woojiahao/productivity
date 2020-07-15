<template>
  <div class="block" v-bind:style="{backgroundColor: block, width: `100%`, height: `200px`}">
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import CalendarBlockColor from "@/classes/CalendarBlockColor"

  @Component
  export default class CalendarBlock extends Vue {
    @Prop() readonly block: CalendarBlockColor | undefined
  }
</script>

<style scoped>
  .block {
    border-radius: calc(var(--base-unit) / 2);
    margin-bottom: calc(var(--base-unit) / 3);
  }
</style>
