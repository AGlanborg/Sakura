import calMinMaxYears from "./calMinMaxYears"

export default function labelsMonths(filtered, time) {
  if (time == "months") {
    return ["January","February","March","April","May","June","July","August","September","October","November","December"]
  } // else if (time == "years")

  let arr = new Array()

  let [min, max] = calMinMaxYears(filtered)

  for (let i = min; i < max + 1; i += 1) {
    arr.push(i)
  }

  return arr
}