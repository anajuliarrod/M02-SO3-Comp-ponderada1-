const categoriesModel = require("../models/categoriesModel");

exports.getCategories = async (req, res) => {
  try {
    const result = await categoriesModel.getAll();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await categoriesModel.create({name});
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const result = await categoriesModel.update(id, name);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await categoriesModel.delete(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};
