import { Client } from "pg";
const populateUserTable = async (
  client: Client,
  name: string,
  email: string
) => {
  const query = "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id";
  try {
    const res = await client.query(query, [name, email]);
    console.log(`populated with id ${res?.rows[0].id}`);
    return res;
  } catch (err) {
    console.error(
      "Error in inserting data in user table with msg",
      (err as Error).message
    );
  }
};

const populatePostTable = async (
  client: Client,
  post: string,
  userId: number
) => {
  const query = "INSERT INTO posts(post, user_iD) values($1, $2) RETURNING id";
  try {
    const res = await client.query(query, [post, userId]);
    return res;
  } catch (err) {
    console.error(
      "Error in inserting data in post table with msg",
      (err as Error).message
    );
  }
};

const populateTable = async (client: Client) => {
  for (let i = 0, j = 0; i < 120000; i++) {
    const res = await populateUserTable(
      client,
      `user${i}`,
      `user${i}@gmail.com`
    );
    const id = res?.rows[0].id;
    const temp = j + 10;
    for (; j < temp; j++) {
      await populatePostTable(client, `post${j}`, id);
    }
  }
};

export { populateTable };
