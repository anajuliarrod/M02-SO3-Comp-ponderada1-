const userModel = require("../models/userModel");


exports.getUsers = async (req, res) => {
  try {
    const result = await userModel.getAll();
    return res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  console.log("REQ.BODY:", req.body); 

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({
        error: "Todos os campos (name, email, password) são obrigatórios",
      });
  }

  try {
    const result = await userModel.getById();
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await userModel.create();
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Usuário não encontrado" });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const result = await userModel.update();
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userModel.delete();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: err.message });
  }
};
