var i =1;
var n =0;
function verif(){
    
    var choice1 = document.getElementById("1").checked;
    var choice2 = document.getElementById("2").checked;
    var choice3 = document.getElementById("3").checked;
    if(choice1==false && choice2==false && choice3==false){
        alert("Please choose your answer");
    }
    else{
        var Quiz = document.getElementById("Quiz");
        if (i==1){
            n=n+ Number(choice2);
            i++;
            Quiz.innerHTML="<div><h1>Quiz</h1><h2>Question 2</h2><h3>Combien de partie y a-t-il dans le Quran ?</h3><label><input type='radio' name='Quran' value='60' id='1'/>60</label><label><input type='radio' name='Quran' value='56' id='2'/>56 </label><label><input type='radio' name='Quran' value='30' id='3'/>30 </label><br><input type='submit' onclick='verif()' class='btn' /></div> ";

        }
        else if (i==2){
            n=n+ Number(choice1);
            i++;
            Quiz.innerHTML="<div><h1>Quiz</h1><h2>Question 3</h2><h3>Combien de page contient chaque partie de Quran ?</h3><label><input type='radio' name='partie' value='10' id='1'/>10</label><label><input type='radio' name='partie' value='15' id='2'/>15 </label><label><input type='radio' name='partie' value='7' id='3'/>7 </label><br><input type='submit' onclick='verif()' class='btn' /> </div>";

        }
        else{
            n=n+ Number(choice1);
            alert ("you made "+n+"/3 correct answers !")
            return(false);
            window.location.reload();
        } 
        
    }

}   