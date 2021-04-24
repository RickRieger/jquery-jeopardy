const jeopardyContainer = $('#jeopardy-container');
const moneyArray = ['$100', '$200', '$400', '$600', '$800'];
const idArray = ['row-one', 'row-two', 'row-three', 'row-four', 'row-five']

let dollars = '';
let newQuestionsArray = [];
let showNumbersArray = [];
let ISOLATED_QUESTIONS = [];
let showNum = ''
let questionObject = '';
let questionFocused = '';
let correctAnswer = '';
let userAnswer = '';
let newCategory = '';
let iterationNumForDivIds = 10;



// Using local storage for the game score
let score = window.localStorage.getItem('score');

if (score === null){

    score = 0;

}
else{

    score = parseInt(score);

}
// sets score after checking local storage
$('#score-place-holder').text(score);



// the code below clears local storage
// window.localStorage.clear();