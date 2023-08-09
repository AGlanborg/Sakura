// @ts-nocheck

export default function filledValuesForeignKeys(x, y, label, title) {
  console.log(title)
  for (let i = 0; i < x.length; i += 1) {
    if (!x[i] && !y[i]) {
      throw label + " " + title + " " + i;
    }
  }
}
