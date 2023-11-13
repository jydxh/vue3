<template>
	<div>
		<h2>测试axios请求</h2>
		<button @click="loadMovies">点我发送请求 加载电影列表</button>
	</div>
</template>

<script lang="ts" setup>
	import myaxios from "@/http/Myaxios";

	const loadMovies = function () {
		// 发送axios请求
		myaxios;
	};
</script>

<style scoped></style>
