<template>
    <div class="tabs">
        <ul>
            <router-link v-for="item in items" :key="item.msg" :to="item.link" tag="li">
                <div>
                    <img :src="item.img">
                </div>
                <div>{{item.msg}}</div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'tabs',
  props: ['items']
}
</script>

<style>
    .tabs {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px #000;
  width: 100%;
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
  font-size: 10px;
  display: table-cell;
  padding: 8px 12px;
}
.tabs ul > li.active {
  color: #D0021B;
}

</style>
