export default function typeofTyp(arr, column,  title) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!["SUPPORT", "SERVICE", "LICENS"].includes(arr[i].toUpperCase())) {
      throw column + " " + title + " " + i
    }
  }
}