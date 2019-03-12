<template>
  <div class="error">
    <div class="mess">
     无访问权限！
    </div>
  </div>
</template>

<script>

  export default {

  };
</script>
<style lang="scss" scoped>
  .error{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: #fff;
    .mess{
      position: fixed;
      left: 50%;
      top: 50%;
      z-index: 11;
      transform: translate(-50%,-50%);
      color:red;
    }
  }
</style>
