import axios from "axios";

let Api = import.meta.env.VITE_API_URL;

const getAll = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await axios.get(`${Api}/event`, {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message || "get events failed";
    }
};

const getOne = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await axios.get(`${Api}/event/one/${id}`, {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message || "get event failed";
    }
};

const add = async (data) => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await axios.post(`${Api}/event/create`, data, {
            headers: {
                Authorization: `bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message || "add event failed";
    }
};

const update = async (id, data) => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await axios.put(`${Api}/event/update/${id}`, data, {
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
        const response = await axios.delete(`${Api}/event/delete/${id}`, {
            headers: {
                Authorization: `bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message || "delete participant failed";
    }
};

const EventService = {
    getAll,
    add,
    update,
    remove,
    getOne
}

export default EventService;