import labelsMonths from "../months/labelsMonths";

export default function calBar(content, filters) {
  let filtered = content.main.filter((row) =>
    filters.labels.includes(row[filters.category])
  );

  console.log("filtered: ", filtered);

  let obj = { labels: [], datasets: [] };

  obj.labels = labelsMonths(filtered, filters.time);

  console.log("obj: ", obj);

  return {
    labels: obj.labels,
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
        data: [1, 2, 3, 4, 5, 6],
        backgroundColor: "rgba(98,  182, 239, 0.5)",
        borderWidth: 2,
        borderColor: "rgba(98,  182, 239, 1)",
      },
    ],
  };
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
