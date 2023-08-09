// @ts-nocheck

import equalRows from "../verify/equalRows";
import unequalRows from "../errors/unequalRows";
import foreignKeys from "./foreignKeys";
import emptyValuesForeignKeys from "../errors/emptyValuesForeignKeys";

export default function seperate(obj) {
  return equalRows(obj) ? commitSeperate(obj) : unequalRows(obj);
}

function commitSeperate(obj) {
  console.log(obj);
  try {
    obj = foreignKeys(obj);
  } catch (e) {
    return emptyValuesForeignKeys(e)
  }

  return true
}
