<template>
  <v-app :theme="theme">
    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- TODO the rest of the fucking app -->
  </v-app>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// TODO add some way to change themes and default based on user browser preference
const theme = ref("dark"); 
</script>