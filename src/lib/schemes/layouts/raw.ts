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
    "name": "Arbetstyp",
    "size": "long",
    "type": "foreign",
    "column": "arbetstyp",
    "position": 4
  },
  {
    "name": "Antal Poster",
    "size": "long",
    "type": "number",
    "column": "antal",
    "position": 5
  },
  {
    "name": "Typ",
    "size": "default",
    "type": "string",
    "column": "typ",
    "position": 6
  },
  {
    "name": "Leverantör",
    "size": "long",
    "type": "foreign",
    "column": "leverantor",
    "position": 7
  },
  {
    "name": "Text På Internfaktura",
    "size": "extra",
    "type": "string",
    "column": "text",
    "position": 8
  },
  {
    "name": "Kontaktinfo",
    "size": "long",
    "type": "string",
    "column": "info",
    "position": 9
  },
  {
    "name": "Valuta",
    "size": "default",
    "type": "string",
    "column": "valuta",
    "position": 10
  },
  {
    "name": "Antal licenser",
    "size": "long",
    "type": "number",
    "column": "mangd",
    "position": 11
  },
  {
    "name": "Inpris ex. moms",
    "size": "extra",
    "type": "number",
    "column": "inprisex",
    "position": 12
  },
  {
    "name": "Inpris inkl. moms",
    "size": "extra",
    "type": "number",
    "column": "inprisin",
    "position": 13
  },
  {
    "name": "Procent (%)",
    "size": "long",
    "type": "number",
    "column": "procent",
    "position": 14
  },
  {
    "name": "OH",
    "size": "default",
    "type": "number",
    "column": "oh",
    "position": 15
  },
  {
    "name": "Totalt, SEK, inkl. moms och OH",
    "size": "extra",
    "type": "number",
    "column": "totalt",
    "position": 16
  },
  {
    "name": "Fakturanummer",
    "size": "extra",
    "type": "string",
    "column": "fakturanum",
    "position": 17
  },
  {
    "name": "Kommentar",
    "size": "long",
    "type": "string",
    "column": "kommentar",
    "position": 18
  },
  {
    "name": "Internpris",
    "size": "long",
    "type": "number",
    "column": "inpris",
    "position": 19
  },
  {
    "name": "Periodisering Start",
    "size": "extra",
    "type": "date",
    "column": "start",
    "position": 20
  },
  {
    "name": "Periodisering Slut",
    "size": "extra",
    "type": "date",
    "column": "slut",
    "position": 21
  },
  {
    "name": "Periodisering antal månader",
    "size": "extra",
    "type": "number",
    "column": "perioder",
    "position": 22
  },
  {
    "name": "Antal månader upfront",
    "size": "extra",
    "type": "number",
    "column": "upfront",
    "position": 23
  },
  {
    "name": "Antal månader resterande",
    "size": "extra",
    "type": "number",
    "column": "rest",
    "position": 24
  },
  {
    "name": "Internfakt. per period, SEK",
    "size": "extra",
    "type": "number",
    "column": "internfakt",
    "position": 25
  },
  {
    "name": "Intäkt",
    "size": "default",
    "type": "number",
    "column": "intakt",
    "position": 26
  },
  {
    "name": "Check",
    "size": "default",
    "type": "number",
    "column": "scan",
    "position": 27
  },
  {
    "name": "Created",
    "size": "default",
    "type": "date",
    "column": "now",
    "position": 28
  }
]