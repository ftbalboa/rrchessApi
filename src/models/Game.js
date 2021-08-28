const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('game', {
    playerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    playerColor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
    },
    dif: {
      type: DataTypes.STRING,
    },
    win: {
      type: DataTypes.STRING,
    },
    movs: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },{
    tableName: 'Games'
  });
};
