const { Router } = require("express");
const router = Router();
const { Game } = require("../db.js");

router.get("/", function (req, res) {
  Game.findAll().then((i) => {
    let forSend = [];
    if(!req.query.name){
    const len = i.length > 20? 20 : i.length;
    for(let j = 0; j < len ; j++) forSend.push(i[j])
    res.send(forSend);
  }
    if(!req.query.name) res.send(i);
    i = i.map((v) => ({ ...v.dataValues }));
    if (req.query.name) {
      forSend = i.filter((v) => v.playerName.includes(req.query.name));
    } else {
      forSend = i;
    }
    res.send(forSend);
  });
});

module.exports = router;
