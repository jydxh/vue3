<template>
	<div>
		<!-- 二级路由占位符 -->
		<router-view />

		<van-tabbar v-model="active" active-color="#f03d37">
			<van-tabbar-item icon="home-o">电影</van-tabbar-item>
			<van-tabbar-item icon="search">视频</van-tabbar-item>
			<van-tabbar-item icon="friends-o">演出</van-tabbar-item>
			<van-tabbar-item icon="setting-o">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	// 底部选项卡相关业务
	const active = ref(0);
</script>
