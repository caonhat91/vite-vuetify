<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDefaults } from 'vuetify'

defineOptions({ inheritAttrs: false })
useDefaults()

const _props = withDefaults(defineProps<{
    modelValue?: Date | null,
}>(), {
    modelValue: null
})
const props = useDefaults(_props, 'DateInput')

const emits = defineEmits<{
    (e: 'update:modelValue', value: Date | null): void
}>()

const isVisibled = ref(false);
const rawDate = ref<Date | null>(null);

const formattedDate = computed({
    get: () => formatDate(props.modelValue ?? rawDate.value),
    set: (e: null) => {
        emits('update:modelValue', e);
        rawDate.value = e;
    }
});

function formatDate(date: Date | null) {
    if (date instanceof Date) {
        const ret = Intl.DateTimeFormat('ja-JP', { dateStyle: 'short' }).format(date);
        return ret.replace(/\//g, '-');
    }
    return null;
}
</script>

<template>
    <v-text-field v-bind="$attrs" v-model="formattedDate" readonly>
        <v-menu v-model="isVisibled" activator="parent" :close-on-content-click="false" min-width="0">
            <v-date-picker :model-value="modelValue"
                @update:model-value="$emit('update:modelValue', $event); rawDate = $event; isVisibled = false" />
        </v-menu>
    </v-text-field>
</template>
