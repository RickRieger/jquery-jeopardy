// Build the category row in Jeopardy board

for(i=0;i<6;i++){
    const jeopardyChild = $(`<div id = "jeopardy-child-${i}" class = "jeopardy-children-top-row">${ISOLATED_QUESTIONS[i].category}</div>`);
    jeopardyContainer.append(jeopardyChild);
    
}


// Build flexBox Jeopardy board 
for (num=0;num<25;num= num+6){

    iterationNumForDivIds = iterationNumForDivIds + 1;

    for(i=0;i<6;i++){
        let category = ISOLATED_QUESTIONS[i].category;
        category = category.replace(/[\W_]+/g,"");
        
        
        const jeopardyChild = $(`<div id = "${category}${iterationNumForDivIds}${i}" class = "jeopardy-children clickable">${ISOLATED_QUESTIONS[num].value}</div>`);
        jeopardyContainer.append(jeopardyChild);
        
    };    
    
};