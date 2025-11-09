<script setup lang="ts">
const formLogin = reactive({
  email: '',
  password: '',
});

async function login() {
  if (!formLogin.email || !formLogin.password) {
    navigateTo('/');
  }
}

definePageMeta({
  layout: 'login',
});
</script>

<template>
  <form @submit.prevent="login" class="form-login">
    <GTInput
      labelTitle="E-mail"
      id="email"
      type="email"
      v-model="formLogin.email"
      placeholder="Enter your username"
    />
    <GTInput
      labelTitle="Password"
      id="password"
      type="password"
      v-model="formLogin.password"
      placeholder="Enter your password"
    />
    <GTButton type="submit">Login</GTButton>
  </form>
</template>
