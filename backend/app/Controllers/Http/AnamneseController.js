'use strict'

const Anamnese = use('App/Models/Anamnese')
const Database = use('Database')


class AnamneseController {

  async register({ request, response }) {
    const { idpaciente, queixapatient, historicodoenca, antecedentes} = request.only([
      "idpaciente",
      "queixapatient",
      "historicodoenca",
      "antecedentes"
    ]);

    await Anamnese.create({
      idpaciente,
      queixapatient,
      historicodoenca,
      antecedentes
    });

    return response.send({ message: "Anamnese cadastrada!" });
  }
  
  async update ({ params, request, response }) {
    const anamnese = await Anamnese.findOrFail(params.id);
    const data = request.only(["idpaciente", "queixapatient", "historicodoenca", "antecedentes"]);

    anamnese.merge(data);
    await anamnese.save();

    return anamnese
  };

  async buscar ({ params }) {
    const anamnese = await Database.table('patients')
    .innerJoin('anamnese', 'patients.id', 'anamnese.idpaciente').where('patients.id', params.id)

    return anamnese;
  }


    
  async destroy ({ params, request, response }) {
    const anamnese = await Anamnese.findOrFail(params.id);
    await anamnese.delete();
    return "Anamnese deletada!";
  }
}

module.exports = AnamneseController
