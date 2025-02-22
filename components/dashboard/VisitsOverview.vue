<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme();
const primary = theme.current.value.colors.primary;

const chartOptions = computed(() => {
  return {
    chart: {
      type: "bar",
      height: 250,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 5,
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
      labels: {
        style: { fontSize: "14px", colors: "#888" },
      },
    },
    yaxis: { show: false },
    fill: { colors: [primary] },
    grid: { show: false },
    tooltip: { enabled: false },
  };
});

const chartSeries = [{ data: [30, 50, 40, 20, 45, 10, 5] }];
</script>

<template>
  <v-card elevation="10" class="pa-4 h-100">
    <v-card-item>
      <div class="d-flex justify-space-between align-center">
        <h3 class="text-h6 font-weight-bold">Visits</h3>
        <div class="d-flex">
          <span class="text-muted mx-2">D</span>
          <span class="font-weight-bold text-primary">W</span>
          <span class="text-muted mx-2">M</span>
          <span class="text-muted">Y</span>
        </div>
      </div>
      <apexchart type="bar" height="375" :options="chartOptions" :series="chartSeries"></apexchart>
    </v-card-item>
  </v-card>
</template>
