// Grey's out DIV and restricts a click listener
function removeSquareFromJeopardyBoard(elementID){
    console.log(`element ID in remove square from: ${elementID}`)
    $(`#${elementID}`).removeClass('clickable');
    $(`#${elementID}`).css("background-color", "grey");
    $(`#${elementID}`).off("click",mainFunctionWhenSquareIsClicked);
    
}

function mainFunctionWhenSquareIsClicked(){
    
    
    let elementId = $(this).attr("id");
    console.log(`Element id that was clicked: ${elementId}`);
    
    // makes the square greyed out and not 'clickable' by removing the class
    removeSquareFromJeopardyBoard(elementId);
    
    // makes stuff disappear and other stuff appear
    timedFunctionMakeJeopardyBoardDisappear();
    timedFunctionCreateDivToHoldQuestion();
    timedFunctionExpandDiv();
    
    // gradually decreases the opacity of jeopardy
    $('.app').addClass('opacity');
    
    // whatever user clicks on sets value
    dollars = $(this).text();

    // transforms element's id to match corresponding category
    elementId = elementId.replaceAll('_', ' ');
    elementId = elementId.replaceAll('.', '&');
    newCategory = elementId;
    newCategory = newCategory.split('');
    newCategory = newCategory.slice(0, -3);
    newCategory = newCategory.join('');
    console.log(`category is (from element id): ${newCategory}`)
    console.log(`dollar value of box clicked: ${dollars}`);
    
    // sorts all objects accordingly by dollar value into a new array
    for (const question of ISOLATED_QUESTIONS){
        if (question.value === dollars && question.category === newCategory){
            newQuestionsArray.push(question);
        };
    };
    console.log(newQuestionsArray)


    // isolate a random question and random answer from the new array
    // (the random function is in it's own file)
    questionObject = random(newQuestionsArray);
    questionFocused = questionObject.question;
    correctAnswer = questionObject.answer;
    
    // console.log() the question and answer for convenience 
    console.log(questionObject);
    console.log(`The question is: ${questionFocused}`);
    console.log(`The answer is: ${correctAnswer}`);
    
    // make new DOM element to display question
    const newItem = $(`<h3 class = "question">${questionFocused}</h3>`);
    
    // display new DOM element
    timedFunctionPlaceQuestion(newItem);
    AddEventListenerAndGrabUserInput();
    
    // clears the array for the next question (sigh)
    newQuestionsArray = []; 
};




// Build the category row in Jeopardy board
for(i=0;i<6;i++){
    const jeopardyChild = $(`<div id = "jeopardy-child-${i}" class = "jeopardy-children-top-row">${ISOLATED_QUESTIONS[i].category}</div>`);
    jeopardyContainer.append(jeopardyChild);
    
}


// Build flexBox Jeopardy board 
for (const amount of moneyArray){

    newIterationNum = newIterationNum + 1;

    for(i=0;i<6;i++){
        let category = ISOLATED_QUESTIONS[i].category;
        category = category.replaceAll(' ', '_');
        category = category.replaceAll('&', '.');
        
        const jeopardyChild = $(`<div id = "${category}${newIterationNum}${i}" class = "jeopardy-children clickable">${amount}</div>`);
        jeopardyContainer.append(jeopardyChild);
        
    };    
    
};



// what happens when a Jeopardy block is clicked
$('.clickable').on("click" , mainFunctionWhenSquareIsClicked);




