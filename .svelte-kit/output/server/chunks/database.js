import pkg from "@prisma/client";
let prisma;
{
  const { PrismaClient: PrismaClientProd } = pkg;
  prisma = new PrismaClientProd();
}
const db = prisma;
export {
  db as d
};
