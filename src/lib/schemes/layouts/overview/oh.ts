import type { type_layouts } from "$lib/types"

export let layoutsOh: type_layouts[] = [
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
    "name": "Köpare",
    "size": "default",
    "type": "foreign",
    "column": "kopare"
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
    "name": "OH",
    "size": "default",
    "type": "number",
    "column": "oh"
  },
  {
    "name": "Internfaktura per period, kr",
    "size": "extra",
    "type": "string",
    "column": "oh"
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
]