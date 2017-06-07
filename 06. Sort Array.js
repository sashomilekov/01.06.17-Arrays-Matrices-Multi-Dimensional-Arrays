function sortArray(input) {

    input.sort((a, b) => (a[0] > b[0]));

   input.sort((a, b) => (a.length - b.length));

    console.log(input.join('\n'));
}

sortArray(['gamma', 'beta', 'alpha']);
