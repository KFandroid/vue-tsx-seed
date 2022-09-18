import myAxios from './axios'

export function getListAPI(paramsList) {
  return myAxios({
    url: '/api/list',
    method: 'get',
    data: paramsList,
  })
}

export function test() {
  return myAxios({
    url: '/api/extend/extend/info/getLifeInfo?appCode=001&channelCode=014&reqData=%7B%22longitude%22%3A%22120.107822%22%2C%22latitude%22%3A%2230.267023%22%2C%22city%22%3A%22%E5%8D%97%E4%BA%AC%E5%B8%82%22%7D&sign=453be2cd91f522dd3e1907729f92d2fcd7630facab37b2615e935f71be42ce2c&signType=SHA256&timestamp=1662623011860&version=6.0015',
    method: 'get',
  })
}
