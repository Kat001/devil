<template>
    <div  class="h-screen overflow-hidden flex items-center justify-center"
    style="background: #edf2f7">

        <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">


                  <div v-if="msg" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">Hey User!</strong>
                    <span class="block sm:inline">{{msg}}</span>

                  </div>

                  <div v-if="error" class="bg-read-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">Hey User!</strong>
                    <span class="block sm:inline">{{error}}</span>

                  </div>




                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <form @submit="postData" method="post">


                    <input type="email" class="block border border-grey-light w-full p-3 rounded mb-4" name="email"
                        v-model="posts.email"
                        placeholder="Email" />

                    <input type="password" class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        v-model="posts.password1"
                        placeholder="Password" />

                    <input type="password" class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        v-model="posts.password2"
                        placeholder="Confirm Password" />

                  <button
                    class="w-full text-center py-3 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create Account
                  </button><br><br>

                  <!-- <button v-if="is_success" v-on:click="goToLogin"
                    class="w-full text-center py-3 bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Login
                  </button><br> -->


                  </form>


                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account?
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
Vue.use(VueAxios, axios)
    export default {
        name: 'Signup',
        data() {
            return {
                posts: {

                    email: null,
                    password1:null,
                    password2:null,
                },
                msg:null,
                error:null,
                is_success:null,
                a:null,
            }
        },
        methods: {
            postData(e) {

            if(this.posts.password1 != this.posts.password2){
              this.error =" Passwords must be same!"

            }
            else {
              const data = {
                email: this.posts.email,
                password:this.posts.password1,
              }
              const config = {
                method : "post",
                url : "http://127.0.0.1:8000/v1/auth/register/",

                headers: {
                  "Content-Type" : "application/json",
                  },
                  data:data,
                }

            axios(config).then((result)=>{
              console.log(result.status)
              if(result.status == 200){
                this.msg =" Registration Successfull"
                this.error=null
                this.is_success="true"
              }
            }).catch(error => {

              this.error = error.response.data.email[0]
            });



        e.preventDefault()
      }
    }


        // goToLogin(){
        //   console.log("called")
        // }
        }
    }



</script>
<style src="../assets/tailwind.css">
