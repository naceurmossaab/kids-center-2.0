<template>
  <!-- user navbar -->
  <div v-if="user.connect" id="banned">
    <div class="txt1">ACCOUNT SUSPENDED</div>
    <div class="txt2">This account has been suspended.</div>
    <div id="orbit-system">
      <div class="system">
        <div class="satellite-orbit">
          <div class="satellite">SUSPENDED</div>
        </div>
        <div class="planet">
          <img src="http://orig02.deviantart.net/69ab/f/2013/106/0/4/sad_man_by_agiq-d61wk0d.png" height="200px" />
        </div>
      </div>
    </div>
    <div class="txt3">For more information please</div>
    <a href= "/contact"> <div class="button">Contact with us</div> </a>
  </div>
  <div v-if="!user.connect" id="active">
    <div v-if="$route.path !== '/admin/index'" id="nav" class="navbar">
      <img
        width="40"
        alt="kid center"
        src="https://img.icons8.com/cotton/50/000000/christmas-kid-2.png"
      />
      <router-link to="/"><span>Kids Center</span></router-link>
      <div class="spacer"></div>
      <router-link to="/"><span>Home</span></router-link>
      <router-link v-if="user.username" :to="`/forum/${user._id}`"
        ><span>Forum</span></router-link
      >
      <router-link v-if="user.username" to="/services"
        ><span>Search</span></router-link
      >
      <div class="spacer-right"></div>
      <router-link to="/about"><span class="navbar-title">About</span></router-link>
      <router-link to="/contact"
        ><img src="https://img.icons8.com/officel/30/000000/new-message.png"
      /></router-link>
      <router-link v-if="user.username" to="/"
        ><span class="d-flex align-items-center"
          ><img :src="user.user_img" class="user-logo" />{{
            user.username
          }}</span
        ></router-link
      >
      <router-link v-if="!user.username" to="/signin">
        <span class="navbar-title">Sign In</span></router-link
      >
      <router-link v-if="user.username" to="/">
        <span @click="logout" class="navbar-title">Log Out</span></router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "App",
  data() {
    return {
      user: {},
      EventBus: inject("EventBus"),
    };
  },
  mounted() {
    console.log("current path : ", this.$router.currentRoute.rawValue);
    this.EventBus.on("user", (user) => (this.user = user));
  },
  methods: {
    logout() {
      this.user = {};
    },
    isAdmin() {},
  },
};
</script>

<style scoped>
:host {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  z-index: 0;
}

a {
  text-decoration: none !important;
}

h1,
h2,
h3,
h4,
h5,
h6,
span {
  margin: 0 0.7rem;
}

.spacer {
  flex: 0.5;
}

.spacer-right {
  flex: 1;
}

.container {
  width: 50%;
  margin: 5%;
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
  margin-right: 0.5rem;
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
  content: "";
  position: absolute;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  top: calc(2px / -1);
  left: calc(2px / -1);
  background: linear-gradient(to right, #fff 0%, #fff 100%),
    linear-gradient(to top, #fff 50%, transparent 50%),
    linear-gradient(to top, #fff 50%, transparent 50%),
    linear-gradient(to right, #fff 0%, #fff 100%),
    linear-gradient(to left, #fff 0%, #fff 100%);
  background-size: 100% 2px, 2px 200%, 2px 200%, 0% 2px, 0% 2px;
  background-position: 50% 100%, 0% 0%, 100% 0%, 100% 0%, 0% 0%;
  background-repeat: no-repeat, no-repeat;
  transition: transform 0.3s ease-in-out, background-position 0.3s ease-in-out,
    background-size 0.3s ease-in-out;
  transform: scaleX(0) rotate(0deg);
  transition-delay: 0.3s, 0.3s, 0s;
}
.navbar span:hover:before {
  background-size: 200% 2px, 2px 400%, 2px 400%, 55% 2px, 55% 2px;
  background-position: 50% 100%, 0% 100%, 100% 100%, 100% 0%, 0% 0%;
  transform: scaleX(1) rotate(0deg);
  transition-delay: 0s, 0s, 0.3s;
}

.user-logo {
  width: 25px;
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

.c-css-slider {
  position: relative;
}

.txt1 {
  color: #0070bb;
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  margin-top: 20px;
}

.txt2 {
  color: #c8c6ce;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
}

.txt3 {
  color: #c8c6ce;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
}

.logo {
  text-align: center;
  margin-top: 10px;
}

.button {
  border: 2px solid none;
  padding: 10px 40px;
  background: #0070bb;
  color: white;
  text-align: center;
  width: 300px;
  border-radius: 25px;
  margin: 20px auto;
  transition: all 0.3s ease 0s;
  -webkit-box-shadow: 0px 11px 20px -8px rgba(0, 112, 187, 1);
  -moz-box-shadow: 0px 11px 20px -8px rgba(0, 112, 187, 1);
  box-shadow: 0px 11px 20px -8px rgba(0, 112, 187, 1);
}

.button:hover {
  border: 2px solid none;
  padding: 10px 40px;
  background: #0070bb;
  color: white;
  text-align: center;
  width: 300px;
  border-radius: 25px;
  margin: 5px auto;
  transition: all 0.3s ease 0s;
  -webkit-box-shadow: 0px 19px 34px -8px rgba(0, 112, 187, 1);
  -moz-box-shadow: 0px 19px 34px -8px rgba(0, 112, 187, 1);
  box-shadow: 0px 19px 34px -8px rgba(0, 112, 187, 1);
}

a .button {
  color: ffffff;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
}

a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}

#orbit-system {
  position: relative;
  width: 18em;
  height: 18em;
  margin: 0px auto;
}

.system {
  position: relative;
  width: 100%;
  height: 100%;

  -webkit-transform: rotateX(75deg) rotateY(-30deg);
  transform: rotateX(75deg) rotateY(-30deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.planet,
.satellite-orbit,
.satellite {
  position: absolute;
  top: 50%;
  left: 50%;

  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.planet {
  width: 9em;
  height: 9em;
  margin-top: -20em;
  margin-left: -4.5em;

  border-radius: 50%;
  background-color: none;
  color: white;

  text-align: center;
  line-height: 9em;

  -webkit-transform: rotateY(30deg) rotateX(-75deg);
  transform: rotateY(30deg) rotateX(-75deg);
}

.satellite-orbit {
  width: 16em;
  height: 16em;
  margin-top: -8em;
  margin-left: -8em;

  /*border: 1px solid black;*/
  border-radius: 50%;

  -webkit-animation-name: orbit;
  animation-name: orbit;
  -webkit-animation-duration: 10s;
  animation-duration: 10s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}

.satellite {
  top: 100%;
  width: 7em;
  height: 7em;
  margin-top: -1.5em;
  margin-left: -1.5em;
  color: #fefefe;
  background-color: #0070bb;
  border-radius: 50%;
  text-align: center;
  font-weight: 600;
  line-height: 7em;
  -webkit-animation-name: invert-orbit;
  animation-name: invert-orbit;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}
</style>
