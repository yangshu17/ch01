import Router from './utils/router'
import homeController from './controllers/home'
import positionController from './controllers/position'
import thinkController from './controllers/think'
import collegeController from './controllers/college'
import meseegeController from './controllers/meseege'
import profileController from './controllers/profile'

homeController.render()

const router = new Router()
router.init()
router.route('#position', positionController.render)
router.route('#think', thinkController.render)
router.route('#college', collegeController.render)
router.route('#meseege', meseegeController.render)
router.route('#profile', profileController.render)