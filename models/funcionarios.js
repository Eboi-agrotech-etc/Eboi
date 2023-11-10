const {Sequelize, DataTypes} = require('sequelize');
const db = require('../database/database');
const funcionarios = db.define('funcionarios',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type:DataTypes.STRING(45)
    },
    matricula:{
        type:DataTypes.STRING(11)
    },
    senha:{
        type:DataTypes.STRING(32)
    },
    idcargo:{
        type:DataTypes.INTEGER,
        references:{
            model:'cargos',
            key:'id'
        }
    }

});
/*
funcionarios.sync({alter:true}).then(() => {
    console.log('table sync...');
}).catch(err => {
    console.error('fail:',err); 
});
*/

module.exports = funcionarios;