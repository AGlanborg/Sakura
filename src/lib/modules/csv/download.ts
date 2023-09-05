import options from "$lib/schemes/layouts/overview/index";
import type { type_main, type_layouts } from "$lib/types/index";

export default function downloadCSV(filtered: type_main[], selected: number[], layout: string) {
  let selectedLayout: type_layouts[] = options[layout]
  let txt = "data:text/csv;charset=utf-8,"

  for (let i = 0; i < selectedLayout.length; i += 1) {
    txt += selectedLayout[i].name.includes(",")
      ? selectedLayout[i].name.replaceAll(",", "") + ","
      : selectedLayout[i].name + ","
  }

  txt = txt.slice(0, -1)
  txt += "\n"

  for (let n = 0; n < filtered.length; n += 1) {
    if (selected.includes(filtered[n].main_id)) {
      for (let i = 0; i < selectedLayout.length; i += 1) {
        const cell = new String(filtered[n][selectedLayout[i].column])

        txt += cell.includes(",")
          ? cell.replaceAll(",", "") + ","
          : cell + ","
      }

      txt = txt.slice(0, -1)
      txt += "\n"
    }
  }

  txt = txt.trim()

  window.open(encodeURI(txt));
}
