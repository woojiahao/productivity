<template>
  <blockquote>
    <h3>{{title}}</h3>
    <slot></slot>
  </blockquote>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"

  @Component
  export default class Quote extends Vue {
    @Prop() readonly title: string | undefined
  }
</script>

<style scoped>
  blockquote {
    position: relative;
    display: block;
    color: var(--gray);
    margin-bottom: 2em;
    padding: 1em 0;
  }

  blockquote h3 {
    text-align: start;
    font-family: var(--body-font);
    font-size: 1.25em;
    padding: 0 0 1em 0;
    color: #fafafa;
  }

  blockquote h3::before {
    content: "";
  }

  blockquote p:last-child {
    padding: 0;
    margin: 0;
  }

  blockquote::before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: -5%;
    width: 10px;
    background-color: var(--blue);
  }
</style>
