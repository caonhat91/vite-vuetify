<script setup lang="ts">
import { computed } from 'vue';
import { useDefaults } from 'vuetify';

const _props = defineProps<{
    modelValue: any,
}>();
useDefaults(_props, 'LeftSidebar');

const emit = defineEmits<{
    (e: 'update:modelValue', value: any): void,
}>();

const modelValue = computed<any>({
    get: () => _props.modelValue,
    set: (e) => {
        emit('update:modelValue', e);
    }
})
</script>

<template>
    <v-navigation-drawer permanent v-model="modelValue">

        <v-list nav>
            <v-list-item title="Navigation" subtitle="Vuetify" />
            <v-divider />
            <v-list-item link title="Home" to="/" :exact="true" />
            <v-list-item link title="About" to="/about" />
            <v-list-item link title="Login" to="/login" />
            <v-list-item link title="Not Found" to="/404" />
        </v-list>

    </v-navigation-drawer>
</template>