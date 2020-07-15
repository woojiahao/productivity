import CalendarBlockColor from "@/classes/CalendarBlockColor"
import TimeUnit from "@/classes/TimeUnit"

export default class CalendarItem {
  readonly start: TimeUnit
  readonly end: TimeUnit
  readonly color: CalendarBlockColor
  readonly taskName: string

  constructor(start: TimeUnit, end: TimeUnit, color: CalendarBlockColor, taskName: string) {
    this.start = start
    this.end = end
    this.color = color
    this.taskName = taskName
  }
}
