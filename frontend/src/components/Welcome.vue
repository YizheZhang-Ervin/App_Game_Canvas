<template>
  <div style="text-align:center;overflow:auto" class="content001">
      <div style="height:100%">
        <!-- <video height="100%" width="100%" autoplay="autoplay" muted loop ondragstart="return false" oncontextmenu="return false" onselectstart="return false">
          <source type="video/mp4" :src="videoSource2" />
        </video> -->
      </div>
      <div class="gold">
        <a-divider/>
        <p>社交媒体</p>
        <a>微博</a><a-divider type="vertical" />
        <a>微信公众号</a><a-divider type="vertical" />
        <a>BiliBili</a><a-divider type="vertical" />
        <a>小红书</a><a-divider type="vertical" />
        <a>抖音</a><a-divider type="vertical" />
        <a>快手</a><a-divider type="vertical" />
        <a>YouTube</a><a-divider type="vertical" />
        <a>Facebook</a>
        <br/><br/>
      </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data(){
    return{
      // videoSource:"http://upos-sz-mirrorcos.bilivideo.com/upgcxcode/59/43/193324359/193324359-1-160.mp4?e=ig8euxZM2rNcNbRg7bdVhwdlhWNjhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1605573255&gen=playurl&os=cosbv&oi=978800370&trid=6801f27bce154301a63381330e9b4ec8T&platform=html5&upsig=4415f2f073a1d88998bac9364d6a0cb9&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=524602686&orderid=0,1&logo=80000000",
      // videoSource2:"none"
    }
  }
};
</script>

<style scoped>

</style>