const db = require('../config/db');

class Tasks {
  static async getAll() {
    const result = await db.query('SELECT * FROM tasks');
    return result.rows;
  }

  static async create(data) {
    const result = await db.query(
      `INSERT INTO tasks (title, description, due_date, status, user_id, category_id) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [data.title, data.description, data.due_date, data.status, data.user_id, data.category_id]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      `UPDATE tasks 
        SET title=$1, description=$2, due_date=$3, status=$4, user_id=$5, category_id=$6 
        WHERE id=$7 RETURNING *`,
      [data.title, data.description, data.due_date, data.status, data.user_id, data.category_id, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query("DELETE FROM tasks WHERE id=$1", [id]);
    return result.rowCount > 0;
  }
}

module.exports = Tasks;
