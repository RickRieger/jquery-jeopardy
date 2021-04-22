for (i=0;i<QUESTIONS.length;i++){
    if (QUESTIONS[i].showNumber !== showNum){
        showNumbersArray.push(QUESTIONS[i].showNumber)
    }
        showNum = QUESTIONS[i].showNumber
    }
    
    showNum = random(showNumbersArray);


    for (i=0;i<QUESTIONS.length;i++){
        if(QUESTIONS[i].showNumber === showNum){
            ISOLATED_QUESTIONS.push(QUESTIONS[i])
        }
    }
  
    console.log(ISOLATED_QUESTIONS)