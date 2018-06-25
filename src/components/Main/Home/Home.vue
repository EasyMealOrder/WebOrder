<template>
  <el-container id="home">
      <el-aside width="20%">
        <div class="aside-part">
          <aside-list :items="items"></aside-list>
        </div>
      </el-aside>
      <el-main>
        <dish-list ></dish-list>
      </el-main>
  </el-container>
</template>

<script>
import DishList from './DishList.vue'
import AsideList from './Aside.vue'
export default {
  components: {DishList, AsideList},
  data () {
    return {
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
        }
      ]
    }
  }
}

</script>

<style>
.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  line-height: 160px;
  height: 95%;
  padding: 0;
  top: 5%;
}
body > .el-container {
  margin: 0;
}
#home {
  height: 92%;
  bottom: 0;
  position: fixed;
  width: 100%;
}
.dish-part {
  height: 100%;
}
.aside-part {
  width: 100%;
  height: 100%;
}
</style>
