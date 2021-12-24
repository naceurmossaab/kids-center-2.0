<template>
<!-- admin navbar -->
<div id="nav" class="navbar">
    <img width="40" alt="kid center" src="https://img.icons8.com/cotton/50/000000/christmas-kid-2.png" />
    <router-link to="/admin/index"><span>Kids Center</span></router-link>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <router-link v-if="admin.username"  to="/admin/index"> <span class="d-flex align-items-center"><img :src="admin.user_img" class="user-logo" />{{admin.username}}</span></router-link>
    <router-link v-if="!admin.username" to="/admin/index"> <span class="navbar-title">Sign In</span></router-link>
    <router-link v-if="admin.username"  to="/admin/index"> <span @click="logout" class="navbar-title">Log Out</span></router-link>
</div>

  <div v-if="!admin.username" class="signin">
    <!-- <h1>Sign In </h1> -->
    <form @submit.prevent="send">
      <div class="form-group">
        <label for="exampleInputUsername1">Username</label>
        <input v-model="username" type="text" class="form-control" id="exampleInputUsername1" placeholder="Username" required />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required />
      </div>
      <button type="submit" class="btn btn-primary">Sign In</button>
      <label for="errorSignIn" class="form-text error-form">{{ status }}</label>
    </form>
  </div>
  <div v-if="admin.username" class="row w-75 px-5 mx-5 d-block mx-auto">

    <!-- list of users -->
    <table class="table table-hover">
    <thead>
      <tr>
        <th>number</th>
        <th>full name</th>
        <th>email</th>
        <th>adresse</th>
        <th>city</th>
        <th>status</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, i) in users" v-bind:key="i">
        <th>{{i+1}}</th>
        <th class="d-flex p-3"><img :src="user.user_img" class="user-logo" > {{user.fullname}}</th>
        <th>{{user.email}}</th>
        <th>{{user.address}}</th>
        <th>{{user.city}}</th>
        <th>{{user.connect ? "banned" : "active"}}</th>
        <th @click="isBanned(user)"><img src="https://img.icons8.com/color/30/000000/cancel--v3.png"/></th>
      </tr>
    </tbody>
  </table>

  <!-- list of forum messages -->
  <table class="table table-hover">
    <thead>
      <tr>
        <th>number</th>
        <th>message</th>
        <th>user</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(msg, i) in forumMsg" v-bind:key="i">
        <th>{{i+1}}</th>
        <th>{{msg.message}}</th>
        <th class="d-flex p-3"><img :src="msg.user.user_img" class="user-logo" > {{msg.user.fullname}}</th>
        <th ></th>
      </tr>
    </tbody>
  </table>

  <!-- list of contact messages -->
  <table class="table table-hover">
    <thead>
      <tr>
        <th>number</th>
        <th>message</th>
        <th>user</th>
        <th>email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(msg, i) in contact" v-bind:key="i">
        <th>{{i+1}}</th>
        <th>{{msg.message}}</th>
        <th>{{msg.name}}   </th>
        <th>{{msg.email}}  </th>
        <th ></th>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignIn",
  data() {
    return {
      admin   : {},
      username: "",
      password: "",
      status  : "",
      users   : [],
      forumMsg: [],
      contact : []  
    };
  },
  created(){
    // get all users 
    axios.get("http://localhost:8000/user/admin")
        .then(({data})=> this.users = data);

    // get all msgs forum
    axios.get("http://localhost:8000/forum")
        .then(({data})=> this.forumMsg = data);
    
  },
  methods: {
    send() {
      const admin = {
        username: this.username,
        password: this.password,
      };

      axios
        .post("http://localhost:8000/admin/signin", admin)
        .then(({ data }) => {
          // console.log("signin response : ", data);
          this.username = "";
          this.password = "";
          this.admin    = data;
          this.contact  = data.contact;
          this.status   = "";
        })
        .catch((err) => {
          this.status = "wrrong username/password";
          console.log("signin error : ", err);
        });
    },

    isBanned(user){
      user.connect = !user.connect;
      axios.put("http://localhost:8000/user/"+user._id, user)
        .then(({data})=> this.users = data);
    },

    logout(){
      this.admin = {};
    }
  },
};
</script>

<style>
.signin {
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.signin h1 {
  font-weight: 700;
  color: rgb(140, 140, 140);
  margin: 1rem 0;
}

form {
  padding: 1rem 2rem;
  width: 500px;
  border-radius: 5px;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.3);
  background-color: #fff;
}

form * {
  margin: 0.3rem 0;
}

form button {
  margin: 0.5rem 1rem 0 0;
  padding: 0.2rem 1rem;
}

form span {
  text-decoration: underline;
  cursor: pointer;
}

.error-form {
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-size: 15px;
  font-weight: 500;
}

:host {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    color: #333;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    z-index: 0;
}

a{
  text-decoration: none !important;
}

h1,
h2,
h3,
h4,
h5,
h6,
span {
    margin: 0 .7rem;
}

.spacer {
    flex: 0.5;
}

.spacer-right {
    flex: 1;
}

.container{
    width:50%;
    margin:5%;
    margin-left: 25%;
    min-height: 300px;
    /* background-color: salmon; */
}

.navbar {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: hsl(200, 27%, 59%);
    color: white;
    font-size: 17px;
    font-weight: 600;
    padding: 0 1rem;
}
.navbar img {
    margin-right: .5rem;
}
.navbar span {
    text-decoration: none;
    color: #fff;
    background: transparent;
    text-align: center;
    position: relative;
    cursor: pointer;
    padding: 0.2rem 1rem;
}
.navbar span:before {
    content: '';
    position: absolute;
    width : calc(100% + 4px);
    height: calc(100% + 4px);
    top: calc(2px/-1);
    left: calc(2px/-1);
    background: linear-gradient(to right, #fff 0%, #fff 100%), linear-gradient(to top, #fff 50%, transparent 50%), linear-gradient(to top, #fff 50%, transparent 50%), linear-gradient(to right, #fff 0%, #fff 100%), linear-gradient(to left, #fff 0%, #fff 100%);
    background-size: 100% 2px, 2px 200%, 2px 200%, 0% 2px, 0% 2px;
    background-position: 50% 100%, 0% 0%, 100% 0%, 100% 0%, 0% 0%;
    background-repeat: no-repeat, no-repeat;
    transition: transform 0.3s ease-in-out, background-position 0.3s ease-in-out, background-size 0.3s ease-in-out;
    transform: scaleX(0) rotate(0deg);
    transition-delay: 0.3s, 0.3s, 0s;
}
.navbar span:hover:before {
    background-size: 200% 2px, 2px 400%, 2px 400%, 55% 2px, 55% 2px;
    background-position: 50% 100%, 0% 100%, 100% 100%, 100% 0%, 0% 0%;
    transform: scaleX(1) rotate(0deg);
    transition-delay: 0s, 0s, 0.3s;
}

.user-logo{
    width : 25px;
    height: 25px;
    border-radius: 50%;
}

@-webkit-keyframes orbit {
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg);
    }
}
@keyframes orbit {
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg);
    }
}
@-webkit-keyframes invert-orbit {
    0% {
        transform: rotateZ(360deg) rotateY(30deg) rotateX(-75deg);
    }

    100% {
        transform: rotateZ(0deg) rotateY(30deg) rotateX(-75deg);
    }
}
@keyframes invert-orbit {
    0% {
        transform: rotateZ(360deg) rotateY(30deg) rotateX(-75deg);
    }

    100% {
        transform: rotateZ(0deg) rotateY(30deg) rotateX(-75deg);
    }
}

table{
  margin: 2rem 0 !important;
  background-color: #fff !important;
}

</style>
