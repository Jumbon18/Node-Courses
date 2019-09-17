const Sequelize = require('sequelize');
const UserModel =  require('./models/user');

const  sequelize= new Sequelize('Sushi', 'postgres', 'admin', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const User = UserModel(sequelize,Sequelize);


