const sequelize = require('sequelize');
const database = new sequelize.Sequelize(
    'g0jdlw0ewimktr4f',
    'v74y480alhff3p06',
    'v1wvbtf3ue1bfhck',
    {
        host:'grp6m5lz95d9exiz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        dialect:'mysql'
});

try {
    database.authenticate().then(() =>{
        console.log('database:sucess');
    });

}catch(error){
    console.log('database:fail');
    console.log(error);
}
    
module.exports = database;