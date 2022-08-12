<template>
  <div class="mt-10 px-5 py-10">
  <h1>Edit single post</h1>
  <v-btn
    id="floatyClose" 
    rounded="0" 
    size="large"
    color="warning" 
    class="bg-yellow-lighten-3 pa-3 my-1" 
    @click="(goBack)"><v-icon>mdi-arrow-left</v-icon></v-btn> 

  <v-card v-if="post" :key="post" class="my-5 pa-5 bg-white rounded " elevation="1" >
    <p><b>ID</b> of post: {{post.id}} </p>
      
        <QuillEditor theme="snow" toolbar="full" v-model:content="post.name" contentType="html"  />
 
      <v-row >
      <v-col class="d-flex justify-space-between mt-3" cols="12">
        <v-btn class="bg-blue-lighten-3" @click="updateSinglePost(routeId)"><v-icon>mdi-pencil-outline</v-icon>Update</v-btn>
        <v-btn class="bg-red-lighten-3" @click="deleteSingleData(routeId)"><v-icon>mdi-delete</v-icon>Delete</v-btn>
      </v-col>

    </v-row>
  </v-card>
    <v-snackbar
      v-model="snackbar"
      :timeout="4000"
      location="top"
      color="yellow-accent-4"
    >

    
      {{ text }}

    </v-snackbar>
</div>
</template>


<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import usePosts from '../modules/usePosts'
import { onMounted } from 'vue'

import { ref } from 'vue'

import { useRoute  } from 'vue-router'
const route = useRoute(); // dnr (with teleport)

let routeId = route.params.id; // dnr (with teleport)

const { post, snackbar, getSinglePostData , deleteSingleData, updateSinglePost, goBack } = usePosts()

const text = ref(`Updated`)

  onMounted(() => {
    getSinglePostData()
  }) 

</script>
