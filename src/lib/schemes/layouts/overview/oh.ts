import type { type_layouts } from "$lib/types"

export let layoutsOh: type_layouts[] = [
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
    "name": "Köpare",
    "size": "default",
    "type": "foreign",
    "column": "kopare",
    "position": 3
  },
  {
    "name": "Text På Internfaktura",
    "size": "extra",
    "type": "string",
    "column": "text",
    "position": 4
  },
  {
    "name": "Kontaktinfo",
    "size": "long",
    "type": "string",
    "column": "info",
    "position": 5
  },
  {
    "name": "OH",
    "size": "default",
    "type": "number",
    "column": "oh",
    "position": 6
  },
  {
    "name": "Internfaktura per period, kr",
    "size": "extra",
    "type": "string",
    "column": "oh",
    "position": 7
  },
  {
    "name": "Periodisering Start",
    "size": "extra",
    "type": "date",
    "column": "start",
    "position": 8
  },
  {
    "name": "Periodisering Slut",
    "size": "extra",
    "type": "date",
    "column": "slut",
    "position": 9
  },
  {
    "name": "Periodisering antal månader",
    "size": "extra",
    "type": "number",
    "column": "perioder",
    "position": 10
  },
]