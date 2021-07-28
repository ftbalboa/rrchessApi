const { Router } = require("express");
const router = Router();
const { Game } = require("../db.js");

let actId = 0;

Game.findAll().then((i) => {
  i.forEach((e) => {
    if (e.id >= actId) {
      actId = e.id + 1;
    }
  });
});

router.get("/", function (req, res) {
  res.send({ id: actId });
  actId++;
});

module.exports = router;
