<template>
  <div id="header">
    <div class="logo">
      <router-link to="dashboard"><img src="../assets/img/logo-1.png" height="30"></router-link>
    </div>
    <div class="username">
      欢迎回来，{{loginUser}}。
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
      name:'v-header',
      data(){
          return{
          }
      },
      computed:mapGetters(['loginUser']),
  }
</script>
<style scoped>
  #header{
    width: 100%;
    height: 50px;
    background: #1F2D3D;
    color:#C0CCDA ;
  }
  #header .logo{
    float: left;
    width: auto;
    height: 35px;
    margin-top: 10px;
    margin-left: 20px;
  }
  #header .username{
    float: right;
    line-height: 50px;
    margin-right: 30px;
    font-size: 14px;
  }
</style>
