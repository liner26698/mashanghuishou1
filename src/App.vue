<template>
  <div id="app" v-cloak> 
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" type="text/css">
  @import '../src/style/common.scss';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
   /* background: #FFFFFF;*/
  }
  img{
    margin: 0;
    padding: 0;
    vertical-align: middle;
  }
  html,body{
    height: 100%;
    // background-color: #f2f2f2;
  }
  h1,p,body,ul,li,div,h2,h3,h4,h5,span,em,i,ol,input,button{
    padding: 0;
    margin: 0;
    word-wrap:break-word;
    word-break:break-all;
  }
  input{outline:none} 
  a{
    text-decoration: none;
  }
  [contenteditable = "true"], input, textarea {
    -webkit-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    -o-user-select: auto;
    user-select: auto;
    border: 0; /* 方法1 */
    -webkit-appearance: none; /* 方法2 */
    outline-color: invert ;
    outline-style: none ;
    outline-width: 0px ;
    border: none ;
    border-style: none ;
    text-shadow: none ;
    -webkit-appearance: none ;
    -webkit-user-select: text ;
    outline-color: transparent ;
    box-shadow: none;
  }
  *{
    -webkit-user-select: auto!important;
    -moz-user-select: auto!important;
    -ms-user-select: auto!important;
    -o-user-select: auto!important;
    user-select: auto!important;
  }
  #empty_content{
    display: flex;
    height: pxChangeRem(400);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
      width: pxChangeRem(200);
    }
    p{
      font-size: $C36;
      color: $themeColor2;
      margin: pxChangeRem(30) 0;
    }
  }
</style>
