<script setup lang="ts">
import { DashboardMetrics } from '@/data/dashboard/dashboardData';

</script>

<template>
    <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" class="p-0 m-0" v-for="(metricGroup, index) in DashboardMetrics" :key="index">
            <div class="card-style ">
                <div class="d-flex align-center gap-2 w-100">
                    <v-avatar size="55" class="me-3">
                        <img :src="metricGroup.icon" alt="Metric Icon" />
                    </v-avatar>
                    <div>
                        <p class="text-subtitle-1 text-muted">{{ metricGroup.title }}</p>
                        <div class="d-flex  justify-space-between gap-2 align-center mt-2">
                            <h5 class="text-h5 font-weight-bold">{{ metricGroup.value }}</h5>
                      
                            <v-chip   v-if="metricGroup.percentage" class="text-body-1 font-weight-bold" :class="metricGroup.isIncrease ? 'text-success' : 'text-error'" color="white" size="small">
                                {{ metricGroup.percentage }}

                            </v-chip>
                        </div>
                      
                    </div>
                </div>
            </div>
        </v-col>
    </v-row>
</template>
<style>

.card-style {
    padding: 34px 17px;
    border-radius: 16px;
    background: white;
}
</style>