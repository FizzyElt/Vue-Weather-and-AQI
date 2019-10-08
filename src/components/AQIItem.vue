<template>
    <li class="card-item" @click="sendId">
        <div class="left-content">
            <h1>{{obj.County}}</h1>
            <h2>{{obj.SiteName}}</h2>
        </div>
        
        <div class="right-content">
            <h2>
                {{obj.AQI}}
            </h2>
            <span class="light" :class="[colorCheck]">
            </span>
        </div>
    </li>
</template>
<script>
export default {
    props:{
        obj:{
            type:Object,
            default:function(){
                return {}
            }
        }
    } ,
    computed:{
        colorCheck(){
            const nums=this.obj.AQI===''?0:parseInt(this.obj.AQI);
            if(nums>0&&nums<=50){
                return 'green'
            }else if(nums>=51&&nums<=100){
                return 'yellow'
            }else if(nums>=101&&nums<=150){
                return 'orange'
            }else if(nums>=151&&nums<=200){
                return 'red'
            }else if(nums>=201&&nums<=300){
                return 'purple'
            }else if(nums>=301&&nums<=500){
                return 'darkpink'
            }else{
                return 'close'
            }
        }
    } ,
    methods:{
        sendId(){
            console.log('send')
            this.$emit('sendId',this.obj.SiteId);
        }
    } 
}
</script>
<style lang="scss" scoped>
.card-item{
    cursor: pointer;
    display: flex;
    padding: 5px 20px;
    border-radius: 8px;
    background-color: $babyblue;
    width: 240px;
    justify-content: space-between;
    color: $navyblue;
    margin: 10px;
    transition: 0.3s;
}
.card-item:hover{
    transform: scale(1.05);
}
.left-content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.right-content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2{
        margin-right: 15px;
        font-size: 25px;
    }
}
.light{
    display: block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
}
.close{
    background-color: #8b8b8b;
    box-shadow: 0 0 8px #797979;
}
.green{
    background-color: #00e800;
    box-shadow: 0 0 8px #00e800;
}
.yellow{
    background-color: #ffff00;
    box-shadow: 0 0 8px #ffff04;
}
.orange{
    background-color: #ff7e00;
    box-shadow: 0 0 8px #ff7e00;
}
.red{
    background-color: #ff0000;
    box-shadow: 0 0 8px #ff0000;
}
.purple{
    background-color: #8f3f97;
    box-shadow: 0 0 8px #8f3f97;
}
.darkpink{
    background-color: #7e0023;
    box-shadow: 0 0 8px #7e0023;
}
</style>