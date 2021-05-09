<template>
  <div
    class="h-screen overflow-hidden flex items-center justify-center"
    style="background: #edf2f7"
  >
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div
        class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
      >
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">

          <div v-if="msg" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Hey User!</strong>
            <span class="block sm:inline">{{msg}}</span>

          </div>

          <h1 class="mb-8 text-3xl text-center">Login</h1>
           <form @submit="postData" method="get">
          <input
            type="email"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            v-model="email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            v-model="password"
            placeholder="Password"
            required
          />

          <button
            class="w-full text-center py-3 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign up
          </button>
           </form>

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>
            and
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div class="text-grey-dark mt-6">
          Already have an account?
          <a class="no-underline border-b border-blue text-blue" href="#">
            Log in </a
          >.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
// import store from '../store/store.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
Vue.use(VueAxios, axios)
export default {
  name: "Login",
  props: {

  },
  data() {
    return {
      error:[],
      email:null,
      password:null,
      msg:null
    }

  },
          methods: {
            postData(e) {

        const data = {
          email: this.email,
          password:this.password,
        }
        const config = {
          method : "post",
          url : "http://127.0.0.1:8000/v1/auth/token/",
          headers: {
            "Content-Type" : "application/json",
            },
            data:data,
}

        axios(config).then((result)=>{
          console.log(result)

          if(result.status == 200){
            const access = result.data.access
            const refresh = result.data.refresh

            localStorage.setItem("token",access)
            localStorage.setItem("refresh",refresh)

            this.$router.replace('/profile')


          }

        }).catch(error => {
          this.msg = error.response.data.detail;
        }) ;


        e.preventDefault()
            }
        }
};
</script>

<style src="../assets/tailwind.css">
