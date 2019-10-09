<template>
    <div class="nav">
        <div class="all">
            <button @click="back" class="back">返回</button>
            <div class="title"><h1>标题：{{a}}</h1></div>
            <div class="home">
                <router-link to="/part">首页</router-link>
            </div>
        </div>
        <router-view ></router-view>
    </div>
</template>

<script>

    export default {

        name: "Head",
        components:{

        },
        data(){
            return{
                flag:true,
                a:"home",

            }
        },

        methods:{
            back(){
                //  返回上一级
                this.$router.go(-1)
            }
        },
        watch:{
            $route(to,from){
                console.log(to.path);
                console.log(this.$route.name.name)
                this.a = this.$route.name.name
                console.log(this.a)
            }
        },

    }
</script>

<style scoped lang="less">
    * {
        margin: 0;
        padding: 0;
    }
    .all{
        display: flex;
        align-items: center;
        background-color: #3174ff;
        justify-content: space-between;
        .title{
            color: #ffffff;
        }

        .home a{
            font-weight: bold;
            color: #ffffff;

        }
    }




</style>