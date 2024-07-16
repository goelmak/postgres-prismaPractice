import { PrismaClient } from "@prisma/client";

const searchRecord = async (client: PrismaClient, id: number) => {
  const rows = await client.post.findMany({ where: { authorId: id } });
};

export { searchRecord };
