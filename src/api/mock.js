const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = 'http://www.kingofsingledog.club/fakebilibili/api1' // 定义默认域名，随便写
const success_code = 200 // 返回的状态码


// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/banners`,'get',(req)=>{
  let banners = []
  for ( let i = 0; i<8; i++ ){
    banners.push(
      Random.dataImage('200x100', 'This is Fake Bilibili No.'+(i+1)+' banner!' )
    )
  }
  return {
    success_code,
    banners
  }
})
