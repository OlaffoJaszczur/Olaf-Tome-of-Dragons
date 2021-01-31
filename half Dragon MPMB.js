/*If you have any remarks, tel me know in the comment area.*/

var iFileName = "Tome of Monstrous Races: Half-Dragon.js";
RequiredSheetVersion(12.999);

SourceList["OToD"] = {
	name : "Bard College of Names",
	abbreviation : "OToD",
	group : "Olaf Tome of Dragons",
};

RaceList["Half-Dragon"] = {
	regExpSearch : /^(?=.*Half)(?=.*Dragon).*$/i,
	name : "Dragon Half",
	sortname : "Half, Dragon",
	source : ["OToD", 1],
	plural : "Half-Dragons",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Draconic"],
	weapons: ["Natural Claws"],
	vision : [["Darkvision", 60]],
	age : " Can live up to 400 years.",
	height : " normally stand between 7 and 8 feet tall, even in their characteristic hunched posture.",
	weight : " weigh around 300 pounds.",
	savetxt : { resistant : ["lightning"] },
	dmgres : ["Lightning"],
	improvements : "Dragon Half: +2 Charisma, +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 2],
	features : {
		"Natural armor" : {
			name : "natural armor",
			minlevel : 1,
			armorOptions : {
				regExpSearch : /^(?=.*(dragon|draconic))(?=.*(hide|skin|scales|resilience)).*$/i,
				name : "Draconic Resilience",
				source : [["SRD", 45], ["P", 102]],
				ac : 13
			},
			armorAdd : "Draconic Resilience",
			tooltip : ""
		},
		"Natural Claws" : {
			name : "Natural Claws",
			minlevel : 1,
			action : ["action",""],
			tooltip : ""
		}
	},
	trait : "Dragon Half (+1 Constitution, +2 Charisma)\nClaws: I can slash with my Claws for 1d4 slashing damage instead of using unarmed strikes.\nNatural Armor: When not wearing armour my AC is equal 13",
};
WeaponsList["Natural Claws"] = {
	regExpSearch : /^(?=.*Natural)(?=.*Claws).*$/i,
	name : "Natural Claws",
	source : ["OToD", 1],
	list : "melee",
	ability : 1,
	type : "Natural",
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "",
	abilitytodamage : true
};
