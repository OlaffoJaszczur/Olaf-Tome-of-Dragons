var iFileName = "Bard - College of Names [Olaf trnaslation].js";
RequiredSheetVersion(12.999);

SourceList["OToD"] = {
	name : "Bard College of Names",
	abbreviation : "OToD",
	group : "Olaf Tome of Dragons",
};

AddSubClass("bard", "college of Names", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*names).*$/i,
	subname : "College of Names",
	source : ["OToD", 0],
	features : {
		"subclassfeature3" : {
			name : "True Language Casting",
			source : ["OToD", 0],
			minlevel : 3,
			description : desc
			([
				"When you join the College of Names at 3rd level, you gain the ability to cast certain spells with a mere utterance. When casting a True Language spell, you ignore somatic components and material components with a cost of 10 gp or lower. All such spells require a verbal component, however, even if they normally do not.",
				"A True Language spell is any spell that meets all the following criteria:",
				"-Abjuration, Divination, Enchantment, or Transmutation spell, or a spell that cures hit point damage.",
				"-Targets a single creature or a set number of creatures. For instance, a spell that targets “up to three creatures within 30 feet of you” qualifies, but a spell that targets “all creatures in a 20-foot radius” does not.",
				"-Does not cause hit point or ability damage.",
				"-Does not require an attack roll.",
				"-Either appears on the bard class spell list, or is a spell learned via the bard’s Magical Secrets ability."
			]),
		},
		"subclassfeature3.1" : {
			name : "True Understanding",
			source : ["OToD", 0],
			minlevel : 3,
			description : desc
			([
				"arting at 3rd level, you gain the ability to make a “True Understanding” check against a single target. This is a bonus action, and requires you to spend one use of your Bardic Inspiration.",
				"The target is an unwilling creature, make an opposed Intelligence (Arcana) check against the target’s Constitution or Wisdom saving throws (their choice).",
				"Against a willing target or an unattended non-magical object, your Arcana check is made against a DC 10 (or 8, if you yourself are the target). ",
				"Against a willing target or an unattended non-magical object, your Arcana check is made against a DC 10 (or 8, if you yourself are the target). ",
				"Certain powerful or unique magical items, or an environment with mystical significance, might require higher rolls at the GM’s discretion.",
				"",
				"If you succeed, you gain the following benefits. These apply only to True Language spells that you yourself cast against the target (and apply only to that target, even if the spell that affects more than one):",
				"-Any non-damaging dice, such as dice rolled for healing, bonus or penalty dice (as in the spell bane), caster level checks (as in the spell dispel magic), and so forth, are rolled twice. Use the higher result.",
				"-The spell’s range is doubled.",
				"-If the spell requires concentration, it ends at the end of your turn on the round after you cease concentrating, rather than the moment you cease concentrating (unless you wish it to end earlier).",
				"-If your True Understanding check succeeded by 5 or more, the target has disadvantage on saving throws against your True Language spells.",
				"These effects last for one minute, until the target dies, or until you make a True Understanding check against a different target.",
				"If your True Understanding check fails, you may not attempt a True Understanding check against that same target for 24 hours."
			])
		},
		"subclassfeature6" : {
			name : "Additional Magical Secrets",
			source : ["OToD", 0],
			minlevel : 6,
			description : "\n   " + "At 6th level, you learn two additional spells and one additional cantrip of your choice. These spells may come from any class, but must qualify as True Language spells (see True Language Casting above). A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don’t count against the number of bard spells you know.",
			spellcastingBonus : {
					name : "Additional Magical Secret",
					"class" : "any",
					times : 3
			}
		},
		"subclassfeature14" : 
		{
			name : "Improved Understanding",
			source : ["OToD", 0],
			minlevel : 14,
			description : desc
			([
				"Starting at 14th level, you are only required to spend a use of Bardic Inspiration when making a True Understanding check if the check succeeds. If your attempt fails, no use of Bardic Inspiration is lost.",
				"In addition, you may grant yourself or an ally a Bardic Inspiration die, as per the normal use of the ability, as part of the same bonus action in which you attempt a True Understanding check. (This costs two Inspiration dice, one to activate the True Understanding check and one granted as normal, and is an exception to the rule that you can normally spend only a single use of Bardic Inspiration at a time.)",
				"Once you have used this ability, you must complete a short or long rest before you can do so again."
			]),
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			action : ["bonus action", " (with Bardic inspiration)"]
			
		}
	},
});
