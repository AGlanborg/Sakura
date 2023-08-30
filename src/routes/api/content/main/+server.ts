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

  const o = req.values
  const keys = "saljare,kopare,konto,arbetstyp,antal,typ,aterforsaljare,tillverkare,text,info,valuta,mangd,inprisex,inprisin,procent,oh,totalt,valutakurs,sek,fakturanum,kommentar,inpris,start,slut,perioder,upfront,rest,internfakt,intakt,scan,now"
  const values = `'${o.saljare}','${o.kopare}','${o.konto}','${o.arbetstyp}','${o.antal}','${o.typ}','${o.aterforsaljare}','${o.tillverkare}','${o.text}','${o.info}','${o.valuta}','${o.mangd}','${o.inprisex}','${o.inprisin}','${o.procent}','${o.oh}','${o.totalt}','${o.valutakurs}','${o.sek}','${o.fakturanum}','${o.kommentar}','${o.inpris}','${o.start}','${o.slut}','${o.perioder}','${o.upfront}','${o.rest}','${o.internfakt}','${o.intakt}','${o.scan}','${o.now}'`

  await db.run(`INSERT INTO main (${keys}) VALUES (${values})`)

  return json(`Created ${req}`)
}