import type { type_layouts } from "$lib/types"

export let layoutsLeverantor: type_layouts[] = [
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
    "name": "Internpris",
    "size": "long",
    "type": "number",
    "column": "inpris",
    "position": 6
  },
  {
    "name": "Internfakt. per period, SEK",
    "size": "extra",
    "type": "number",
    "column": "internfakt",
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
  }
]