import axios from 'axios'
import Cookies from 'js-cookie'

// Create axios instance.
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true
})
if (Cookies.get('next.js/examples/with-iron-session')) {
  axiosInstance.defaults.headers.Authorization = `Bearer ${Cookies.get('token')}`;
} else {
  delete axiosInstance.defaults.headers.Authorization;
}


export default axiosInstance
