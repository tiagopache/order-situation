# Intro

This simple project has been made to play with node.js, sequelize, sqlite and relationship between entities.

# Quick start

If you want to play, just download the source code, and then:
####1. Enter on the directory which contains the project
``` bash
cd <project-path>
```
####2. Run

``` bash
npm install
npm run start
```
####3. Check the results on your console. \o/ 😉

####4. Advanced options

#####4.1. Enable SQL Logging
If you want to know what is happening under the Sequelize hoods, just update the ./config/database.js as following:

``` js
    ...
    dialect: 'sqlite',
    //logging: console.log, // Uncomment this line
    logging: null, // Comment this line
    host: 'localhost',
    ...
```
