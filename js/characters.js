var CHAR_IMAGE_PATH = ["../GameOfThrones/img/characterimages/"];
var CHAR_IMAGE_URLS = [CHAR_IMAGE_PATH + "northerner.jpg",
                       CHAR_IMAGE_PATH + "lannister.jpg",
                       CHAR_IMAGE_PATH + "toughfemale.jpg",
                       CHAR_IMAGE_PATH + "swordwoman.jpg",
                       CHAR_IMAGE_PATH + "femalemacer.jpg",
                       CHAR_IMAGE_PATH + "spearknight.jpg"];

function Character(name, surname, affiliation, image, strength, cunning, stamina, charisma) {
    this.name = name;
    this.surname = surname;
    this.affiliation = affiliation;
    this.image = image;
    this.strength = strength;
    this.cunning = cunning;
    this.stamina = stamina;
    this.charisma = charisma;

    this.health = 100 + this.stamina * 5;
}

var ramseyBolton = new Character("Ramsey",
                                "Bolton",
                                "Zombie",
                                CHAR_IMAGE_PATH + "ramseyBolton.jpg",
                                4, 11, 5, 2

);

var gregorClegane = new Character("Gregor",
                                  "Clegane",
                                  "Zombie",
                                CHAR_IMAGE_PATH + "gregorClegane.jpg",
                                 14, 1, 11, 1
);

var tywinLannister = new Character("Tywin",
                                   "Lannister",
                                   "Zombie",
                                CHAR_IMAGE_PATH + "tywinLannister.jpg",
                                  5, 10, 3, 7
);

var stannisBaratheon = new Character("Stannis",
                                     "Baratheon",
                                     "Zombie",
                                CHAR_IMAGE_PATH + "stannisBaratheon.jpg",
                                    8, 4, 10, 2
);

