<template>
    <div id="main">
        <tabs :items="children"></tabs>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
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
          img: '/static/images/home.svg'
        },
        {
          msg: '订单',
          link: {name: 'Order'},
          img: '/static/images/cart.svg'
        },
        {
          msg: '我的',
          link: {name: 'Myself'},
          img: '/static/images/me.svg'
        }
      ]
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      console.log(from)
    }
  }
}
</script>

<style>
#main {
  height: 100%;
}
.content {
  height: 95%;
  margin: 0;
  position: relative;
  top: 5%;
}
.section {
  background: #fff;
  margin-bottom: 5px;
}

</style>
