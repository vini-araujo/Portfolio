// Vinicius Araujo
// March 30th, 2023
// AP CSP 
// Top 10 most spoken languages

//on events to navigate through screens
onEvent("button1", "click", function( ) {
  setScreen("screen2");
});

//Evaluates Input
onEvent("button2", "click", function( ) {
  var input = getText("dropdown1");
  //Checks if Dropdown is Selected
  if(input != "Chose language"){
    setText("outputTextBox",input + "\nRank: " + getLanguageByRank(input) + "\n" + (getSpeakerPercentage(input)*100).toFixed(2) + "% of the world speaks " +input);  
  }else{
    setText("outputTextBox","PLEASE SELECT A LANGUAGE");
  }
});

//Moves from Home screen to input screen
onEvent("button3", "click", function( ) {
  setScreen("screen1");
});

//Imports Data from Dataset
var speakerList = getColumn("Most Spoken Languages Worldwide", "Speakers in millions");
var languages = getColumn("Most Spoken Languages Worldwide", "Language");


//Returns rank of the language given a language
//language - {string} - a language to search for
//returns - returnValue - rank of language
function getLanguageByRank(language) {
  var returnValue = 0;
  for(var i = 0; i <= languages.length - 1; i++){
    //if a language is selected then the rank will be displayed
    if(languages[i] == language){
      returnValue = i+1;
    }
  }
  //Returns the value of the rank of the selected language
  if(returnValue == 0){
    return;
  }
  //
  else{
    return returnValue;
  }
}

//Returns Percentage of people speaking given language
//language - {string} - a language from data set
//returns - {num} percentage of world who speaks said language
function getSpeakerPercentage(language) {
  return (speakerList[getLanguageByRank(language)-1])/(7200);
}

