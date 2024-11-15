<script setup lang="ts">
import LangSelect from '@modecules/LangSelect.vue';
import ThemeSelect from '@modecules/ThemeSelect.vue';
import LeftSidebar from '@organisms/LeftSidebar.vue';
import { ref } from 'vue';

const drawer = ref(true);
</script>

<template>
  <v-layout ref="app">

    <LeftSidebar v-model="drawer" />

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-app-bar-title>{{ $env.VITE_APP_TITLE }}</v-app-bar-title>

      <ThemeSelect />

      <LangSelect />

    </v-app-bar>

    <v-main style="width: 100vw;">

      <section class="pa-8">
        <router-view v-slot="{ Component, route }">
          <transition :name="route.meta.transition ?? 'fade-transition'" :mode="'out-in'">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </section>

    </v-main>

    <v-footer app>
      &copy;Copy right by NhatNC
    </v-footer>
  </v-layout>
</template>

<style lang="scss"></style>

<i18n></i18n>
