<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-btn
      dark
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const snackbar = ref(false)
const text = ref(`Hello, I'm a snackbar`)

</script>