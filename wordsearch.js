let _ = require('lodash');


const loopJoin = function(array, word) {
    for (letter of array) {
        if (letter.includes(word)) return true;
    }
};


const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    if (loopJoin(horizontalJoin, word) === true) {
        return true;
    };
    
    let newSearchMatrix = transpose(letters);
    const verticalJoin = newSearchMatrix.map(ls => ls.join(''));
    if(loopJoin(verticalJoin, word) === true) {
        return true;
    }
    return false;
    
};
const transpose = function(matrix) {
    return _.zip(...matrix);
};

// let transpose = function(matrix) {
//     const rows = matrix.length;
//     const cols = matrix[0].length;
//     const grid = [];
//     for (let j = 0; j < cols; j++) {
//     grid[j] = Array(rows);
//     }
//     for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//         grid[j][i] = matrix[i][j];
//     }
//     }
//     return grid;
// };

module.exports = wordSearch;