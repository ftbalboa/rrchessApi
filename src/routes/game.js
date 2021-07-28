const { Router } = require("express");
const router = Router();
const { Game } = require("../db.js");

router.post("/", function (req, res) {
  const game = req.body;
    Game.sync().then(()=>{
      Game.create(game);
  res.status(200).json(game);
  });
});

router.get("/:idGame", function (req, res) {
  Game.findOne({ where: { id: req.params.idGame } }).then(function (one) {
    one ? res.send([{ ...one.dataValues }]) : res.send("not found");
  });
});

module.exports = router;
