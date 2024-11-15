<script setup lang="ts">
import { ref } from 'vue'; // Import `ref` for reactivity
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// Declare reactive state variables using the Composition API
const content = ref(); // v-model for Quill content
const isReadonly = ref(true); // Controls the readonly state
const editorOptions = ref({
    theme: 'snow', // You can also use 'bubble'
});

// Method to toggle readonly state
const toggleReadonly = () => {
    isReadonly.value = !isReadonly.value;
};
</script>

<template>
    <v-card>
        <quill-editor v-model:content="content" :options="editorOptions" :enable="isReadonly" ref="quillEditor" />
        <v-btn @click="toggleReadonly">Toggle Readonly</v-btn>
    </v-card>
    <pre>{{ content }}</pre>
</template>

<style></style>