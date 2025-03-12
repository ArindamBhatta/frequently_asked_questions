/* 
How to visulise the problem 
1st: - create a empty matrix then write index in spiral from


*/

function spiralMatrix(matrix: number[][]): number[] {
    let startRow = 0;
    let endRow = matrix.length - 1;
    let startCol = 0;
    let endCol = matrix[0].length - 1;
    let finalArray: number[] = []; 

    while (startRow <= endRow && startCol <= endCol) {

        // Traverse from left to right
        for (let j = startCol; j <= endCol; j++) {
            finalArray.push(matrix[startRow][j]);
        }
        startRow++;

        // Traverse from top to bottom
        for (let i = startRow; i <= endRow; i++) {
            finalArray.push(matrix[i][endCol]);
        }
        endCol--;


        // Traverse from right to left
        // After the "Top to Bottom" traversal, startRow was incremented, which means startRow might now be equal to endRow (or even greater).
        if (startRow <= endRow) {
            for (let j = endCol; j >= startCol; j--) {
                finalArray.push(matrix[endRow][j]);
            }
            endRow--;
        }

        // Traverse from bottom to top
        if (startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                finalArray.push(matrix[i][startCol]);
            }
            startCol++;
        }
    }

    return finalArray;
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(spiralMatrix(matrix)); 
