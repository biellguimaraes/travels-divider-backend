const Traveler = require("../model/Traveler");

class TravelerController {
  //salvar viajante
  async store(req, res) {
    const data = await Traveler.create(req.body);

    return res.json(data);
  }
  async index(req, res) {
    const data = await Traveler.find({});

    return res.json(data);
  }
  // deletar viajante
  async delete(req, res) {
    const {id} = req.body
    const data = await Traveler.findByIdAndDelete({_id: id});

    return res.json(data);
  }
}

module.exports = new TravelerController();