import { Query } from "../connections";
import { User } from "../../types";

const find = (column: string, email: string) => Query<User[]>("SELECT * FROM Users WHERE ?? = ?", [column, email]);
const insert = (newUser: { email: string; password: string }) => Query("INSERT INTO Users SET ?", [newUser]);

export default {
	find,
	insert,
};
