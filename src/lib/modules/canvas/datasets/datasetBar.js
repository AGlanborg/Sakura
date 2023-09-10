import yearlyBar from "./yearly/yearlyBar";

export default function datasetBar(key, arr, rgb, labels, filters) {
  let data =
    filters.time == "months"
      ? monthlyBar(arr, filters)
      : yearlyBar(arr, labels, filters); // time == "years"

  return {
    label: key,
    data: data,
    backgroundColor: rgb.background,
    borderWidth: 2,
    borderColor: rgb.border,
  };
}

function monthlyBar(arr, filters) {}
