// check local storage for previous show number 
// selected randomly (an episode of jeopardy).
// If nothing is present, generate a random game show number.

showNum = window.localStorage.getItem('show-num');

if (showNum === null){
   
    for (i=0;i<QUESTIONS.length;i++){
        if (QUESTIONS[i].showNumber !== showNum){
            showNumbersArray.push(QUESTIONS[i].showNumber)
        }
        showNum = QUESTIONS[i].showNumber
    }
    
    showNum = random(showNumbersArray);
    window.localStorage.setItem('show-num', showNum);
    
    
    for (i=0;i<QUESTIONS.length;i++){
        if(QUESTIONS[i].showNumber === showNum){
            ISOLATED_QUESTIONS.push(QUESTIONS[i])
        }
    }
    
    console.log(ISOLATED_QUESTIONS)
    
}
else{
    showNum = parseInt(showNum);
    console.log('number 2')
    for (i=0;i<QUESTIONS.length;i++){
        if(QUESTIONS[i].showNumber === showNum){
            ISOLATED_QUESTIONS.push(QUESTIONS[i])
        }
    }
    
    console.log(ISOLATED_QUESTIONS)
}




// Check local storage for the game score if null, set to 0
// if not, make sure css adjusts accordingly to a positive or negative value.
let score = window.localStorage.getItem('score');

if (score === null){
    
    score = 0;
    
}
else{
    
    score = parseInt(score);
    
}

if(score < 0){
    $(".score").css('color', 'red');
}
else{
    
    $('.score').css('color', 'rgb(223, 223, 0)');
}


// sets score after checking local storage
$('#score-place-holder').text(score);






// the code below clears local storage
// window.localStorage.clear();