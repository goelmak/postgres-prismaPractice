import { Client } from "pg";
import { dbConfig } from "./dbConfiq";
import { createPostTableIndex, createTable } from "./create-table";
import { populateTable } from "./populate-table";
import { search } from "./search-table";

const practicePostgres = async () => {
  try {
    const client = new Client(dbConfig);
    await client.connect();
    await createTable(client);
    await populateTable(client);
    await createPostTableIndex(client);
    const startTime = Date.now();
    await search(client, 99999);
    const timeTaken = Date.now() - startTime;
    console.log("timeTaken", timeTaken);
  } catch (err) {
    console.error("error in connecting to db", (err as Error).message);
  }
};
practicePostgres();
