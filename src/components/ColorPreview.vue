<template>
  <div>
    <p>
      <em class="subtle">
        Select each color to view the purpose of it
      </em>
    </p>
    <div class="color-preview">
      <div class="colors">
        <div v-for="color in Object.keys(items)" :key="color">
          <div class="color-box" v-bind:style="{backgroundColor: color}" v-on:click="selectColor(color)"/>
        </div>
      </div>
      <div class="description">
        <h3>{{currentTitle}}</h3>
        <p>{{currentDescription}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"

  @Component
  export default class ColorPreview extends Vue {
    @Prop() readonly items!: { [Key: string]: { title: string; description: string } }
    private currentColor: string = Object.keys(this.items)[0]
    private currentTitle = this.items[this.currentColor].title
    private currentDescription = this.items[this.currentColor].description

    selectColor(color: string) {
      this.currentColor = color
      this.currentTitle = this.items[color].title
      this.currentDescription = this.items[color].description
    }
  }
</script>

<style scoped>
  .color-box {
    --size: 50px;
    width: var(--size);
    height: var(--size);
  }

  .color-box:hover {
    cursor: pointer;
  }

  .subtle {
    color: var(--gray)
  }

  .color-preview {
    display: flex;
    justify-content: space-between;
  }

  .colors {
    display: flex;
    flex-basis: 30%;
    justify-content: space-between;
  }

  .description {
    flex-basis: 65%;
    height: 220px;
  }

  .description h3 {
    text-align: start;
    font-family: var(--sans-serif-font);
    font-size: 1.25em;
    padding: 0 0 1em 0;
    color: #fafafa;
  }
</style>

