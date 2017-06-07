function solve(input) {
    let result = [];
    result.push(Number(input[0]));

    for(let i= 1; i < input.length; i++){
        if(Number(input[i]) >= Number(result[result.length -1])){
            result.push(Number(input[i]));
        }
    }

    console.log(result.join('\n'));
}

solve(['1','3','8','10','10','12','3','2','24']);
