export default function calMinMaxYears(filtered) {
  const now = new Date();
  let min = now.getFullYear()
  let max = now.getFullYear()

  for (let i = 0; i < filtered.length; i += 1) {
    parseInt(filtered[i].start.split("-")[0]) < min
      ? min = parseInt(filtered[i].start.split("-")[0])
      : ""

    parseInt(filtered[i].slut.split("-")[0]) > max
      ? max = parseInt(filtered[i].slut.split("-")[0])
      : ""
  }

  return [min, max]
}