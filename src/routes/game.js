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

router.get("/", function (req, res) {
  try{
  Game.findOne({ where: { id: req.query.idGame } }).then(function (one) {
    one ? res.send({ ...one.dataValues }) : res.send("not found");
  });}
  catch(error){
    console.log(error);
  }
});

module.exports = router;
