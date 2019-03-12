/** 
 * 底部导航
 * **/
<template>
  <div class="footer">
    <div class="footer-nav">
        <router-link class="footer-nav-list" to="/index">
            <span :class="['footer-nav-list-icon',activeRouter == 'index' ? 'home-active' : 'home']"></span>
            <span :class="['footer-nav-list-txt',activeRouter == 'index' ? 'active' : '']">首页</span>
        </router-link>
        <router-link class="footer-nav-list" to="/order">
            <span :class="['footer-nav-list-icon',activeRouter == 'order' ? 'order-active' : 'order']"></span>
            <span :class="['footer-nav-list-txt',activeRouter == 'order' ? 'active' : '']">下单</span>
        </router-link>
        <router-link class="footer-nav-list" to="/income">
            <span :class="['footer-nav-list-icon',activeRouter == 'income' ? 'income-active' : 'income']"></span>
            <span :class="['footer-nav-list-txt',activeRouter == 'income' ? 'active' : '']">收入</span>
        </router-link>
        <a class="footer-nav-list" to="/user" @click="goUser">
            <span :class="['footer-nav-list-icon',activeRouter == 'user' ? 'user-active' : 'user']"></span>
            <span :class="['footer-nav-list-txt',activeRouter == 'user' ? 'active' : '']">我的</span>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'foot',
    data () {
        return {
            activeRouter: 'index'
        }
    },
    created(){
        // console.log(this.$route.name);
        // this.activeRouter = this.$route.name;
    },
    methods: {
        /**
         * 跳转我的
         */
        goUser: function(){
            this.$router.push('/user');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
    @import '../../style/common.scss';
    $class-prefix: "footer"; 
    .#{$class-prefix}{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        border-top: pxChangeRem(1) solid $themeColor1;
        &-nav{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            &-list{
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: pxChangeRem(96);
                &-icon{
                    display: inline-block;
                    width: pxChangeRem(45);
                    height: pxChangeRem(45);
                }
                .home{
                    background: url('../../assets/imgs/shouyihui.png') no-repeat;
                    background-size: 100% 100%;
                }
                .home-active{
                    background: url('../../assets/imgs/shouyilv.png') no-repeat;
                    background-size: 100% 100%;
                }
                .order{
                     background: url('../../assets/imgs/xiadanhui.png') no-repeat;
                    background-size: 100% 100%;
                }
                .order-active{
                     background: url('../../assets/imgs/xiadanlv.png') no-repeat;
                    background-size: 100% 100%;
                }
                .income{
                     background: url('../../assets/imgs/shouruhui.png') no-repeat;
                    background-size: 100% 100%;
                }
                .income-active{
                     background: url('../../assets/imgs/shourulv.png') no-repeat;
                    background-size: 100% 100%;
                }
                .user{
                    background: url('../../assets/imgs/usercenter2.png') no-repeat;
                    background-size: 100% 100%;
                }
                .user-active{
                    background: url('../../assets/imgs/usercenter.png') no-repeat;
                    background-size: 100% 100%;
                }
                &-txt{
                    color: #333;
                    font-size: pxChangeRem(24);
                    line-height: pxChangeRem(24); 
                    margin-top: pxChangeRem(10);
                }
                .active{
                    color: $themeRed;
                }
            }
        }
    }
</style>
