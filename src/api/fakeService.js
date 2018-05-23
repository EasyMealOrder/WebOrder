/**
 * Mocking client-server processing
 */

const _dishes = [
  {
    name: '农家蛋炒饭',
    description: '加了香肠火腿回锅肉，真香，500块钱一碗,你吃得起吗',
    num: 1,
    dish_img: '/static/images/dish.jpeg',
    price: 500,
    id: 0
  },
  {
    name: '82年雪碧1号',
    description: '压压惊专用',
    num: 1,
    dish_img: '/static/images/drink.jpg',
    price: 82,
    id: 1
  },
  {
    name: '82年雪碧2号',
    description: '压压惊专用',
    num: 1,
    dish_img: '/static/images/drink.jpg',
    price: 82,
    id: 2
  },
  {
    name: '82年雪碧3号',
    description: '压压惊专用',
    num: 1,
    dish_img: '/static/images/drink.jpg',
    price: 82,
    id: 3
  },
  {
    name: '82年雪碧4号',
    description: '压压惊专用',
    num: 1,
    dish_img: '/static/images/drink.jpg',
    price: 82,
    id: 4
  },
  {
    name: '82年雪碧5号',
    description: '压压惊专用',
    num: 1,
    dish_img: '/static/images/drink.jpg',
    price: 82,
    id: 5
  },
  {
    name: '82年雪碧6号',
    description: '压压惊专用',
    num: 1,
    dish_img: '/static/images/drink.jpg',
    price: 82,
    id: 6
  }
]

export default {
  getDishesFromService (cb) {
    console.log('getDishesFromService called')
    setTimeout(() => cb(_dishes), 100)
  },

  buyDishes (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
