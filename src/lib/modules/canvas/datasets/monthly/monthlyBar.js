export default function monthlyBar(objs, labels, filters) {
  let final = Array(labels.length);

  for (let i = 0; i < labels.length; i += 1) {
    final[i] = final[i] ? final[i] : 0;

    for (let n = 0; n < objs.length; n += 1) {
      const obj = objs[n];
      console.log(obj.start.month, " ", i)
      if (obj.start.year == filters.year && obj.slut.year > filters.year && obj.start.month <= i + 1) {
        final[i] += Math.round(obj.monthly);
      } else if (obj.start.year == filters.year && obj.slut.year == filters.year && obj.start.month <= i + 1 && obj.slut.month >= i + 1) {
        final[i] += Math.round(obj.monthly);
      } else if (obj.start.year < filters.year && obj.slut.year > filters.year) {
        final[i] += Math.round(obj.monthly);
      } else if (obj.start.year < filters.year && obj.slut.year == filters.year && obj.slut.month >= i + 1) {
        final[i] += Math.round(obj.monthly);
      }
    }
  }

  return final;
}
