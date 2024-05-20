<template>
    <v-data-table v-bind:="$attrs">
        <template v-for="(_, name) in $slots" v-slot:[asAnyType(name)]="slotData">
            <slot :name="name" v-bind="asAnyType(slotData)" />
        </template>
    </v-data-table>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })
const asAnyType = (a:unknown) => a as any
</script>