import axios from 'axios';
import { toast } from 'react-toastify';

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  withCredentials: true,
  headers: {
    'appKey': process.env.REACT_APP_ADMIN_KEY,
    'Content-type': 'application/json',
  },
});

Api.interceptors.request.use(function (config) {
  config.headers['token'] = localStorage.getItem('token-admin') ?? ''
  return config;
}, function (error) {
  return Promise.reject(error);
});

Api.interceptors.response.use((res) => {
  const {
    data,
    response
  } = res.data

  if (!response || typeof (response.code) === 'undefined' || !data) {
    toast.error('Ocorreu um erro ao conectar ao servidor.')
    return false
  }

  if (response.code !== 0) {
    toast.error(response.msg ?? null)
  }

  switch (response.code) {
    case 1:
      return false
    case 2:
      window.navigate(-1)
      return false
    case 3:
      window.navigate('/account/login')
      return false
    default:
      return data
  }
}, (error) => {
  console.error(error)
  toast.error('Ocorreu um erro ao conectar ao servidor.')
  return Promise.reject(error)
})

export default Api;
