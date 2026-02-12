<script setup>
import {computed, onMounted} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
const router = useRouter();
const store = useStore();
const userFilter = computed(() => store.state.userModule.usersFilter)
onMounted(()=>{
store.dispatch("getUsers",{pageId:1,take:10})
})
</script>

<template>
  <div>
    <h1 class="text-3xl">مدیریت کاربران</h1>
    <hr class="mt-4 mb-4" />
    <v-btn color="success" @click="router.push({name:'addUser'})">افزودن کاربر</v-btn>

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
      <tr v-for="(item,index) in userFilter.users" :key="index">
        <td>{{item.userName}}</td>
        <td>{{item.fullName}}</td>
        <td>
          <span v-if="item.role===1">ادمین</span>
          <span v-if="item.role===0">کاربر</span>
        </td>
        <td><v-btn color="info" @click="router.push(`/admin/users/edit/${item.id}`)">ویرایش</v-btn></td>
      </tr>
      <tr>
        <td colspan="4" v-if="userFilter.entityCount === 0">کاربری برای نمایش وجود ندارد</td>
      </tr>
      </tbody>
    </v-table>
  </div>

</template>

<style scoped>

</style>