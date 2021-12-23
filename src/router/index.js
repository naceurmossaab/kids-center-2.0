import { createRouter, createWebHistory } from "vue-router";
// import Home from "../components/Home.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import About from "../components/About.vue";
import Forum from "../components/Forum.vue";
import Services from "../components/Services.vue";

const routes = [
	{
		path: "/",
		component: Services,
	},
	{
		path: "/forum",
		component: Forum,
	},
	{
		path: "/signin",
		component: SignIn,
	},
	{
		path: "/signup",
		component: SignUp,
	},
	{
		path: "/about",
		component: About,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
