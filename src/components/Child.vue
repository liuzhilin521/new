<template>
    <div>
        <el-row >
            <el-button type="primary" plain @click="calculate" >计算</el-button>
        </el-row>

    </div>

</template>

<script>
    export default {
        name: "Child",
        props:["person","person2"],
        methods:{
            calculate(){
                this.$emit("func",this.fullnum)
            },

    },
        computed: {
            fullnum(){
                return this.person * this.person2;
            }

        },
    }
</script>

<style scoped>

</style>