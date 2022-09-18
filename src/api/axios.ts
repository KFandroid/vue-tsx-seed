import axios from 'axios'

function myAxios(axiosConfig) {
  const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // 设置统一的请求前缀
    timeout: 10000, // 设置统一的超时时长
  })

  return service(axiosConfig)
}
// axios.defaults.baseURL = 'https://api.example.com'
export default myAxios
