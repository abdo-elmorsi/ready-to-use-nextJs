import axios from 'axios'
import Cookies from 'js-cookie'

// Create axios instance.
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true
})
if (Cookies.get('token')) {
  axiosInstance.defaults.headers.Authorization = `Bearer ${Cookies.get('token')}`;
} else {
  delete axiosInstance.defaults.headers.Authorization;
}


export default axiosInstance
