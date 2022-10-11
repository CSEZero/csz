import httpRequest from './http'

export default {
  // get请求
  // get请求带url
  get: (url, param, otherConfigs) => httpRequest.get(url, param, otherConfigs),

  // post请求带url
  post: (url, param, otherConfigs) => httpRequest.post(url, param, otherConfigs),
  goLogin: param => httpRequest.post('/users/login', param),
  goRegister: param => httpRequest.post('/users/reg', param)

}
