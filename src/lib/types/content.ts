import type { type_main } from "./main"
import type { type_saljare } from "./saljare"
import type { type_kopare } from "./kopare"
import type { type_arbetstyp } from "./arbetstyp"

export type type_content = {
  forEach: any;
  main: type_main[],
  saljare: type_saljare[],
  kopare: type_kopare[],
  arbetstyp: type_arbetstyp[]
}