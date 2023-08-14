export default function wrongValueType(e) {
  e = e.split(" ");

  return {
    result: "Failed",
    reason: `Wrong value type on ${
      e[1].includes("-") ? e[1].replace("-", " ") : e[1]
    } on row ${Number(e[2]) + 1}`,
    code: -2,
    object: {
      failed: [e[0]],
    },
  };
}
