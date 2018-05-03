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
          description: '加了香肠火腿回锅肉，500块钱一碗,你吃得起吗',
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
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
