<template>
	<div>
		<!-- 标题栏 -->
		<van-sticky>
			<van-nav-bar title="百慕大影城">
				<template #right>
					<van-popover v-model:show="showPopover" :actions="actions" placement="bottom-end">
						<template #reference>
							<van-icon name="apps-o" size="22" />
						</template>
					</van-popover>
				</template>
			</van-nav-bar>

			<!--appheader advertisements -->
			<app-header style="background-color: white"></app-header>

			<!-- 顶部导航 -->
			<div class="nav">
				<p>北京</p>
				<span class="arrow"></span>
				<!-- 标签组 -->

				<van-tabs class="tabs" v-model:active="navActive" color="#f03d37">
					<van-tab title="热映" name="1"></van-tab>
					<van-tab title="待映" name="2"></van-tab>
					<van-tab title="经典" name="3"></van-tab>
				</van-tabs>

				<!-- 搜索图标 -->
				<van-icon class="icon" name="search" size="22px" color="#f03d37" style="font-weight: bold" />
			</div>
		</van-sticky>
		<!-- 	<van-empty>首页</van-empty> -->
		<!-- 电影列表 -->
		<movieItem v-for="item in movies" :key="item.id" :movie="item" class="movieItem"></movieItem>
		<div style="height: 50px"></div>
	</div>
</template>

<script lang="ts" setup>
	import { onMounted, ref, reactive } from "vue";
	import httpApi from "@/http";
	import Movie from "@/types/Movie";
	// 顶部标题栏相关
	const showPopover = ref(false);
	const actions = [{ text: "首页" }, { text: "热点" }, { text: "新闻" }];

	// 顶部导航栏
	const navActive = ref("1");

	/* 可以重复调用 */
	const movies = reactive<Movie[]>([]);
	onMounted(() => {
		/* axios 请求数据 */
		httpApi.movieApi.queryByCategoryId({ cid: 1, page: 1, pagesize: 20 }).then(res => {
			console.log(res);
			//将res.data.data.result 中的数组交给template渲染
			movies.push(...res.data.data.result);
		});
	});
</script>
<style lang="scss" scoped>
	.wrapper {
		position: fixed;
	}
	.nav {
		display: flex;
		align-items: center;
		padding: 0px 15px;
		border-bottom: 1px solid #e2e2e2;
		background-color: white;
		> .arrow {
			display: block;
			border: 5px solid transparent;
			border-top-color: gray;
			margin-top: 5px;
			margin-left: 5px;
		}
	}
	.nav > .tabs {
		flex: 1;
		margin: 0 25px;
	}
</style>

<style>
	:root:root {
		--van-nav-bar-background: #f03d37;
		--van-nav-bar-title-text-color: #fff;
		--van-nav-bar-icon-color: #fff;
	}
</style>
