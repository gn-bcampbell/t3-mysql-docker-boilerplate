import { prisma } from "../src/server/db";

async function main() {
  const brendan = await prisma.user.upsert({
    where: {email: 'brendan@test.com'},
    update: {
      name: 'Brendan'
    },
    create: {
      name: 'Brendan',
      email: 'brendan@test.com',
    }
  })

  const kaya = await prisma.user.upsert({
    where: {email: 'kaya@test.com'},
    update: {},
    create: {
      name: 'Kaya',
      email: 'kaya@test.com',
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });