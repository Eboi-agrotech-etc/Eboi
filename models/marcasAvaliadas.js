const {Sequelize, DataTypes} = require('sequelize');
const db = require('../database/database');
const marcasAvaliadas = db.define('marcas_avaliadas',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    idmarca:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        references:{
            model:'marcas',
            key:'id'
        }
    },
    idavaliador:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'funcionarios',
            key:'id'
        }
    },
    aprovada:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    comentario:{
        type:DataTypes.TEXT,
        allowNull:false
    }
});
/*
marcasAvaliadas.sync().then(() => {
    console.log('MA table sync...');
}).catch(err => {
    console.error('MA fail:',err); 
});
*/
module.exports = marcasAvaliadas;