let note = "C";

function startQuiz(){
    var scale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    var index = Math.floor(Math.random()*12);
    note =  scale[index];
    document.getElementById("the-note").innerHTML = note;
    document.getElementById("home").style.display = 'none';
    document.getElementById("quiz").style.display = 'block';
}

function checkAnswer(){
    
    var arr = document.querySelectorAll(".note-input");
    var arr2 = getScale(note);
    var isCorrect = true;

    for(var i = 0; i < arr.length; i++){
        console.log(arr2[i]);
        if(isNote(arr[i].value) == false){
            return undefined;
            break;
        }
        if(arr[i].value != arr2[i]){
            isCorrect = false;
            break;
        }
    }

    return isCorrect;
}

function finish(){
    var check = checkAnswer() ;
    if(check != undefined){
        endScreen(check);
    }
}

function easy(){
    //display scale
    //display pattern
    document.getElementById("notes").style.display = 'block';
    document.getElementById("pattern").style.display = 'block';
    startQuiz();
}

function hard(){
    //no need to display scale or pattern
    document.getElementById("notes").style.display = 'none';
    document.getElementById("pattern").style.display = 'none';
    startQuiz();
}

function medium(){
    //display pattern
    document.getElementById("notes").style.display = 'none';
    document.getElementById("pattern").style.display = 'block';
    startQuiz();
}

function home(){
    document.getElementById("quiz").style.display = 'none';
    document.getElementById("endScreen").style.display = 'none';
    document.getElementById("home").style.display = 'block';
}
function endScreen(win){
    if(win == true){
        document.getElementById("win-lose").innerHTML = "YOU WIN";
    } else{
        document.getElementById("win-lose").textContent = "YOU LOSE";
    }
    document.getElementById("quiz").style.display = 'none';
    document.getElementById("endScreen").style.display = 'block';

}

function generateScale(){
    var arr = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
}

function getScale(){
    var arr = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    var pattern = [2,2,1,2,2,2,1];
    var scale = new Array(7);
    var index = arr.indexOf(note);
    if(index != -1){
        for(var i = 0; i < 7; i++){
            scale[i] = arr[index];
            index += pattern[i]
            if(index >= arr.length){
                index -= 12;
            }
        }
        return scale;
    }   
    return [""];
}

function isNote(string){
    var arr = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    var index = arr.indexOf(string);
    if (index == -1){
        console.log(string);
        return false;
    }
    return true;
}

