import request from "@/utils/request"
/**
 * 获取品牌
 * @param  limit 品牌个数，默认为6
 * @returns 
 */
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', {limit})
}

/**
 * 获取广告图
 * @returns Promise
 */
 export const findBanner = () => {
  return request('/home/banner', 'get')
}

/**
 * 获取新鲜好物的商品
 * @returns 
 */
export const findNew = () => {
  return request('home/new', 'get')
}

/**
 * 获取人气推荐内容
 * @returns 
 */
export const findHot = () => {
  return request('home/hot', 'get')
}

/**
 * 
 * @returns 获取商品
 */
export const findGoods = () => {
  return request('home/goods', 'get')
}
