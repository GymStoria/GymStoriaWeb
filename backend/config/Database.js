import dotenv from 'dotenv'
dotenv.config();
import {Sequelize} from 'sequelize'

const db = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD,{
    host: process.env.HOST,
    dialect: "mysql"
})

export default db;
