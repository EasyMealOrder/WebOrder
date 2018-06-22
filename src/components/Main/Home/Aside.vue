<template>
  <div class="aside-list">
    <div class="aside-item" v-for="item in types" :key="item.tid">
      <el-button class="aside-button" type="primary" @click="showDishesByType(item.name)">{{ item.name }}</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    types: 'allTypes'
  }),
  methods: mapActions([
    'showDishesByType'
  ])
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
  color:rgb(11, 115, 212);
  background-color:#b5cce2;
}
@media only screen and (max-width: 1600px) { .aside-button{ font-size: 35px; }}
@media only screen and (max-width: 960px) { .aside-button{ font-size: 25px; }}
@media only screen and (max-width: 400px) { .aside-button{ font-size: 15px; }}

</style>
