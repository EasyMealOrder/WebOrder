<template>
    <el-container id="main">
        <tabs :items="children"></tabs>
        <router-view></router-view>
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
          link: '/main/home',
          img: '/static/images/home.svg',
          id: 0
        },
        {
          msg: '餐盘',
          link: '/main/plate',
          img: '/static/images/plate.svg',
          id: 1
        },
        {
          msg: '我',
          link: '/main/myself',
          img: '/static/images/cart.svg',
          id: 2
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
