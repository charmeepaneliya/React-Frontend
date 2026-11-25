import axios from "axios";


const BASEURL = import.meta.env.VITE_BASE_URL;

const blogAxios = axios.create({
  baseURL: `${BASEURL}/blog`,
});

blogAxios.interceptors.request.use((config)=>{
  const token = localStorage.getItem("token");

  if(token){
    config.headers.Authorization = `Bearer${token}`;
  }
  return config;
})

export default blogAxios;