<script setup lang="ts">
import { recentOrders } from '@/data/dashboard/dashboardData';
</script>

<template>
    <v-card elevation="10" class="">
        <v-card-item class="pa-6">
            <div class="d-flex justify-space-between">
                <h5 class="text-h5 pt-sm-2 pb-7">Recent Orders</h5>
                <NuxtLink to="/orders"
                class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2">
                Go To Orders Page</NuxtLink>

            </div>
            <v-table class="order-table">
                <thead>
                    <tr>
                        <th class="text-subtitle-1 font-weight-bold">Item Name</th>
                        <th class="text-subtitle-1 font-weight-bold">Qty</th>
                        <th class="text-subtitle-1 font-weight-bold">Order Date</th>
                        <th class="text-subtitle-1 font-weight-bold">Amount</th>
                        <th class="text-subtitle-1 font-weight-bold">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in recentOrders" :key="item.id" class="order-item">
                        <td>
                            <div class="d-flex align-center">
                                <v-avatar size="40" class="me-3">
                                    <img :src="item.image" alt="Product Image" />
                                </v-avatar>
                                <h6 class="text-body-1 font-weight-bold">{{ item.name }}</h6>
                            </div>
                        </td>
                        <td>
                            <p class="text-15 font-weight-bold">{{ item.qty }}</p>
                        </td>
                        <td>
                            <p class="text-body-1 text-muted font-weight-bold">{{ item.orderDate }}</p>
                        </td>
                        <td>
                            <h6 class="text-h6 font-weight-bold">{{ item.amount }}</h6>
                        </td>
                        <td>
                            <v-chip :class="'text-body-1 font-weight-bold bg-' + item.statusColor" color="white" size="small">
                                {{ item.status }}
                            </v-chip>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-card-item>
    </v-card>
</template>

