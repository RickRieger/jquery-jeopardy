
//  Levenshtein distance algorithm
// let recFindEditDistance = function(P, T, i, j) {
//     if (i === undefined || j === undefined) return recFindEditDistance(P, T, P.length - 1, T.length - 1);
//     if (i === 0 && j === 0) return 0;
//     if (i === 0) return j;
//     if (j === 0) return i;

//     let sub = recFindEditDistance(P, T, i-1, j-1) + (P[i]===T[j] ? 0 : 1);
//     let del = recFindEditDistance(P, T, i, j-1) + 1;
//     let add = recFindEditDistance(P, T, i-1, j) + 1;

//     return Math.min(sub, add, del);
// };




let recFindEditDistance = function(str1, str2) {
    if(str1 === str2){
        return 0;
    }
};




function updateScoreCorrect(){
    
    dollars = dollars.replace(/[\W_]+/g,"");
    console.log(dollars);
    score = parseInt(score) + parseInt(dollars);
    console.log(score);
    score = score.toString();
    console.log(score);
    $('#score-place-holder').text(score);
    console.log(score);
    
    //local browser storage update!!!
    window.localStorage.setItem('score', score);
    
}



function updateScoreIncorrect(){
    dollars = dollars.replace(/[\W_]+/g,"");
    console.log(dollars);
    score = parseInt(score) - parseInt(dollars);
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
    
    console.log(userAnswer);
    console.log(correctAnswer);
    
    let LevenshteinDistanceAlgorithmResults = (recFindEditDistance(userAnswer, correctAnswer));
    
    console.log(LevenshteinDistanceAlgorithmResults);
    
    if (LevenshteinDistanceAlgorithmResults < 3){
        answerIsCorrect()
    };
    if (LevenshteinDistanceAlgorithmResults > 3){
        answerIsNotCorrect()
    };
    
};