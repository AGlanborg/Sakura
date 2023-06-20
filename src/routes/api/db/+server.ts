import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

// api/db GET
export const GET: RequestHandler = async (event) => {
    const dbfolder = import.meta.glob("$lib/db/active/*.sqlite")
    let files = []

    for (let name in dbfolder) {
        name = name.replace('/src/lib/db/active/', "")
        files.push(name.replace('.sqlite', ""))
    }

    return json(files)
}