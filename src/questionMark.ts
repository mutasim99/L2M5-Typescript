//* ? : ternary operator : decision making;
//* ?? : nullish coalescing operator;
//* ?. optional chaining;



/* nullish coalescing operator */

const userTheme = null;

const selectedTheme = userTheme ?? 'light theme'


const userTheme2 = 'green theme';

const selectedTheme2 = userTheme2 ?? 'dark theme'
console.log(selectedTheme, selectedTheme2);
