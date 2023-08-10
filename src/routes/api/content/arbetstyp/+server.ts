import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import { open } from "sqlite";

import sqlite3 from "sqlite3";

// api/content/arbetstyp GET
export const GET: RequestHandler = async ({ request }) => {
  if (!request.url.split('=')[1]) {
    return json({})
  }

  const db = await open({
    filename: `/licenses/${request.url.split('=')[1]}.sqlite`,
    driver: sqlite3.Database
  })

  const arbetstyp = await db.all('SELECT * FROM arbetstyp')

  return json({
    arbetstyp: arbetstyp,
  })
}

// api/content/arbetstyp POST
export const POST: RequestHandler = async ({request}) => {
  const req = await request.json()

  const db = await open({
    filename: `/licenses/${req.file}.sqlite`,
    driver: sqlite3.Database
  })

  let content = `('${req.tillverkare}','${req.arbetstyp}')`

  await db.run(`INSERT INTO arbetstyp (tillverkare,arbetstyp) VALUES ${content}`)

  return json(`Created ${req}`)
}