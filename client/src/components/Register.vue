<template>
  <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="white eleveation-2">
          <v-toolbar flat dense class="cyan" dark>
              <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
            <div class="pl-4 pr-4 pt-2 pb-2">
              <input type="email" name="email" placeholder="email" v-model="email"/>
              <br>
              <input type="password" name="password" v-model="password" placeholder="password"/>
              <br>
              <div class="error" v-html="error"/>
              </br>
              <v-btn @click="register" class="cyan">Register</v-btn>
            </div>
        </div>
      </v-flex>
  </v-layout>

  
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        console.log('Register button was clicked')
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response)
      } catch (error) {
        console.log('Registration failed')
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
