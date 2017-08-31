var UPGRADE_IMAGE_PATH = ["../GameOfThrones/img/upgrade/"];


function UpgradeGame () {
    that = this;
    this.answersCorrect = 0;
    this.answersWrong = 0;
    this.time = 10;

    this._winChecker = function () {
        if (that.answersCorrect == 5) {
            return true;
        } else {
            return false;
        }
    };

    this._lossChecker = function () {
        if (that.answersWrong == 5 || this.time == 0) {
            return true;
        } else {
            return false;
        }
    };
    
}

function Question (image, question1, answer1A, answer1B, answer1C, answer1D, correctAnswer1) {

    this.image = image;
    this.question1 = question1;
    this.answer1A = answer1A;
    this.answer1B = answer1B;
    this.answer1C = answer1C;
    this.answer1D = answer1D;
    this.correctAnswer1 = correctAnswer1;
}

// Questions

var osha = new Question(UPGRADE_IMAGE_PATH + "osha.jpg", "Who is this character?", "Osha", "Yara", "Meera", "Arya", "Osha");

var dolorousEdd = new Question(UPGRADE_IMAGE_PATH + "dolorousEdd.jpg", "What is this character's name?", "Grenn", "Dolorous Edd", "Craster", "Karl Tanner", "Dolorous Edd");

var jayneWesterling = new Question(UPGRADE_IMAGE_PATH + "jayneWesterling.jpg", "Who is this character?", "Ros", "Margary Tyrell", "Shae", "Talisa Stark", "Talisa Stark");

var pyatPree = new Question(UPGRADE_IMAGE_PATH + "pyatPree.jpg", "Where did this character live?", "Meereen", "Braavos", "King's Landing", "Qarth", "Qarth");

var lyannaMormont = new Question(UPGRADE_IMAGE_PATH + "lyannaMormont.jpg", "What relation is she to Ser Jorah Mormont", "Daughter", "Neice", "Aunt", "Cousin", "Cousin");

var longClaw = new Question(UPGRADE_IMAGE_PATH + "longclaw.png", "What is the name of this sword?", "Oathkeeper", "Ice", "Longclaw", "Widow's Wail", "Longclaw");

var gendry = new Question(UPGRADE_IMAGE_PATH + "gendry.jpg", "Who is this character's father?", "Robert Baratheon", "Ned Stark", "Rhaegar Targaryen", "Walder Frey", "Robert Baratheon");

var ygritte = new Question(UPGRADE_IMAGE_PATH + "ygritte.jpg", "What is this character's name?", "Yara", "Sansa", "Ygritte", "Margary Tyrell", "Yrgitte");

var oberynMartell = new Question(UPGRADE_IMAGE_PATH + "oberynMartell.jpg", "Who killed this character?", "The Mountain", "Jon Snow", "Arya Stark", "Joffrey");

// Question methods

var upgradeQuestions = [osha, dolorousEdd, jayneWesterling, pyatPree, lyannaMormont, longClaw, gendry, ygritte, oberynMartell];

function selectQuestion(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

    return array.pop();
}

