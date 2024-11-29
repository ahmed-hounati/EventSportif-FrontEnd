import axios from "axios";

let Api = import.meta.env.VITE_API_URL;

const getAll = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await axios.get(`${Api}/participant/all`, {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message || "get participants failed";
    }
};

const add = async (data) => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await axios.post(`${Api}/participant/create`, data, {
            headers: {
                Authorization: `bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message || "add participant failed";
    }
};

const update = async (id, data) => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await axios.put(`${Api}/participant/update/${id}`, data, {
            headers: {
                Authorization: `bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message || "update participant failed";
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

const ParticipantService = {
    getAll,
    add,
    update,
    remove
}

export default ParticipantService;