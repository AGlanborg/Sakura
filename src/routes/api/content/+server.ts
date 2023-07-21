import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import { open } from "sqlite";

import sqlite3 from "sqlite3";

// api/db GET
export const GET: RequestHandler = async ({ request }) => {
  if (!request.url.split('=')[1]) {
    return json({})
  }

  const db = await open({
    filename: `/licenses/${request.url.split('=')[1]}.sqlite`,
    driver: sqlite3.Database
  })

  const main = await db.all('SELECT * FROM main')
  const saljare = await db.all('SELECT * FROM saljare')
  const kopare = await db.all('SELECT * FROM kopare')
  const arbetstyp = await db.all('SELECT * FROM arbetstyp')

  return json({
    main: main,
    saljare: saljare,
    kopare: kopare,
    arbetstyp: arbetstyp
  })
}