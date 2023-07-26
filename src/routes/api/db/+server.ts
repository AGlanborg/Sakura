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

    if (fs.existsSync(`/licenses/${req}.sqlite`)) {
        console.log("File already exists")
        return json("Exists")
    }

    fs.copyFileSync("src/lib/db/licenses.sqlite", `/licenses/${req}.sqlite`)

    return json(`Created ${req}`)
}