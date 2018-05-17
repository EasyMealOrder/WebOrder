<template>
    <div class="tabs">
        <ul>
            <router-link v-for="item in items" :key="item.msg" :to="item.link" tag="li">
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
  top: 0;
  left: 0;
  background-color: #e6cf8b;
  width: 100%;
  height: 5%;
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
  color: #D0021B;
  background-color: #e9e9e9;
}

</style>
