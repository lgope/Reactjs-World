const truncate = (str, n) => (str.length > n ? str.substr(0, n) + '....' : str);

let sentence = 'Lorem ipsum dolor sit amet consectetur';

console.log(truncate(sentence, 10)); // Lorem ipsu....

// OR

console.log(sentence.length >= 10 ? sentence.substr(0, 10) + '...' : sentence); // Lorem ipsu....
