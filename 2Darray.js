//2D Arrays
const matrix = [[1,2,3],
                [4,5,6],
                [7,8,9],
                ['*',0,'#']]

//print 2d array elements
for(let row of matrix){
    const rowString = row.join(',')
    console.log(rowString);
}
