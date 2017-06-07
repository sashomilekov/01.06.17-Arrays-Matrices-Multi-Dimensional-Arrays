function rotate(input) {
    let amount = Number(input[input.length -1]);
    input.pop();

    for(let i = 0; i < amount; i++){
        input.unshift(input[input.length -1]);
        input.pop();
    }

    console.log(input.join(' '));
}

rotate(['1', '2', '3', '4', '2']);

