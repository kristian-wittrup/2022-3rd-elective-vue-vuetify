<template>
  <div>
  <h1>New post</h1>
  <v-btn class="bg-yellow-lighten-3 pa-3 my-1" @click="$emit('close2')">Close</v-btn>
  
  <v-card class="my-5 pa-5 bg-white rounded " elevation="1">
  
    <QuillEditor theme="snow" toolbar="full" v-model:content="name" contentType="html"  />
    <v-row >
      <v-col class="d-flex justify-space-between mt-3" cols="12">
        <v-btn class="bg-purple-lighten-3" @click="addPostVueQuill(name)">Add data</v-btn>
      </v-col>
    </v-row>
  </v-card> 
</div>
</template>


<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import usePosts from '../modules/usePosts'

  const {  addPostVueQuill } = usePosts()

</script>
