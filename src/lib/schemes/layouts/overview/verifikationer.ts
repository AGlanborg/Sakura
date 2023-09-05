import type { type_layouts } from "$lib/types"

export let layoutsVerifikationer: type_layouts[] = [
  {
    "name": "Id",
    "size": "short",
    "type": "number",
    "column": "main_id"
  },
  {
    "name": "Created",
    "size": "default",
    "type": "date",
    "column": "now"
  },
  {
    "name": "Säljare (KST)",
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
    "name": "Antal licenser",
    "size": "long",
    "type": "number",
    "column": "mangd"
  },
  {
    "name": "Totalt, SEK, inkl. moms och OH",
    "size": "extra",
    "type": "number",
    "column": "totalt"
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
    "name": "Kommentar",
    "size": "long",
    "type": "string",
    "column": "kommentar"
  }
]