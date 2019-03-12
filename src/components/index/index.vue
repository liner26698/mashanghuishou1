<template>
  <div class="box">
    <div class="swiperBox">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="swiper-item">
          <router-link to>
            <img src="../../assets/imgs/yjlc.jpg" alt="验机流程">
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item class="swiper-item">
          <router-link to>
            <img src="../../assets/imgs/yjlc.jpg" alt="验机流程">
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item class="swiper-item">
          <router-link to>
            <img src="../../assets/imgs/yjlc.jpg" alt="验机流程">
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 活动精选 -->
    <div class="item">
      <div class="item-list" v-for="(item, index) in arry" :key="index">
        <img :src="item.img" class="item-list-img">
        <span class="item-list-text">{{item.text}}</span>
      </div>
    </div>
    <!-- 服务信息 -->
    <div class="service-msg">
      <div class="service-title"><span class="greenline"></span>服务信息</div>
      <div class="service-content">
        <div class="service-item">
          <p class="item-top"> 
            <img src="../../assets/imgs/card.png" alt="" class="itemIcon">
            <span class="itemFont">今日订单量</span>  
          </p>
          <div class="item-text">暂无</div>
        </div>
        <div class="service-item">
          <p class="item-top"> 
            <img src="../../assets/imgs/card.png" alt="" class="itemIcon">
            <span class="itemFont">今日已发货</span>  
          </p>
          <div class="item-text">暂无</div>
        </div>
        <div class="service-item">
          <p class="item-top"> 
            <img src="../../assets/imgs/shouyi.png" alt="" class="itemIcon">
            <span class="itemFont">收入变化</span>  
          </p>
          <div class="item-text">暂无</div>
        </div>
        <div class="dotted-line"></div>
        <div class="service-item">
          <p class="item-top"> 
            <img src="../../assets/imgs/card.png" alt="" class="itemIcon">
            <span class="itemFont">本月总订单</span>  
          </p>
          <div class="item-text">暂无</div>
        </div>
        <div class="service-item">
          <p class="item-top"> 
            <img src="../../assets/imgs/fahuo.png" alt="" class="itemIcon">
            <span class="itemFont">本月已发货</span>  
          </p>
          <div class="item-text">暂无</div>
        </div>
        <div class="service-item">
          <p class="item-top"> 
            <img src="../../assets/imgs/shouru.png" alt="" class="itemIcon">
            <span class="itemFont">本月总收入</span>  
          </p>
          <div class="item-text">+18.5</div>
        </div>
      </div>

    </div>
    <foot></foot>
  </div>
</template>

<script>
import {
  Toast,
  MessageBox,
  Indicator,
  Button,
  Swipe,
  SwipeItem
} from "mint-ui";

import foot from '../public/foot'
export default {
  data() {
    return {
      arry: [
        // 老板是4，店长是5，店员是6
        {
          img:
            "https://www.mshuishou.com/image/storeImage/Icon/storedelivery.png",
          text: "门店发货",
          userType: "5",
          url: "../delivery/delivery",
          isShow: false
        },
        // { img: "../../imgs/gkgl.png", text: "顾客管理", userType: "5, 6", url: "../management/management", isShow: false },
        {
          img:
            "https://www.mshuishou.com/image/storeImage/Icon/ordercenter.png",
          text: "订单中心",
          userType: "4, 5, 6",
          url: "../ordercenter/ordercenter",
          isShow: false
        },
        {
          img:
            "https://www.mshuishou.com/image/storeImage/Icon/differences.png",
          text: "验货差异",
          userType: "6, 5",
          url: "../differences/differences",
          isShow: false
        },
        {
          img: "https://www.mshuishou.com/image/storeImage/Icon/mendian.png",
          text: "门店管理",
          userType: "4",
          url: "../storemanagement/storemanagement",
          isShow: false
        },
        {
          img: "https://www.mshuishou.com/image/storeImage/Icon/rongcuo.png",
          text: "容错资金",
          userType: "4",
          url: "../tolerance/tolerance",
          isShow: false
        },
        {
          img: "https://www.mshuishou.com/image/storeImage/Icon/maichude.png",
          text: "我卖出的",
          userType: "5",
          url: "../accurate-add/orderaccerter/orderaccerter",
          isShow: false
        },
        {
          img: "https://www.mshuishou.com/image/storeImage/Icon/maichude.png",
          text: "以旧换新",
          userType: "4,6, 5",
          url: "../New-order/New-order",
          isShow: false
        }
        // { img: "../../imgs/tuihuo.png", text: "退货审核", userType: "4", url: "../returnaudit/returnaudit", isShow: false},
        // { img: "../../imgs/jifen.png", text: "积分管理", userType: "4", url: "../Integral/Integral", isShow: false },
        // { img: "../../imgs/orderreview.png", text: "订单审核", userType: "4,5", url: "../orderreview/orderreview", isShow: false },
      ]
    };
  },
  components:{
    foot
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/common.scss";  
#app{
  background-color: #f2f2f2;
}
.box {
  background: #f2f2f2;
  padding-bottom:pxChangeRem(116);
  .swiperBox {
    height: pxChangeRem(344);
    .swiper-item img {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
  .item {
    margin-top: pxChangeRem(20);
    background-color: #ffffff;
    height: pxChangeRem(410);
    // padding: pxChangeRem(35) pxChangeRem(40) pxChangeRem(5) pxChangeRem(45);
    padding: pxChangeRem(30) pxChangeRem(10);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .item-list {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: pxChangeRem(50);
    }
    .item-list-img {
      width: pxChangeRem(90);
      height: pxChangeRem(90);
    }
    .item-list-text {
      padding: 0;
      margin: 0;
      word-wrap: break-word;
      word-break: break-all;
      font-size: pxChangeRem(28);
      margin-top: pxChangeRem(20);
    }
  }
  .service-msg{
      margin-top: pxChangeRem(20);
      height: pxChangeRem(410);
      background-color: #ffffff;
      box-sizing: border-box; 
      padding:pxChangeRem(30) pxChangeRem(0);
      .service-title{ 
        font-size: pxChangeRem(28);
        display:flex;
        align-items:center; 
        border-bottom: 1px solid rgb(238,238,238);
        padding-bottom: pxChangeRem(24);
        color: #333;
        .greenline{
          width:pxChangeRem(10);
          height:pxChangeRem(38);
          background-color:rgb(96,189,38);
          margin-right:pxChangeRem(20);
          margin-left:pxChangeRem(20); 
          display: inline-block;
       } 
      }
      .service-content{
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        justify-content: space-around;
        .service-item{
          width: 27%;
          margin-bottom: 10px;
          padding-left: pxChangeRem(10);
          p{
            vertical-align: middle;
          }
          .item-top{
            .itemIcon{
              // background: url('../../assets/imgs/card.png') no-repeat;
            width:pxChangeRem(38) ;
            height:pxChangeRem(38);
            vertical-align: center;
            }
            .itemFont{
              font-size: pxChangeRem(24);
              vertical-align: middle;
              color: #999;
            }
          }
          .item-text{
              font-size: pxChangeRem(32);
              text-align: center;
              color: #333;
              height: pxChangeRem(40);
             line-height: pxChangeRem(40);
          }
        }
        .dotted-line{
          border: 1px dotted rgb(238,238,238);
          width: 100%;
          height:pxChangeRem(1) ;
        }
      }
  }
}
</style>
