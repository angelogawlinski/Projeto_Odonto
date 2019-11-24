'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientSchema extends Schema {
  up () {
    this.create('patients', (table) => {
      table.integer('id').notNullable().unique()
      table.string('nome', 250).notNullable()
      table.string('cpf', 250).notNullable().unique()
      table.string('cidade', 250).notNullable()
      table.string('estado', 250).notNullable()
      table.string('endereco', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientSchema
