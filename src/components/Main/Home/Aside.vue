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
  height: 10vw;
  width: 100%;
  float: left;

}
.aside-button {
  width: 100%;
  height: 100%;
  float: left;
  text-align:center;
  color:#B56969;
  background-color:#e9e9e9;
}
@media only screen and (max-width: 1600px) { .aside-button{ font-size: 35px; }}
@media only screen and (max-width: 960px) { .aside-button{ font-size: 25px; }}
@media only screen and (max-width: 400px) { .aside-button{ font-size: 15px; }}

</style>
