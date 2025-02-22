<script setup lang="ts">
import { ref } from 'vue';
import { users } from '@/data/dashboard/dashboardData';
</script>

<template>
  <v-row>
    <v-col cols="12" md="12">
      <SharedUiParentCard title="Users Page">
        <v-table class="users-table">
          <thead>
            <tr>
              <th class="text-subtitle-1 font-weight-bold">Avatar</th>
              <th class="text-subtitle-1 font-weight-bold">Name</th>
              <th class="text-subtitle-1 font-weight-bold">Email</th>
              <th class="text-subtitle-1 font-weight-bold">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id" class="user-row">
              <td>
               
                  <img :src="user.avatar" alt="User Avatar" class="user-avatar" />
               
              </td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.role }}</td>
            </tr>
          </tbody>
        </v-table>
      </SharedUiParentCard>
    </v-col>
  </v-row>
</template>

<style>
.users-table {
    padding:  0 24px 24px;

}
.user-avatar {
    object-fit: cover;
    border-radius: 50%;
    width: 40px;
    height: 40px;
}
</style>
