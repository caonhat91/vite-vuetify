import { login } from '@apis/user.api';
import { LoginResponse, User } from '@models/user.model';
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const _user = ref<User>();

    const onLogin = async (username: string, password: string) => {
        try {
            const { data: { code, message, result } } = await login<LoginResponse>(username, password);
            if (!!code) {
                throw Error('API Error:' + message);
            }
            _user.value = result;
            console.log(result)
            localStorage.setItem('user', JSON.stringify(result));
            return Promise.resolve();
        } catch (err) {
            console.error(err)
            return Promise.reject();
        }
    }

    const user = computed(() => {
        const userStr = localStorage.getItem('user') ?? '{}';
        const user = JSON.parse(userStr);
        return Object.keys(user).length ? user : _user.value;
    });

    return {
        onLogin,
        user
    }
})