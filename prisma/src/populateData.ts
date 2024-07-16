import { PrismaClient } from "@prisma/client";

const populateData = async (client: PrismaClient) => {
  for (let i = 0; i < 100000; i++) {
    const user = await client.user.create({
      data: {
        name: `${i + 1} User`,
        email: `User${i}@gmail.com`,
      },
    });

    for (let j = i; j < i + 10; j++) {
      const post = await client.post.create({
        data: {
          title: `title${j}`,
          content: `content${j}`,
          published: true,
          authorId: user.id,
        },
      });
    }

    console.log("created user with id", user.id);
  }
};

export { populateData };
