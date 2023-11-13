<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<hr />
		<button @click="next">click me</button>
		<h3>welcome {{ username }}</h3>
		<h3>电影名称: {{ movie.title }}</h3>
		<h3>电影主演: {{ movie.actors.join("/") }}</h3>
		<h3>上映时间: {{ movie.showingon }}</h3>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";

	export default defineComponent({
		// 当组件创建时 将自动调用该方法 完成数据的基本配置
		// setup方法return的对象中的数据，在template页面中可以直接使用
		setup() {
			let movie = {
				title: "如果声音不记得",
				actors: ["亮亮", "泡泡", "鑫哥"],
				showingon: "2023-11-12",
			};
			let username = ref("华哥");

			let next = () => {
				username.value = "东哥";
			};
			return { movie, username, next }; // 这个是个object {movie: movie, username: username}
		},
	});
</script>
