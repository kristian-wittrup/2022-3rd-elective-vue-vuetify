import { ref } from 'vue' 
import { db } from "@/firebase.js";
import { collection, /*   getDoc,  */  addDoc, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore"; 

// dnr (with teleport)
import { useRoute  } from 'vue-router'
import { useRouter  } from 'vue-router'


const usePosts = () => {
  const testDataRef = collection(db, "teststuff")
  const posts = ref([]);

  const post = ref([]);
  
  
  const snackbar = ref(false)

  const route = useRoute(); // dnr (with teleport)
  const router = useRouter(); // dnr (with teleport)
  
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
      //console.log("updated on id", id, "with data", posts.value.find(post => post.id === id).name)   
    )
  }

  const clickToDeleteData = async (id) => {
    deleteDoc(doc(testDataRef, id))
    //deleteDoc(doc(db, "teststuff", id))
  }

  
  /* Section: Edit Single post + retrieve single post + single new */
  const getSinglePostData = async () => {
    // getSinglePostData firebase onsnapshot map docs and id to name and age
    onSnapshot(doc(testDataRef, route.params.id), (snapshot) => {
       post.value = {
        id: snapshot.id,
        ...snapshot.data(),
      } 
     // debugger
    }
    )

  }


 
  const updateSinglePost = async (id) => {

    updateDoc(doc(testDataRef, id), 
      { 
        // dynamic binding foreach key in data
        name: post.value.name, 
        age: 1
      },
    ).then(
      snackbar.value = true
    )
  }


  const deleteSingleData = async (id) => {
    deleteDoc(doc(testDataRef, id))
    //deleteDoc(doc(db, "teststuff", id))
  }

  const addPostVueQuill = async (name) => {
    addDoc(collection(db, "teststuff"), {
      name: name,
      age: 42
    })
  }

  /* utility functions */

  const goBack = () => {
    router.go(-1)
  }

  return {
    getTestData,
    clickToAddData,
    clickToDeleteData,
    clickToUpdateData,
    getSinglePostData,
    updateSinglePost,
    deleteSingleData,
    addPostVueQuill,
    posts,
    post,
    goBack, 
    snackbar
  }
}

export default usePosts