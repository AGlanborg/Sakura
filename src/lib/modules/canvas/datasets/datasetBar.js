import yearlyBar from "./yearly/yearlyBar";
import monthlyBar from "./monthly/monthlyBar";

export default function datasetBar(key, arr, rgb, labels, filters) {
  const data =
    filters.time == "months"
      ? monthlyBar(setupBar(arr, filters), labels, filters)
      : yearlyBar(setupBar(arr, filters), labels); // time == "years"

  return {
    label: key,
    data: data,
    backgroundColor: rgb.background,
    borderWidth: 2,
    borderColor: rgb.border,
  };
}

function setupBar(arr, filters) {
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

  return objs;
}
