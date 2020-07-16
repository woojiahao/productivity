<template>
  <div>
    <h2>Schedule</h2>

    <p>
      My daily schedule is very similar to that of <a
      href="https://www.lifehack.org/articles/productivity/what-you-can-learn-from-benjamin-franklins-daily-schedule.html">Benjamin
      Franklin's.</a> Rather than finely scheduling time blocks everyday, I have found that sticking to a set schedule
      with well-defined and broader goals and time blocks is easier for me to focus on and work towards. While you can
      choose to replicate this exact schedule, I do not recommend doing so because I have it laid out in a specific way
      after experimentation. I will be discussing more about the reason behind my choices in the following sections. I
      will include my recommended changes in each explanation as well.
    </p>

    <p>
      I have tried to finely schedule my day before and found that it was very difficult to plan for all of these tasks,
      and I even found myself trying to schedule breaks.
    </p>

    <p>
      To create and manage this schedule, I use the G Suite, including Google Calendar, Google Tasks, and Gmail. They
      have nice integration with one another and work well enough for me.
    </p>

    <p>
      Below is my schedule with the general tasks boxed out. I also use special color coding for various items/events.
    </p>

    <Calendar v-bind:items="calendarItems"/>

    <p>
      When looking at the schedule, it is important to note that the time blocks are not rigid and should not be. While
      there may be fixed blocks of time for working or exercise, I have realised that it is impossible for this schedule
      to mirror the real world. So, instead of trying to stick finely to the timings, I use these time blocks as
      reminders of what general task I should be working on at the moment.
    </p>

    <Quote title="Avoiding burnout">
      <p>
        To avoid burnout, I highly recommend taking breaks within each <strong>work</strong> blocks. I have noticed that
        depending on the task at hand, I tend to grow tired or lose focus at varying rates. For instance, I can program
        for nearly six hours in a stretch (with breaks to drink water or go to the toilet) while I can only study a
        humanities subject for around three hours. So, during each <strong>work</strong> block, I will inject breaks
        accordingly. I do not have a hard and fast rule for when to schedule breaks as this varies significantly from
        person to person and it would be unfair to prescribe the same schedule for everyone.
      </p>

      <p>
        However, it is very important not to abuse this flexibility and inject breaks so frequently that you do not
        perform much work. This often happens when there are too many tasks scheduled for a <strong>work</strong> block,
        or when tasks that you dread are often scheduled in. Thus, to avoid this, try to schedule your tasks with your
        limits in mind and have mental plans for when breaks should occur. As you practice a task more, your ability to
        focus on it in a sitting will tend to increase and you can adjust your breaks accordingly.
      </p>
    </Quote>

    <p>
      My day starts between 6:30 AM to 7:00 AM. I am a morning person and cannot function at night at full capacity.
      Knowing this, I have intentionally planned my schedule to suit this aspect. Rather than piling work towards the
      night, my <strong>work</strong> blocks decrease in duration as the day goes along - following a pattern of
      <em>5-4-3.</em> The morning block is scheduled such that I aim to perform work that requires deep focus or a clear
      mind.
    </p>

    <Quote title="Scheduling work blocks">
      <p>
        If you are not a morning person or if you find that you are most active in the afternoon, shift the
        <strong>work</strong> blocks around and fit it to your working habits. It is much easier to follow a schedule
        when it suits your preferences, rather than you trying to force yourself to follow something that isn't natural
        for you.
      </p>

      <p>
        For example, if you find that you are woozy in the morning but can focus really well during the afternoon
        and evening, perhaps you could consider setting your <strong>work</strong> blocks to <em>3-4-5</em> or
        <em>3-5-4.</em> You can even extend the blocks of time! It is up to you.
      </p>
    </Quote>

    <p>
      I use specific colors for each block to signify different events. The colors are inspired by Google Calendar's
      colors but the color codes are not exactly the same.
    </p>

    <ColorPreview v-bind:items="colorPreviewItems"/>

    <p>
      While the schedule provides a husk for the day, it does not provide much insight into the specific tasks and
      items that I wish to accomplish. This is where Google Tasks come in.
    </p>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import Calendar from "./Calendar.vue"
  import CalendarBlock from "./CalendarBlock.vue"
  import CalendarItem from "@/classes/CalendarItem"
  import CalendarBlockColor from "@/classes/CalendarBlockColor"
  import Quote from "@/components/Quote.vue"
  import ColorPreview from "@/components/ColorPreview.vue"

  @Component({
    components: {
      ColorPreview,
      Quote,
      Calendar,
      CalendarBlock
    }
  })
  export default class Schedule extends Vue {
    private calendarItems = [
      new CalendarItem("0630", "0700", CalendarBlockColor.MISC, "Wake up"),
      new CalendarItem("0700", "1200", CalendarBlockColor.WORK, "Work"),
      new CalendarItem("1200", "1300", CalendarBlockColor.MISC, "Lunch"),
      new CalendarItem("1300", "1700", CalendarBlockColor.WORK, "Work"),
      new CalendarItem("1700", "1800", CalendarBlockColor.EXERCISE, "Exercise"),
      new CalendarItem("1800", "1900", CalendarBlockColor.MISC, "Dinner"),
      new CalendarItem("1900", "2200", CalendarBlockColor.WORK, "Work"),
      new CalendarItem("2200", "2245", CalendarBlockColor.MISC, "Sleep"),
    ]

    private colorPreviewItems = {
      "#05a8aa": {
        title: "Miscellaneous",
        description: `
          Miscellaneous blocks include waking up/breakfast/lunch/dinner. They should be used sparingly but any task that
          isn't of high importance is assigned as misc.
        `
      },
      "#ff5666": {
        title: "Exercise",
        description: `
          As I spend most of my day sitting in front of a computer, I needed to schedule time in my day to exercise so
          that I do not become a blob. I have tried exercising in the mornings but found that it was harder to do so. I
          generally feel much more comfortable doing exercise during the evening so that is why it is scheduled at 5 PM.
        `
      },
      "#ffd447": {
        title: "Work",
        description: `
          The centerpiece of my schedule - the work blocks signify periods where I should be focusing and getting tasks
          done. As mentioned above, these blocks do not include dedicated break times as this is highly dependent on the
          tasks that are scheduled during this block.
        `
      },
      "#574ae2": {
        title: "Personal",
        description: `
          These are blocks of time for personal events. This can range from meetings with clients to dinner with
          friends. It is a more casual block of time.
        `
      },
      "#83bcff": {
        title: "Event",
        description: `
          These are events that aren't necessarily personal and are sometimes optional. They are different from personal
          events as it is much clearer when planning ahead whether or not certain events are important.
        `
      }
    }
  }
</script>

<style scoped>

</style>
