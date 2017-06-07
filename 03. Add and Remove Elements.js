function addOrRemove(input) {
    let result = [];

    for(let i = 0; i < input.length; i++){
        if(input[i] == 'add'){
            result.push(i+1);
        }
        else if (input[i] == 'remove'){
            result.pop();
        }

    }

    if(result.length == 0){
        console.log('Empty');
    }else{
        console.log(result.join('\n'))
    }



}

addOrRemove(['remove','remove','remove','remove']);