<script setup lang="ts">



</script>
<template>
    <v-row>
        <v-col cols="12">
            <v-row>
                <!-- Analytics Overview  -->
                <v-col cols="12">
                    <DashboardMetricsCards />
                </v-col>
                <!-- Report overview -->
                <v-col cols="12" lg="8">
                    <DashboardReportsOverview />
                </v-col>
                <!-- Yearly Breakup  -->
                <v-col cols="12" lg="4">
                        <DashboardVisitsOverview />
                </v-col>
            
                <!-- Product performence -->
                <v-col cols="12" lg="12">
                    <DashboardRecentOrders />
                </v-col>
 
            </v-row>
        </v-col>
 
    </v-row>
</template>