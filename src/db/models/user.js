import statusUtil from "../../utils/statusUtil";
import pool from "../pool";

const tableName = "Users";

const user = {
  selectAll: async () => {
    const query = `SELECT * FROM ${tableName};`;
    const result = await pool.query(query);

    return result ? statusUtil.success(result) : statusUtil.false();
  },
  find: async (email) => {
    const query = `SELECT * FROM ${tableName} WHERE email = ? ;`;
    const result = await pool.query(query, [email]);
    console.log(result)
    return result ? statusUtil.success(result) : statusUtil.false();
  },
  insert: async (name, email) => {
    const query = `INSERT INTO ${tableName} (name, email) VALUES (?, ?)`;
    const result = await pool.query(query, [name, email]);

    return result ? statusUtil.success(result) : statusUtil.false();
  },
};

export default user;