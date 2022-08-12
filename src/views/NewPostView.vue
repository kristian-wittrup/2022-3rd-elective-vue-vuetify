<template>
  <div>
  <h1>New post</h1>
  <v-btn
    id="floatyClose" 
    rounded="0" 
    size="large"
    color="warning" 
    class="bg-yellow-lighten-3 pa-3 my-1" 
    @click="$emit('close2')"><v-icon>mdi-close</v-icon></v-btn>
  
  <v-card class="my-5 pa-5 bg-white rounded " elevation="1">
  
    <QuillEditor theme="snow" toolbar="full" v-model:content="name" placeholder="Enter content" contentType="html"  />
    <v-row >
      <v-col class="d-flex justify-space-between mt-3" cols="12">
        <v-btn class="bg-purple-lighten-3" @click="addPostVueQuill(name)"><v-icon>mdi-file-plus</v-icon>Add data</v-btn>
      </v-col>
    </v-row>
  </v-card> 
</div>
</template>


<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { ref } from 'vue'

import usePosts from '../modules/usePosts'

  const { addPostVueQuill } = usePosts()
  const name = ref('')
</script>

<style lang="scss">

</style>