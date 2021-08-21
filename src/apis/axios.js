import axios from 'axios'

export const instanceSpring = axios.create({
  baseURL: 'http://localhost:8080/',
})

export const instanceGin = axios.create({
  baseURL: 'http://localhost:3000/',
})

// export default instance
