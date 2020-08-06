import axios from 'axios'

export function request(config, success, failure) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    instance(config)
        .then(res => {
            console.log(res);
            success(res);
        })
        .catch(err => {
            console.log(err);
            failure(err);
        })
    
    // axios的拦截器
    instance.interceptors.request.use(config => {
        console.log(config);
    }, err => {
        console.log(err);
    })
}