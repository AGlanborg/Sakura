import yearlyLogicBar from "./logic/yearlyLogicBar";

export default function yearlyBar(arr, labels, filters) {
  let objs = Array();

  arr.forEach((e) => {
    let start = e.start.split("-");
    let slut = e.slut.split("-");

    objs.push({
      start: {
        year: parseInt(start[0]),
        month: parseInt(start[1]),
        total: parseInt(start[0]) * 12 + parseInt(start[1]),
      },
      slut: {
        year: parseInt(slut[0]),
        month: parseInt(slut[1]),
        total: parseInt(slut[0]) * 12 + parseInt(slut[1]),
      },
      perioder: e.perioder,
      focus: e[filters.dataset],
      monthly: e[filters.dataset] / e.perioder,
    });
  });

  return yearlyLogicBar(objs, labels);
}