<script setup lang="ts">
import DataTable from '@organisms/data-table/DataTable.vue';
import { reactive, readonly, ref } from 'vue';

const headers = reactive([
    { title: 'Vegetable (100g serving)', key: 'name' },
    { title: 'Calories', key: 'calories' },
    { title: 'Fat (g)', key: 'fat' },
    { title: 'Carbs (g)', key: 'carbs' },
    { title: 'Protein (g)', key: 'protein' },
    { title: 'Iron (%)', key: 'iron' },
])
const vegetables = readonly([
    {
        name: 'Spinach',
        calories: 23,
        fat: 0.4,
        carbs: 3.6,
        protein: 2.9,
        iron: '15%',
    },
    {
        name: 'Kael',
        calories: 49,
        fat: 0.9,
        carbs: 8.8,
        protein: 4.3,
        iron: '16%',
    },
    {
        name: 'Broccoli',
        calories: 34,
        fat: 0.4,
        carbs: 6.6,
        protein: 2.8,
        iron: '6%',
    },
    {
        name: 'Brussels Sprouts',
        calories: 43,
        fat: 0.3,
        carbs: 8.9,
        protein: 3.4,
        iron: '9%',
    },
    {
        name: 'Avocado',
        calories: 160,
        fat: 15,
        carbs: 9,
        protein: 2,
        iron: '3%',
    },
    {
        name: 'Sweet Potato',
        calories: 86,
        fat: 0.1,
        carbs: 20.1,
        protein: 1.6,
        iron: '3%',
    },
    {
        name: 'Corn',
        calories: 96,
        fat: 1.5,
        carbs: 21,
        protein: 3.4,
        iron: '2%',
    },
    {
        name: 'Potato',
        calories: 77,
        fat: 0.1,
        carbs: 17.5,
        protein: 2,
        iron: '8%',
    },
    {
        name: 'Butternut Squash',
        calories: 45,
        fat: 0.1,
        carbs: 11.7,
        protein: 1,
        iron: '4%',
    },
    {
        name: 'Beetroot',
        calories: 43,
        fat: 0.2,
        carbs: 10,
        protein: 1.6,
        iron: '6%',
    },
    {
        name: 'Parsnip',
        calories: 75,
        fat: 0.3,
        carbs: 18,
        protein: 1.2,
        iron: '4%',
    },
    {
        name: 'Yam',
        calories: 118,
        fat: 0.2,
        carbs: 27.9,
        protein: 1.5,
        iron: '4%',
    },
    {
        name: 'Acorn Squash',
        calories: 40,
        fat: 0.1,
        carbs: 10,
        protein: 1,
        iron: '5%',
    },
    {
        name: 'Artichoke',
        calories: 47,
        fat: 0.2,
        carbs: 10.5,
        protein: 3.3,
        iron: '7%',
    },
    {
        name: 'Peas',
        calories: 81,
        fat: 0.4,
        carbs: 14.5,
        protein: 5.4,
        iron: '25%',
    },
    {
        name: 'Green Beans',
        calories: 31,
        fat: 0.1,
        carbs: 6.9,
        protein: 1.8,
        iron: '8%',
    },
    {
        name: 'Red Bell Pepper',
        calories: 26,
        fat: 0.2,
        carbs: 6.0,
        protein: 1.0,
        iron: '3%',
    },
    {
        name: 'Cauliflower',
        calories: 25,
        fat: 0.1,
        carbs: 5.0,
        protein: 1.9,
        iron: '4%',
    },
    {
        name: 'Zucchini',
        calories: 17,
        fat: 0.3,
        carbs: 3.1,
        protein: 1.2,
        iron: '3%',
    },
    {
        name: 'Asparagus',
        calories: 20,
        fat: 0.1,
        carbs: 3.9,
        protein: 2.2,
        iron: '16%',
    },
    {
        name: 'Eggplant',
        calories: 25,
        fat: 0.2,
        carbs: 6,
        protein: 1,
        iron: '1%',
    },
    {
        name: 'Pumpkin',
        calories: 26,
        fat: 0.1,
        carbs: 6.5,
        protein: 1,
        iron: '4%',
    },
    {
        name: 'Celery',
        calories: 16,
        fat: 0.2,
        carbs: 3,
        protein: 0.7,
        iron: '1%',
    },
    {
        name: 'Cucumber',
        calories: 15,
        fat: 0.1,
        carbs: 3.6,
        protein: 0.7,
        iron: '2%',
    },
    {
        name: 'Leek',
        calories: 61,
        fat: 0.3,
        carbs: 14.2,
        protein: 1.5,
        iron: '12%',
    },
    {
        name: 'Fennel',
        calories: 31,
        fat: 0.2,
        carbs: 7,
        protein: 1.2,
        iron: '6%',
    },
    {
        name: 'Green Peas',
        calories: 81,
        fat: 0.4,
        carbs: 14.5,
        protein: 5.4,
        iron: '25%',
    },
    {
        name: 'Okra',
        calories: 33,
        fat: 0.2,
        carbs: 7.5,
        protein: 1.9,
        iron: '3%',
    },
    {
        name: 'Chard',
        calories: 19,
        fat: 0.2,
        carbs: 3.7,
        protein: 1.8,
        iron: '22%',
    },
    {
        name: 'Collard Greens',
        calories: 32,
        fat: 0.6,
        carbs: 5.4,
        protein: 3,
        iron: '2%',
    },
])
const tab = ref(null)

function getColor(calories: number) {
    if (calories > 150) return 'rgb(var(--v-theme-error))'
    if (calories > 100) return 'rgb(var(--v-theme-warning))'
    else if (calories > 50) return 'rgb(var(--v-theme-success))'
    else return 'rgb(var(--v-theme-info))'
}
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1>About page</h1>
            </v-col>
            <v-col cols="12">
                <DataTable :headers="headers" :items="vegetables">
                    <template v-slot:item.calories="{ value }">
                        <v-chip :color="getColor(value)">
                            {{ value }}
                        </v-chip>
                    </template>
                </DataTable>
            </v-col>
            <v-col cols="12">
                <v-card loading title="Card title" subtitle="Subtitle"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium assumenda delectus animi, ut, debitis veniam, eius inventore impedit reiciendis maxime corporis maiores corrupti consequuntur ex? Quibusdam earum sapiente sint!">
                    <v-card-actions>
                        <v-btn>Click me</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-list lines="two">
                    <v-list-item v-for="n in 3" :key="n" :title="'Item ' + n"
                        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                        prepend-avatar="https://randomuser.me/api/portraits/women/8.jpg"></v-list-item>
                </v-list>
            </v-col>

            <v-col cols="12">
                <v-card>
                    <v-tabs v-model="tab" bg-color="primary">
                        <v-tab value="one">Item One</v-tab>
                        <v-tab value="two">Item Two</v-tab>
                        <v-tab value="three">Item Three</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item value="one">
                                One
                            </v-window-item>

                            <v-window-item value="two">
                                Two
                            </v-window-item>

                            <v-window-item value="three">
                                Three
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss"></style>