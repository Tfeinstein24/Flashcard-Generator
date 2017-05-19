// Set up variables

 var action = process.argv[2];

// Create a constructor function that takes a front and back argument
function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}
// Create new question object
var callBasic = function() {
var collegeFootball = new BasicCard(
    "Who showed up at halftime to help the Mud Dogs win the Bourbon Bowl?", "Bobby Boucher"
);
// Who Showed up at Halftime to help the Mud Dogs win the Bourbon Bowl?""
console.log(collegeFootball.front);
//Answer: Bobby Boucher
console.log(collegeFootball.back);
};
// Create a constructor for a Cloze deletion card
function ClozeCard(fullText, cloze) {
    this.cloze = cloze,
    this.fullText = fullText,
    // partial = modified text
    this.partial = fullText.replace(cloze, "...")
};

// Create new question
var callCloze = function() {
var HtownTrivia = new ClozeCard(
    "Brays Bayou is the stinkiest bayou in the city", "Brays Bayou"
);

// ... is the stinkiest bayou in the city
console.log(HtownTrivia.cloze);
// Brays Bayou is the stinkiest bayou in the city
console.log(HtownTrivia.fullText);

console.log(HtownTrivia.partial)
};
//Create switches to call different cards

switch (action) {
    case 'callCloze':
        callCloze();
        break;

    case 'callBasic':
        callBasic();
        break;       
};







// Starter Code
//var firstPresident = new BasicCard(
    //"Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
//console.log(firstPresident.front); 

// "George Washington"
//console.log(firstPresident.back); 

//var firstPresidentCloze = new ClozeCard(
    //"George Washington was the first president of the United States.", "George Washington");

// "George Washington"
//console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
//console.log(firstPresidentCloze.partial); "

// "George Washington was the first president of the United States.
//console.log(firstPresidentCloze.fullText): "

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
//var brokenCloze("This doesn't work", "oops"); 