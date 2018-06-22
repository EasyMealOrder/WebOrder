<template>
    <el-header class="tabs">
        <el-row>
            <router-link v-for="item in items" :key="item.msg" :to="item.link">
                <el-col><i :class="item.icon">{{item.msg}}</i></el-col>
            </router-link>
        </el-row>
    </el-header>
</template>

<script>
export default {
  name: 'tabs',
  props: ['items']
}
</script>

<style>
.el-header {
  padding: 0;
  top: 0;
  left: 0;
  background-color: #84bce9;
  width: 100%;
}
.el-row {
  margin-bottom: 0;
  width: 100%;
  height: 100%;
}
.el-col {
  color: rgb(11, 115, 212);
  text-align: center;
  border-radius: 4px;
  width: 33.3%;
  height: 100%;
  padding-top: 7px;
}
.el-button {
  font-family: Helvetica;
  width: 100%;
  height: 100%;
}
div {
  font-family: Helvetica;
}
.tabs {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #84bce9;
  width: 100%;
  height: 5% ! important;
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
