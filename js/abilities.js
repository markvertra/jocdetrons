function Ability (name, image) {
    this.name = name;
    this.image = image;
}



var swordAttack = new Ability("Sword Attack", "IMAGE");

var shieldDefence = new Ability("Shield Defence", "IMAGE");

var prayer = new Ability("Prayer", "IMAGE");

// Stark

var summonBabyDirewolf = new Ability("Summon Baby Direwolf", "IMAGE");

var summonDirewolf = new Ability("Summon Direwolf", "IMAGE");

// Targaryen

var summonBabyDragon = new Ability("Summon Baby Dragon", "IMAGE");

var summonDragon = new Ability("Summon Dragon", "IMAGE");

// Lannister

var mercenarySupport = new Ability("Mercenary Support", "IMAGE");

var summonBronn = new Ability("Summon Bronn", "IMAGE");

// Greyjoy

var summonPirates = new Ability("Summon Pirates", "IMAGE");

var releaseTheKraken = new Ability("Release The Kraken", "IMAGE");

// Dorne

var poisonKnife = new Ability("Poison Knife", "IMAGE");

var summonSandSnakes = new Ability("Summon Sand Snakes", "IMAGE");

// Mountain

var faceCrusher = new Ability("Facecrusher", "IMAGE");

// Tywin Lannister

var goldenThrow = new Ability("Golden Throw", "IMAGE");

// Stannis

var sacrificeChild = new Ability("Sacrifice Child", "IMAGE");

// Ramsey Bolton

var releaseTheHounds = new Ability("Release the Hounds", "IMAGE");

// NightKing

var zombieDragonAttack = new Ability("Zombie Dragon Attack", "IMAGE");

var AFFILIATION_ABILITY = { Stark : summonBabyDirewolf,
    Lannister: mercenarySupport,
    Targaryen: summonBabyDragon,
    Greyjoy: summonPirates,
    Dorne: poisonKnife};

var AFFILIATION_ABILITY2 = {"Stark" : summonDirewolf,
    "Lannister": summonBronn,
    "Targaryen": summonDragon,
    "Greyjoy": releaseTheKraken,
    "Dorne": summonSandSnakes};