<template>
  <div>
    <header class="page-header">
      <router-link to="homepage" class="page-return">
        <img src="../assets/img/return.png" alt="" class="return">

      </router-link>
      
      <span class="page-name">设置</span>
    </header>
    <section>
      <div class="set-sub">
        <span>个人资料</span>
        <div class="info-row-right">
          <img src="../assets/img/select.png" alt>
        </div>
      </div>
      <div class="set-sub">
        <span>清除缓存</span>
        <div class="info-row-right">
          <img src="../assets/img/select.png" alt>
        </div>
      </div>
      <div class="set-sub">
        <span>关于我们</span>
        <div class="info-row-right">
          <img src="../assets/img/select.png" alt>
        </div>
      </div>
      <div class="logout">
        <router-link to="logon">
 
          <button>退出登录</button>
       
        </router-link>
       
      </div>
    </section>
  </div>
</template>

<style>

</style>

// <script>
// export default {
//   mothods: {
//     goback() {
//       this.$router.go(-1);
//     }
//   }
// };
// </script>