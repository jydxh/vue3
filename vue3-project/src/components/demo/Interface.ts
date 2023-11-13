function printLabel(labelObj: { label: string }) {
	console.log(labelObj.label);
}

let data = { label: "标签内容", id: 1 };
printLabel(data);

let data2 = { label: "标签内容2", name: "zs" };
printLabel(data2);
// 去动物园
// {name:string, category:string} 即使对animal数据格式接口的定义
let animal1 = { name: "xiaobai", category: "dog" };
function lookAtAnimal(animal: { name: string; category: string }) {
	console.log(animal.name);
}

lookAtAnimal(animal1);
let dog = { name: "狗", category: "犬科", age: 5 };
lookAtAnimal(dog);

// TS为了更加简洁的对数据接口进行定义，引入了关键字：interface
interface Animal {
	name: string; // 接口定义了动物必须要有name属性
	category?: string; // 接口定义了动物必须要有category属性
	jiaohuan(): void; // 接口定义了动物必须会叫唤
}
function lookAtAnimal2(animal: Animal) {
	console.log(animal.name);
	console.log(animal.category);
}

// 编写一个实现类，实现Animal接口，必须将属性初始化，方法要具体的实现
// 如果实现类中的成员与接口中定义的成员不匹配，则类型验证报错
class Dog implements Animal {
	name: string;
	category: string;

	constructor(name: string, category: string) {
		this.name = name;
		this.category = category;
	}

	jiaohuan() {
		console.log("旺！旺！旺！");
	}
}
// implements 实现 表示带有Animal的规约
class Monkey implements Animal {
	name: string;
	category: string;

	constructor(name: string, category: string) {
		this.name = name;
		this.category = category;
	}
	jiaohuan() {
		console.log("wowowow monkey, monkey");
	}
}

function func(animal: Animal) {
	animal.jiaohuan();
}

func(new Dog("gou", "dog"));
func(new Monkey("gou", "dog"));
func(new Dog("gou", "dog"));
