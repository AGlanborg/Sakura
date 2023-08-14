import equalRows from "../verify/arrays/equalRows";
import unequalRows from "../errors/unequalRows";
import foreignKeys from "./foreignKeys";
import emptyValuesForeignKeys from "../errors/emptyValuesForeignKeys";
import main from "./main";

export default function seperate(obj) {
  return equalRows(obj) ? commitSeperate(obj) : unequalRows(obj);
}

async function commitSeperate(obj) {
  try {
    obj = await foreignKeys(obj);
  } catch (e) {
    return emptyValuesForeignKeys(e);
  }

  return main(obj);
}
