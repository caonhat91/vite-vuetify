<script setup lang="ts"></script>

<template>
    <v-icon icon="mdi-home" />
    <v-container>
        <v-row>
            <v-col cols="6">
                <div>{{ $t('hello') }}</div>
                <div>{{ $d(new Date) }}</div>
                <div>{{ $d(new Date, { dateStyle: 'long' }) }}</div>
                <div>{{ $n(99999) }}</div>
                <div>{{ $n(99999, 'currency') }}</div>
                <div>{{ $n(0.99, 'percent') }}</div>
                <div>{{ $n(12.3451, 'decimal') }}</div>
            </v-col>
            <v-col cols="6">
                <v-date-picker hide-header />
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss"></style>
import { ref, readonly, computed } from 'vue';
