
function writeCards(names,event){
    let messages = [];

    for(let i=0; i<names.length; i++){
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    messages = [...messages,message];
    }

    return messages;
}


function countDown(number){
    while(number >= 0){
        console.log(number);
        number--;
    }
}
