export default class TimeUnit {
  readonly hour: number
  readonly minute: number

  constructor(time: string) {
    const reg = /^(\d{2})(\d{2})$/
    const groups = time.match(reg)

    if (!groups) throw new Error("Invalid time format; follow the 24-hour time format")

    const hour = parseInt(groups[1])
    const minute = parseInt(groups[2])

    console.log(hour, minute)

    if (hour > 23 || hour < 0) throw new Error("0 <= hour <= 23")
    if (minute > 59 || minute < 0) throw new Error("0 <= minute <= 59")

    this.hour = hour
    this.minute = minute
  }

  subtract(other: TimeUnit): TimeUnit {
    let hour = this.hour
    const minute = this.minute == 0 ? 60 : this.minute

    if (this.minute < other.minute) hour -= 1

    const hourDiff = hour - other.hour
    const minuteDiff = minute - other.minute

    const min = minuteDiff == 60 ? 0 : minuteDiff

    return new TimeUnit(`${hourDiff.toString().padStart(2, "0")}${min.toString().padStart(2, "0")}`)
  }
}
