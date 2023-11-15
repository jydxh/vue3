<template>
	<div>
		<!-- 标题栏 -->
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
		<app-header></app-header>

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
		<van-empty>首页</van-empty>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	// 顶部标题栏相关
	const showPopover = ref(false);
	const actions = [{ text: "首页" }, { text: "热点" }, { text: "新闻" }];

	// 顶部导航栏
	const navActive = ref("1");
</script>
<style lang="scss" scoped>
	.nav {
		display: flex;
		align-items: center;
		padding: 0px 15px;
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
