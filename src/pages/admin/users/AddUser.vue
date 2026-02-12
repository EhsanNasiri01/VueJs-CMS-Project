<script setup>
import {ref, useTemplateRef} from 'vue'
import {useStore} from "vuex";
import {useToast} from "vue-toastification";
import {useRouter} from "vue-router";
const store = useStore()
const toast = useToast()
const router = useRouter();
const form = useTemplateRef('form')
const valid = ref(true)

let fullname = ref("");
let userName = ref("");
let password = ref("");

function addUser() {
  console.log(userName.value,password.value,fullname.value)
form.value.validate().then(res =>{
  if(res.valid === true){
    store.dispatch('addUser',{
      fullName:fullname.value,
      userName:userName.value,
      password:password.value,
    }).then(res=>{
      if(res.status === 200){
        toast.success("عملیات با موفقیت انجام شد")
        router.push("/admin/users")
      }
    })

  }
}).catch(err =>{
  toast.error("مشکلی پیش آمده است")
})
}

</script>

<template>
<div>
  <h1 class="text-3xl">افزودن کاربران</h1>
  <hr class="mt-4 mb-4" />

  <v-form v-model="valid" ref="form">
  <div class="w-full">
    <v-row>
      <v-col cols="12" class="pb-0">
        <v-text-field
            required
            :rules="[v=>!!v || 'نام و نام خانوادگی وارد کنید']"
            v-model=fullname
            label="نام و نام خانوادگی"
        ></v-text-field>

      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" class="pt-0">
        <v-text-field
            v-model="userName"
            label="نام کاربری"
            required
            :rules="[v=>!!v || 'نام کاربری را وارد کنید']"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="pt-0">
        <v-text-field
            v-model="password"
            label="رمز عبور"
            required
            :rules="[v=>!!v || 'رمز عبور را وارد کنید']"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>

      <v-btn color="success" class="float-left" @click="addUser">افزودن کاربر</v-btn>




  </v-form>
</div>
</template>

<style scoped>

</style>