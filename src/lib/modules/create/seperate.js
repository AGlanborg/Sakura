// @ts-nocheck

import equalRows from "./verify/equalRows";
import unequalRows from "./errors/unequalRows";

export default function seperate(obj) {
  return equalRows(obj) ? commitSeperate(obj) : unequalRows(obj);
}

function commitSeperate(obj) {
  return "commit";
}
