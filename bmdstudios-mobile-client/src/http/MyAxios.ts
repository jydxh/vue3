import axios from "axios";
const instance = axios.create(); // 创建axios实例
import qs from "qs";
import { createApp } from "vue";
import { showLoadingToast, closeToast } from "vant";
import "vant/es/toast/style";

interface Response {
	code: number;
	msg: string;
	data?: any;
}

/* 拦截请求 */
instance.interceptors.request.use(config => {
	showLoadingToast({
		message: "loading...",
		duration: 0,
		forbidClick: true,
	});
	return config;
});
/* 拦截response */
instance.interceptors.response.use(res => {
	closeToast();
	return res;
});
const myaxios = {
	/** 用于发送get请求
	 *  url: 请求资源路径
	 *  params: 请求参数（Object形式）
	 */
	get(url: string, params?: object): Promise<Response> {
		return instance({
			url,
			method: "get",
			params,
		});
	},

	/**
	 * 用于发送post请求
	 * @param {String} url   请求资源路径
	 * @param {Object} params   请求参数（对象类型）
	 * @returns Promise<Response>
	 */
	post(url: string, params?: object): Promise<Response> {
		return instance({
			url,
			method: "post",
			data: qs.stringify(params),
		});
	},
};

export default myaxios;
