import { mkdir, writeFile, readdir, readFile } from "fs/promises";

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

(async function initializeDatabase() {
    try {
        await mkdir(".\/db");
    } catch {
        console.info("Database already exists.");
    }
})();

/*
** options
**  {
**      author: {
**          name: string,
**          email: string
**      }
**      title: string,
**      content: string
**  }
*/
export async function createPost(options) {
    if (typeof options.author.name !== "string") {
        throw new InvalidPostOptionsError();
    }

    if (typeof options.author.email !== "string" || !emailRegex.test(options.author.email)) {
        throw new InvalidPostOptionsError();
    }

    if (typeof options.title !== "string") {
        throw new InvalidPostOptionsError();
    }

    if (typeof options.content !== "string") {
        throw new InvalidPostOptionsError();
    }

    await writeFile(`.\/db\/${Date.now()}.json`, JSON.stringify(options, null, 4));
}

export async function fetchPosts(amount = Infinity, offset = 0) {
    amount = amount === Infinity ? amount : parseInt(amount);
    offset = parseInt(offset);

    if (amount === NaN || offset === NaN) {
        throw new InvalidPostOptionsError();
    }

    const fileNameList = await readdir("./db");
    const sortedFileNameList = fileNameList.sort((firstName, secondName) => {
        const first = getTimestampFromName(firstName);
        const second = getTimestampFromName(secondName);
        return second - first;
    });

    const desiredFileNameList = sortedFileNameList.slice(offset, amount + offset);

    let results = []
    for (const fileName of desiredFileNameList) {
        const fileText = await readFile(`./db/${fileName}`);
        const result = JSON.parse(fileText);
        result.id = getTimestampFromName(fileName);
        results.push(result);
    }
    
    return results;
}

export async function fetchPost(id) {
    const fileNameList = await readdir("./db");

    const fileName = fileNameList.find(value => value === `${id}.json`);
    const fileText = await readFile(`./db/${fileName}`);
    const result = JSON.parse(fileText);
    result.id = id;
    return result;
}

export async function fetchPostCount() {
    const fileNameList = await readdir("./db");

    return fileNameList.length;
}

function getTimestampFromName(name) {
    return parseInt(name.substring(0, name.indexOf(".json")));
}

class InvalidPostOptionsError extends Error {
    constructor() {
        super("Invalid options used when creating a blog post.")
    }
}

