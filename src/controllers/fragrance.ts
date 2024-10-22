import { Context } from 'hono'
import { db } from '../db/'
import { fragrancesTable } from '../db/schema'
import { eq } from 'drizzle-orm'

export const getFragrances = async (c: Context) => {
  try {
    const fragrances = await db.select().from(fragrancesTable)
    return c.json({
      message: 'Fragrances fetched successfully',
      data: fragrances
    })
  } catch (e) {
    console.log(e)
    return c.json({ error: 'Error fetching fragrances' }, 500)
  }
}

export const createFragrance = async (c: Context) => {
  try {
    const body = await c.req.json()
    const { name, description, category } = body

    const newFragrance = await db.insert(fragrancesTable).values({
      name,
      description,
      category,
    }).returning()

    return c.json({
      message: 'Fragrance created successfully',
      data: newFragrance
    })
  } catch (e) {
    return c.json({ error: 'Error creating fragrance' }, 500)
  }
}

export const updateFragrance = async (c: Context) => {
  const { id } = c.req.param()
  
  try {
    const body = await c.req.json()
    const { name, description, category } = body

    const updatedFragrance = await db.update(fragrancesTable)
      .set({ name, description, category })
      .where(eq(fragrancesTable.id, id)).returning()

    return c.json({
      message: `Fragrance with ID ${id} updated successfully`,
      data: updatedFragrance
    })
  } catch (e) {
    return c.json({ error: `Error updating fragrance with ID ${id}` }, 500)
  }
}

export const deleteFragrance = async (c: Context) => {
  const { id } = c.req.param()

  try {
    await db.delete(fragrancesTable).where(eq(fragrancesTable.id, id))
    return c.json({ message: `Fragrance with ID ${id} deleted successfully.` })
  } catch (e) {
    return c.json({ error: `Error deleting fragrance with ID ${id}` }, 500)
  }
}