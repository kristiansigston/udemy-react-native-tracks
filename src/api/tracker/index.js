import { NGROK_LINK } from '@env'
import axios from 'axios'
import { AsyncStorage } from 'react-native'

const instance = axios.create({
  baseURL: NGROK_LINK,
})

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token')
    console.log('baseURL', NGROK_LINK)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance

