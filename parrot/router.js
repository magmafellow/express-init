import { Router } from 'express'
import { ParrotService } from './service.js'

const parrotService = new ParrotService()

const router = Router()

router.get('', function (req, res, next) {
  return res.json({ data: parrotService.findAll() })
})
router.post('', function (req, res, next) {
  return parrotService.create()
})

export { router as parrotRouter }
