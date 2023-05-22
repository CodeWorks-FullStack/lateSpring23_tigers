import { tigersService } from "../services/TigersService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class TigersController extends BaseController {
  constructor() {
    super('api/tigers')

    this.router
      .get('', this.getTigers)
      .get('/:tigerId', this.getTiger)
      .put('/:tigerId', this.editTiger)
      // TODO post and delete
  }

  async getTigers(req, res, next) {
    try {
      //  logger.log('wut is the req?', req)
      //  logger.log('wut is the res?', res)

      const tigers = await tigersService.getAllTigers()

      res.send(tigers)

    } catch (error) {
      next(error) // every time without fail
    }
  }


  async getTiger(req, res, next) {
    try {
      logger.log('what is the request id', req.params.tigerId)

      const tiger = await tigersService.getTigerById(req.params.tigerId)
      res.send(tiger)

    } catch (error) {
      next(error)
    }
  }


  async editTiger(req, res, next) {
    try {

      // req.body === formData
      // logger.log('req', req)
      const tiger = await tigersService.editTiger(req.body)
      res.send(tiger)


    } catch (error) {
      next(error)
    }
  }





}
