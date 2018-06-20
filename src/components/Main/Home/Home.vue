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
  components: {DishList, AsideList}
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
