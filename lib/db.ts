import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function testToken() {
  const token = await db.sMSToken.findUnique({
    where: {
      id: 2,
    },
    include: {
      user: true,
    },
  });
  console.log(token);
}

async function test() {
  const user = await db.user.create({
    data: {
      username: "tester01",
      email: "test@gmail.com",
    },
  });
  console.log(user);
}

export default db;
