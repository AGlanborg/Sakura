import typeofNumber from "./number"
import typeofDate from "./date"

export default function mainTypeof(obj) {
  typeofNumber(obj.antal, "antal", "Antal")
  typeofNumber(obj.mangd, "mangd", "Antal-Licenser")
  typeofNumber(obj.inprisex, "inprisex", "Inpris-ex.moms")
  typeofNumber(obj.procent, "procent", "Procent-(%)")
  typeofDate(obj.start, "start", "Periodisering-Start")
  typeofDate(obj.slut, "slut", "Periodisering-Slut")
  typeofDate(obj.now, "now", "Faktureringsperioder")
}