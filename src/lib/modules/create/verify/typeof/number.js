export default function typeofNumber(arr, column,  title) {
  for (let i = 0; i < arr.length; i += 1) {
    if (isNaN(arr[i]) || !arr[i] || typeof arr[i] == "boolean") {
      throw column + " " + title + " " + i
    }
  }
}