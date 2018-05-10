<template>
  <div class="aside-list">
    <div class="aside-item" v-for="item in items" :key="item.id">
      <el-button class="aside-button" type="primary">{{ item.name }}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style>
.aside-list {
  height: 100%;
}
.aside-item {
  margin: 0 0 0 0;
  height: 15vw;
  width: 100%;
  float: left;
}
.aside-button {
  width: 100%;
  height: 100%;
  float: left;
  text-align:center;
}
</style>
