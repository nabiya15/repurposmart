import axios from "axios";

export default{
	getItems : function(category){
		return axios.get("/" + category);
	}
}