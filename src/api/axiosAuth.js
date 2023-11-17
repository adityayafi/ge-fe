import axios from 'axios';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const [token, setToken] = useState('');
const [name, setName] = useState('')
const [exp, setExp] = useState('')
const axiosAuth = axios.create()

axiosAuth.interceptors.request.use(async(config) => {
  const currDate = new Date();
  if (expire * 1000 < currDate.getTime()){
    const resp = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/token`);
    config.headers.Authorization = `Bearer ${resp.data.accessToken}`;
    setToken(resp.data.accessToken);
    const decoded = jwtDecode(resp.data.accessToken);
    setName(decoded.name);
    setExp(decoded.exp);

  }
  return config;
}, (error) => {
  return Promise.reject(error);
})

export default axiosAuth;