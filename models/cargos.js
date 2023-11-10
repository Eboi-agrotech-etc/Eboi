const {Sequelize, DataType, DataTypes} = require('sequelize');
const db = require('../database/database');
const cargos = db.define('cargos',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type:DataTypes.STRING(45),
        allowNull:false,
        unique:true
    }
});

/*
cargos.sync({alter:true}).then(() => {
    console.log('table sync...');
}).catch(err => {
    console.error('fail:',err); 
});
*/

module.exports = cargos;