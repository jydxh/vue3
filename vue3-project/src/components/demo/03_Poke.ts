// 扑克牌小游戏

enum SUIT {
	"heitao",
	"hongtao",
	"meihua",
	"fangkuai",
	"wang",
}

enum RANK {
	R3,
	R4,
	R5,
	R6,
	R7,
	R8,
	R9,
	R10,
	RJ,
	RQ,
	RK,
	RA,
	R2,
	Rxiao,
	Rda,
}

// 声明一个类型 描述一张扑克牌
class Card {
	suit: SUIT; // 花色
	rank: RANK;
	constructor(suit: SUIT, rank: RANK) {
		this.suit = suit;
		this.rank = rank;
	}
	toString() {
		return SUIT[this.suit] + RANK[this.rank];
	}
}

let heitaoA = new Card(SUIT.heitao, RANK.RA); // 创建一张黑桃A；
let dawang = new Card(SUIT.wang, RANK.Rda);
console.log(heitaoA.toString());
console.log(dawang.toString());

let cards: Card[] = [];
for (let suit = SUIT.heitao; suit <= SUIT.fangkuai; suit++) {
	for (let rank = RANK.R3; rank <= RANK.R2; rank++) {
		cards.push(new Card(suit, rank));
	}
}

cards.push(new Card(SUIT.wang, RANK.Rxiao));
cards.push(new Card(SUIT.wang, RANK.Rda));

console.log(cards.toString());

//设计玩家
class Player {
	name: string;
	score: number;
	handCards: Card[];
	constructor(name: string) {
		this.name = name;
		this.score = 0;
		this.handCards = [];
	}
	/**当前玩家从炮队中随机抽排 最终牌堆少1张，玩家手牌多一张
	 * @param cards 牌堆 Card[]
	 */
	choupai(cards: Card[]): void {
		let randomIndex = Math.floor(Math.random() * cards.length);
		let deleteCards = cards.splice(randomIndex, 1);
		this.handCards.push(deleteCards[0]);
	}

	/**与另外一个玩家other 比较手中所有的牌的大小，且积分
	 * @param other 另外一个玩家
	 */
	pk(other: Player) {
		for (let i = 0; i < this.handCards.length; i++) {
			let myCard = this.handCards[i];
			let othersCard = other.handCards[i];
			if (myCard.rank > othersCard.rank) {
				this.score++;
			} else if (myCard.rank < othersCard.rank) {
				other.score++;
			}
		}
	}

	toString() {
		return `name: ${this.name}; score: ${this.score};  handcards: ${this.handCards.toString()} `;
	}
}

let xin = new Player("小新");
let liang = new Player("小亮");

while (cards.length != 0) {
	xin.choupai(cards);
	liang.choupai(cards);
}

// pk
xin.pk(liang);
console.log(xin.toString());
console.log(liang.toString());
