<template>
	<div>
		<!-- 二级路由占位符 -->
		<router-view />

		<van-tabbar v-model="active" active-color="#f03d37">
			<van-tabbar-item replace to="/home/index">
				<span>电影</span>
				<template #icon="props">
					<img :src="require(`@/assets/tabs/index_${props.active ? 1 : 0}.png`)" alt="" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item replace to="/home/video">
				<span>视频</span>
				<template #icon="props">
					<!-- 好代码，方便阅读 -->
					<img v-show="!props.active" src="@/assets/tabs/video_0.png" alt="" />
					<img v-show="props.active" src="@/assets/tabs/video_1.png" alt="" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item replace to="/home/show">
				<span>演出</span>
				<template #icon="props">
					<img :src="require(`@/assets/tabs/show_${props.active ? 1 : 0}.png`)" alt="" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item replace to="/home/me">
				<span>我的</span>

				<template #icon="props">
					<img v-show="!props.active" src="@/assets/tabs/me_0.png" alt="" />
					<img v-show="props.active" src="@/assets/tabs/me_1.png" alt="" />
				</template>
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	// 底部选项卡相关业务
	const active = ref(0);
</script>
