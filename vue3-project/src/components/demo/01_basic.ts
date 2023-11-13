//体会ts的基本数据类型

let pName: string = "liangliang";
let pAge: number = 18;
let pMarried: boolean = false;
pName = "22";

// 声明一个变量， 描述数组类型的数据
let pHobby: string[] = ["eat", "drink", "play", "sex"]; // 数据类型： string array
let pFav: Array<string> = ["work", "coding", "coding!"];
console.log(pHobby.join(","));
console.log(pFav.join(" - "));

//声明一个元组类型的数据  Tuple内部的元素数据类型可以不同
let params: [string, number, number] = ["killer", 1, 100];
// 一般情况下 用于整合一些不同类型的数据 当做一个整体来进行后续处理
params = ["panda", 1, 222];

// 可以使用元组 简单的描述一个对象
let toy: [string, number, number, string] = ["automan", 20, 500, "plastic"];
toy = ["transmition", 30, 800, "plastic"];

// emurate
//enum 使用枚举类型可以为一组数值赋予友好的名字
// 假设有一组数据存储4个人年龄 18 28 38 48
let yuAge = 18;
let xinAge = 28;
let liangAge = 38;
let huaAge = 48;
// 枚举类型可以非常方便的定义一组数据 保存这些数字 提供了便捷的访问语法
enum Age {
	Xiaoyu = 18,
	Xiaoxin = 28,
	Liang = 38,
	Hua = 48,
}
//定义如上语法 即可定义枚举类型， 类型名称是Age类型 ，包含4个const
console.log("age of Xiaoyu:", Age.Xiaoyu);
console.log("age of Liang :", Age.Liang);

// 何时使用枚举来定义变量？  当编写代码的时候 发现需要提供一组相同类型的数据，且一遍情况下没有什么变化，还希望访问时有更好的代码可读性，就需要使用枚举

// 特殊： 如果没有为每一个枚举名赋值， 则默认从0开始分配，

enum Num {
	numA,
	numB,
	numC,
	numD,
	numE,
}
console.log(Num.numA, Num.numB, Num.numC);
//由于枚举类型有如上特点，所以通常情况下会定义如下枚举类型 方便编码

enum Gender {
	Male,
	Famle,
}
enum OnOff {
	off,
	on,
}
enum Married {
	No,
	yes,
}
console.log("亮亮的婚姻状态：" + Married.yes);
console.log("liangliang gender:" + Gender.Male);
console.log("灯开着的吗？" + OnOff.on);

// 定义一个枚举类型 保存一个URL 后缀路径
enum URLS {
	ACTOR_ADD = "/actor/add",
	ACTOR_LIST = "/actor/add",
	ACTOR_QUERY_BY_NAME = "/actor/query/name",
	ACTOR_DELETE = "/actor/del",
}

let BASEURL = "http://localhost:3010";
console.log(BASEURL + URLS.ACTOR_ADD);
console.log(BASEURL + URLS.ACTOR_LIST);
console.log(BASEURL + URLS.ACTOR_QUERY_BY_NAME);
console.log(BASEURL + URLS.ACTOR_DELETE);

// 枚举类型还支持反查操作
// 查询18岁的是谁
console.log(Age[18]);
console.log(Age[48]);

console.log(Gender[0]);

// Any 数据类型
//有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，
//比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查

let res1: any = { code: 200, msg: "ok", data: ["eat", "play", "sex"] };
let res2: any = { code: 200, msg: "ok", data: { title: "电影名", actor: "wujing" } };

// 一旦变量为any 类型 会使编译器不晓得数据类型结果 没有代码提示
let str: string = '{ "code": "200", "msg": "ok", "data": ["eat", "play", "sex"] }';
res1 = JSON.parse(str);
console.log(res1.code);
