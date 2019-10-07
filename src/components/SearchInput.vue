<template>
    <div class="search-box">
        <input type="text" v-model="input" placeholder="城市名稱" @keyup.enter="searchHandler">
        <button @click="searchHandler">搜尋</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            input:""
        }
    },
    methods:{
        searchHandler(){
                this.$emit('searchTxt',this.input);
        }
    }

}
</script>

<style lang="scss" scoped>
.search-box{
    display: flex;
    margin: 15px;
    input{
        width:200px;
        border: none;
        border-radius: 8px 0 0 8px;
        padding: 5px 10px;
        font-size: 20px;
    }
    button{
        cursor: pointer;
        padding: 0 10px;
        border: none;
        font-size: 20px;
        border-radius: 0 8px 8px 0;
        background: $navyblue;
        color: $white;
    }
    button:active{
        background: $babyblue;
        color: $navyblue;
    }
}
</style>