require("dotenv").config();
import mysql from "promise-mysql";

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_DATABASE,
  connectionLimit : 10,//한 번에 생성하여 Pool에 저장할 수 있는 connection의 수입니다.(기본 값 : 10)
  queueLimit : 0// getConnection에서 오류가 발생하기 전에 Pool에 대기할 요청의 최대 수입니다. 0으로 설정하면 제한이 없습니다. (기본 값 : 0)
};

export default mysql.createPool(dbConfig);
