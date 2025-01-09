<template>
  <div class="flex justify-center min-h-screen  items-center">
    <Card class="w-full  max-w-md bg-white p-8">
      <template #content>
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Sign in to your account</h2>
        <Form @submit="formLogin">
          <!-- Email Input -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                v-model="form.email"
                placeholder="name@company.com"
                class="mt-1 block w-full p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
            />
          </div>

          <!-- Password Input -->
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                v-model="form.password"
                class="mt-1 block w-full p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
            />
          </div>

          <!-- Remember Me and Forgot Password -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <input
                  type="checkbox"
                  id="remember"
                  class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label for="remember" class="ml-2 text-sm text-gray-700">Remember me</label>
            </div>
            <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>

          <!-- Sign In Button -->
          <Button type="submit" label="Sign in" severity="contrast"
          />
        </Form>

        <!-- Sign Up Link -->
        <p class="mt-4 text-center text-sm text-gray-600">
          Don’t have an account yet?
          <a href="#" class="text-blue-600 hover:underline">Sign up</a>
        </p>
      </template>
    </Card>
  </div>

</template>
<script setup lang="ts">
import {Form} from '@primevue/forms';

definePageMeta({
  middleware: ['sanctum:guest'],
});
const {login} = useSanctumAuth();
const form = ref({
  email: '',
  password: '',
});
const formLogin = async () => {

  if (form.value.email !== '' && form.value.password !== '') {
    await login(form.value);
  }
};
</script>
<style scoped>

</style>