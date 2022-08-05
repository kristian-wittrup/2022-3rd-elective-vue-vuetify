<template>


  <p>Main stuff</p>
   <v-row justify="center" no-gutters class="bg-green-lighten-3">
      <v-col cols="12" sm="4">
        <button class="bg-purple-lighten-3" @click="clickToAddData()">Add data</button>
      </v-col>
    </v-row>
  <div
    v-for="(person, index) in posts"
    :key="index"
  >
  <br><br>
    <p v-html="person.name"> </p>
    <p>{{person.age}} </p>
    <p>{{person.id}} </p>
    <QuillEditor theme="snow" toolbar="full" v-model:content="person.name" contentType="html"  />
     <button class="bg-orange-lighten-3" @click="clickToDeleteData(person.id)">Delete test data</button><br><br>
     <button class="bg-orange-lighten-3" @click="clickToUpdateData(person.id)">Update test data</button><br><br>
    <hr>

  </div> 


   
    
  <!--    <v-row justify="center" no-gutters class="bg-green-lighten-3">
      <v-col cols="12" sm="4">
        <button class="bg-purple-lighten-3" @click="clickToDeleteData()">Delete test data</button>
      </v-col>
    </v-row> -->
  <hr>
  <div style="height: 10px; width:100%; background-color: cadetblue;"></div>
  <div>
    
  </div>

</template>


<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

//import { ref } from 'vue'

import usePosts from '../modules/usePosts'
import { onMounted } from 'vue'

const { posts, getTestData, clickToDeleteData, clickToAddData, clickToUpdateData } = usePosts()

  onMounted(() => {
    getTestData()
  }) 

 // const modelname = ref(null)


// import { ref } from 'vue' 
// import { db } from "@/firebase.js";
// import { collection, /* getDocs, */ addDoc, doc, deleteDoc, onSnapshot } from "firebase/firestore"; 

/* 
let testData = ref([])
const testDataRef = collection(db, "teststuff")

//onsnapshot map docs and id to name and age
 onSnapshot(testDataRef, (snapshot) => {
  testData.value = snapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data(), 
      // name: doc.data().name,
      // age: doc.data().age
    }
  })
}) */


//onsnapshot foreach docs and id to name and age
//  onSnapshot(testDataRef, (snapshot) => {
//   testDataRef.value = snapshot.docs.forEach(doc => {
//   testData.value.push({ 
//     ...doc.data(), 
//     id: doc.id 
//     })
//  })


// get data once
// const querySnapshot = await getDocs(collection(db, "teststuff"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

  /* function clickToAddData() {
    addDoc(collection(db, "teststuff"), {
      name: "test",
      age: "test"
    })
  }

  function clickToDeleteData(id) {
     deleteDoc(doc(db, "teststuff", id))
  } */

</script>
