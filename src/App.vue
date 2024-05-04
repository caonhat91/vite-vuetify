<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const languages = [
  { label: 'en-US', value: 'en' },
  { label: 'ja-JP', value: 'ja' },
  { label: 'ko-KR', value: 'ko' },
  { label: 'vi-VN', value: 'vi' },
];
</script>

<template>
  <v-layout ref="app">
    <v-navigation-drawer permanent>
      <v-list nav>
        <v-list-item title="Navigation drawer" subtitle="Vuetify"></v-list-item>
        <v-divider />
        <v-list-item link title="Home" to="/" :exact="false"></v-list-item>
        <v-list-item link title="About" to="/about"></v-list-item>
        <v-list-item link title="Login" to="/login"></v-list-item>
        <v-list-item link title="Not Found" to="/404"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :title="$env.VITE_APP_TITLE">
      <v-btn icon="mdi-alarm-light" @click="toggleTheme" />
      <v-select v-model="$i18n.locale" :items="languages" item-title="label" item-value="value" />
    </v-app-bar>

    <v-main>
      <router-view v-slot="{ Component, route }">
        <!-- <transition :name="route.meta.transition || 'fade'" :mode="'out-in'">
          <section> -->
        <component :is="Component" :key="route.path" />
        <!-- </section>
        </transition> -->
      </router-view>
    </v-main>

    <v-footer app>
      &copy;Copy right by NhatNC
    </v-footer>
  </v-layout>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<i18n></i18n>
