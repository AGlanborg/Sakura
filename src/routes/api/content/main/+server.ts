import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import { open } from "sqlite";

import sqlite3 from "sqlite3";

// api/content/main GET
export const GET: RequestHandler = async ({ request }) => {
  if (!request.url.split('=')[1]) {
    return json({})
  }

  const db = await open({
    filename: `/licenses/${request.url.split('=')[1]}.sqlite`,
    driver: sqlite3.Database
  })

  const main = await db.all('SELECT * FROM main')

  return json({
    main: main,
  })
}

// api/content/main POST
export const POST: RequestHandler = async ({request}) => {
  const req = await request.json()

  const db = await open({
    filename: `/licenses/${req.file}.sqlite`,
    driver: sqlite3.Database
  })

  await db.run(`INSERT INTO main (${req.keys}) VALUES (${req.values})`)

  return json(`Created ${req}`)
}