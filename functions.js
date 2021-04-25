// Below function uses an array 0-29 (for the number of squares in the game)
// each iteration a random number (index) is chosen to change the bg color of a div, 
// then that number is discarded.  The "setTimeout" window method allows the user to 
// call a function after a specified number (in milliseconds).

function randomDivColorChange(){
    for (var i = 0; i < 125; i++) {
        
        (function(i) {
            
            const number = random(DIV_index_Numbers_Array);
            
            setTimeout(function() { 
                
                $(jeopardySquaresArray[number]).css('background-color', 'white');
                
                // delete the value chosen from the array of numbers
                i = DIV_index_Numbers_Array.indexOf(number);
                if(i >= 0) {
                    DIV_index_Numbers_Array.splice(i,number);
                }
                
            }, 20 * i);
            
        })(i);
    }
};



// Function that returns a random index # from an array passed in.
const random = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};


//  Levenshtein distance algorithm

//  In information theory, linguistics, and computer science, 
//  the Levenshtein distance is a string metric for measuring the 
//  difference between two sequences. Informally, the Levenshtein 
//  distance between two words is the minimum number of single-character 
//  edits (insertions, deletions or substitutions) required to change one 
//  word into the other. It is named after the Soviet mathematician 
//  Vladimir Levenshtein, who considered this distance in 1965. 
//  Levenshtein distance may also be referred to as edit distance, although 
//  that term may also denote a larger family of distance metrics known 
//  collectively as edit distance. It is closely related to pairwise 
//  string alignments.

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




//  Rieger distance algorithm

// let riegerDistanceAlgo = function(str1, str2) {
//     if(str1 === str2){
//         return 'you good';
//     }
//     else{
//         return 'naw man';
//     }
// };




function updateScoreCorrect(){
    
    // Plays sound when correct answer is given
    $('#right-answer-sound')[0].play()
    
    // Gets rid of any non-alphanumeric characters (regex or regular expression?)
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
    
    //local-browser-storage update!!!
    window.localStorage.setItem('score', score);
};



function updateScoreIncorrect(){
    
    // Plays sound when wrong answer is given
    $('#wrong-answer-sound')[0].play()
    // Gets rid of any non-alphanumeric characters (regex or regular expression?)
    dollars = dollars.replace(/[\W_]+/g,"");
    console.log(dollars);
    score = parseInt(score) - parseInt(dollars);
    if(score < 0){
        $(".score").css('color', 'red');
        // sound to insult player after wrong answer sound
        $("#wrong-answer-sound").on("ended",()=>{
            $('#insult-sound')[0].play();
        }); 
        $("#insult-sound").on("ended",()=>{
            $('#sad-trombone-sound')[0].play();
        });
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
};




function answerIsCorrect(){
    
    timedFunctionShrinkDiv();
    timedFunctionCGetRidOfDiv();
    timedFunctionMakeJeopardyBoardAppear();
    timedFunctionRemoveQuestion();
    $('#results').text('You answered correctly. Congratulations!!!')
    updateScoreCorrect();
    
};


function answerIsNotCorrect(){
    
    timedFunctionShrinkDiv();
    timedFunctionCGetRidOfDiv();
    timedFunctionMakeJeopardyBoardAppear();
    timedFunctionRemoveQuestion();
    $('#results').text(`You answered incorrectly! The correct answer is ${correctAnswer}`);
    updateScoreIncorrect()
    
};



function handleUserAnswer(userAnswer){
    
    userAnswer = userAnswer.toString().toLowerCase();
    correctAnswer = correctAnswer.toString().toLowerCase();
    let results = similarity(userAnswer, correctAnswer);
    console.log(results);
    if (results >= .50){
        answerIsCorrect()
    };
    if (results < .50){
        answerIsNotCorrect()
    };
    
};