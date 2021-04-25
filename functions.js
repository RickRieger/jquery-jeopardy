function randomDivColorChange(){
    for (var i = 0; i < 125; i++) {
        (function(i) {
            
            const number = random(DIV_index_Numbers_Array);
            setTimeout(function() { 

                colorChangingDiv = jeopardySquaresArray[number]
                $(colorChangingDiv).css('background-color', 'white');
                
                // delete the value 3 from the array
                
                i = DIV_index_Numbers_Array.indexOf(number);
                if(i >= 0) {
                    DIV_index_Numbers_Array.splice(i,number);
                }

            }, 20 * i);

        })(i);
        
    }
}

const random = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};


//  Levenshtein distance algorithm
let recFindEditDistance = function(P, T, i, j) {
    if (i === undefined || j === undefined) return recFindEditDistance(P, T, P.length - 1, T.length - 1);
    if (i === 0 && j === 0) return 0;
    if (i === 0) return j;
    if (j === 0) return i;

    let sub = recFindEditDistance(P, T, i-1, j-1) + (P[i]===T[j] ? 0 : 1);
    let del = recFindEditDistance(P, T, i, j-1) + 1;
    let add = recFindEditDistance(P, T, i-1, j) + 1;

    return Math.min(sub, add, del);
};




// let recFindEditDistance = function(str1, str2) {
//     if(str1 === str2){
//         return 0;
//     }
//     else{
//         return 5;
//     }
// };





function updateScoreCorrect(){
    $('#right-answer-sound')[0].play()
    dollars = dollars.replace(/[\W_]+/g,"");
    console.log(dollars);
    score = parseInt(score) + parseInt(dollars);
    if(score < 0){
        $(".score").css('color', 'red');
    }
    else{
       $('.score').css('color', 'rgb(223, 223, 0)');
    }

    score = score.toString();
    $('#score-place-holder').text(score);
  
    //local browser storage update!!!
    window.localStorage.setItem('score', score);
}



function updateScoreIncorrect(){
    $('#wrong-answer-sound')[0].play()
    dollars = dollars.replace(/[\W_]+/g,"");
    console.log(dollars);
    score = parseInt(score) - parseInt(dollars);
    if(score < 0){
        $(".score").css('color', 'red');
    }
    else{
       
        $('.score').css('color', 'rgb(223, 223, 0)');
    }
    console.log(score);
    score = score.toString();
    console.log(score);
    $('#score-place-holder').text(score);
    console.log(score);
    //local browser storage update!!!
    window.localStorage.setItem('score', score);
}




function answerIsCorrect(){
    
    timedFunctionShrinkDiv();
    timedFunctionCGetRidOfDiv();
    timedFunctionMakeJeopardyBoardAppear();
    timedFunctionRemoveQuestion();
    $('#results').text('You answered correctly. Congratulations!!!')
    updateScoreCorrect();
    
}


function answerIsNotCorrect(){
    timedFunctionShrinkDiv();
    timedFunctionCGetRidOfDiv();
    timedFunctionMakeJeopardyBoardAppear();
    timedFunctionRemoveQuestion();
    $('#results').text(`You answered incorrectly! The correct answer is ${correctAnswer}`);
    updateScoreIncorrect()
    
}



function handleUserAnswer(userAnswer){
    
    userAnswer = userAnswer.toString().toLowerCase();
    correctAnswer = correctAnswer.toString().toLowerCase();
    
    // Some REGEX to get rid of nonAlphaNumeric characters:)
    userAnswer = userAnswer.replace(/[\W_]+/g," ");
    correctAnswer = correctAnswer.replace(/[\W_]+/g," ");
    
    let LevenshteinDistanceAlgorithmResults = (recFindEditDistance(userAnswer, correctAnswer));
    

    
    if (LevenshteinDistanceAlgorithmResults < 3){
        answerIsCorrect()
    };
    if (LevenshteinDistanceAlgorithmResults > 3){
        answerIsNotCorrect()
    };
    
};