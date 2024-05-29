<template>
    <v-app-bar
        color="primary"
        prominent
    >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Nuxt3 Cors</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn variant="text" icon="mdi-magnify"></v-btn>
        <v-btn variant="text" icon="mdi-filter"></v-btn>
        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        width="300"
        permanent
        @click="rail = false"
    >
        <v-list-item prepend-icon="mdi-home" title="Home" to="/">
            <template v-slot:append>
                <v-btn
                    variant="text"
                    icon="mdi-chevron-left"
                    @click.stop="rail = !rail"
                ></v-btn>
            </template>
        </v-list-item>
        <v-divider></v-divider>
        <v-list v-model:opened="open" nav>
            <v-list-group value="nuxt3-cors">
                <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        title="nuxt3-cors"
                    ></v-list-item>
                </template>
                <v-list-item
                    v-for="([title, icon, to], i) in Nuxt3Cors"
                    :key="i"
                    :title="title"
                    :prepend-icon="icon"
                    :value="title"
                    :to="to"
                ></v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>
<script setup>
    import { ref } from 'vue'
    const drawer = ref(true)
    const rail = ref(true)
    const open = ref(['nuxt3-cors'])
    const Nuxt3Cors = ref([
        ['nvd_api', 'mdi-api', '/Nuxt3Cors/nvd_api'],
    ])
</script>