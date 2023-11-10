const { Sequelize, DataTypes} = require('sequelize');
const db = require('../database/database');
const marcas = db.define('marcas',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    brinco:{
        type:DataTypes.BLOB('long'),
        allowNull:false
    },
    corpo:{
        type:DataTypes.BLOB('long'),
        allowNull:false
    },
    idproprietario:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'proprietarios',
            key:'id'
        }
    }
});
/*
marcas.sync().then(() => {
    console.log('marcas table sync...');
}).catch(err => {
    console.error('marcas fail:',err); 
});
*/

module.exports = marcas;
