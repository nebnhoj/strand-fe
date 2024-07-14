<template>
  <div class="flex items-center justify-center min-h-screen ">
    <div class="w-full max-w-md p-8 space-y-6  rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center">Login</h2>
      <form @submit.prevent="login">
        <div class="form-control">

          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <Input type="email" v-model="cred.email" class="input input-bordered" required />
          
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" v-model="cred.password" class="input input-bordered" required />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary" :disabled="loading">Login</button>
        </div>
        <div class="mt-4 text-center">
          <a href="#" @click.prevent="forgotPassword" class="link">Forgot Password?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
 
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import  auth, {  Credentials } from '../../service/Auth'
import { Input } from '../ui/input'
const cred = ref<Credentials>({
  email: '',
  password: ''
})
const loading = ref<boolean>(false)
const router = useRouter()

const login = async () => {
  loading.value = true
  try {
    auth.login( cred.value); 
  } catch (error) {
    console.error('Error logging in:', error)
    // Handle error (e.g., show error message)
  } finally {
    loading.value = false
  }
}

const forgotPassword = () => {
  // Navigate to the forgot password page
  router.push({ name: 'ForgotPassword' })
}
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
