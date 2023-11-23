const {DataTypes, Sequelize } = require('sequelize');
const db = require('../database/database');

const proprietarios = db.define('proprietarios',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    cpf:{
        type:DataTypes.STRING(11),
        primaryKey:true
    },
    nome:{
        type:DataTypes.STRING(45)
    },
    email:{
        type:DataTypes.STRING(45),
    },
    senha:{
        type: DataTypes.STRING(32)
    }
});

/*
proprietarios.sync({alter:true}).then(() => {
    console.log('table sync...');
}).catch(err => {
    console.error('fail:',err); 
});
*/

module.exports = proprietarios;