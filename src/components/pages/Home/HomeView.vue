<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
</script>

<template>
    <section>
        <div class="d-flex align-center ga-2">
            <v-icon icon="mdi-home" />
            <div>{{ $t('hello') }}</div>
        </div>

        <div class="d-flex align-center ga-2 mt-4">
            <v-btn @click="show = !show">Click</v-btn>
            <transition name="slide-x-transition">
                <div v-if="show">Show {{ show }}</div>
            </transition>
            <transition name="fade-transition">
                <div v-show="show">Show {{ show }}</div>
            </transition>
        </div>

        <v-container>
            <v-row>
                <v-col>
                    <div>{{ $n(99999) }}</div>
                    <div>{{ $n(99999, 'currency') }}</div>
                    <div>{{ $n(0.99, 'percent') }}</div>
                    <div>{{ $n(12.3451, 'decimal') }}</div>
                </v-col>
                <v-col>
                    <div>{{ $d(new Date) }}</div>
                    <div>{{ $d(new Date, { dateStyle: 'long' }) }}</div>
                    <div>{{ $d(new Date, { date: 'numeric' }) }}</div>
                    <v-divider />
                    <div>{{ new Date('2024-01-01').getDay() }}</div>
                    <v-divider />
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<style lang="scss"></style>
