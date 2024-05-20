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
    <section>
        <h1>Login page</h1>
        <pre>{{ user }}</pre>
    </section>
</template>

<style lang="scss"></style>