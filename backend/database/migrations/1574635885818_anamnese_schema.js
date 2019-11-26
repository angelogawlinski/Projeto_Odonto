'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnamneseSchema extends Schema {
  up () {
    this.create('anamnese', (table) => {
      table.integer('idpaciente').references('id').inTable('patients')
      .onUpdate('CASCADE').onDelete('CASCADE')
      table.string('queixapatient', 500).notNullable()
      table.string('historicodoenca', 500).notNullable()
      table.string('antecedentes', 500).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('anamnese')
  }
}

module.exports = AnamneseSchema
