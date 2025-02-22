<script setup lang="ts">
import { ref, computed } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const primary = theme.current.value.colors.primary;


const chartOptions = computed(() => {
  return {
    series: [
      {
        name: "Earnings",
        data: [10000, 50000, 55000, 40000, 60000, 30000, 70000],
      },
    ],
    chartOptions: {
      chart: {
        type: "area",
        height: 370,
        toolbar: { show: false },
      },
      zoom: {
                enabled: false
              },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      markers: {
        size: 6,
        colors: [primary],
        strokeColors: "#fff",
        strokeWidth: 2,
      },
      colors: [primary],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.4,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yaxis: {
        labels: {
          formatter: (val: number) => `$${val / 1000}k`,
        },
      },
      tooltip: {
        y: {
          formatter: (val : number) => `$${val.toLocaleString()}`,
        },
      },
    },
  };
});
</script>

<template>
  <v-card elevation="10" class="withbg">
    <v-card-item>
      <div class="d-sm-flex align-center justify-space-between pt-sm-2">
        <div><v-card-title class="text-h5">Reports</v-card-title></div>
     
      </div>
      <div class="mt-6">
        <apexchart
          type="area"
          height="370px"
          :options="chartOptions.chartOptions"
          :series="chartOptions.series"
        />
      </div>
    </v-card-item>
  </v-card>
</template>
