import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create
  const user = await prisma.user.create({
    data: {
      name: "Raj",
      email: "rajmodi117@gmail.com",
    },
  });
  console.log("Created:", user);

  // Read
  const users = await prisma.user.findMany();
  console.log("Users:", users);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
