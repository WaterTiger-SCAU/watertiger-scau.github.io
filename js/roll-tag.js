function rollTag() {
	var randomIndex = rollIndex();
	return textArr[randomIndex];
}

function rollIndex() {
	if (countSet.size == textArr.length) {
		countSet.clear();
	}
	var randomIndex = Math.floor(Math.random() * (textArr.length));
	if (countSet.has(randomIndex)) {
		return rollIndex();
	}
	else {
		countSet.add(randomIndex);
		return randomIndex;
	}
}

const textArr = [
	// code
	"Java Developer",
	"Typora User",
	"Happy Coding",
	"Unit test supporter",
	"Defensive programming supporter",
	"CRUD boy",
	"API boy",
	"非常好Markdown 爱来自程序员",
	// game
	"OverWatch Player (<u>@Deprecated</u>)",
	"Pokémon Trainer",
	"咸鱼提督 偶尔回港区看看",
	"Steve -.-",
	"Faze up",
	"“极地战神”",
	"我有魔芋爽",
	// consumer electronics
	"IOS Android 双持用户",
	"MacOS Windows 双持用户",
	"桌搭进修中",
	// no idea
	"胆小好色",
	"筑基中期",
	"Keep Studying (ง •̀_•́)ง",
	"健身计划 启动",
	"<del>明天一定早睡早起</del>"
];

const countSet = new Set();
