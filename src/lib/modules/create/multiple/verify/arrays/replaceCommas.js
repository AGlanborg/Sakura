export default function replaceCommas(obj) {
  for (const [key, value] of Object.entries(obj)) {
    for (let i = 0; i < value.length; i += 1) {
      if (typeof value[i] == "string" && value[i].includes(",")) {
        obj[key] = value[i].replaceAll(",", ".")
      }
    }
  }

  return obj
}