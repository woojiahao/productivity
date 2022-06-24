<template>
  <div>
    <h2>Programming Bucket</h2>

    <p>
      Another productivity tool that I use is what I term as my "Programming Bucket". Formally, it's meant to serve as
      my idea bucket for programming-related thoughts, but in reality, it has become an amalgamation of ideas and
      thoughts I've had across various domains.
    </p>

    <p>
      To manage these ideas, I use <a href="https://trello.com/">Trello.</a> Most recently, I had actually discovered
      that Trello is designed to act like sticky notes on a board! Traditionally, Trello is used as a project
      management board as it supports project management methodologies like SCRUM and Kaban. However, for my use case, I
      just use it as one giant idea board.
    </p>

    <p>
      In my programming bucket, I have three key lists:
    </p>

    <ol>
      <li>Project Ideas</li>
      <li>To Learn</li>
      <li>Interesting Technologies</li>
    </ol>

    <p>
      The names are pretty self-explanatory but it does not hurt to explain them in a little more detail.
    </p>

    <h3>Project Ideas</h3>
    <p>
      Whenever I am browsing GitHub for projects or reading articles, I often come upon interesting projects that I
      would like to try implementing. I will add these projects to the list and provide descriptions or links to the
      original project.
    </p>

    <p>
      Alternatively, when I am watching talks or just going about my day-to-day life, I may get an idea that I would be
      interested to try out. This is when I am able to bust out my programming bucket and add this idea to the list.
      Trello's comment system is useful as it allows me to add descriptions and elaborations to these ideas. This is
      especially useful as I may not be able to work on the idea instantly and having a way to keep my thoughts
      organised in a single location so that I can return to them anytime is a game-changer.
    </p>

    <h3>To Learn</h3>
    <h3>Interesting Technologies</h3>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"

  @Component
  export default class ProgrammingBucket extends Vue {

  }
</script>

<style scoped>

</style>
