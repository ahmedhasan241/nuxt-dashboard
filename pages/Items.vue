<script setup lang="ts">
import { ref } from 'vue';
import { productsCard } from '@/data/dashboard/dashboardData';
</script>

<template>
  <v-row>
    <v-col cols="12" md="12">
      <SharedUiParentCard title="Items Page">
        <v-table class="items-table">
          <thead>
            <tr>
              <th class="text-subtitle-1 font-weight-bold">Image</th>
              <th class="text-subtitle-1 font-weight-bold">Title</th>
              <th class="text-subtitle-1 font-weight-bold">Sales Price</th>
              <th class="text-subtitle-1 font-weight-bold">Price</th>
              <th class="text-subtitle-1 font-weight-bold">Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in productsCard" :key="item.title" class="item-row">
              <td>
                <v-avatar size="40" class="me-3">
                  <img :src="item.photo" alt="Product Image" />
                </v-avatar>
              </td>
              <td>
                <h6 class="text-body-1 font-weight-bold">{{ item.title }}</h6>
              </td>
              <td>
                <p class="text-15 font-weight-bold">{{ item.salesPrice }}</p>
              </td>
              <td>
                <p class="text-15 font-weight-bold">{{ item.price }}</p>
              </td>
              <td>
                <p class="text-body-1 font-weight-bold">{{ item.rating }} / 5</p>
              </td>
            </tr>
          </tbody>
        </v-table>
      </SharedUiParentCard>
    </v-col>
  </v-row>
</template>

<style>
.items-table {
  padding:  0 24px 24px;
}
</style>
