<template>
	<div class="home">
		<hr />

		<h3 style="color: red">测试watch监听</h3>
		<input type="text" v-model="name" />
		<p>{{ name }}</p>
		<hr />
		<h3 style="color: red">test the computed attribute</h3>
		总价格为： （单价） {{ price }} * (数量)
		<button @click="numDec">-</button>
		{{ num }}
		<button @click="num++">+</button>
		={{ total }}
		<hr />
		<button @click="minus" :disabled="n < 1">-</button>

		{{ n }}
		<button @click="plus">+</button> &nbsp;
		<button @click="n = 1">reset</button>
		<hr />
		<button @click="next">toggle user</button>
		<h3>welcome {{ username }}</h3>
		<h3>电影名称: {{ movie.title }}</h3>
		<h3>电影主演: {{ movie.actors.join("/") }}</h3>
		<h3>上映时间: {{ movie.showingon }}</h3>
	</div>
</template>

<script lang="ts">
	import { computed } from "@vue/reactivity";
	import { defineComponent, reactive, ref, watch } from "vue";

	export default defineComponent({
		// 当组件创建时 将自动调用该方法 完成数据的基本配置
		// setup方法return的对象中的数据，在template页面中可以直接使用
		setup() {
			let plus = () => {
				n.value++;
			};
			let minus = () => {
				n.value--;
			};
			let n = ref(1);
			let movie = reactive({
				title: "如果声音不记得",
				actors: ["亮亮", "泡泡", "鑫哥"],
				showingon: "2023-11-12",
			});
			let username = ref("华哥");
			console.log(username);
			let next = () => {
				if (username.value == "华哥") {
					username.value = "东哥";

					// 使用相同方式 更新movie对象的内容
					movie.title = "这个杀手太冷了";
					movie.actors = ["lion"];
				} else {
					username.value = "华哥";
					movie.title = "如果声音不记得";
					movie.actors = ["亮亮", "泡泡", "鑫哥"];
				}
			};
			// 测试计算属性
			const num = ref(3);
			const price = ref(5.5);
			const total = computed(() => {
				return price.value * num.value;
			});
			const numDec = function () {
				if (num.value > 0) {
					num.value--;
				}
			};

			// watch监听，监听文本框中的输入
			const name = ref("");
			watch(name, (newval: string) => {
				// 监听name的变化
				console.log(newval);
				if (newval.length == 6 && /^\d{6}$/.test(newval)) {
					alert("验证通过");
				}
			});
			return { movie, username, next, n, plus, minus, price, num, total, numDec, name }; // 这个是个object {movie: movie, username: username}
		},
	});
</script>
