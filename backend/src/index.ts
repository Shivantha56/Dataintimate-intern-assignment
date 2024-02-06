/*
* initialize sequelize dependency for connect with mysql database
* import equalize to the project
* create connection with mysql with sequelize
*/
/*
* need to create database before connecting to the sequelize ORM tool
* 1. create connection using mysql2
* 2. create a database using sql query (candidate_dilshan_shivantha)
* 3. connect database to the sequential
*/

import {Sequelize} from 'sequelize'
import express from 'express'
import mysql from 'mysql2'

const app = express();
initialize()

async function initialize() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234'
        });

        const result = await connection.promise().query(`CREATE DATABASE IF NOT EXISTS candidate_dilshan_shivantha`);
        console.log(result)

        /*
        * create connecting with sequential orm tool and mysql
        */
        const sequelize = new Sequelize('candidate_dilshan_shivantha', 'root', '1234', {
            host: 'localhost',
            dialect: 'mysql'
        });
        const seqConnection = sequelize.authenticate();
        /*
         * showing success and error while connecting
         * seqConnection return the promise object
         * */

        seqConnection.then(result => {
            console.log(result)
            console.log("database connection is established")
        }).catch(result => {
            console.error(result);
        })

    }catch (error) {
        console.error(error);
    }
}

app.listen(8080, () => {
    console.log("server is started success")
});