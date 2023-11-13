class Person {
	//person 类
	name: string; // 定义属性名：属性类型
	age: number; // 定义属性名：属性类型
	married?: boolean;
	constructor(name: string, age: number = 18, married?: boolean) {
		this.name = name;
		this.age = age;
		this.married = married;
	}

	//对象的方法
	greet(other?: Person) {
		if (other == undefined) {
			console.log("hello " + this.name + "!");
		} else {
			console.log(`${other.name} hello, i am ${this.name}`);
		}
	}
}

// 通过定义类型Person 创建2个具体的人，拥有独立的内存，保存属性信息

let p1 = new Person("xiaoxin", 28);
let p2 = new Person("xiaobai", 1.2, false);
let p3 = new Person("hauge");
console.log(p1);
console.log(p2);
// console.log(p3);
// console.log(p1.name + "," + p1.age);
// console.log(p2.name + "," + p2.age);
p2.greet();
p2.greet(p1);
