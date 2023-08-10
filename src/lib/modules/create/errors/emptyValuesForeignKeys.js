export default function emptyValuesForeignKeys(e) {
  e = e.split(" ");

  return ["arbetstyp"].includes(e[0])
    ? emptyValuesArbetstyp(e)
    : emptyValuesCompany(e);
}

function emptyValuesArbetstyp(e) {
  return {
    result: "Failed",
    reason: `Missing identifier for ${e[1]} on row ${Number(e[2]) + 1}`,
    code: -1,
    object: {
      failed: [`${e[0]}_forkortning`, `${e[0]}_tillverkare`],
    },
  };
}

function emptyValuesCompany(e) {
  return {
    result: "Failed",
    reason: `Missing identifier for ${e[1]} on row ${Number(e[2]) + 1}`,
    code: -1,
    object: {
      failed: [`${e[0]}_cop`, `${e[0]}_rst`],
    },
  };
}
