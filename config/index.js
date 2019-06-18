/* eslint-disable no-console */
require('dotenv').config();

const fs = require('fs');
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';

const dbConfig = loadDbConfig();

if (dbConfig) {
    createDb(dbConfig);
}

const config = Object.assign({
    [ENV]: true,
    env: ENV,
    db: dbConfig
});

module.exports = config;

function loadDbConfig() {
    if (process.env.DATABASE_URL) {
        return process.env.DATABASE_URL;
    }

    if (fs.existsSync(path.join(__dirname, './database.js'))) {
        return require('./database')[ENV];
    }
}

function createDb(dbConfig) {
    if (!fs.existsSync(dbConfig.storage)) {
        const sqlite = require('sqlite3'); // .verbose();
        let db = new sqlite.Database(dbConfig.storage, (err) => {
            if (err) {
                console.error('Error creating DB: ', err);
            } else {
                console.log('DB created!');
            }
        });

        if (db) {
            db.close((err) => {
                if (err) {
                    return console.error(err.message);
                }

                console.log('Database closed!');
            });
        }
    }
}