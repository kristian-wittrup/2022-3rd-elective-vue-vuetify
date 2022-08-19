import { ref } from 'vue' 
//import { db } from "@/firebase.js";
import { getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";

const useUsers = () => {
  
  const email = ref('')
  const password = ref('')  
  let user = ref(null)  // grab this in other components or localStorage 'userLoginInfoFireBase'
  const auth = getAuth();
  //let userInfo = ref({})
  
  const logIn = () => { 
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      user.value = userCredential.user;
      console.log(user.value.email)
      // ...
      localStorage.setItem("userLoginInfoFireBase", user.value);
      console.log(localStorage.getItem('userLoginInfoFireBase'))
    })
    .catch((error) => {
    //  console.log(error)
      const errorCode = error.code;
      const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert ("Wrong password")
          } else {
          alert (errorMessage)
          }
      })
    }

  const testUserLoggedIn = () => {
    if (user.value) {
      console.log(user.value.email)
      return true
    } else {
      return false
    }
  }

  const logOut = () => { 
    signOut(auth).then(() => {
       console.log("logged out", user.value)
       localStorage.clear();
       console.log("LocalStorage", localStorage)
      // Sign-out successful.
    }).catch((error) => {
      console.log(error)
      // An error happened.
    }); 
  }

  const resetPassword = () => { 
    sendPasswordResetEmail(auth, email.value)
    .then(() => {
      console.log("mail send to user for reset")
      // Password reset email sent!
      // ..

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert ("Wrong password")
        } else {
          alert (errorMessage)
        }
    }) 
  }

  return {
    email,
    password,
    user,
    auth,
    logIn,
    logOut,
    resetPassword,
    testUserLoggedIn
  }
}

export default useUsers