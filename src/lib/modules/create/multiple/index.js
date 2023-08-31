import equalRows from "./verify/arrays/equalRows";
import unequalRows from "./errors/unequalRows";
import verifyForeignKeys from "./verify/foreignKeys";
import emptyValuesForeignKeys from "./errors/emptyValuesForeignKeys";
import replaceCommas from "./verify/arrays/replaceCommas";
import verifyMain from "./verify/main";
import wrongValueType from "./errors/wrongValueType";
import calculateMainValues from "./calculate/calculateMainValues";
import foreignKeys from "./foreignKeys";
import main from "./main";

export default function seperate(obj) {
  return equalRows(obj) ? commitSeperate(obj) : unequalRows(obj);
}

async function commitSeperate(obj) {
  const saljare = {
    rst: obj.saljare_rst.split("\n"),
    cop: obj.saljare_cop.split("\n"),
    kontakt: obj.saljare_kontakt.split("\n"),
    column: "saljare",
    title: "Säljare",
  };

  const kopare = {
    rst: obj.kopare_rst.split("\n"),
    cop: obj.kopare_cop.split("\n"),
    kontakt: obj.kopare_kontakt.split("\n"),
    column: "kopare",
    title: "Köpare",
  };

  const arbetstyp = {
    arbetstyp: obj.arbetstyp_arbetstyp.split("\n"),
    tillverkare: obj.arbetstyp_tillverkare.split("\n"),
    column: "arbetstyp",
    title: "Arbetstyp",
  };

  try {
    verifyForeignKeys(saljare, kopare, arbetstyp);
  } catch (e) {
    return emptyValuesForeignKeys(e);
  }

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value == "string") {
      obj[key] = value.split("\n");
    }
  }

  obj = replaceCommas(obj);

  try {
    verifyMain(obj)
  } catch (e) {
    return wrongValueType(e);
  }

  obj = calculateMainValues(obj)

  obj = await foreignKeys(obj, saljare, kopare, arbetstyp)

  const arr = createRows(obj)

  return await main(arr);
}

function createRows(obj) {
  let arr = []

  for (let i = 0; i < Object.values(obj)[0].length; i += 1) {
    let row = new Object

    for(const [key, value] of Object.entries(obj)) {
      row[key] = value[i]
    }

    arr.push(row)
  }

  return arr;
}
