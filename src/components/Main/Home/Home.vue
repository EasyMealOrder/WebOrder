<template>
  <div id="home">
    <el-container>
      <el-aside width="20%">
        <div class="aside-part">
          <aside-list :items="items"></aside-list>
        </div>
      </el-aside>
      <el-main>
        <div class="dish-part">
          <!-- <dish-list :dishes="dishes"></dish-list> -->
          <dish-list ></dish-list>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import DishList from './DishList.vue'
import AsideList from './Aside.vue'
export default {
  components: {DishList, AsideList},
  data () {
    return {
      /*
      dishes: [
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
      ],
      */
      items: [
        {
          name: '优惠',
          description: '',
          id: 0
        },
        {
          name: '炒饭',
          description: '',
          id: 1
        },
        {
          name: '饮料',
          description: '',
          id: 2
        },
        {
          name: '饮料',
          description: '',
          id: 3
        },
        {
          name: '饮料',
          description: '',
          id: 4
        },
        {
          name: '饮料',
          description: '',
          id: 5
        },
        {
          name: '饮料',
          description: '',
          id: 6
        },
        {
          name: '饮料',
          description: '',
          id: 7
        },
        {
          name: '饮料',
          description: '',
          id: 8
        }
      ]
    }
  }

}
</script>

<style>
#home {
  height: 100%;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  line-height: 160px;
  height: 100%;
  padding: 0;
}
body > .el-container {
  margin: 0;
}
.el-container {
  height: 100%;
}
.dish-part {
  height: 100%;
}
.aside-part {
  height: 100%;
}
</style>
