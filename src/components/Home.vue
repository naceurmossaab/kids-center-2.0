<template>
  <div >
    <!-- home page -->
    <header>
	<div class="overlay">
<h2>WELCOME TO KIDS CENTER</h2>
<h3>Reasons for Choosing US</h3>
<h3>We Provide With Quality Education To Our Kids</h3>
	<br>
	<button>Learn More</button>
		</div>
</header>
<!-- footer -->
<footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
            <span class="text-white" data-aos="fade-up" data-aos-delay="100">
              Kids Are <strong> The Best Explorers</strong> In The World.
            </span>
          </div>

          <div
            class="col-lg-3 col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 class="my-4">Contact Info</h4>

            <p class="mb-1">
              <i class="fa fa-phone mr-2 footer-icon"></i>
              +99 080 070 4224
            </p>

            <p>
              <a href="#">
                <i class="fa fa-envelope mr-2 footer-icon"></i>
                kids-Center@company.com
              </a>
            </p>
          </div>

          <div
            class="col-lg-3 col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 class="my-4">Our Studio</h4>

            <p class="mb-1">
              <i class="fa fa-home mr-2 footer-icon"></i>
              tunis,pole technologique el ghazala
            </p>
          </div>

          <div
            class="col-lg-4 mx-lg-auto text-center col-md-8 col-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p class="copyright-text">Copyright &copy; 2021</p>
            <a>Created with❤️ by kids Center</a>
            <br />
          </div>

          <div
            class="col-lg-4 mx-lg-auto col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <ul class="footer-link">
              <li><a href="#">Stories</a></li>
              <li><a href="#">Work with us</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>

          <div
            class="col-lg-3 mx-lg-auto col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <ul class="social-icon">
              <li><a href="#" class="fa fa-instagram"></a></li>
              <li><a href="#" class="fa fa-twitter"></a></li>
              <li><a href="#" class="fa fa-dribbble"></a></li>
              <li><a href="#" class="fa fa-behance"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style scoped>
/* footer */
.site-footer {
  /* background: var(--dark-color); */
  background-color:rgb(102, 150, 165);
  padding: 7em 0 6em 0;
}

.site-footer a {
  color: var(--p-color);
}

.site-footer a:hover,
.footer-icon {
  color: var(--secondary-color);
}

.footer-link li {
  display: inline-block;
  list-style: none;
  margin: 0 10px;
}

.copyright-text,
.footer-link,
.site-footer .social-icon {
  margin-top: 6em;
}

.copyright-text {
  margin-top: 5.3em;
}

/*---------------------------------------
     SOCIAL ICON              
  -----------------------------------------*/

.social-icon {
  position: relative;
  padding: 0;
  margin: 4em 0 0 0;
}

.social-icon li {
  display: inline-block;
  list-style: none;
}

.social-icon li a {
  text-decoration: none;
  display: inline-block;
  font-size: var(--base-font-size);
  margin: 10px;
  text-align: center;
}

/*---------------------------------------
     RESPONSIVE STYLES              
  -----------------------------------------*/

@media screen and (min-width: 1200px) {
  .about-info h2 {
    max-width: 70%;
  }
}

@media screen and (min-width: 991px) {
  .project h2 {
    max-width: 32%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 991px) {
  .hero {
    padding-top: 14em;
  }

  .hero-text {
    bottom: 2em;
  }

  .navbar {
    padding: 1em;
  }

  .navbar-collapse {
    text-align: center;
    padding: 2.5em 0;
  }

  .nav-link {
    display: inline-block;
  }

  .navbar-expand-lg .navbar-nav .nav-link.contact {
    margin: 1em 0;
  }

  .copyright-text,
  .footer-link,
  .site-footer .social-icon {
    margin-top: 3em;
    padding: 0;
    text-align: left;
  }
}

@media screen and (max-width: 767px) {
  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 22px;
  }

  .project-info {
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  .footer-link,
  .site-footer .social-icon {
    margin-top: 1em;
  }

  .copyright-text {
    margin: 2.5em 0 1em 0;
  }

  .footer-link li {
    margin-left: 0;
  }
}

/* the design of the home page */
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
  background-image: linear-gradient( 135deg, #c7bb769d 10%, #94b3dbb2 100%);
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