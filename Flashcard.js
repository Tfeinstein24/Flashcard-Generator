// Set up variables
// install inquirer npm


// Create a constructor function that takes a front and back argument
function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

var collegeFootball = new BasicCard(
    "Who showed up at halftime to help the Mud Dogs win the Bourbon Bowl?", "Bobby Boucher"
);
// Who Showed up at Halftime to help the Mud Dogs win the Bourbon Bowl?""
console.log(collegeFootball.front);
//Answer: Bobby Boucher
console.log(collegeFootball.back);







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