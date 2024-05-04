<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const drawer = ref(true);

const languages = [
  { label: 'en-US', value: 'en' },
  { label: 'ja-JP', value: 'ja' },
  { label: 'ko-KR', value: 'ko' },
  { label: 'vi-VN', value: 'vi' },
];
</script>

<template>
  <v-layout ref="app">
    <v-navigation-drawer permanent v-model="drawer">
      <v-list nav>
        <v-list-item title="Navigation" subtitle="Vuetify"></v-list-item>
        <v-divider />
        <v-list-item link title="Home" to="/" :exact="false"></v-list-item>
        <v-list-item link title="About" to="/about"></v-list-item>
        <v-list-item link title="Login" to="/login"></v-list-item>
        <v-list-item link title="Not Found" to="/404"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>{{ $env.VITE_APP_TITLE }}</v-app-bar-title>
      <v-btn icon="mdi-alarm-light" @click="toggleTheme" />
      <v-select v-model="$i18n.locale" :items="languages" item-title="label" item-value="value" />
    </v-app-bar>

    <v-main style="width: 100vw;">
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'" :mode="'out-in'">
          <section>
            <component :is="Component" :key="route.path" />
          </section>
        </transition>
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
