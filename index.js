

document.getElementById("submitguess").onclick = function(){
	
var x = document.getElementById("guessField").value;
	// random value generated
	var emptyString = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

while (emptyString.length < 1) {
  emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
} 

if(x == emptyString)
{	
	alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT");
    
}

else
{
	
	alert("OOPS SORRY!! TRY again")
}
}

