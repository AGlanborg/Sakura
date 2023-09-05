import type { type_main } from "./main";

export type type_layouts = {
  name: string;
  size: string;
  type: string;
  column: keyof type_main;
}