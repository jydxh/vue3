class Book {
	name: string;
	isbn: string;
	publish: string;
	publicDate: string;

	// 构造函数 当使用new Book() 将会调用该构造函数
	constructor(name: string, isbn: string, publish: string, publicDate: string) {
		this.name = name;
		this.isbn = isbn;
		this.publish = publish;
		this.publicDate = publicDate;
	}

	showBook() {
		console.log(`name: ${this.name}, ISBN: ${this.isbn}, Pulisher: ${this.publish}, Pulish on: ${this.publicDate}`);
	}
}

let book1 = new Book("xiaoshidai", "5422df", "新华社", "1994-01-01");
let book2 = new Book("狂飙", "1551dasf", "小朋友", "2000-12-21");
book1.showBook();
book2.showBook();
