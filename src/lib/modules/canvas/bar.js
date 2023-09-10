import labelsMonths from "../months/labelsMonths";
import datasetBar from "./datasets/datasetBar";
import colours from "./colours.json"

export default function calBar(content, filters) {
  let obj = { labels: [], datasets: [] };
  let collections = {}
  let colourindex = 0
  let filtered = content.main.filter((row) =>
    filters.labels.includes(row[filters.category])
  );

  obj.labels = labelsMonths(filtered, filters.time);

  for (let i = 0; i < filters.labels.length; i += 1) {
    collections[filters.labels[i]] = content.main.filter((row) =>
    filters.labels[i] == row[filters.category])
  }

  for (const [key, value] of Object.entries(collections)) {
    console.log("hmm")
    obj.datasets.push(datasetBar(key, value, colours[colourindex], obj.labels, filters))
    colourindex += 1
  }

  return obj;
}

const example = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "% of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgba(255, 134, 159, 0.5)",
      borderWidth: 2,
      borderColor: "rgba(255, 134, 159, 1)",
    },
    {
      label: "% of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgba(98,  182, 239, 0.5)",
      borderWidth: 2,
      borderColor: "rgba(98,  182, 239, 1)",
    },
  ],
};
