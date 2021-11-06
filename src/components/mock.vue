<template>
  <div>
    <h1>Mock Test</h1>
  </div>
</template>

<script>
    // import axios from "axios"      // 已在main.js中引入
    import Mock from "mockjs"
    import mock from '../mock'       // 引入外部mock.js 的情况

    export default {
        name: "mock",
        methods:{
            // 接口测试
            init(){
                // 请求后端数据,查询数据源
                this.axios({
                    method: "get",
                    // url:`${this.baseURL}/GetAll`,
                    url:`/mock`,
                    headers: {
                        Account: "Root",
                        Password:"12345678"
                    }
                })
                    .then((response)=> {
                        console.log(response.data.users);
                    })
                    .catch((error)=> {
                        console.log(error);
                    });
            }
        },
        created(){
            this.init();
        }
    }
</script>

<style scoped>

</style>
