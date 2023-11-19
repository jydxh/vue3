<template>
	<router-view v-slot="{ Component }">
		<keep-alive>
			<component v-if="$route.meta.keepAlive" :is="Component"></component>
		</keep-alive>
	</router-view>
	<router-view v-if="!$route.meta.keepAlive"> </router-view>
</template>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
</style>
