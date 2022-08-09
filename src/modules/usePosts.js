import { ref } from 'vue' 
import { db } from "@/firebase.js";
import { collection, /* getDocs, */ addDoc, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore"; 

// dnr (with teleport)
import { useRoute  } from 'vue-router'

const usePosts = () => {
  const testDataRef = collection(db, "teststuff")
  const posts = ref([]);


  const route = useRoute(); // dnr (with teleport)
  const { id } = route.params; // dnr (with teleport)
  
  
  const getTestData = async () => {
    //onsnapshot map docs and id to name and age
    onSnapshot(testDataRef, (snapshot) => {
      posts.value = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(), 
          // name: doc.data().name,
          // age: doc.data().age
        }
      })
    })
  }
  
  const clickToAddData = async () => {
    addDoc(collection(db, "teststuff"), {
      name: "test",
      age: "test"
    })
  }
    
  const clickToUpdateData = async (id) => {

    updateDoc(doc(testDataRef, id), 
      { 
        // dynamic binding foreach key in data
        name: posts.value.find(post => post.id === id).name,
        //name: posts.value, 
        age: 1
      }
    ).then(
      getTestData(),
      console.log("updated on id", id, "with data", posts.value.find(post => post.id === id).name)   
    )
  }

  const clickToDeleteData = async (id) => {
    deleteDoc(doc(testDataRef, id))
    //deleteDoc(doc(db, "teststuff", id))
  }


  /* Section: Edit Single post + retrieve single post + single new */
  const singlePost = ref({})

  const getSinglePostData = async () => {
    //onsnapshot map docs and id to name and age
    onSnapshot(testDataRef, (snapshot) => {
        posts.value = snapshot.docs.filter(doc => { doc.id === id })  //id is passed in from router.js
      })
  } 

 
  const updateSinglePost = async (id) => {

    updateDoc(doc(testDataRef, id), 
      { 
        // dynamic binding foreach key in data
        name: posts.value.find(post => post.id === id).name,
        //name: posts.value, 
        age: 1
      }
    ).then(
      
      //console.log("updated on id", id, "with data", posts.value.find(post => post.id === id).name)   
    )
  }

  const addPostVueQuill = async (name) => {
    addDoc(collection(db, "teststuff"), {
      name: name,
      age: "test"
    })
  }


  return {
    getTestData,
    clickToAddData,
    clickToDeleteData,
    clickToUpdateData,
    getSinglePostData,
    updateSinglePost,
    addPostVueQuill,
    singlePost,
    posts
  }
}

export default usePosts