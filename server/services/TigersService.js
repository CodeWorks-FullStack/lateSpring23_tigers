import { FakeDb } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class TigersService {

  editTiger(updateTigerData) {
    const tiger = this.getTigerById(updateTigerData.id)

    // dont let them send in null or empty string
    tiger.name = updateTigerData.name || tiger.name
    tiger.picture = updateTigerData.picture || tiger.picture


    // for tomorrow don't forget to call save()

    return tiger
  }



  getTigerById(tigerId) {
    const tiger = FakeDb.tigers.find(t => t.id == tigerId)

    if (!tiger) {
      throw new BadRequest('Invalid Tiger Id')
    }

    return tiger

  }

  // its going to change tomorrow just a bit
  getAllTigers() {
    return FakeDb.tigers
  }


}

export const tigersService = new TigersService()
