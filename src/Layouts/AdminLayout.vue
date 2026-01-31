<script setup>
import { ref, watch } from 'vue'

// const items = [
//   {
//     title: 'Foo',
//     value: 'foo',
//   },
//   {
//     title: 'Bar',
//     value: 'bar',
//   },
//   {
//     title: 'Fizz',
//     value: 'fizz',
//   },
//   {
//     title: 'Buzz',
//     value: 'buzz',
//   },
// ]

const drawer = ref(true)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})
</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>پنل ادمین</v-toolbar-title>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'right' : undefined"
          permanent
          theme="dark "
      >
        <v-list color="transparent">
          <router-link to="/admin" class=""><v-list-item prepend-icon="mdi-view-dashboard" title="صفحه اصلی" v-ripple></v-list-item></router-link>
          <router-link to="/admin/users"><v-list-item prepend-icon="mdi-account-box" title="مدیریت کاربران" v-ripple></v-list-item></router-link>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height:100vh">
        <div class="pt-5 px-6"><router-view></router-view></div>

      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>

</style>