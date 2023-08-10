import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import { open } from "sqlite";

import sqlite3 from "sqlite3";

// api/content/saljare GET
export const GET: RequestHandler = async ({ request }) => {
  if (!request.url.split('=')[1]) {
    return json({})
  }

  const db = await open({
    filename: `/licenses/${request.url.split('=')[1]}.sqlite`,
    driver: sqlite3.Database
  })

  const saljare = await db.all('SELECT * FROM saljare')

  return json({
    saljare: saljare,
  })
}

// api/content/saljare POST
export const POST: RequestHandler = async ({request}) => {
  const req = await request.json()

  const db = await open({
    filename: `/licenses/${req.file}.sqlite`,
    driver: sqlite3.Database
  })

  let content = `('${req.rst}','${req.copernicus}','${req.kontakt}','${req.name}')`

  await db.run(`INSERT INTO saljare (rst,copernicus,kontakt,name) VALUES ${content}`)

  return json(`Created ${req}`)
}