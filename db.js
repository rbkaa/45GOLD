const knex = require('knex');
const config = require("./knexfile")

const db = knex(config.development)

const databaseName = "naminami";

// db.raw('CREATE DATABASE ??', [databaseName])
//     .then(_ => {
//         console.log('DB TERBENTUK');
//     })
//     .catch(err => {
//         console.log(err);
//         console.log('DB GAGAL TERBENTUK');
//     })
//     .finally(_ => {
//         db.destroy() //menutup koneksi
//     })

// db.raw('DROP DATABASE ??', [databaseName])
//     .then(_ => {
//         console.log("DB TERHAPUS");
//     })
//     .catch(err => {
//         console.log(err);
//         console.log("DB GAGAL DIHAPUS");
//     })
//     .finally(_ => {
//         db.destroy()
//     })

module.exports = db;
