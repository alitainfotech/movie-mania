import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = 'http://192.168.1.43:8001';

const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.interceptors.request.use(
  (config) => {
    const userInfo = JSON.parse(localStorage?.getItem('auth'));
    
    if (userInfo?.token) {
      config.headers["Authorization"] = `Bearer ${userInfo?.token}`;
    }
    
    return config;
  },
  (error) => {
    console.log(">REQ_ERR: ", error?.message);
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(">RES_ERR: ", error?.message);
    return Promise.reject(error);
  }
);

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config });
}

export async function post(url, data, config = {}) {
  
  return axiosApi.post(url, { ...data }, { ...config });
}

export async function put(url, data, config = {}) {
  return axiosApi.put(url, { ...data }, { ...config });
}

export async function del(url, config = {}) {
  return await axiosApi.delete(url, { ...config });
}

export async function postFormData(url, data, config = {}) {
  return axiosApi.post(url, data, {
    "Content-Type": "multipart/form-data",
    ...config,
  });
}

export async function putFormData(url, data, config = {}) {
  return axiosApi.put(url, data, {
    "Content-Type": "multipart/form-data",
    ...config,
  });
}
