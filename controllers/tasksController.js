const tasksModel = require("../models/tasksModel");

exports.getTasks = async (req, res) => {
  try {
    const result = await tasksModel.getAll();
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: err.message });
  }
};

exports.createTask = async (req, res) => {
  const { title, description, due_date, status, user_id, category_id } =
    req.body;
  try {
    const result = await tasksModel.create();
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, due_date, status, user_id, category_id } =
    req.body;
  try {
    const result = await tasksModel.update;
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await tasksModel.delete;
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: err.message });
  }
};
