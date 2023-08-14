export default function typeofDate(arr, column, title) {
  for (let i = 0; i < arr.length; i += 1) {
    if (
      typeof arr[i] != "string" ||
      !arr[i].includes("-") ||
      arr[i].split("-")[0].length != 4 ||
      arr[i].split("-")[1].length != 2
    ) {
      throw column + " " + title + " " + i;
    }
  }
}
