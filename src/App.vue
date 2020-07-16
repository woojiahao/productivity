<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text&family=Rubik');

  * {
    margin: 0;
    padding: 0;

    --blue: #83bcff;
    /*--bg-color: #ffccc9;*/
    --bg-color: #2b2d42;
    --fg-color: #fafafa;
    --base-unit: 18px;
    --dark-text: #141414;
    --serif-font: "Crimson Text", serif;
    --sans-serif-font: "Rubik", Avenir, Helvetica, Arial, sans-serif;
    --gray: #BDBDBD;
  }

  body, html {
    background-color: var(--bg-color);
  }

  body, html, #app {
    width: 100%;
    height: 100%;

    font-size: var(--base-unit);
  }

  #app {
    font-family: var(--sans-serif-font);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: var(--fg-color);

    max-width: 1024px;
    margin: 0 auto;
  }


  h1, h2, h3, h4, h5, h6 {
    font-family: var(--serif-font);
    padding: 1em;
    text-align: center;
  }

  p {
    line-height: 25px;

    margin-bottom: 2em;
  }

  a {
    color: var(--blue);
  }
</style>
