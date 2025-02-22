<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/store/authStore'; // adjust the path as needed
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

const authStore = useAuthStore();
const router = useRouter();

const validateEmail = (email: string): boolean => {

  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const signup = () => {

  error.value = '';


  if (!name.value || !email.value || !password.value) {
    error.value = 'All fields are required.';
    return;
  }
  if (!validateEmail(email.value)) {
    error.value = 'Please enter a valid email address.';
    return;
  }

  loading.value = true;
  authStore.signup({
    name: name.value,
    email: email.value,
    password: password.value,
  });

  setTimeout(() => {
    loading.value = false;
    router.push('/auth/login');
  }, 2000);
};
</script>

<template>
  <v-row class="d-flex mb-3">
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Name</v-label>
      <v-text-field
        v-model="name"
        variant="outlined"
        hide-details
        color="primary"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Email Address</v-label>
      <v-text-field
        v-model="email"
        variant="outlined"
        type="email"
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
    <v-col cols="12">
      <!-- Display error messages if validation fails -->
      <v-alert v-if="error" type="error">{{ error }}</v-alert>
    </v-col>
    <v-col cols="12">
      <!-- The button shows a loading indicator during the 2-second delay -->
      <v-btn
        :loading="loading"
        color="primary"
        size="large"
        block
        flat
        @click="signup"
      >
        Sign up
      </v-btn>
    </v-col>
  </v-row>
</template>
