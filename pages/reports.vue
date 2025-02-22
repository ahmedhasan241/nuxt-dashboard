<script setup lang="ts">
import { ref } from 'vue';
import { reports } from '@/data/dashboard/dashboardData';
</script>

<template>
  <v-row>
    <v-col cols="12" md="12">
      <SharedUiParentCard title="Reports Page">
        <v-table class="reports-table">
          <thead>
            <tr>
              <th class="text-subtitle-1 font-weight-bold">ID</th>
              <th class="text-subtitle-1 font-weight-bold">Title</th>
              <th class="text-subtitle-1 font-weight-bold">Date</th>
              <th class="text-subtitle-1 font-weight-bold">Type</th>
              <th class="text-subtitle-1 font-weight-bold">Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="report in reports" :key="report.id" class="report-row">
              <td>{{ report.id }}</td>
              <td>{{ report.title }}</td>
              <td>{{ report.date }}</td>
              <td>{{ report.type }}</td>
              <td>{{ report.summary }}</td>
            </tr>
          </tbody>
        </v-table>
      </SharedUiParentCard>
    </v-col>
  </v-row>
</template>

<style>
.reports-table {
    padding:  0 24px 24px;

}
</style>
