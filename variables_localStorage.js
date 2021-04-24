const jeopardyContainer = $('#jeopardy-container');
const moneyArray = ['$100', '$200', '$400', '$600', '$800'];
const idArray = ['row-one', 'row-two', 'row-three', 'row-four', 'row-five']
let DIV_index_Numbers_Array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];

let dollars = '';
let newQuestionsArray = [];
let showNumbersArray = [];
let ISOLATED_QUESTIONS = [];
let greyedOutSquaresIDsArray = [];
let jeopardySquares = [];
let showNum = ''
let questionObject = '';
let questionFocused = '';
let correctAnswer = '';
let userAnswer = '';
let newCategory = '';
let iterationNumForDivIds = 10;

let indexForDivColorChange = 0;
let colorChangingDiv = '';


function randomDivColorChange(){
    for (var i = 0; i < 125; i++) {
        (function(i) {
            
            const number = random(DIV_index_Numbers_Array);
            setTimeout(function() { console.log(jeopardySquares[number].id)
                
                
                
                
                colorChangingDiv = jeopardySquares[number]
                $(colorChangingDiv).css('background-color', 'white');
                
                
                // delete the value 3 from the array
                
                i = DIV_index_Numbers_Array.indexOf(number);
                if(i >= 0) {
                    DIV_index_Numbers_Array.splice(i,number);
                }
                console.log(DIV_index_Numbers_Array)
                
                
                
            }, 20 * i);
        })(i);
        
    }
}



$('#theme-song')[0].play()
$("#theme-song").on("ended",()=>{
    $('#board-full-sound')[0].play();
    randomDivColorChange();
});
$('#board-full-sound').on("ended",()=>{
    $('.jeopardy-children').css('background-color', 'rgb(0, 23, 172)');
});





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

