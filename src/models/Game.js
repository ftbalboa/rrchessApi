const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('game', {
    
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
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
