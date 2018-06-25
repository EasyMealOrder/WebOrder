<template>
  <el-tabs type="card" class="aside-list" tab-position="left" v-model="activeName" @tab-click="showClickType">
    <el-tab-pane v-for="item in types" :key="item.tid" :label="item.dtype" :name="item.dtype"></el-tab-pane>
    <!-- <div class="aside-item" v-for="item in types" :key="item.tid">
      <el-button class="aside-button" type="primary" @click="showDishesByType(item.dtype)">{{ item.dtype }}</el-button>
    </div> -->
  </el-tabs>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      activeName: '全部'
    }
  },
  computed: mapGetters({
    types: 'allTypes'
  }),
  methods: {
    ...mapActions([
      'showDishesByType'
    ]),
    showClickType (tab) {
      this.showDishesByType(tab.name)
    }
  }
}
</script>

<style>
.aside-list {
  height: 100%;
}
.tabs-list .el-tabs__header  {
  padding: 0;
  position: relative;
  margin: 0;
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
