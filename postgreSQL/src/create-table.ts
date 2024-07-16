import { Client } from "pg";

const createUserTable = async (client: Client) => {
  try {
    const query1 =
      "CREATE TABLE users(id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255))";
    const res = await client.query(query1);
  } catch (err) {
    console.error("error in creating user table", (err as Error).message);
  }
};

const createPostTable = async (client: Client) => {
  try {
    const query2 =
      "CREATE TABLE posts(id SERIAL PRIMARY KEY, post VARCHAR(255), user_id INT REFERENCES users(id))";
    const res = await client.query(query2);
  } catch (err) {
    console.error("error in creating post table", (err as Error).message);
  }
};

const createPostTableIndex = async (client: Client) => {
  try {
    const query3 = "CREATE INDEX IF NOT EXISTS idx_user_id ON posts (user_id)";
    await client.query(query3);
    console.log("Index on user_id created successfully");
  } catch (err) {
    console.error(
      "Error in creating index on user_id:",
      (err as Error).message
    );
  }
};

const createTable = async (client: Client) => {
  await createUserTable(client);
  await createPostTable(client);
};

export { createTable, createPostTableIndex };
