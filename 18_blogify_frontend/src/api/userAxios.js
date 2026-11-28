import axios from "axios";

const BASEURL = import.meta.env.VITE_BASE_URL;

const userAxios = axios.create({
    baseURL:`${BASEURL}/user`,
});

userAxios.interceptors.request.use((config)=>{
  const token = localStorage.getItem("token");

  if(token){
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})

export default userAxios;