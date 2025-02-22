<template>
  <NuxtExampleLayout >
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </NuxtExampleLayout>
</template>


<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});
</script>