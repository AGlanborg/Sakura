import type { type_layouts } from "$lib/types"

export let layoutsRaw: type_layouts[] = [
  {
    "name": "Id",
    "size": "short",
    "type": "number",
    "column": "main_id",
    "position": 1
  },
  {
    "name": "Säljare",
    "size": "default",
    "type": "foreign",
    "column": "saljare",
    "position": 2
  },
  {
    "name": "Köpare",
    "size": "default",
    "type": "foreign",
    "column": "kopare",
    "position": 3
  },
  {
    "name": "Konto",
    "size": "default",
    "type": "number",
    "column": "konto",
    "position": 4
  },
  {
    "name": "Arbetstyp",
    "size": "long",
    "type": "foreign",
    "column": "arbetstyp",
    "position": 5
  },
  {
    "name": "Antal Poster",
    "size": "long",
    "type": "number",
    "column": "antal",
    "position": 6
  },
  {
    "name": "Typ",
    "size": "default",
    "type": "string",
    "column": "typ",
    "position": 7
  },
  {
    "name": "Återförsäljare",
    "size": "default",
    "type": "string",
    "column": "aterforsaljare",
    "position": 8
  },
  {
    "name": "Tillverkare",
    "size": "default",
    "type": "string",
    "column": "tillverkare",
    "position": 9
  },
  {
    "name": "Text På Internfaktura",
    "size": "extra",
    "type": "string",
    "column": "text",
    "position": 10
  },
  {
    "name": "Kontaktinfo",
    "size": "long",
    "type": "string",
    "column": "info",
    "position": 11
  },
  {
    "name": "Valuta",
    "size": "default",
    "type": "string",
    "column": "valuta",
    "position": 12
  },
  {
    "name": "Antal licenser",
    "size": "long",
    "type": "number",
    "column": "mangd",
    "position": 13
  },
  {
    "name": "Inpris ex. moms",
    "size": "extra",
    "type": "number",
    "column": "inprisex",
    "position": 14
  },
  {
    "name": "Inpris inkl. moms",
    "size": "extra",
    "type": "number",
    "column": "inprisin",
    "position": 15
  },
  {
    "name": "Procent (%)",
    "size": "long",
    "type": "number",
    "column": "procent",
    "position": 16
  },
  {
    "name": "OH",
    "size": "default",
    "type": "number",
    "column": "oh",
    "position": 17
  },
  {
    "name": "Totalt inkl. moms och OH",
    "size": "extra",
    "type": "number",
    "column": "totalt",
    "position": 18
  },
  {
    "name": "Valutakurs",
    "size": "default",
    "type": "number",
    "column": "valutakurs",
    "position": 19
  },
  {
    "name": "Totalt, SEK, inkl. moms och OH",
    "size": "extra",
    "type": "number",
    "column": "sek",
    "position": 20
  },
  {
    "name": "Fakturanummer",
    "size": "extra",
    "type": "string",
    "column": "fakturanum",
    "position": 21
  },
  {
    "name": "Kommentar",
    "size": "long",
    "type": "string",
    "column": "kommentar",
    "position": 22
  },
  {
    "name": "Internpris",
    "size": "long",
    "type": "number",
    "column": "inpris",
    "position": 23
  },
  {
    "name": "Periodisering Start",
    "size": "extra",
    "type": "date",
    "column": "start",
    "position": 24
  },
  {
    "name": "Periodisering Slut",
    "size": "extra",
    "type": "date",
    "column": "slut",
    "position": 25
  },
  {
    "name": "Periodisering antal månader",
    "size": "extra",
    "type": "number",
    "column": "perioder",
    "position": 26
  },
  {
    "name": "Antal månader upfront",
    "size": "extra",
    "type": "number",
    "column": "upfront",
    "position": 27
  },
  {
    "name": "Antal månader resterande",
    "size": "extra",
    "type": "number",
    "column": "rest",
    "position": 28
  },
  {
    "name": "Internfakt. per period, SEK",
    "size": "extra",
    "type": "number",
    "column": "internfakt",
    "position": 29
  },
  {
    "name": "Intäkt",
    "size": "default",
    "type": "number",
    "column": "intakt",
    "position": 30
  },
  {
    "name": "Check",
    "size": "default",
    "type": "number",
    "column": "scan",
    "position": 31
  },
  {
    "name": "Created",
    "size": "default",
    "type": "date",
    "column": "now",
    "position": 32
  }
]