<template>
	<div class="about">
		<h1>This is an about page</h1>
		<hr />
		<span>{{ movie.title }}</span>
		<br />
		<span>{{ actor }}</span>
		<br />
		<br />
		<button @click="doclick()">clike me !</button>
	</div>
</template>

<script lang="ts" setup>
	import { ref, reactive, watch, computed } from "vue";
	const movie = reactive({ title: "三傻大闹宝莱坞", actors: ["xin", "亮"] });
	const actor = computed(() => {
		return movie.actors.join("-");
	});
	function doclick() {
		alert("you clicked!");
	}
</script>
