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
		<van-empty>首页</van-empty>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	// 顶部标题栏相关
	const showPopover = ref(false);
	const actions = [{ text: "首页" }, { text: "热点" }, { text: "新闻" }];
	const onSelect = action => showToast(action.text);
</script>

<style>
	:root:root {
		--van-nav-bar-background: #f03d37;
		--van-nav-bar-title-text-color: #fff;
		--van-nav-bar-icon-color: #fff;
	}
</style>
