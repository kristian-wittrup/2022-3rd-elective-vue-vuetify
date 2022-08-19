<template>
  <v-app>
     <v-app-bar
        color="deep-purple"
        dark
      >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>Title</v-toolbar-title>
      </v-app-bar>
  
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
               <router-link to="/">
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </router-link>
            </v-list-item>
  
            <v-list-item>
              <router-link to="/singlepost">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Shingles</v-list-item-title>
              </router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/login">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Login</v-list-item-title>
              </router-link>

            
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
        <v-row justify="center" no-gutters class="bg-grey-lighten-3">
          <v-col md="10">
            <v-main>
              <Suspense>
                <template #default>
                  <router-view/>
                </template>
               
                <template #fallback>
                  Loading...
                </template>
              </Suspense>
            </v-main>
          </v-col>
        </v-row>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

  let drawer = ref(false)
  let group = ref('home')
 
</script>


<!-- 
<script>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  setup() {
      let drawer = ref(false)
      let group = ref('home')
    
    return {
      drawer,
      group,
    }
  },
}
</script>
 -->
