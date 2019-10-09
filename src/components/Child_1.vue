<template>
    <div class="all">
    <div class="childValue">
    <div class="leftValue">
        <p class="leftValue1">左值: </p><input class="leftValue1" type="text" v-model="num1"></div>
    <div class="rightValue">
        <p class="rightValue1">右值:   </p><input class="rightValue1" type="text" v-model="num2"></div>

    </div>
        <el-row >
            <el-button type="primary" plain @click="math" >计算</el-button>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "Child_1",
        data() {
            return {
                num1: '',
                num2: '',
            }
        },
        methods:{
            math(){
                this.$emit("func1",this.fullnum)
            }
        },
        computed: {
            fullnum(){
                return this.num1 * this.num2;
            }

        },


    }
</script>

<style scoped lang="less">

    .childValue{
        display: flex;
        align-items: center;
        justify-content: center;

        .leftValue{
            height: 40px;
            float: left;
            .leftValue1{
                float: left;
            }
        }
        .rightValue{
            height: 40px;
            float: left;
            .rightValue1{
                float: left;
            }

        }
    }



</style>