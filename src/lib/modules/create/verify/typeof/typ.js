export default function typeofTyp(arr, column,  title) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!["Support", "Service", "Licens"].includes(arr[i])) {
      throw column + " " + title + " " + i
    }
  }
}