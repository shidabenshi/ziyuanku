import {get,  post}  from '../utils/request'
//  发起请求获取上映的电影
export function getComingSoon(){
  // return get('https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290')
   return post('https://api.cat-shop.penkuoer.com/api/v2/proxy', {
     url: 'https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290',
   });

  }

   export function getDetail(id){
     return post('https://api.cat-shop.penkuoer.com/api/v2/proxy',{
       url:'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId='+id,
     })
   }

  
