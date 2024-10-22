import { Hono } from 'hono'
import * as FragranceController from '../controllers/fragrance'

const fragrance = new Hono()

fragrance.get('/', FragranceController.getFragrances)

fragrance.post('/', FragranceController.createFragrance)

fragrance.put('/:id', FragranceController.updateFragrance) 

fragrance.delete('/:id', FragranceController.deleteFragrance)

export default fragrance