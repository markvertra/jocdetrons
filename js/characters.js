function Character(name, surname, affiliation, image, strength, cunning, stamina, charisma) {
    this.name = name;
    this.surname = surname;
    this.affiliation = affiliation;
    this.image = image;
    this.strength = strength;
    this.cunning = cunning;
    this.stamina = stamina;
    this.charisma = charisma;
}

var ramseyBolton = new Character("Ramsey",
                                "Bolton",
                                "Zombie",
                                "../img/characterimages/ramseyBolton.jpg",
                                4, 11, 5, 2

);

var gregorClegane = new Character("Gregor",
                                  "Clegane",
                                  "Zombie",
                                  "../img/characterimages/gregorClegane.jpg",
                                 17, 1, 5, 1
);

var tywinLannister = new Character("Tywin",
                                   "Lannister",
                                   "Zombie",
                                   "../img/characterimages/tywinLannister.jpg",
                                  5, 10, 3, 7
);

var stannisBaratheon = new Character("Stannis",
                                     "Baratheon",
                                     "Zombie",
                                     "../img/characterimages/stannisBaratheon.jpg",
                                    8, 4, 10, 2
);

