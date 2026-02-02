<script setup>
import {ref} from 'vue'
const fullname = ref("");
const userName = ref("");
const password = ref("");


</script>

<template>
<div>
  <h1 class="text-3xl">افزودن کاربران</h1>
  <hr class="mt-4 mb-4" />

  <v-form v-model="valid" ref="form">
  <div class="w-full">
    <v-row>
      <v-col cols="12" md="12">
        <v-text-field
            v-model="fullname"
            label="نام و نام خانوادگی"
            required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
            v-model="userName"
            label="نام کاربری"
            required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
            v-model="password"
            label="رمز عبور"
            required
        ></v-text-field>
      </v-col>
    </v-row>
  </div>

      <v-btn color="success" class="float-left">افزودن کاربر</v-btn>




  </v-form>
</div>
</template>

<style scoped>

</style>