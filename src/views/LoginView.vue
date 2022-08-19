<template>
  <v-container>
    <v-row>
      <v-col offset-md="3" md="6" xs="12">
        
        <h1>Administrator login</h1>
        
        <div id="info">
          
          <v-text-field 
            v-model="email"
            label="Email"
            required
          >
          </v-text-field>
          <v-text-field 
            v-model="password"
            label="Password"
            required
          >
          </v-text-field>
          
          <v-btn
            color="complete"
            @click.prevent="logIn()" 
          >
            Login
          </v-btn>
        
          <v-btn
            color="incomplete"
            @click.prevent="logOut()" 
          >
            SignOut
          </v-btn>
          
          <v-btn
            color="incomplete"
            @click.prevent="resetPassword()" 
          >
            Reset Password
          </v-btn>

          <v-btn
            color="incomplete"
            @click.prevent="testUserLoggedIn()" 
          >
            Test user info
          </v-btn>
        
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

import useUsers from '../modules/useUsers'

const { email, password, logIn, logOut, resetPassword, testUserLoggedIn } = useUsers()


//import { auth } from '../firebase/config'
//import { getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";

//import { ref } from 'vue'

  // //const user = ref(null)
  // const email = ref('')
  // const password = ref('')  
  // let user = ref(null)
  // const auth = getAuth();
  
  // const logIn = () => { signInWithEmailAndPassword(auth, email.value, password.value)
  //   .then((userCredential) => {
  //     // Signed in 
  //     user.value = userCredential.user;
  //     console.log(user.value.email)
  //     // ...
  //   })
  //   .catch((error) => {
  //   //  console.log(error)
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //      if (errorCode === 'auth/wrong-password') {
  //           alert ("Wrong password")
  //         } else {
  //           alert (errorMessage)
  //         }
  // })
  // }

  // const logOut = () => { 
  //   signOut(auth).then(() => {
  //      console.log("logged out", user.value)
  //     // Sign-out successful.
  //   }).catch((error) => {
  //     console.log(error)
  //     // An error happened.
  //   }); 
  // }

  // const resetPassword = () => { 
  //   sendPasswordResetEmail(auth, email.value)
  //   .then(() => {
  //     console.log("mail send to user for reset")
  //     // Password reset email sent!
  //     // ..

  //   })
  //   .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       if (errorCode === 'auth/wrong-password') {
  //         alert ("Wrong password")
  //       } else {
  //         alert (errorMessage)
  //       }
  //   }) 
  // }
  


</script>

<style lang="scss" scoped>

</style>