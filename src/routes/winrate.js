const { Router } = require("express");
const router = Router();
const { Game } = require("../db.js");

router.get("/", function (req, res) {
  try {
      let winrate = {Easy:"noData",Medium:"noData",Hard:"noData"}
    Game.findAll().then((i) => {
        const diffArr = i.map((game)=>{
            return {dif: game.dif, win: !(game.playerColor === game.win)}
        })
        const obj = diffArr.reduce((acc,cv)=>
        {
            acc[cv.dif] = [acc[cv.dif][0]+1, acc[cv.dif][1] + (cv.win? 100 : 0) ]
            return{ ...acc } } ,{Easy:[0,0],Medium:[0,0],Hard:[0,0]});
        for (key in winrate){
            winrate[key] = obj[key][0]? (obj[key][1] / obj[key][0]) : 100; 
        }
        return res.send(winrate);
        ;
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
