import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAlertsStore = defineStore('alerts', () => {
    const _isVisibled = ref(false);

    function showAlert(msg: string) {
        _isVisibled.value = msg.length > 0;
    }

    function hideAlert() {
        _isVisibled.value = false;
    }

    const isVisibled = computed(() => _isVisibled.value);

    return {
        // state
        // _isVisibled,
        // getters
        isVisibled,
        // actions
        showAlert,
        hideAlert
    }
})