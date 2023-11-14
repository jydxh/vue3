import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},

	{
		path: "/home",
		name: "home",
		component: HomeView,
		children: [
			{
				path: "index",
				name: "index",
				component: () => import("../views/index/Index.vue"),
			},
			{
				path: "video",
				name: "video",
				component: () => import("../views/video/Video.vue"),
			},
			{
				path: "show",
				name: "show",
				component: () => import("../views/show/Show.vue"),
			},
			{
				path: "me",
				name: "me",
				component: () => import("../views/me/Me.vue"),
			},
		],
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
