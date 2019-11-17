<template>
<div id="page-top">
  <header class="masthead" style="padding-top: 80px; padding-bottom: 80px;">
    <div class="container h-100">
      <div class="row h-100">
        <div class="col-lg-10 my-auto">
          <div class="header-content mx-auto">
            <h1 class="mb-5">個人の短期間に特化したタスクツールです</h1>
            <a href="/home" class="btn btn-outline btn-xl js-scroll-trigger">使ってみる</a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="features" id="features">
    <div class="container">
      <div class="section-heading text-center">
        <h2>soloMGUとは</h2>
        <p class="text-muted">休日に勉強しようとしたときにダラダラやってしまう。Youtubeみたり漫画読んだり...</p>
        <p class="text-muted">そんなときに1時間ごとに予定を立ててメリハリをつけてタスクを実行するようにするツールです。</p>
        <hr>
      </div>
    </div>
      <div class="row">
        <div class="col-lg-2 my-auto">
          <div class="device-container">
            <div class="device-mockup iphone6_plus portrait white">
              <div class="device">
                <div class="screen">
                  <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                  <img src="img/demo-screen-1.jpg" class="img-fluid" alt="">
                </div>
                <div class="button">
                  <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 my-auto">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6">
                <div class="feature-item">
                  <i class="icon-screen-smartphone text-primary"></i>
                  <img src="~/assets/no_registration.png" class="img-fluid icon" alt=">登録不要アイコン">
                  <div>
                    <h3>登録不要</h3>
                    <p class="text-muted">サイトへのアカウント登録は不要です。</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="feature-item">
                  <i class="icon-camera text-primary"></i>
                  <img src="~/assets/easy_operation.png" class="img-fluid icon" alt="直感的に操作できますアイコン">
                  <h3>直感的に操作できます</h3>
                  <p class="text-muted">操作を覚えることなく直感的にサイトを使うことができます。</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="feature-item">
                  <i class="icon-present text-primary"></i>
                  <img src="~/assets/clock.png" class="img-fluid icon" alt="タイマー機能アイコン">
                  <h3>タイマー機能</h3>
                  <p class="text-muted">タイマー機能により時間を意識しながらタスクをこなせます。</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="feature-item">
                  <i class="icon-lock-open text-primary"></i>
                  <img src="~/assets/free.png" class="img-fluid icon" alt="無料で使えるアイコン">
                  <h3>無料で使える</h3>
                  <p class="text-muted">全ての機能を無料で使うことができます。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>
<style>
  header.masthead {
    position: relative;
    width: 100%;
    padding-top: 150px;
    padding-bottom: 100px;
    color: white;
    background: url(".././assets/bg-pattern.png"), #FF9900;
    background: url(".././assets/bg-pattern.png"), linear-gradient(to left, #FF9900, #FF9900);
  }
  .btn-outline {
    color: white;
    border: 1px solid;
    border-color: white;
  }
  .icon{
    width:130px;
    height: 130px;
    float: left;
  }
</style>

