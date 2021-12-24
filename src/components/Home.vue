<template>
  <div >
    <header>
	<div class="overlay">
<h2>WELCOME TO KIDS CENTER</h2>
<h3>Reasons for Choosing US</h3>
<h3>We Provide With Quality Education To Our Kids</h3>
	<br>
	<button>Learn More</button>
		</div>
</header>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style scoped>
*{padding: 0; margin: 0; box-sizing: border-box;}
body{height: 900px;}
header {
    background-color: rgb(248, 248, 248);
	background: url('http://www.autodatz.com/wp-content/uploads/2017/05/Old-Car-Wallpapers-Hd-36-with-Old-Car-Wallpapers-Hd.jpg');
	text-align: center;
	width: 100%;
	height: auto;
	background-size: cover;
	background-attachment: fixed;
	position: relative;
	overflow: hidden;
	border-radius: 0 0 85% 85% / 30%;
}
header .overlay{
	width: 100%;
	height: 100%;
	padding: 50px;
	color: #FFF;
	text-shadow: 1px 1px 1px #333;
  background-image: linear-gradient( 135deg, #76b0c79d 10%, #94b3dbb2 100%);
		/* background: url("https://wallpaperaccess.com/full/1265273.jpg"); */
        /* background-repeat:no-repeat;  */

}

h2 {
	font-family: 'Dancing Script', cursive;
	font-size: 80px;
	margin-bottom: 30px;
}

h3, p {
	font-family: 'Open Sans', sans-serif;
	margin-bottom: 30px;
}

button {
	border: none;
	outline: none;
	padding: 10px 20px;
	border-radius: 50px;
	color: #333;
	background: #fff;
	margin-bottom: 50px;
	box-shadow: 0 3px 20px 0 #0000003b;


}
button:hover{
	cursor: pointer;
}
</style>