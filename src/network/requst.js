import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 10000
    })

    // 拦截器
    instance.interceptors.request.use(config => {
        return config
    }), err => {

    }

    instance.interceptors.response.use(config => {
        return config
    }), err => {

    }

    return instance(config)
}

