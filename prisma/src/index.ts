import { PrismaClient } from "@prisma/client";
import { populateData } from "./populateData";
import { searchRecord } from "./searchRecord";

const prisma = new PrismaClient();

const main = async () => {
  //await populateData(prisma);
  const startingTime = Date.now();
  await searchRecord(prisma, 97999);
  const timeTaken = Date.now() - startingTime;
  console.log("timeTaken", timeTaken);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
