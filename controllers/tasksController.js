const pool = require("../config/db");

exports.getTasks = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tasks");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTask = async (req, res) => {
  const { title, description, due_date, status, user_id, category_id } =
    req.body;
  try {
    const result = await pool.query(
      `INSERT INTO tasks (title, description, due_date, status, user_id, category_id) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [title, description, due_date, status, user_id, category_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, due_date, status, user_id, category_id } =
    req.body;
  try {
    const result = await pool.query(
      `UPDATE tasks 
       SET title=$1, description=$2, due_date=$3, status=$4, user_id=$5, category_id=$6 
       WHERE id=$7 RETURNING *`,
      [title, description, due_date, status, user_id, category_id, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM tasks WHERE id=$1", [id]);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
