<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useUserStore } from '@stores/user.store';
import { useRouter } from 'vue-router';

const user = useUserStore();
const router = useRouter()
const loading = ref(false);

const form = reactive({
    username: 'admin',
    password: '1',
})

const onSubmit = () => {
    loading.value = true;
    user.onLogin(form.username, form.password)
        .then(() => {
            router.push('/')
        }).finally(() => loading.value = false);
}
</script>

<template>
        <v-card>
            <v-form fast-fail @submit.prevent.stop="onSubmit" novalidate autocomplete="off">
                <v-text-field label="Username:" v-model="form.username" autofocus />
                <v-text-field label="Password:" v-model="form.password" />
                <v-btn type="submit" :loading="loading">Login</v-btn>
            </v-form>
        </v-card>
</template>

<style lang="scss"></style>