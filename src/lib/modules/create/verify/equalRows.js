export default function equalRows(obj) {
  let arr = Object.values(obj);

  return arr.every((x) => x.split("\n").length == arr[0].split("\n").length);
}
