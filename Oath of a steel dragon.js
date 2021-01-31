var iFileName = "Oath of the steel Dragon [Olaf's Homebrew].js";
RequiredSheetVersion(12.999);

SourceList["OToD"] = {
    name : "Paliadin Oath of steel Dragon",
    abbreviation : "OToD",
    group : "Olaf Tome of Dragons",
};

AddSubClass("paladin", "steel-dragon", {
    regExpSearch : /^(?=.*Steel)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))).*$/i,
    subname : "Oath of the Steel dragon",
    source : ["OToD", 2],
    spellcastingExtra : ["disguise self", "absorb element", "dragons breath", "enlarge", "fear", "nondetection", "freedom of movement", "Leomund's secret chest", "legend lore", "seeming"],
    features : {
        "subclassfeature3" : {
            name : "Channel divinity: Terrifying presence",
            source : ["OToD", 2],
            minlevel : 3,
            description : desc
            ([
                "As an action I roar with all my might. Every creature I choose in 30ft radius must make a Wis save or be frightened by me for 1 min.",
                "They can repeat Wis save at the end of each turn"
            ]),
        },
        "subclassfeature3.1" : {
            name : "Channel divinity: Draconic charm",
            source : ["OToD", 2],
            minlevel : 3,
            description : desc
            ([
                "As an action my voice becomes deep and charming. Each creature o fmy choosing in 30ft radius must make Wis save or be charmed by me for 1 min.",
                "While charmed in this way, they have disadvantage on any perception an investigation checks on everything other than me and cant willingly move away from me.",
                "They can repeat Wis save at the end of each turn"
            ])
        },
        "subclassfeature7" : {
            name : "Aura of presence",
            source : ["OToD", 2],
            minlevel : 7,
            description : desc
            ([
                "Every creature of your choosing within your aura has a bonus to charisma checks equal to your Charisma modifier."
            ]),
            additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
            calcChanges : {

                /* I have no idea how to implement Skill Mod */
            }
        },
        "subclassfeature15" :
            {
                name : "Draconic heritage",
                source : ["OToD", 2],
                minlevel : 15,
                description : desc
                ([
                    "I become more like a steel dragon. I gain resistance to slashing dmg and i also add Cha mod to my melee attacks dmg."
                ]),
                calcChanges : {
                    atkAdd: ["if (isMeleeWeapon) {fields.Description += (fields.Description ? '; ' : '') + '+Cha mod'; }; ", "With my melee weapon attacks I deal an extra Cha mod damage."],
                    atkCalc : ["if (isMeleeWeapon) {output.extraDmg += 5 ; }; "]   /* I used +5 cuz my character have it but have mo idea how to implement Cha Mod */
                },
                dmgres : ["slashing"],
            },
        "subclassfeature20" : {
            name : "Draconic might",
            source : ["OToD", 2],
            minlevel : 20,
            description : desc
            ([
                "You gain immunity to damage from damage associated with your draconic heritage.",
                "You grow in size by 2 sizes.",
                "You gain flying speed equal to 60ft",
                "our strikes deal extra 2d6 damage"
            ]),
            recovery : "long rest",
            usages : 1
        },
    },
});
