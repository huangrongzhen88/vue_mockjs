<template>
  <div>
    <button @click="login">login</button>
    <button @click="list">list</button>
  </div>
</template>

<script>
    import mock from '../mock.js'
    import axios from 'axios'

    export default {
        name: 'mock2',
        methods: {
            login() {
                axios.post("/login").then(response => {
                    if (response.data) {
                        console.log(response.data)
                        alert(response.data.name)
                    }
                })
            },

            list() {
                axios.post("/list").then(response => {
                    if (response.data) {
                        console.log(response.data)
                        alert(response.data.name + ',' + response.data.age)
                    }
                })
            }
        }
    }
</script>

<style>

</style>
