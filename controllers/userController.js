const userModel = require("../models/userModel");

exports.getUsers = async (req, res) => {
  try {
    const users = await userModel.getAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.getById(id);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      error: "Todos os campos (name, email, password) são obrigatórios",
    });
  }

  try {
    const user = await userModel.create({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      error: "Todos os campos (name, email, password) são obrigatórios",
    });
  }

  try {
    const updatedUser = await userModel.update(id, { name, email, password });
    if (!updatedUser) {
      return res
        .status(404)
        .json({ error: "Usuário não encontrado para atualizar" });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await userModel.delete(id);
    if (!deleted) {
      return res
        .status(404)
        .json({ error: "Usuário não encontrado para deletar" });
    }
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};
