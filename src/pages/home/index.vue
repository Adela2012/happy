<template>
  <div>
    <Xheader :headertitle="level"></Xheader>
    <div class="home_logo container_style"></div>
    <router-link to="item" class="start button_style" ></router-link>
  </div>
</template>

<script>
  import header from '@/components/header'
  import { mapState } from 'vuex'

  export default {
    components: {
      'Xheader': header
    },
    computed: mapState({
      level: state => state.level
    })
  }
</script>

<style lang="less">
  .home_logo{
    background-image: url(../../assets/1-2.png);
    background-size: 13.142rem 100%;
    background-position: right center;
  }
  .container_style{
    height: 11.625rem;
    width: 13.15rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
  } 
  .button_style{
    display: block;
    height: 2.1rem;
    width: 4.35rem;
    background-size: 100% 100%;
    position: absolute;
    top: 16.5rem;
    left: 50%;
    margin-left: -2.4rem;
    background-repeat: no-repeat;
  }
  .start{
    background-image: url(../../assets/1-4.png);
  }
</style>
