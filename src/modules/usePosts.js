import { ref } from 'vue' 
import { db } from "@/firebase.js";
import { collection, /* getDocs, */ addDoc, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore"; 

const usePosts = () => {
  const testDataRef = collection(db, "teststuff")
  const posts = ref([]);
  
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
        name: "test1", 
        age: 1
      }
    )
  }

  const clickToDeleteData = async (id) => {
    deleteDoc(doc(db, "teststuff", id))
  }

  return {
    getTestData,
    clickToAddData,
    clickToDeleteData,
    clickToUpdateData,
    posts
  }
}

export default usePosts