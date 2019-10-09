<template>
    <div class="body">
        <div class="parent"><h1>父控件输入</h1></div>

        <div class="count">
            <div class="countInput">
                <div class="leftValue"><p class="leftValue1">左值：</p>
                    <input class="leftValue1" type="text" v-model="number"></div>
                <div class="rightValue"><p class="rightValue">右值：</p>
                    <input class="rightValue1" type="text" v-model="number2"></div>
            </div>

            <div class="num">
                <span>左值：{{number}}</span>
                <span>右值：{{number2}}</span>

            </div>
            <child :person="number" :person2="number2" @func="show"></child>
            <h1>计算结果：{{a}}</h1>

        </div>


        <div class="parent children"><h1>子控件输入</h1></div>
        <div class="count">
            <child1 @func1="show1"></child1>
            <h1>计算结果：{{b}}</h1>
        </div>
    </div>
</template>

<script>
    import child from "./Child";
    import child1 from "./Child_1";

    export default {
        name: "hello",
        data() {
            return {
                number: '',
                number2: '',
                a:"",
                b:"",
            }
        },
        components: {
            child1,
            child,

        },
        methods: {
            show(data) {
                this.a = data

            },
            show1(data){
                this.b = data

            }
        }
    }
</script>

<style scoped lang="less">
    .body{
        margin: 0 auto;
        .parent{
            margin: 20px 0;
           text-align: center;
        }
        .children{
            margin-top: 100px;
        }
        .count{
            text-align: center;

            width: 100%;
            margin: 0 auto;
            .countInput{
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                .leftValue{
                    float: left;
                    .leftValue1{
                        float: left;
                    }
                }
                .rightValue{
                    float: left;
                    .rightValue1{
                        float: left;
                    }
                }

            }
            .num{
                height: 40px;
            }

        }
    }






    /*.body {*/
    /*    margin: 0 auto;*/


    /*    .parent {*/
    /*        width: 200px;*/
    /*        margin: 0 auto;*/
    /*    }*/
    /*}*/

    /*.count {*/

    /*    margin: 0 auto;*/
    /*    margin-top: 20px;*/
    /*    overflow: hidden;*/

    /*    .left {*/
    /*        width: 300px;*/
    /*        float: left;*/

    /*        p {*/
    /*            float: left;*/
    /*        }*/

    /*        .inp1 {*/
    /*            float: left;*/
    /*            width: 200px;*/
    /*            margin-left: 10px;*/
    /*        }*/
    /*    }*/

    /*    .inpr {*/
    /*        width: 300px;*/
    /*        float: left;*/

    /*        p {*/
    /*            float: left;*/
    /*        }*/

    /*        .inp1 {*/
    /*            float: left;*/
    /*            width: 200px;*/
    /*        }*/
    /*    }*/


    /*}*/

</style>