<template>
    <el-container id="main">
        <tabs :items="children"></tabs>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </el-container>
</template>

<script>
import Tabs from './tabs.vue'

export default {
  components: { Tabs },
  data () {
    return {
      children: [
        {
          msg: '首页',
          link: {name: 'Home'},
          img: '/static/images/home.svg',
          icon: 'el-icon-menu'
        },
        {
          msg: '餐盘',
          link: {name: 'PlateWrapper'},
          img: '/static/images/plate.svg',
          icon: 'el-icon-tickets'
        },
        {
          msg: '我',
          link: {name: 'Myself'},
          img: '/static/images/cart.svg',
          icon: 'el-icon-goods'
        }
      ]
    }
  }
//   watch: {
//     '$route' (to, from) {
//       console.log(to)
//       console.log(from)
//     }
//   }
}
</script>

<style>
#main {
  height: 100%;
  width: 100%;
}
.content {
  height: 95%;
  margin: 0;
  top: 5%;
}
.section {
  background: #fff;
  margin-bottom: 5px;
}

</style>
