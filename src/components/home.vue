<template>
    <div class="home">
        <div class="titleHome"><h1>This is Home Page</h1></div>
        <div class="next">
            <router-link class="ru1" to="/hello" >
                <el-row >
                    <el-button type="primary" plain >按钮</el-button>
                </el-row>
            </router-link>

        </div>
        <div class="navigation"><router-link to="/helloworld">导航</router-link></div>
    </div>
</template>

<script>
    export default {
        name: "home",
    }
</script>

<style scoped lang="less">
    .home{
        width: 100%;
        height: 100%;

        .navigation{
            width: 100%;
            font-size: 24px;
        }
    }
    .titleHome{
        width: 400px;
        margin: 30px auto 0;

    }
    .next{
        width: 200px;
        margin: 20px auto 0;




        .ru1{
            text-decoration:none;
            color: black;
        }
    }

</style>