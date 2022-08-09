<template>


  <p>Main stuff</p>
    <v-row justify="center" no-gutters class="bg-darkgrey-lighten-3">
      <v-col cols="12" sm="4">
        <button class="bg-blue-lighten-3" @click="isOpen = true">Edit Posts</button> <span> | </span>
        <teleport to="body">
          <div class="modal" v-if="isOpen">
            <EditPostView
              @close="isOpen = false"
            ></EditPostView>

          </div>
        </teleport>
        <button class="bg-blue-lighten-3" @click="isOpen2 = true">Add new Posts</button>
        <teleport to="body">
          <div class="modal" v-if="isOpen2">
          
            <NewPostView
              @close2="isOpen2 = false"
            ></NewPostView>

          </div>
        </teleport>
      </v-col>
    </v-row>  
    <br>

  <v-row>
    <v-col >
      <v-card class="my-2 pa-5" v-for="(person, index) in posts" :key="index">
      
        <p class="px-5" v-html="person.name"></p>
        
        <hr>

        <p class="px-5">Person Age: {{person.age}} </p>
        <p class="px-5">Person Age: {{person.id}} </p>
       
        
      </v-card> 
    </v-col>
  </v-row>
  
 

 
  <div>
    
  </div>

</template>


<script setup>
// teleport component to the top of the page
//import { teleport } from '@vueup/vue-teleport'
import { ref } from 'vue'
import EditPostView from './EditPostView.vue' // teleport modal
import NewPostView from './NewPostView.vue' // teleport modal

//import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';



import usePosts from '../modules/usePosts'
import { onMounted } from 'vue'


const isOpen = ref(false)
const isOpen2 = ref(false)

const { posts, getTestData /* , clickToAddData,clickToDeleteData, clickToUpdateData */ } = usePosts()

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

<style lang="scss">
.root {
  position: relative;
}

ul {
  padding-left:20px;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;


}

.modal > div {
  /* 
  width: 100%;
  height: 100%;
  */
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 64px;
  width:95%;
}

</style>