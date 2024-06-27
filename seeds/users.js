/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, name: 'ani', phoneNumber: "123456", email: "ani@gmail.com", password:"000", role:"user"},
    {id: 2, name: 'abu', phoneNumber: "654321", email: "abu@gmail.com", password:"111", role:"user"},
    {id: 3, name: 'asep', phoneNumber: "112233", email: "asep@gmail.com", password:"222", role:"user"}
  ]);
};
