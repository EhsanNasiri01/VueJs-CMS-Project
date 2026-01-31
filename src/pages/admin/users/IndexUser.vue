<script setup>

</script>

<template>
  <div>
    <h1 class="text-3xl">مدیریت کاربران</h1>
    <hr class="mt-4 mb-4" />
    <v-btn color="success">افزودن کاربر</v-btn>

    <v-table class="elevation-2 mt-5">
      <thead class="">
      <tr>
        <th>نام کاربری</th>
        <th>نام و نام خانوادگی</th>
        <th>نقش</th>
        <th>عملیات</th>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>احسان جان</td>
        <td>احسان 2</td>
        <td>ادمین</td>
        <td><v-btn color="info">ویرایش</v-btn></td>
      </tr>
      </tbody>
    </v-table>
  </div>

</template>

<style scoped>

</style>