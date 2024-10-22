import 'dotenv/config'
import { drizzle } from 'drizzle-orm/neon-http';
import { fragrancesTable } from './schema'
  
const db = drizzle(process.env.DATABASE_URL!);
  
async function main () {
  const fragrances: typeof fragrancesTable.$inferInsert[] = [
    {
      name: 'Sauvage',
      description: 'A fresh and spicy fragrance',
      category: 'Woody'
    },
    {
      name: 'Black Orchid',
      description: 'A luxurious and sensual fragrance',
      category: 'Floral'
    },
    {
      name: 'Aventus',
      description: 'A fruity and rich fragrance',
      category: 'Fruity'
    },
    {
      name: "Ocean Breeze",
      description: "A refreshing blend of sea salt, driftwood, and fresh coastal air.",
      category: "Fresh"
    },
    {
      name: "Mystic Amber",
      description: "A warm, sensual fragrance with notes of amber, musk, and vanilla.",
      category: "Oriental"
    },
    {
      name: "Citrus Sunrise",
      description: "A zesty and uplifting combination of lemon, orange, and grapefruit.",
      category: "Citrus"
    },
    {
      name: "Midnight Blossom",
      description: "A floral bouquet of jasmine, rose, and lily with a hint of mystery.",
      category: "Floral"
    },
    {
      name: "Spiced Sandalwood",
      description: "An earthy blend of sandalwood, cinnamon, and clove for a bold presence.",
      category: "Woody"
    },
    {
      name: "Lavender Fields",
      description: "A calming and soothing fragrance of lavender with subtle herbal notes.",
      category: "Herbal"
    },
    {
      name: "Wild Berry Delight",
      description: "A sweet, fruity blend of raspberries, blackberries, and vanilla cream.",
      category: "Fruity"
    },
    {
      name: "Eucalyptus Forest",
      description: "A crisp and invigorating scent of eucalyptus, pine, and mint leaves.",
      category: "Fresh"
    },
    {
      name: "Honeyed Rose",
      description: "A rich and luxurious fragrance with sweet honey and velvety rose petals.",
      category: "Floral"
    },
    {
      name: "Smoky Leather",
      description: "A deep, rugged blend of leather, tobacco, and smoky wood notes.",
      category: "Woody"
    }
  ]

  await db.insert(fragrancesTable).values(fragrances)
}
main()