import type { type_layouts } from "$lib/types"

export let layoutsVerifikationer: type_layouts[] = [
  {
    "name": "Id",
    "size": "short",
    "type": "number",
    "column": "main_id",
    "position": 1
  },
  {
    "name": "Created",
    "size": "default",
    "type": "date",
    "column": "now",
    "position": 2
  },
  {
    "name": "Säljare (KST)",
    "size": "default",
    "type": "foreign",
    "column": "saljare",
    "position": 3
  },
  {
    "name": "Köpare",
    "size": "default",
    "type": "foreign",
    "column": "kopare",
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
    "name": "Antal licenser",
    "size": "long",
    "type": "number",
    "column": "mangd",
    "position": 7
  },
  {
    "name": "Totalt, SEK, inkl. moms och OH",
    "size": "extra",
    "type": "number",
    "column": "totalt",
    "position": 8
  },
  {
    "name": "Text På Internfaktura",
    "size": "extra",
    "type": "string",
    "column": "text",
    "position": 9
  },
  {
    "name": "Kontaktinfo",
    "size": "long",
    "type": "string",
    "column": "info",
    "position": 10
  },
  {
    "name": "Kommentar",
    "size": "long",
    "type": "string",
    "column": "kommentar",
    "position": 11
  }
]