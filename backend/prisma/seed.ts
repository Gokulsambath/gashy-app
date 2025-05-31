import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // Seed default games
    const games = [
        {
            name: "Carrom",
            description: "Classic 1v1 Carrom game",
            imageUrl: "https://example.com/carrom.png"
        }
    ];

    for (const game of games) {
        await prisma.game.upsert({
            where: { name: game.name },
            update: {},
            create: game,
        });
    }

    console.log("Seed completed.");
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
