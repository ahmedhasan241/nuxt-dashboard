<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/store/authStore'; // adjust the path as needed
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');
const checkbox = ref(true);

const authStore = useAuthStore();
const router = useRouter();

const login = () => {
  error.value = '';


  if (!username.value || !password.value) {
    error.value = 'Both username and password are required.';
    return;
  }

  loading.value = true;

  setTimeout(() => {
    try {

      authStore.login({
        username: username.value,
        password: password.value,
      });
      loading.value = false;
 
      router.push('/');
    } catch (err:any) {
      loading.value = false;
      error.value = err.message;
    }
  }, 2000);
};
</script>

<template>
  <v-row class="d-flex mb-3">
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Username</v-label>
      <v-text-field
        v-model="username"
        variant="outlined"
        hide-details
        color="primary"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Password</v-label>
      <v-text-field
        v-model="password"
        variant="outlined"
        type="password"
        hide-details
        color="primary"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="pt-0">
      <div class="d-flex flex-wrap align-center ml-n2">
        <v-checkbox v-model="checkbox" color="primary" hide-details>
          <template v-slot:label class="text-body-1">
            Remember this Device
          </template>
        </v-checkbox>
        <div class="ml-sm-auto">
          <NuxtLink
            to="/"
            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
          >
            Forgot Password ?
          </NuxtLink>
        </div>
      </div>
    </v-col>
    <v-col cols="12">

      <v-alert v-if="error" type="error">{{ error }}</v-alert>
    </v-col>
    <v-col cols="12" class="pt-0">

      <v-btn
        :loading="loading"
        color="primary"
        size="large"
        block
        flat
        @click="login"
      >
        Sign in
      </v-btn>
    </v-col>
  </v-row>
</template>
