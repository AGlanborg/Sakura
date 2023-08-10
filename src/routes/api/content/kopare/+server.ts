import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import { open } from "sqlite";

import sqlite3 from "sqlite3";

// api/content/kopare GET
export const GET: RequestHandler = async ({ request }) => {
  if (!request.url.split('=')[1]) {
    return json({})
  }

  const db = await open({
    filename: `/licenses/${request.url.split('=')[1]}.sqlite`,
    driver: sqlite3.Database
  })

  const kopare = await db.all('SELECT * FROM kopare')

  return json({
    kopare: kopare,
  })
}

// api/content/kopare POST
export const POST: RequestHandler = async ({request}) => {
  const req = await request.json()

  const db = await open({
    filename: `/licenses/${req.file}.sqlite`,
    driver: sqlite3.Database
  })

  let content = `('${req.rst}','${req.copernicus}','${req.kontakt}','${req.name}')`

  await db.run(`INSERT INTO kopare (rst,copernicus,kontakt,name) VALUES ${content}`)

  return json(`Created ${req}`)
}