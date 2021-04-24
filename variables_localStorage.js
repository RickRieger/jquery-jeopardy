const jeopardyContainer = $('#jeopardy-container');
const moneyArray = ['$100', '$200', '$400', '$600', '$800'];
const idArray = ['row-one', 'row-two', 'row-three', 'row-four', 'row-five']

let dollars = '';
let newQuestionsArray = [];
let showNumbersArray = [];
let ISOLATED_QUESTIONS = [];
let greyedOutSquaresIDsArray = [];
let showNum = ''
let questionObject = '';
let questionFocused = '';
let correctAnswer = '';
let userAnswer = '';
let newCategory = '';
let iterationNumForDivIds = 10;

$('#theme-song')[0].play()



// Using local storage for the game score
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











// let showNum = window.localStorage.getItem('show-num');

// if (showNum === null){
    
// console.log('null-it works--null')
//     for (i=0;i<QUESTIONS.length;i++){
//         if (QUESTIONS[i].showNumber !== showNum){
//             showNumbersArray.push(QUESTIONS[i].showNumber)
//         }
//             showNum = QUESTIONS[i].showNumber
//         }
        
//         showNum = random(showNumbersArray);
    
    
//         for (i=0;i<QUESTIONS.length;i++){
//             if(QUESTIONS[i].showNumber === showNum){
//                 ISOLATED_QUESTIONS.push(QUESTIONS[i])
//             }
//         }
      
//         console.log(ISOLATED_QUESTIONS)
//         window.localStorage.setItem('show-num', showNum);

// }
// else{




// }
// the code below clears local storage
//  
// window.localStorage.clear();

