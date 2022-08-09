<template>
  <div>
  <h1>Edit posts</h1>
  <v-btn
    id="floatyClose" 
    rounded="0" 
    size="large"
    color="warning" 
    class="bg-yellow-lighten-3 pa-3 my-1" 
    @click="$emit('close')"><v-icon>mdi-close</v-icon></v-btn>

   <v-card v-for="person in posts" :key="person" class="my-5 pa-5 bg-white rounded " elevation="1">

    <p><b>ID</b> of post: {{person.id}} </p>
    <QuillEditor theme="snow" toolbar="full" v-model:content="person.name" contentType="html"  />
    <v-row >
      <v-col class="d-flex justify-space-between mt-3" cols="12">
        <v-btn class="bg-blue-lighten-3" @click="clickToUpdateData(person.id)"><v-icon>mdi-pencil-outline</v-icon>Edit</v-btn>
        <v-btn class="bg-red-lighten-3" @click="clickToDeleteData(person.id)"><v-icon>mdi-delete</v-icon>Delete</v-btn>
      </v-col>

    </v-row>
  </v-card> 
</div>
</template>


<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import usePosts from '../modules/usePosts'
import { onMounted } from 'vue'

const { posts, getTestData, clickToDeleteData, clickToUpdateData } = usePosts()

  onMounted(() => {
    getTestData()
  }) 

</script>
