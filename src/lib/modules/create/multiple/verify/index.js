import replaceCommas from "./arrays/replaceCommas";
import mainTypeof from "./typeof/mainTypeof";
import wrongValueType from "../errors/wrongValueType";
import calculateMainValues from "../calculate/calculateMainValues"
import existsMain from "./existsMain";

export default async function main(obj) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value == "string") {
      obj[key] = value.split("\n");
    }
  }

  obj = replaceCommas(obj);

  try {
    mainTypeof(obj)
  } catch (e) {
    return wrongValueType(e);
  }

  obj = calculateMainValues(obj)

  const arr = createRows(obj)

  return await existsMain(arr)
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
