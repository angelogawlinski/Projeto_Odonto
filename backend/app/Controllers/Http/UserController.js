"use strict";
const User = use("App/Models/User");

class UserController {
  async register({ request, response }) {
    const { first_name, last_name, category, email, password } = request.only([
      "first_name",
      "last_name",
      "category",
      "email",
      "password"
    ]);

    await User.create({
      first_name,
      last_name,
      category,
      email,
      password
    });

    return response.send({ message: "Usuário foi criado!" });
  }

  async login({ request, response, auth }) {
    const { email, password } = request.only(["email", "password"]);

    const token = await auth.attempt(email, password);
    return response.json(token);
  }

  async show({ params, response }) {
    const user = await User.find(params.id);
    const res = {
      first_name: user.first_name,
      last_name: user.last_name,
      category: user.category,
      email: user.email
    };

    return response.json(res);
  }
  async delete({ params }) {
    const user = await User.findOrFail(params.id);
    await user.delete();
    return "Usuario deletado!";

  };

  async update({ params, request, response }) {
    const user = await User.findOrFail(params.id);
    const data = request.only(["first_name", "last_name", "category", "email"]);

    user.merge(data);
    await user.save();

    return user
  };

}

module.exports = UserController;
