//frinkiac

// crt shift i open dev tools in browser
// IIFE imediately invoked function
// $ is js
$(document).ready(function() {
  console.log("doc is ready");
  
  
  
    //console.log("name length f/n =", nameLength)();
   
  $("#clickMe").click(function() {   
    $("#coolNameFactsOutput").html();
    let userName = $("#userName").val();
    console.log("user name = ", userName);
    

    console.log("you clicked the button");
    $("#coolNameFactsOutput").html(reverseName(userName));
    $("#spiritAnimalOutput").html(getSpiritAnimal(userName));
  

      
    });
      });
   
  

function generateCoolNameFacts(userName) {
  let coolFacts = "";

  
  coolFacts = reverseName(userName);
  coolFacts += getSpiritAnimal(userName);
 

  console.log("initialized the'm coolFacts variable: " + coolFacts);

  return coolFacts;
}
  


  function reverseName(name){
    nameReverse=  name.split("").reverse().join("");
    return("Your name reversed is " + nameReverse); 
  }


  
  function getSpiritAnimal(name){
    // flow control: case switch, loop, if/then
    // if (condition)
    // animal based on length of name
    if(name.length <= 3){
      
      var img = document.createElement("img");
      img.setAttribute("src","photos/dragon2.jpg");
      document.body.appendChild(img);

      return "<br>" + "you are a dragon!" 
      
    }
      
    else if(name.length > 7){
      var img = document.createElement("img");
      img.setAttribute("src","photos/pegasus.png");
      document.body.appendChild(img);
      return "<br>" + "you are a pegasus" 
    }

    else{
      var img = document.createElement("img");
      img.setAttribute("src","photos/griffin.jpg");
      document.body.appendChild(img);
      return "<br>" + "you are a griffin"

    }
    
  }