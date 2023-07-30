import handleMonth from "./handleMonths"

export function filterValue(filters, filtered, column) {
  if (filters[column].length) {
    let res = []

    filtered.forEach((obj) => filters[column].includes(obj[column]) ? res.push(obj) : "")

    return res
  }

  return filtered
}

export function filterString(filters, filtered, column) {
  if (filters[column].length) {
    let res = []

    filtered.forEach((obj) => filters[column].some(str => obj[column].includes(str)) ? res.push(obj) : "")

    return res
  }

  return filtered
}

export function filterMonths(filters, filtered, column) {
  if (filters[column].length) {
    let res = []

    filtered.forEach((obj) => filters[column].some(date => handleMonth(obj.start, obj.slut, date)) ? res.push(obj) : "")

    return res
  }

  return filtered
}