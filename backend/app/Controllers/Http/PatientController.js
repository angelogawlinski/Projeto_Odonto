'use strict'

const Patient = use('App/Models/Patient')
const Database = use('Database')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with patients
 */
class PatientController {
  async register({ request, response }) {
    const { id, nome, cpf, cidade, estado, endereco } = request.only([
      "id",
      "nome",
      "cpf",
      "cidade",
      "estado",
      "endereco"
    ]);

    await Patient.create({
      id,
      nome,
      cpf,
      cidade,
      estado,
      endereco
    });

    return response.send({ message: "Paciente cadastrado!" });
  }

  
    

  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new patient.
   * GET patients/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new patient.
   * POST patients
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single patient.
   * GET patients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
      const patient = await Patient.find(params.id);
      const res = {
        id: patient.id,
        nome: patient.nome,
        cpf: patient.cpf,
        cidade: patient.cidade,
        estado: patient.estado,
        endereco: patient.endereco

      };

      return response.json(res);
    }

  /**
   * Render a form to update an existing patient.
   * GET patients/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update patient details.
   * PUT or PATCH patients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

      const patient = await Patient.findOrFail(params.id);
    const data = request.only(["nome", "cpf", "cidade", "estado", "endereco"]);

      patient.merge(data);
      await patient.save();

      return patient
  
  }

  /**
   * Delete a patient with id.
   * DELETE patients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const patient = await Patient.findOrFail(params.id);
      await patient.delete();
      return "Paciente deletado!";

    };
  
}

module.exports = PatientController
