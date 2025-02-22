<script setup lang="ts">
import { ref } from 'vue';
import { transactions } from '@/data/dashboard/dashboardData';
</script>

<template>
  <v-row>
    <v-col cols="12" md="12">
      <SharedUiParentCard title="Transactions Page">
        <v-table class="transactions-table">
          <thead>
            <tr>
              <th class="text-subtitle-1 font-weight-bold">ID</th>
              <th class="text-subtitle-1 font-weight-bold">Date</th>
              <th class="text-subtitle-1 font-weight-bold">Description</th>
              <th class="text-subtitle-1 font-weight-bold">Amount</th>
              <th class="text-subtitle-1 font-weight-bold">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in transactions" :key="transaction.id" class="transaction-row">
              <td>{{ transaction.id }}</td>
              <td>{{ transaction.date }}</td>
              <td>{{ transaction.description }}</td>
              <td>{{ transaction.amount }}</td>
              <td>
                <v-chip
                  :class="'text-body-1 font-weight-bold bg-' + (transaction.status === 'Completed' ? 'success' : (transaction.status === 'Pending' ? 'warning' : 'error'))"
                  color="white"
                  size="small"
                >
                  {{ transaction.status }}
                </v-chip>
              </td>
            </tr>
          </tbody>
        </v-table>
      </SharedUiParentCard>
    </v-col>
  </v-row>
</template>

<style>
.transactions-table {
    padding:  0 24px 24px;

}
</style>
