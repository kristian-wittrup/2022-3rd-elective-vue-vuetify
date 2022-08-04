<template>


  <p>Main stuff</p>
  <div
    v-for="(person, index) in testData"
    :key="index"
  >
    <p>{{person.name}} </p>
    <p>{{person.age}} </p>
  </div> 


</template>

<script setup>
import { ref } from 'vue' 
import { db } from "@/firebase.js";
import { collection, getDocs } from "firebase/firestore"; 

let testData = ref([])

const querySnapshot = await getDocs(collection(db, "teststuff"));
querySnapshot.forEach(doc => {
  testData.value.push({ 
    ...doc.data(), 
    id: doc.id 
    })
 })


</script>
