import type { type_layouts } from "$lib/types"

export let layoutsRaw: type_layouts[] = [
  {
    "name": "Id",
    "size": "short",
    "type": "number",
    "column": "main_id"
  },
  {
    "name": "Säljare",
    "size": "default",
    "type": "foreign",
    "column": "saljare"
  },
  {
    "name": "Köpare",
    "size": "default",
    "type": "foreign",
    "column": "kopare"
  },
  {
    "name": "Konto",
    "size": "default",
    "type": "number",
    "column": "konto"
  },
  {
    "name": "Arbetstyp",
    "size": "long",
    "type": "foreign",
    "column": "arbetstyp"
  },
  {
    "name": "Antal Poster",
    "size": "long",
    "type": "number",
    "column": "antal"
  },
  {
    "name": "Typ",
    "size": "default",
    "type": "string",
    "column": "typ"
  },
  {
    "name": "Återförsäljare",
    "size": "default",
    "type": "string",
    "column": "aterforsaljare"
  },
  {
    "name": "Tillverkare",
    "size": "default",
    "type": "string",
    "column": "tillverkare"
  },
  {
    "name": "Text På Internfaktura",
    "size": "extra",
    "type": "string",
    "column": "text"
  },
  {
    "name": "Kontaktinfo",
    "size": "long",
    "type": "string",
    "column": "info"
  },
  {
    "name": "Valuta",
    "size": "default",
    "type": "string",
    "column": "valuta"
  },
  {
    "name": "Antal licenser",
    "size": "long",
    "type": "number",
    "column": "mangd"
  },
  {
    "name": "Inpris ex. moms",
    "size": "extra",
    "type": "number",
    "column": "inprisex"
  },
  {
    "name": "Inpris inkl. moms",
    "size": "extra",
    "type": "number",
    "column": "inprisin"
  },
  {
    "name": "Procent (%)",
    "size": "long",
    "type": "number",
    "column": "procent"
  },
  {
    "name": "OH",
    "size": "default",
    "type": "number",
    "column": "oh"
  },
  {
    "name": "Totalt inkl. moms och OH",
    "size": "extra",
    "type": "number",
    "column": "totalt"
  },
  {
    "name": "Valutakurs",
    "size": "default",
    "type": "number",
    "column": "valutakurs"
  },
  {
    "name": "Totalt, SEK, inkl. moms och OH",
    "size": "extra",
    "type": "number",
    "column": "sek"
  },
  {
    "name": "Fakturanummer",
    "size": "extra",
    "type": "string",
    "column": "fakturanum"
  },
  {
    "name": "Kommentar",
    "size": "long",
    "type": "string",
    "column": "kommentar"
  },
  {
    "name": "Internpris",
    "size": "long",
    "type": "number",
    "column": "inpris"
  },
  {
    "name": "Periodisering Start",
    "size": "extra",
    "type": "date",
    "column": "start"
  },
  {
    "name": "Periodisering Slut",
    "size": "extra",
    "type": "date",
    "column": "slut"
  },
  {
    "name": "Periodisering antal månader",
    "size": "extra",
    "type": "number",
    "column": "perioder"
  },
  {
    "name": "Antal månader upfront",
    "size": "extra",
    "type": "number",
    "column": "upfront"
  },
  {
    "name": "Antal månader resterande",
    "size": "extra",
    "type": "number",
    "column": "rest"
  },
  {
    "name": "Internfakt. per period, SEK",
    "size": "extra",
    "type": "number",
    "column": "internfakt"
  },
  {
    "name": "Intäkt",
    "size": "default",
    "type": "number",
    "column": "intakt"
  },
  {
    "name": "Check",
    "size": "default",
    "type": "number",
    "column": "scan"
  },
  {
    "name": "Created",
    "size": "default",
    "type": "date",
    "column": "now"
  }
]