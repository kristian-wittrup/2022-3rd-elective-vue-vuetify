<template>
  <h1>Main stuff</h1>
  <v-row no-gutters class="bg-darkgrey-lighten-3">
    <v-col cols="12" sm="12" style="justify-content:space-between">
      <v-btn class="bg-blue-lighten-3" @click="isOpen2 = true"><v-icon>mdi-file-plus</v-icon>Add new Posts</v-btn> | 
      <teleport to="body">
        <div class="modal" v-if="isOpen2">
          <NewPostView @close2="isOpen2 = false">
          </NewPostView>
        </div>
      </teleport>
      
    </v-col>
  </v-row>  
  <br>

  <v-row>
    <v-col cols="12">
      <v-card class="my-2 pa-5 d-flex flex-nowrap" v-for="(person, index) in posts" :key="index">
        <v-col sm="11">
          <p class="px-5" v-html="person.name"></p>
          <hr>
          <p class="px-5">Post Age: {{person.age}} </p>
          <p class="px-5">Post Age: {{person.id}} </p> 
        </v-col>
        <v-col sm="1">
          <router-link :to="`/editSinglePost/${person.id}`">
            <v-btn color="" @click="getSinglePostData(person.id)">
              <v-icon>mdi-pencil-outline</v-icon>Edit
            </v-btn>
          </router-link>
        </v-col>
      
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
import NewPostView from './NewPostView.vue' // teleport modal

//import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';



import usePosts from '../modules/usePosts'
import { onMounted } from 'vue'


const isOpen2 = ref(false)

const { posts, getTestData, getSinglePostData } = usePosts()

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

#floatyClose {
  position: fixed;
  top: 96px;
  left: -5px;
  z-index: 99;
}

</style>