<template>
  <el-container id="dishDetails">
    <el-header class="dishDetailHeader">
      <el-button class="goBackButton" @click="goBack">
        <i class="el-icon-arrow-left leftArrow-style"></i>
        <span class="goBack-font">商品详情</span>
      </el-button>
    </el-header>
    <el-main class="dishDetailMain">
      <div class="dishDetailMiddle">
        <img id="dishPicture" :src="dish.dish_img" />
        <span class="dishName">{{ dish.name }}</span>
        <br>
        <span class="dishPrice">¥ {{ dish.price }}</span>
        <el-button class="cartButton" @click="clickAddDishButton(dish)" type="primary" round>加入购物车</el-button>
      </div>
      <div class="dishDetailBottom">
        <p class="descriptionTitle">商品信息:</p>
        <span class="dishDescription">{{ dish.description }}</span>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Details',
  computed: mapGetters({
    dish: 'dishDetail'
  }),
  methods: {
    ...mapActions([
      'addDishToCart'
    ]),
    goBack () {
      console.log('go back')
      this.$router.go(-1)
    },
    openNote () {
      this.$message({
        message: '成功加入购物车',
        type: 'success'
      })
    },
    clickAddDishButton (dish) {
      this.addDishToCart(dish)
      this.openNote()
    }
  }
}
</script>

<style>
#dishDetails {
  font-family: Helvetica, sans-serif;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #efefef;
}

.dishDetailHeader {
  position: absolute;
  height: 8% ! important;
  width: 100%;
  padding: 0;
  background-color: white;
}

.goBackButton {
  border-style: none;
}

.dishDetailMain {
  position: absolute;
  height: 92% ! important;
  width: 100%;
  top: 8%;
  padding: 0 20px 0 20px;
}

.dishDetailMiddle {
  position: absolute;
  height: 60%;
  width: 100%;
  padding: 0;
  background-color: white;
}

#dishPicture {
  position: absolute;
  width: 85%;
  height: auto;
}

.dishName {
  position: absolute;
  font-weight: bold;
  font-size: 18px;
  bottom: 30px;
}

.dishPrice {
  position: absolute;
  color: red;
  font-size: 12px;
  bottom: 10px;
}

.cartButton {
  position: absolute;
  bottom: 10px;
  right: 50px;
}

.dishDetailBottom {
  position: absolute;
  height: 20%;
  width: 100%;
  bottom: 0;
  padding: 0;
  background-color: white;
}

.descriptionTitle {
  font-size: 17px;
}

.dishDescription {
  font-size: 14px;
  color: rgb(108, 109, 109);
  padding-left: 5px;
}
</style>
