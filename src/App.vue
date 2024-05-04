<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const drawer = ref(true);

const languages = [
  { label: 'en-US', value: 'en', flag: '' },
  { label: 'ja-JP', value: 'ja', flag: '' },
  { label: 'ko-KR', value: 'ko', flag: '' },
  { label: 'vi-VN', value: 'vi', flag: '' },
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
    </v-app-bar>

    <v-main style="width: 100vw;">

      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade-transition'" :mode="'out-in'">
          <keep-alive>
            <component :is="Component" :key="route.path" />
          </keep-alive>
        </transition>
      </router-view>

    </v-main>

    <v-footer app>
      &copy;Copy right by NhatNC
    </v-footer>
  </v-layout>
</template>

<style lang="scss"></style>

<i18n></i18n>
