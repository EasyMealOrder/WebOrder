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
      desk: this.$route.params.id,
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
  background-color: #D3DCE6;
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
  height: 95%;
  bottom: 0;
  position: fixed;
}
.dish-part {
  height: 100%;
}
.aside-part {
  height: 100%;
}
</style>
