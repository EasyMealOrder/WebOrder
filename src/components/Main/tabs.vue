<template>
  <el-tabs v-model="activeName" class="tabs-style" @tab-click="onTabClick">
    <el-tab-pane v-for="item in items" :key="item.id" :label="item.msg" :name="item.link"></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  props: ['items'],
  data () {
    return {
      activeName: this.items[0].link
    }
  },
  methods: {
    onTabClick (tab) {
      this.$router.push(tab.name)
    }
  }
}
</script>

<style>
div {
  font-family: Helvetica;
}
.tabs-style {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5%;
}
.tabs-style .el-tabs__header  {
  padding: 0;
  position: relative;
  margin: 0;
}
.tabs-style .el-tabs__nav{
  width: 100%;
}
.tabs-style .el-tabs__nav .el-tabs__item {
  width: 33%;
  text-align: center;
}
.tabs > ul,
.tabs > ul > li {
  margin: 0;
  padding: 0;
}
.tabs ul {
  display: table;
  width: 100%;
}
.tabs ul > li {
  text-align: center;
  display: table-cell;
  padding: 8px 12px;
}

@media only screen and (max-width: 1200px) { .tabs ul > li{ font-size: 18px; }}
@media only screen and (max-width: 640px) { .tabs ul > li{ font-size: 15px; }}
@media only screen and (max-width: 320px) { .tabs ul > li{ font-size: 10px; }}

.tabs ul > li.active {
  color: rgb(11, 115, 212);
  background-color: #b5cce2;
}

</style>
