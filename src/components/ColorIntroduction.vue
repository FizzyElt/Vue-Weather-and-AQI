<template>
  <ul class="list">
    <li v-for="item in list" :key="item.txt">
        <span :style="{'background':item.color}"></span>
        <p>{{item.txt}}</p>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
        list:[
            {
                txt:'良好',
                color:'#00E800'
            },
            {
                txt:'普通',
                color:'#FFFF00'
            },
            {
                txt:'對敏感族群不健康',
                color:'#FF7E00'
            },
            {
                txt:'對所有族群不健康',
                color:'#FF0000'
            },
            {
                txt:'非常不健康',
                color:'#8F3F97'
            },
            {
                txt:'危害',
                color:'#7E0023'
            },

        ]
    };
  }
};
</script>
<style lang="scss" scoped>
span{
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid black;
}
.list{
    display: flex;
    font-size: 18px;
    font-weight: 600;
    color: $navyblue;
    li{
        min-width: 40px;
        display: flex;
        margin: 5px;
        align-items: center;
    }
    span{
        margin-right: 3px;
    }
    p{
        text-align: center;
    }
}
@media screen and (max-width: 600px) {
    .list{
        font-size: 14px;
    }
    .list li{
        flex-direction: column;

    }
}
@media screen and (max-width: 320px){
    .list{
        display: none;
    }
}
</style>