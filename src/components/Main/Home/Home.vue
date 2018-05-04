<template>
  <div id="home">
    <el-container>
      <el-aside width="15%">Aside</el-aside>
      <el-main>
        <div class="dish-part">
          <dish-list :dishes="dishes"></dish-list>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import DishList from './DishList.vue'
export default {
  components: { DishList },
  data () {
    return {
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
          name: '82年雪碧',
          description: '压压惊专用',
          num: 1,
          dish_img: '/static/images/drink.jpg',
          price: 82,
          id: 1
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
</style>
