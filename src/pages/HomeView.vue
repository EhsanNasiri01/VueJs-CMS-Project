<script setup>

</script>

<script setup>
import { ref } from 'vue'

const users = ref([
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Reza' },
  { id: 3, name: 'Sara' }
])

function removeFirst() {
  users.value.shift()
}
</script>

<template>
<h1><router-link to="/admin"> home </router-link></h1>
</template>

<style scoped>

</style>