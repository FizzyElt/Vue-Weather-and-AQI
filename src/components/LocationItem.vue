<template>
    <li class="item" :class="{'active':itemActive}" @click="locationHandler()">
        <h2>{{locationName}}</h2>
        <h2>{{minT}}⁰C~{{maxT}}⁰C</h2>
    </li>
</template>
<script>
export default {
    props:{
        locationName:{
            type:String,
            default:''
        },
        minT:{
            type:String,
            default:"0"
        },
        maxT:{
            type:String,
            default:"0"
        }
    },
    computed:{
        itemActive(){
            const location=this.$store.state.currentLocation;
            return this.locationName===location;
        }
    },
    methods:{
        locationHandler(){ //城市切換
            this.$store.commit('locationChange',this.locationName);
        }
    }
    
}
</script>
<style lang="scss" scoped>
.item{
    min-width: 250px;
    height: 60px;
    border-radius: 8px;
    margin: 5px 5px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:$royalblue;
    transition:0.3s; 
    cursor: pointer;
    h2{
        color:$white;
    }

}
.item:hover{
    transform: scale(1.05);
}
.active{
    background-color:$bluegreen;
    h2{
        color:$navyblue;
    }
}

</style>