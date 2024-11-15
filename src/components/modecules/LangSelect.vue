<script setup lang="ts">
const languages = [
    { label: 'en-US', value: 'en', flag: '' },
    { label: 'ja-JP', value: 'ja', flag: '' },
    { label: 'ko-KR', value: 'ko', flag: '' },
    { label: 'vi-VN', value: 'vi', flag: '' },
];
</script>

<template>
    <v-btn color="primary">
        <v-icon icon="mdi-translate" />
        <v-menu activator="parent">
            <v-list @click:select="event => $i18n.locale = event.id as string">
                <v-list-item v-for="({ label, value, flag }, index) in languages" :key="index" :value="value">
                    <template v-slot:prepend v-if="flag">
                        <v-icon :icon="flag"></v-icon>
                    </template>
                    <v-list-item-title>{{ label }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-btn>
</template>