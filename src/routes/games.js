const { Router } = require("express");
const router = Router();
const { Game } = require("../db.js");

router.get("/", function (req, res) {
  Game.findAll().then((i) => {
    i = i.map((v) => ({ ...v.dataValues }));
    let forSend = [];
    if (req.query.name) {
      forSend = i.filter((v) => v.playerName.includes(req.query.name));
    } else {
      forSend = i;
    }
    res.send(forSend);
  });
});

module.exports = router;
