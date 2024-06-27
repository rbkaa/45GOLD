/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('phoneNumber').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('role');
        table.timestamps(true, true);
    })
        .then(_ => {
            console.log("BERHASIL DIBUAT TABLENYA");
        })
        .catch(err => {
            console.log(err);
            console.log("GAGAL DIBUAT TABLENYA");
        })
        
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users')
    .then(_ => {
        console.log("BERHASIL DIHAPUS")
    })
    .catch(_ => {
        console.log("GAGAL DIHAPUS")
    })
};
