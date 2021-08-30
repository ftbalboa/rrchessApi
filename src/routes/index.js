const { Router } = require("express");
// Importar todos los routers;
const game = require("./game.js");
const games = require("./games.js");
const winrate = require("./winrate.js");

const router = Router();

// Configurar los routers
router.use("/game", game);
router.use("/games", games);
router.use("/winrate", winrate);

module.exports = router;