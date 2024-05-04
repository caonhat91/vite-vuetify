<script setup lang="ts">
import { ref } from 'vue';
import { login } from '@apis/user.api';
import { UserType } from '@models/user.model';

const user = ref();

(function () {
    login<UserType>('admin', 'password').then((res) => {
        console.log(res)
        user.value = res.data.result
    }).catch((err) => console.error(err))
})()
</script>

<template>
    <h1>About page</h1>
    <pre>{{ user }}</pre>
</template>

<style lang="scss"></style>