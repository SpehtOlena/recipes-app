const RecipesArray = [
	{
		id: 1,
		category: "Супи",
		name: "Борщ",
		ingredients: ["буряк", "картопля", "морква"],
		img: "https://picsum.photos/id/256/300/200",
		allIngredients: ["буряк", "картопля", "морква", "капуста", "цибуля", "м'ясо (зазвичай свинина або яловичина)"],
		description: "Традиційна українська страва зі свіжих овочів, м'яса та буряка.",
		cooking: ["1. Приготуйте бульйон з м'яса та овочів.", "2. Додайте буряк та картоплю і варіть до готовності.", "3. Додайте інші овочі і варіть далі.", "4. Подавайте гарячим із сметаною та хлібом."]
	},
	{
		id: 2,
		category: "Основні страви",
		name: "Паста карбонара",
		ingredients: ["спагетті", "бекон", "яйця"],
		img: "https://picsum.photos/id/257/300/200",
		allIngredients: ["спагетті", "бекон", "яйця", "пармезан", "чорний перець"],
		description: "Класична італійська страва з спагетті, бекону, сиром та яйцями.",
		cooking: ["1. Спагетті варіть до готовності в киплячій солоній воді.", "2. Обсмажте бекон на сковороді до золотистої скоринки.", "3. Зберіть соус з яєць та пармезану.", "4. Приберіть спагетті до соусу і перемішайте.", "5. Подаємо з чорним перцем сверху."]
	},
	{
		id: 3,
		category: "Салати",
		name: "Салат Цезар",
		ingredients: ["куряче філе", "листовий салат", "грінки"],
		img: "https://picsum.photos/id/258/300/200",
		allIngredients: ["куряче філе", "листовий салат", "грінки", "пармезан", "соус Цезар"],
		description: "Популярний американський салат з куркою, грінками, сиром та соусом Цезар.",
		cooking: ["1. Обсмажте куряче філе на сковороді до готовності.", "2. Розріжте листовий салат та перекладіть на тарілку.", "3. Додайте куряче філе та грінки.", "4. Приправте соусом Цезар і посипте пармезаном.", "5. Перемішайте і подавайте."]
	},
	{
		id: 4,
		category: "Основні страви",
		name: "Суші",
		ingredients: ["рис", "риба", "огірок"],
		img: "https://picsum.photos/id/259/300/200",
		allIngredients: ["рис", "риба (наприклад, лосось або тунець)", "огірок", "авокадо", "норі"],
		description: "Традиційна японська страва з рису, риби та морепродуктів.",
		cooking: ["1. Приготуйте рис відповідно до інструкції на упаковці.", "2. Розгорніть норі-лист та розподіліть рис по поверхні.", "3. Додайте нарізану рибу і огірок.", "4. Скрутіть ролик і наріжте на шматочки.", "5. Подаємо з соєвим соусом та васабі."]
	},
	{
		id: 5,
		category: "Основні страви",
		name: "Стейк",
		ingredients: ["м'ясо", "олія", "спеції"],
		img: "https://picsum.photos/id/260/300/200",
		allIngredients: ["м'ясо (зазвичай яловичина або свинина)", "олія", "спеції"],
		description: "Смажений кусок м'яса з соковитими та смачними шматками.",
		cooking: ["1. Приготуйте м'ясо на грилі або на сковороді з обох боків.", "2. Додайте олію та спеції для смаку.", "3. Подаємо з печеними овочами та картоплею."]
	},
	{
		id: 6,
		category: "Основні страви",
		name: "Пельмені",
		ingredients: ["м'ясний фарш", "тісто", "спеції"],
		img: "https://picsum.photos/id/261/300/200",
		allIngredients: ["м'ясний фарш (зазвичай яловичина або свинина)", "тісто"],
		description: "Традиційна російська страва з м'ясним фаршем у тонкому тісті.",
		cooking: ["1. Розкатайте тісто і виріжте кружечки.", "2. Начиніть пельмені м'ясним фаршем.", "3. Скип'ятіть воду та додайте пельмені.", "4. Варіть до готовності.", "5. Подаємо зі сметаною."]
	},
	{
		id: 7,
		category: "Салати",
		name: "Грецький салат",
		ingredients: ["помідори", "огірки", "оливки"],
		img: "https://picsum.photos/id/263/300/200",
		allIngredients: ["помідори", "огірки", "оливки", "болгарський перець", "сир Фета", "оливкова олія"],
		description: "Класичний салат з оливками, огірками, помідорами, сиром Фета та грецьким соусом.",
		cooking: ["1. Наріжте овочі та сир Фета.", "2. Змішайте разом з оливками.", "3. Полийте оливковою олією.", "4. Приправте за смаком і перемішайте."]
	},
	{
		id: 8,
		category: "Основні страви",
		name: "Лазанья",
		ingredients: ["м'ясний соус", "білий соус", "сир моцарелла"],
		img: "https://picsum.photos/id/248/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: ["1. Приготуйте м'ясний соус та білий соус.", "2. Випікайте пластівці лазаньї.", "3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.", "4. Пекти в духовці до золотистої корочки."]
	},
	{
		id: 9,
		category: "Основні страви",
		name: "Голубці",
		ingredients: ["м'ясний фарш", "капуста", "рис"],
		img: "https://picsum.photos/id/201/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: ["1. Приготуйте м'ясний соус та білий соус.", "2. Випікайте пластівці лазаньї.", "3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.", "4. Пекти в духовці до золотистої корочки."]
	},
	{
		id: 10,
		category: "Основні страви",
		name: "Чізбургер",
		ingredients: ["м'ясний фарш", "булка", "кетчуп"],
		img: "https://picsum.photos/id/213/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: ["1. Приготуйте м'ясний соус та білий соус.", "2. Випікайте пластівці лазаньї.", "3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.", "4. Пекти в духовці до золотистої корочки."]
	},
	{
		id: 11,
		category: "Основні страви",
		name: "Біф Велінгтон",
		ingredients: ["Телятина", "печериці", "тісто"],
		img: "https://picsum.photos/id/208/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: ["1. Приготуйте м'ясний соус та білий соус.", "2. Випікайте пластівці лазаньї.", "3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.", "4. Пекти в духовці до золотистої корочки."]
	},
	{
		id: 12,
		name: "Палюшки",
		category: "Основні страви",
		ingredients: ["картопля", "борошно", "сметана"],
		img: "https://picsum.photos/id/238/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
	},
	{
		id: 13,
		name: "Паелья",
		category: "Основні страви",
		ingredients: ["рис", "мідії", "томати"],
		img: "https://picsum.photos/id/228/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: ["1. Приготуйте м'ясний соус та білий соус.", "2. Випікайте пластівці лазаньї.", "3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.", "4. Пекти в духовці до золотистої корочки."]
	},
	{
		id: 14,
		category: "Супи",
		name: "Бограч",
		ingredients: ["м'ясо", "перець", "томати"],
		img: "https://picsum.photos/id/221/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: ["1. Приготуйте м'ясний соус та білий соус.", "2. Випікайте пластівці лазаньї.", "3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.", "4. Пекти в духовці до золотистої корочки."]
	},
	{
		id: 15,
		category: "Салати",
		name: "Капрезе",
		ingredients: ["томати", "базилік", "сир моцарелла"],
		img: "https://picsum.photos/id/217/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: ["1. Приготуйте м'ясний соус та білий соус.", "2. Випікайте пластівці лазаньї.", "3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.", "4. Пекти в духовці до золотистої корочки."]
	},
	{
		id: 16,
		category: "Десерти",
		name: "Капкейки",
		ingredients: ["борошно", "масло", "вершки"],
		img: "https://picsum.photos/id/218/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: ["1. Приготуйте м'ясний соус та білий соус.", "2. Випікайте пластівці лазаньї.", "3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.", "4. Пекти в духовці до золотистої корочки."]
	},
	{
		id: 17,
		category: "Десерти",
		name: "Тірамісу",
		ingredients: ["маскарпоне", "кава", "савоярді"],
		img: "https://picsum.photos/id/268/300/200",
		allIngredients: ["маскарпоне", "кавас", "савоярді", "яйця"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: ["1. Приготуйте м'ясний соус та білий соус.", "2. Випікайте пластівці лазаньї.", "3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.", "4. Пекти в духовці до золотистої корочки."]
	},
	{
		id: 18,
		category: "Десерти",
		name: "Чурос",
		ingredients: ["тісто", "цукор"],
		img: "https://picsum.photos/id/241/300/200",
		allIngredients: ["тісто", "цукор", "кориця"],
		description: "Помірно солодкий десерт із золотавим кольором.",
		cooking: ["1. Приготуйте тісто та додайте корицю.", "2. Відріжте тісто на смужки і обсмажте у гарячому маслі до золотавого кольору.", "3. Обваляйте в цукрі з корицею.", "4. Подавайте теплим."]
	},
	{
		id: 19,
		category: "Десерти",
		name: "Джелато",
		ingredients: ["молоко", "цукор"],
		img: "https://picsum.photos/id/219/300/200",
		allIngredients: ["молоко", "цукор", "яйця"],
		description: "Італійський м'який морозиво з натуральних інгредієнтів.",
		cooking: ["1. Збийте яйця з цукром.", "2. Зігрійте молоко та додайте до збитих яєць.", "3. Поставте на вогонь і готуйте, помішуючи, до загустіння.", "4. Знять з вогню і охолодіть.", "5. Заморожуйте за допомогою морозильника."]
	},
	{
		id: 20,
		category: "Супи",
		name: "Харчо",
		ingredients: ["рис", "м'ясо", "солодка паприка"],
		img: "https://picsum.photos/id/243/300/200",
		allIngredients: ["рис", "м'ясо", "солодка паприка", "цибуля", "томатна паста", "бульйон"],
		description: "Складний східний суп з м'ясом, рисом та ароматними спеціями.",
		cooking: ["1. Приготуйте бульйон з м'яса та овочів.", "2. Поставте велику каструлю з олією на вогонь і додайте цибулю.", "3. Додайте м'ясо та смажте до золотистого кольору.", "4. Додайте солодку паприку, томатну пасту та рис.", "5. Залити бульйоном та варіть до готовності.", "6. Подавайте гарячим з лавашем або хлібом."]
	},
	{
		id: 21,
		category: "Супи",
		name: "Суп з фрикадельками",
		ingredients: ["фарш", "бульйон", "морква"],
		img: "https://picsum.photos/id/215/300/200",
		allIngredients: ["фарш", "бульйон", "морква", "цільна пшениця", "яйця", "петрушка"],
		description: "Смачний суп з ніжними фрикадельками та овочами.",
		cooking: ["1. Приготуйте фарш, додавши цільну пшеницю, яйця та спеції.", "2. Сформуйте невеликі фрикадельки та обсмажте на сковороді.", "3. Додайте фрикадельки в бульйон разом з нарізаною морквою.", "4. Варіть до готовності.", "5. Подавайте гарячим із зеленню."]
	},
	{
		id: 22,
		category: "Десерти",
		name: "Брауні",
		ingredients: ["шоколад", "цукор", "вершки"],
		img: "https://picsum.photos/id/212/300/200",
		allIngredients: ["шоколад", "цукор", "вершки", "яйця", "борошно", "горіхи"],
		description: "Смачний шоколадний десерт із горіхами та вершками.",
		cooking: ["1. Розтопіть шоколад разом із вершками на водяній бані.", "2. Збийте яйця з цукром та додайте до шоколадної маси.", "3. Додайте борошно та горіхи, перемішайте.", "4. Випікайте в духовці.", "5. Подавайте охолодженим."]
	},
	{
		id: 23,
		category: "Десерти",
		name: "Еклери",
		ingredients: ["тісто", "вершки", "цукор"],
		img: "https://picsum.photos/id/244/300/200",
		allIngredients: ["тісто", "вершки", "цукор", "шоколад", "іриски", "ваніль"],
		description: "Ніжні та аерозольні випічка з вершковим начинням та шоколадним глазур'ю.",
		cooking: ["1. Приготуйте тісто для еклерів.", "2. Випікайте еклери в духовці.", "3. Збийте вершки з цукром та ванілью.", "4. Наповніть еклери вершковим кремом.", "5. Залити шоколадом та прикрасити ірисками.", "6. Подавайте охолодженими."]
	}
];

export default RecipesArray;