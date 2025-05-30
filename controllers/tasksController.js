const tasksModel = require("../models/tasksModel");

exports.getTasks = async (req, res) => {
  try {
    const result = await tasksModel.getAll();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: err.message });
  }
};

exports.createTask = async (req, res) => {
  const { title, description, due_date, status, user_id, category_id } =
    req.body;
  try {
    const result = await tasksModel.create({title, description, due_date, status, user_id, category_id});
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, due_date, status, user_id, category_id } =
    req.body;
  try {
    const result = await tasksModel.update(id, {title, description, due_date, status, user_id, category_id});
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await tasksModel.delete(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};
