import axios from "axios";

let Api = import.meta.env.VITE_API_URL;

const getAll = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await axios.get(`${Api}/inscription/all/${id}`, {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message || "get inscriptions failed";
    }
};


const add = async (id, participant) => {

    let token = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await axios.post(`${Api}/inscription/create/${id}`, { user: participant }, {
            headers: {
                Authorization: `bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message || "add inscription failed";
    }
};

const remove = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await axios.delete(`${Api}/participant/delete/${id}`, {
            headers: {
                Authorization: `bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message || "delete participant failed";
    }
};

const inscriptionService = {
    getAll,
    remove,
    add
}

export default inscriptionService;