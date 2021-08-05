const express = require("express");

const routes = express.Router();
const TravelerController = require("./app/controller/TravelerController");

routes.get("/traveler", TravelerController.index);

routes.post("/traveler", TravelerController.store);

routes.post("/traveler/delete", TravelerController.delete);

module.exports = routes;