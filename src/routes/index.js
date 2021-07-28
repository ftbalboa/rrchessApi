const { Router } = require("express");
// Importar todos los routers;
const game = require("./game.js");
const games = require("./games.js");
const id = require("./id.js");

const router = Router();

// Configurar los routers
router.use("/game", game);
router.use("/games", games);
router.use("/id", id);

router.get("/", function (req, res, next) {
  console.log("hi desde el index");
});

module.exports = router;