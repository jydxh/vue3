/* TS 中的函数 */

function add(x: number, y: number): number {
	return x + y;
}
console.log(add(1, 11));

let myAdd = function (x: number, y: number): number {
	return x + y;
};

console.log(myAdd(1, 19));

let r: number = add(5, 6);
let r2 = myAdd(4, 4); // 类型推论 r2的类型就是方法返回值的类型

function getArea(num: number): number {
	return Number((Math.PI * num ** 2).toFixed(2));
}
let area = getArea(5);
console.log(area);

// 函数的参数
// 调用ts的函数，传递的参数列表必须与函数声明的参数列表保持一致
console.log(add(10, 5));
//console.log(add(10, "5")); //error  数据类型要匹配

//console.log(add(1, 2, 3)); // error 参数数量要匹配

//TS 函数的可选参数
function getMovies(keyword: string, page: number = 1, pagesize?: number) {
	console.log("keywords:" + keyword);
	console.log("page:" + page);
	console.log("pagesize:" + pagesize);
}

getMovies("keller", 1, 100);
getMovies("lake", 1);
getMovies("hello", 22);

// 剩余参数
// TS会把参数列表剩余的参数都封装到一个数组中
function buildName(firstName: string, ...restName: string[]) {
	return firstName + "·" + restName.join("·");
}
console.log(buildName("liang", "xiao", "bai"));

/* 类型断言 */
// 模拟发送请求，得到的响应数据
let resText = '{"code": "200", "mgs": "ok", "data": [1,2,3,4,5]}';

let resObj = JSON.parse(resText);

// 若resObj是any类型 则不会有对应的数据结构的提示
console.log(resObj.code, resObj.mgs);

// 可以对resObj进行一次类型断言 （人工断定数据类型）
let resp: { code: number; msg: string; data: number[] } = JSON.parse(resText);
console.log(resp.data);

let r1: any = 1 + 3; //当类型断言有困难时 用any

let s1: string = r1;
