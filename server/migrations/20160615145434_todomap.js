'use strict'

exports.up = (knex, Promise) => {

  return knex.schema.createTable('users', (table) => {
    table.uuid('id').primary()
    table.string('login').unique().notNullable()
    table.string('password').notNullable()
    table.timestamps
  }).createTable('item', (table) => {
    table.uuid('id').primary()
    table.string('titulo').notNullable()
    table.string('endereco').notNullable()
    table.json('local').notNullable()
    table.string('descricao')
    table.uuid('author_id').notNullable().references('id').inTable('users')
    table.timestamps()
  })

};

exports.down = (knex, Promise) => {

  return  Promise.all([
    knex.schema.dropTable('item'),
    knex.schema.dropTable('users')
  ])

};
