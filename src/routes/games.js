const { Router } = require("express");
const router = Router();
const { Game } = require("../db.js");

router.get("/", function (req, res) {
  Game.findAll().then((i) => {
    let forSend = [];
    if(!req.query.name){
    const len = i.length > 20? 20 : i.length;
    for(let j = 0; j < len ; j++) forSend.push(i[j])
    return res.send(forSend);
  }
    i = i.map((v) => ({ ...v.dataValues }));
    if (req.query.name) {
      forSend = i.filter((v) => v.playerName.includes(req.query.name));
    } else {
      forSend = i;
    }
    return res.send(forSend);
  });
});

module.exports = router;
