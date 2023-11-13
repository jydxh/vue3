<template>
	<div>
		<h2>测试axios请求</h2>
		<button @click="loadMovies">点我发送请求 加载电影列表</button>
		<ul>
			<li v-for="item in movies" :key="item.id">
				<b>标题</b> <span>{{ item.title }}</span> &nbsp;&nbsp;| &nbsp;&nbsp; <b>主演</b> <span>{{ item.star_actor }}</span> &nbsp;&nbsp;| &nbsp;&nbsp;
				<b>上映时间</b> <span>{{ item.showingon }}</span>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
	import myaxios from "@/http/Myaxios";
	import { ref } from "vue";

	// 通过泛型，来指定ref代理的对象中存放的数据的数据类型： any[];
	const movies = ref<any[]>([]);
	const loadMovies = function () {
		// 发送axios请求
		const url = "https://web.codeboy.com/bmdapi/movie-infos";
		let params = { page: 2, pagesize: 10 };
		myaxios.get(url, params).then(res => {
			console.log(res.data.data.result);
			movies.value = res.data.data.result;
		});
	};
</script>

<style scoped>
	ul {
		list-style-type: none;
	}
</style>
