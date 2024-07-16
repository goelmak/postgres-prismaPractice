import { Client } from "pg";

const search = async (client: Client, id: number) => {
  try {
    const query = "SELECT * FROM posts WHERE user_id = $1";
    const res = await client.query(query, [id]);
    console.log("res", res);
  } catch (err) {
    console.log("err in selecting", (err as Error).message);
  }
};

export { search };
