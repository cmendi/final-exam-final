//import Query function and types
import { Query } from "../connections";
import { Category } from "../../types";
// get all
const getAll = () => Query<Category[]>("SELECT * FROM Categories");
//export
export default {
	getAll,
};
