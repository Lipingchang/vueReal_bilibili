import axios from 'axios'

export const getBanners = ()=>{
  return axios.get(
    '/banners',
    {params: null}
  )
}