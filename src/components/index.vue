<template>
  <div>
    <header class="index-header">
      <div class="search-box">
        <img src="../assets/img/search.png" alt="">
        <input type="text" placeholder="搜索目的地/向导号" class="index-saerch">
      </div>
      <div class="saoyisao">
        <img src="../assets/img/saoyisao.png" alt="">
      </div>
    </header>

    <section class="theme-box">
      <div class="theme-title">
        <span class="index-title-square"></span>
        <span>推荐主题</span>
        <span>|</span>
        <span>THEME</span>
        <!-- <img src="../assets/img/index_more.png" alt class="more-right"> -->
      </div>
      <div class="theme-list">
        <router-link to="/artical">
          <div class="theme-sub">
            <div class="theme-title-box">
              <div class="theme-sub-title">魔力的上海</div>
              <div class="theme-time">2017.05.01</div>
            </div>
            <div class="thmem-writer-box">
              <div class="theme-writer">
                <!-- <div class="theme-avatar">
                  <img src="../assets/img/avatar.jpg" alt="">
                </div>
                <span>飞奔的蜗牛</span> -->
              </div>
              <div class="theme-like">
                <img src="../assets/img/love.png" alt="">
                <span>2200</span>
              </div>
            </div>
          </div>
        </router-link>

        <router-link to="/artical">
          <div class="theme-sub">
            <div class="theme-title-box">
              <div class="theme-sub-title">魔力的上海</div>
              <div class="theme-time">2017.05.01</div>
            </div>
            <div class="theme-writer-box">
              <div class="theme-writer">
                <!-- <div class="theme-avatar">
                  <img src="../assets/img/avatar.jpg" alt="">
                </div>
                <span>飞奔的蜗牛</span> -->
              </div>
              <div class="theme-like">
                <img src="../assets/img/love.png" alt="">
                <span>2200</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="mb-bg"></div>
    </section>

    <section class="raider-wrap">
      <div class="theme-title">
        <span class="index-title-square"></span>
        <span>攻略路线</span>
        <span>|</span>
        <span>RAIDERS</span>
      </div>
      <div class="raider-box">

        <router-link to="/guide">
          <div class="raider-sub">
            <div class="raider-left">
              <div class="raider-title">她们被称为“台湾的万青”，不到20岁她们被称为“台湾的万青”，不到20岁</div>
              <div class="raider-text">抓住一个地区的时候，这和涅槃的时候同样珍贵。</div>
              <div class="raider-bottom">
                <span class="raider-bottom-sub">
                  <img src="../assets/img/index_like.png" alt="">
                  2.9万
                </span>
                <span class="raider-bottom-sub">
                  <img src="../assets/img/index_dislike.png" alt="">
                  1200
                </span>
                <span class="raider-bottom-sub">
                  <img src="../assets/img/index_love.png" alt="">
                  2200
                </span>
              </div>
            </div>
            <div class="raider-right">
              <img src="../assets/img/guide_pic.png" alt="">
            </div>
          </div>
        </router-link>

        <router-link to="/guide">
          <div class="raider-sub">
            <div class="raider-left">
              <div class="raider-title">她们被称为“台湾的万青”，不到20岁她们被称为“台湾的万青”，不到20岁</div>
              <div class="raider-text">抓住一个地区的时候，这和涅槃的时候同样珍贵。</div>
              <div class="raider-bottom">
                <span class="raider-bottom-sub">
                  <img src="../assets/img/index_like.png" alt="">
                  2.9万
                </span>
                <span class="raider-bottom-sub">
                  <img src="../assets/img/index_dislike.png" alt="">
                  1200
                </span>
                <span class="raider-bottom-sub">
                  <img src="../assets/img/index_love.png" alt="">
                  2200
                </span>
              </div>
            </div>
            <div class="raider-right">
              <img src="../assets/img/guide_pic.png" alt="">
            </div>
          </div>
        </router-link>
      </div>
    </section>

    <section class="comm-nav">
      <div class="nav-index">
        <router-link to="/index">
          <div class="nav-img-box">
            <img src="../assets/img/nav_index_chk.png" alt="">
          </div>
          <div class="nav-active">首页</div>
        </router-link>
      </div>
      <div class="nav-travel">
        <router-link to="/orders">
          <div class="nav-img-box">
            <img src="../assets/img/nav_travel.png" alt="">
          </div>
          <div>旅行</div>
        </router-link>
      </div>
      <div class="nav-chat">
        <router-link to="/chatlist">
          <div class="nav-img-box">
            <img src="../assets/img/nav_chat.png" al="">
          </div>
          <div>聊天</div>
        </router-link>
      </div>
      <div class="nav-user">
        <router-link to="/homepage">
          <div class="nav-img-box">
            <img src="../assets/img/nav_user.png" alt="">
          </div>
          <div>主页</div>
        </router-link>
      </div>
    </section>

  </div>
</template>

<style>
</style>


<script>
import theme from './theme';
import raider from './raider';
export default {
  data() {
    return {
      theme:[],
      raider:[]
    }
  },
  mounted() {
    this.$http({
      url:'/data/theme.data'
    }).then(
      res => {

      this.theme = res.data
    // console.log(res.data)
    }
    ),
    this.$http({
      url:'/data/raider.data'
    }).then(
      res => {this.raider = res.data
    // console.log(res.data)
    }
    )
  },
}
</script>
