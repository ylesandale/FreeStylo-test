import axios from "axios";

const API_KEY = "gp762nuuoqcoxypju8c569th9wz7q5";
const AuthCode = "lso1kdl0aqqtwkferkuxxxade4eqg1";
const api = axios.create({
  headers: {
    Authorization: `Bearer ${AuthCode}`,
    "Client-Id": API_KEY,
  },
});

export default api;
