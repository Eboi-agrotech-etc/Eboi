const {Sequelize, DataTypes} = require('sequelize');
const db = require('../database/database');
const marcasAssinadas = db.define('marcas_assinadas',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    idassinada:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        references:{
            model:'marcas_avaliadas',
            key:'id'
        }
    },
    idsecretrario:{
        type:DataTypes.INTEGER,
        references:{
            model:'funcionarios',
            key:'id'
        }
    }
});

/*
marcasAssinadas.sync().then(() => {
    console.log('table sync...');
}).catch(err => {
    console.error(' fail:',err);
});
*/

module.exports = marcasAssinadas;