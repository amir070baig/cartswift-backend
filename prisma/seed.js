const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        price: 4999,
        image: "https://picsum.photos/400/300?random=1"
      },
      {
        name: "Smartwatch",
        description: "Track your fitness and notifications with this sleek smartwatch.",
        price: 8999,
        image: "https://picsum.photos/400/300?random=2"
      },
      {
        name: "Gaming Mouse",
        description: "RGB gaming mouse with 6 programmable buttons.",
        price: 1999,
        image: "https://picsum.photos/400/300?random=3"
      },
      {
        name: "Mechanical Keyboard",
        description: "Durable keyboard with blue switches and backlight.",
        price: 3999,
        image: "https://picsum.photos/400/300?random=4"
      },
    ],
  });
}

main()
  .then(() => {
    console.log("✅ Database seeded successfully!");
  })
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
