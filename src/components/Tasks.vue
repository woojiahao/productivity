<template>
  <div>
    <h2>Scheduling Tasks</h2>

    <p>
      Gmail and Google Tasks are used in conjunction with Google Calendar to allow for daily schedules to be created.
      These three tools have very nice integration with one another and complement one another really well.
    </p>

    <h3>Gmail</h3>

    <p>
      Gmail is my primary email client and I use it for virtually everything. Expanding the right panel in Gmail will
      reveal a tool belt that includes both Gmail and Google Tasks. From this panel, you can view your calendar events
      as well as <a href="https://gsuitetips.com/tips/gmail/create-a-task-from-an-email/">add emails as new tasks
      directly</a>. I use this feature to mark important emails that I must respond to and once added, I will visit
      Google Calendar to add the task to my day, ensuring that I complete it on time.
    </p>

    <h3>Google Calendar + Google Tasks</h3>

    <p>
      The real power of this suite of tools come from Google Tasks's integration with Google Calendar. Similar to Gmail,
      expanding the right panel in Google Calendar will display a tool belt. Opening the Google Tasks extension will
      provide a view of all your pending tasks.
    </p>

    <p>
      When I am planning my day, I start with viewing all pending tasks to get a gist of what I have to do. If
      there are new tasks for the day/week/month, I will add them down - either in the default list or create a new one.
      Once this is done, I will begin to drag-and-drop tasks into my schedule, positioning them within time blocks.
    </p>

    <p>
      As mentioned earlier, I do not specify the duration of each task by creating time blocks directly. Instead, I
      position tasks one after another after a set duration that I think I will take. Doing so allows me to quickly
      adjust my tasks without having to re-organise a lot of the schedule. A benefit of doing so is that I am able to
      learn to properly estimate how long I take for each task and this allows me to fine tune my future planning.
    </p>

    <Quote title="Planning the day">
      <p>
        I have been using this tasks per day system for quite some time now, but only recently did I migrate it fully
        to the web. Regardless, I use some tricks to plan my day in advance.
      </p>

      <ol class="tips">
        <li>Plan the night before or the morning of</li>
        <li>Adjust your schedule as the day goes by</li>
        <li>Do not overbook yourself</li>
      </ol>

      <p>
        I plan the day the night before or the morning of so that I have a clear picture of what I want to work on
        throughout the day.
      </p>

      <p>
        Plans change and new tasks may be added as the day progresses. I try to stay flexible and ensure that my
        schedule allows for ad-hoc tasks to be added.
      </p>

      <p>
        As mentioned earlier, I have found that I would often procrastinate more if I overbook myself and pile a bunch
        of work at the start of the day. To cope with that, I have begun scheduling for tasks to take slightly longer
        than expected and reducing the number of tasks to complete a day. However, as the day goes by, I will add more
        items. This makes it feel as though the work is manageable and isn't coming at me at 90mph.
      </p>
    </Quote>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import Quote from "@/components/Quote.vue"

  @Component({
    components: {Quote}
  })
  export default class Tasks extends Vue {

  }
</script>

<style scoped>
</style>
