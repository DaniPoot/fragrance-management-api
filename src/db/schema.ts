import { pgTable, varchar, uuid, timestamp } from "drizzle-orm/pg-core"

export const fragrancesTable = pgTable('fragrance', {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 500 }),
  category: varchar({ length: 255 }),
  created_at: timestamp({ withTimezone: false }).defaultNow(),
  updated_at: timestamp({ withTimezone: false }).defaultNow(),
  image_url: varchar({ length: 500 })
})