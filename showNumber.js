showNum = window.localStorage.getItem('show-num');
// showNum = parseInt(showNum);
console.log(showNum)
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