import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import * as fs from 'fs';
import { readdir } from 'node:fs/promises';

function checkLicensesDir() {
    if (!fs.existsSync('/licenses')) {
        fs.mkdirSync('/licenses')
    }
}

// api/db GET
export const GET: RequestHandler = async (event) => {
    checkLicensesDir()

    let files = new Array;
    let dbfolder = await readdir("/licenses")

    dbfolder.forEach((name) => {
        files.push(name.replace('.sqlite', ""))
    })

    return json(files)
}

// api/db POST
export const POST: RequestHandler = async ({ request }) => {
    checkLicensesDir()

    const req = await request.json()

    fs.readFile("src/lib/db/licenses.sqlite", 'utf8', (err, data) => {
        if (err) {
            console.log("Error: ", err)
            return
        }

        if (typeof data == "undefined") {
            console.log("Error: Original content not found")
            return
        }

        fs.writeFile(`/licenses/${req}.sqlite`, data, (err) => { if (err) { console.log(err) } })
    })

    return json(`Created ${req}`)
}