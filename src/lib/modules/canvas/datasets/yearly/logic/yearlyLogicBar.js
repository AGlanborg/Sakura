export default function yearlyLogicBar(objs, labels) {
  let final = Array(labels.length);

  for (let i = 0; i < labels.length; i += 1) {
    final[i] = final[i] ? final[i] : 0;

    for (let n = 0; n < objs.length; n += 1) {
      const obj = objs[n];

      if (obj.start.year == labels[i] && obj.slut.year > labels[i]) {
        final[i] += Math.round(obj.monthly * (12 - obj.start.month + 1));
      } else if (obj.start.year == labels[i] && obj.slut.year == labels[i]) {
        final[i] += Math.round(obj.monthly * (obj.slut.month - obj.start.month + 1));
      } else if (obj.start.year < labels[i] && obj.slut.year > labels[i]) {
        final[i] += Math.round(obj.monthly * 12);
      } else if (obj.start.year < labels[i] && obj.slut.year == labels[i]) {
        final[i] += Math.round(obj.monthly * obj.slut.month);
      }
    }
  }

  return final;
}
