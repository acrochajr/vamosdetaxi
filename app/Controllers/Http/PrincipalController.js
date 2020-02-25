'use strict'

class PrincipalController {

    async index({ request, response, view }) {
        return view.render("front/index");
      }
    


}

module.exports = PrincipalController
