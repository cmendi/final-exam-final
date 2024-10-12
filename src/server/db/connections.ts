// import mysql and config file
import mysql from "mysql2/promise";
import config from "../config";
// create query function and export it

const pool = mysql.createPool(config.mysql);

export const Query = async <T = mysql.ResultSetHeader>(sql: string, values?: unknown) => {
	const [rows] = await pool.query(sql, values);
	return rows as T;
};
