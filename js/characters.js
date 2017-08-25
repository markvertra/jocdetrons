var CHAR_IMAGE_PATH = ["../GameOfThrones/img/characterimages/"];
var CHAR_IMAGE_URLS = [CHAR_IMAGE_PATH + "northerner.jpg",
                       CHAR_IMAGE_PATH + "lannister.jpg",
                       CHAR_IMAGE_PATH + "toughfemale.jpg",
                       CHAR_IMAGE_PATH + "swordwoman.jpg",
                       CHAR_IMAGE_PATH + "femalemacer.jpg",
                       CHAR_IMAGE_PATH + "spearknight.jpg"];

var DEFAULT_COOLDOWN = 7000;
var DEFAULT_ATTACK = 20;
var DEFAULT_HEALTH = 100;
var DEFAULT_DEFENCE = 10;
var DEFAULT_SPECIAL = 10;
var HEALTH_MULTIPLIER = 5;

var battlesWon = 0;

var playerOneTimer = 0;
var playerOneAbilityOne = true;
var playerOneAbilityTwo = true;
var playerOneAbilityThree = true;
var playerOneAbilityFour = true;




function Character(name, surname, affiliation, image, strength, cunning, stamina, charisma,
                    abilityOne, abilityTwo, abilityThree, specialAbilityOne, specialAbilityTwo) {
    this.name = name;
    this.surname = surname;
    this.affiliation = affiliation;
    this.image = image;
    this.strength = strength;
    this.cunning = cunning;
    this.stamina = stamina;
    this.charisma = charisma;

    this.health = DEFAULT_HEALTH + this.stamina * HEALTH_MULTIPLIER;

    this.attack = DEFAULT_ATTACK;
    this.specialAttack = DEFAULT_SPECIAL;
    this.defence = DEFAULT_DEFENCE;
    this.cooldownTime = DEFAULT_COOLDOWN - 150 * this.charisma;

    this.abilityOne = abilityOne;
    this.abilityTwo = abilityTwo;
    this.abilityThree = abilityThree;
    this.specialAttack = specialAbilityOne;
    this.specialAttackUpgrade = specialAbilityTwo;
}

var ramseyBolton = new Character("Ramsey",
                                "Bolton",
                                "Zombie",
                                CHAR_IMAGE_PATH + "ramseyBolton.jpg",
                                4, 11, 5, 2,
                                swordAttack,
                                shieldDefence,
                                prayer,
                                releaseTheHounds,
                                releaseTheHounds

);

var gregorClegane = new Character("Gregor",
                                  "Clegane",
                                  "Zombie",
                                CHAR_IMAGE_PATH + "gregorClegane.jpg",
                                 14, 1, 11, 1,
                                 swordAttack,
                                 shieldDefence,
                                 prayer,
                                 faceCrusher,
                                 faceCrusher
);

var tywinLannister = new Character("Tywin",
                                   "Lannister",
                                   "Zombie",
                                CHAR_IMAGE_PATH + "tywinLannister.jpg",
                                  5, 10, 3, 7,
                                  swordAttack,
                                  shieldDefence,
                                  prayer,
                                  goldenThrow,
                                  goldenThrow
);

var stannisBaratheon = new Character("Stannis",
                                     "Baratheon",
                                     "Zombie",
                                CHAR_IMAGE_PATH + "stannisBaratheon.jpg",
                                    8, 4, 10, 2,
                                    swordAttack,
                                    shieldDefence,
                                    prayer,
                                    sacrificeChild,
                                    sacrificeChild
);

var nightKing = new Character("Night",
                              "King",
                              "Zombie",
                                CHAR_IMAGE_PATH + "nightking.jpg",
                                    10, 10, 10, 10,
                                    swordAttack,
                                    shieldDefence,
                                    prayer,
                                    zombieDragonAttack,
                                    zombieDragonAttack);

