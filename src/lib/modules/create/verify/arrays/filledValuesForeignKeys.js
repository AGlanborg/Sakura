export default function filledValuesForeignKeys(x, y, obj) {
  for (let i = 0; i < x.length; i += 1) {
    if (!x[i] && !y[i]) {
      throw obj.column + " " + obj.title + " " + i;
    }
  }
}
