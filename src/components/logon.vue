<template>
  <div>
    <header class="logon-header"></header>
    <section class="logon-box">
      <input type="text" placeholder="账号">
      <input type="password" placeholder="密码">
      <a href class="forget">忘记密码？</a>
      <div class="btn-box">
        <router-link to="/index"><button>登录</button></router-link>
      </div>
      <div class="register-box">
        没有账号？
        <router-link to="/register">注册</router-link>
      </div>
    </section>
    <section class="logon-link">
      <div class="logon-link-text">使用其他账号登录</div>
      <div class="logon-link-list">
        <a href="">
          <img src="../assets/img/wechat.png" alt>
        </a>
        <a href="">
          <img src="../assets/img/weibo.png" alt>
        </a>
        <a href="">
          <img src="../assets/img/qq.png" alt>
        </a>
      </div>
    </section>
  </div>
</template>
<style>
</style>
