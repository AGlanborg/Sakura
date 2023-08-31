import typeofNumber from "./typeof/number"
import typeofDate from "./typeof/date"
import typeofTyp from "./typeof/typ"

export default function verifyMain(obj) {
  typeofNumber(obj.antal, "antal", "Antal")
  typeofTyp(obj.typ, "typ", "Typ")
  typeofNumber(obj.mangd, "mangd", "Antal-Licenser")
  typeofNumber(obj.inprisex, "inprisex", "Inpris-ex.moms")
  typeofNumber(obj.procent, "procent", "Procent-(%)")
  typeofNumber(obj.valutakurs, "valutakurs", "Valutakurs")
  typeofDate(obj.start, "start", "Periodisering-Start")
  typeofDate(obj.slut, "slut", "Periodisering-Slut")
  typeofDate(obj.now, "now", "Faktureringsperioder")
}