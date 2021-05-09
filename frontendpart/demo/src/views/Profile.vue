<template>

<div>
  <div class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">

    <div class="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
      <h1>You are logged in</h1>
      <img src="https://i.imgur.com/dYcYQ7E.png" class="w-full" />
      <div class="flex justify-center -mt-8">
        <img src="https://i.imgur.com/8Km9tLL.jpg" class="rounded-full border-solid border-white border-2 -mt-3">
      </div>
      <div class="text-center px-3 pb-6 pt-2">
        <h3 class="text-black text-sm bold font-sans">Olivia Dunham</h3>
        <p class="mt-2 font-sans font-light text-grey-dark">Hello, i'm from another the other side!</p>
      </div>
      <div class="flex justify-center pb-3 text-grey-dark">
        <div class="text-center mr-3 border-r pr-3">
          <h2>34</h2>
          <span>Photos</span>
        </div>
        <div class="text-center">
          <h2>42</h2>
          <span>Friends</span>
        </div>
      </div>

    </div>
    <div class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
      <button @click="logout" class="bg-red-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full">
          Logout
      </button>


    </div>
  </div>

  </div>




</template>

<script>

export default {
  name: "Profile",

  data(){},
  methods:{
    logout(){
      console.log("logout callled");
      localStorage.removeItem('token')
      this.$router.replace('/login')
    }
  }

};
</script>

<style src="../assets/tailwind.css">
