enum ROM {
	ROM_6 = "6Gb",
	ROM_8 = "8Gb",
	ROM_12 = "12Gb",
	ROM_16 = "16Gb",
}
enum STORAGE {
	STOR_64 = "64Gb",
	STOR_128 = "128Gb",
	STOR_256 = "256Gb",
	STOR_512 = "512Gb",
}

class Phone {
	title: string;
	price: number;
	weight: number;
	color: string;
	rom: ROM;
	storage: STORAGE;

	constructor(title: string, price: number, weight: number, color: string, rom: ROM, storage: STORAGE) {
		this.title = title;
		this.price = price;
		this.weight = weight;
		this.color = color;
		this.rom = rom;
		this.storage = storage;
	}

	toSTing() {
		return `title: ${this.title}, price: ${this.price}, color: ${this.color}, rom: ${this.rom}, storage: ${this.storage} `;
	}
}

let phone1 = new Phone("小手机", 3999, 500, "red", ROM.ROM_12, STORAGE.STOR_128);

console.log(phone1.toSTing());
