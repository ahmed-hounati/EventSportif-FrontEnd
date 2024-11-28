import axios from "axios";

let Api = process.env.API_URL;

const login = async (email, password) => {
    try {
        const response = await axios.post(`${Api}/auth/login`, { email, password });
        if (response.data) {
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.User));
        }
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message || "Login failed";
    }
};

const logout = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await axios.post(API_URL + "auth/logout", {}, {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        return response.data;
    } catch (error) {
        console.log(error)
    }
};


const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    login,
    logout,
    getCurrentUser
}

export default AuthService;