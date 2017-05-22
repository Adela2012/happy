<template>
  <div>
    <Xheader :headertitle="itemNum" :isnum="true"></Xheader>
    <div class="item_back container_style">
      <div class="item_list_container" v-if="itemDetail.length >0 ">
        <header class="item_title">{{itemDetail[itemNum - 1].topic_name}}</header>
        <ul>
          <li v-for="(item, index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)" class="item_list">
            <span class="option_style" :class="{'has_choosed':choosedNum === index}">{{chtype[index]}}</span>
            <span class="option_detail">{{item.answer_name}}</span>
          </li>
        </ul>
      </div> 
    </div>
    <span class="next_item button_style" v-if="itemNum < itemDetail.length" @click="nextItem"></span>
    <span class="submit_item button_style" v-else></span>
  </div>
</template>

<script>
  import header from '@/components/header'
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        chtype: ['A', 'B', 'C', 'D'],
        choosedNum: '',
        choosedId: ''
      }
    },
    components: {
      'Xheader': header
    },
    computed: mapState({
      itemNum: state => state.itemNum,
      itemDetail: state => state.itemDetail
    }),
    methods: {
      choosed: function (type, id) {
        this.choosedNum = type
        this.choosedId = id
      },
      nextItem: function () {
        if (this.choosedNum !== null) {
          this.choosedNum = null
        } else {
          alert('您还没有选择答案哦')
        }
      }
    }
  }
</script>

<style lang="less">
  .item_back{
    background-image: url(../../assets/2-1.png);
    background-size: 100% 100%;
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
  .container_style{
    height: 11.625rem;
    width: 13.15rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
  }
  .item_list_container{
    position: absolute;
    height: 7.0rem;
    width: 8.0rem;
    top: 2.4rem;
    left: 3rem;
  -webkit-font-smoothing: antialiased;
  }
  .item_title{
    font-size: 0.65rem;
    color: #fff;
    line-height: 0.7rem;
  }
  .item_list{
    font-size: 0;
    margin-top: 0.4rem;
    width: 10rem;
    span{
      display: inline-block;
      font-size: 0.6rem;
      color: #fff;
      vertical-align: middle;
    }
    .option_style{
      height: 0.725rem;
      width: 0.725rem;
      border: 1px solid #fff;
      border-radius: 50%;
      line-height: 0.725rem;
      text-align: center;
      margin-right: 0.3rem;
      font-size: 0.5rem;
      font-family: 'Arial';
    }
    .has_choosed{
      background-color: #ffd400;
      color: #575757;
      border-color: #ffd400;
    }
    .option_detail{
      width: 7.5rem;
      padding-top: 0.11rem;
    }
  }
  .next_item{
    background-image: url(../../assets/2-2.png);
  }
  .submit_item{
    background-image: url(../../assets/3-1.png);
  }
</style>
