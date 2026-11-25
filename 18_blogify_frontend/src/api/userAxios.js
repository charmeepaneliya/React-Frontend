import axios from "axios";

const BASEURL = import.meta.env.VITE_BASE_URL;

const userAxios = axios.create({
    baseURL:`${BASEURL}/user`,
});

export default userAxios;