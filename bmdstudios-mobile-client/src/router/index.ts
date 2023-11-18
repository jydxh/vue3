import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		redirect: "/home/index",
	},

	{
		path: "/home",
		name: "home",
		component: HomeView,
		children: [
			{
				path: "index",
				name: "home",
				component: () => import("../views/home/Index.vue"),
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
		path: "/detail/:id",
		name: "detail",
		component: () => import("../views/home/MovieDetail.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
