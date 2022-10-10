require("dotenv").config();
import mysql from "promise-mysql";

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_DATABASE,
};

export default mysql.createPool(dbConfig);
