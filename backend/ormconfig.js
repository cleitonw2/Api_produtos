require("dotenv").config();
console.log(process.env.DB_NAME)
module.exports = {
    type: "postgres",
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "synchronize": true,
    "migrations": ["./src/database/migrations/**.ts"],
    "entities": ["./src/entities/**.ts"],
    "logging": false,
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}