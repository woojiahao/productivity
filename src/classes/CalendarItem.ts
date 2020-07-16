import CalendarBlockColor from "@/classes/CalendarBlockColor"
import TimeUnit from "@/classes/TimeUnit"

export default class CalendarItem {
  readonly start: TimeUnit
  readonly end: TimeUnit
  readonly color: CalendarBlockColor
  readonly taskName: string

  constructor(start: string, end: string, color: CalendarBlockColor, taskName: string) {
    this.start = new TimeUnit(start)
    this.end = new TimeUnit(end)
    this.color = color
    this.taskName = taskName
  }
}
