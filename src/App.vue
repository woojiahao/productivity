<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Rubik');

  * {
    margin: 0;
    padding: 0;

    --blue: #83bcff;
    /*--bg-color: #ffccc9;*/
    --bg-color: #2b2d42;
    --fg-color: #fafafa;
    --base-unit: 16px;
    --dark-text: #141414;
    --heading-font: "Montserrat", serif;
    --body-font: "Rubik", Avenir, Helvetica, Arial, sans-serif;
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
    font-family: var(--body-font);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: var(--fg-color);

    max-width: 1024px;
    margin: 0 auto;
  }


  h1, h2, h3, h4, h5, h6 {
    position: relative;
    font-family: var(--heading-font);
    padding: 1em 0;
  }

  h1::before, h2::before, h3::before {
    position: absolute;
    left: -5%;
  }

  h1::before {
    content: "#";
  }

  h2::before {
    content: "##";
  }

  h3::before {
    content: "###";
  }

  p {
    line-height: 25px;

    margin-bottom: 2em;
  }

  a {
    color: var(--blue);
  }

  ol, ul {
    list-style-position: inside;
  }

  ol li:not(:last-child), ul li:not(:last-child) {
    margin-bottom: 0.5em;
  }
</style>
