
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let aResult=[];
  if( Array.isArray(matrix) && matrix.length>0){
     let lResult=0;
     let qRow=matrix.length;
     aResult=matrix[0];
     for(let i=1; i<qRow; i++){
        if (i%2>0){
          lResult=matrix[i].reverse();
        }
        for (j=0; j< matrix[i].length; j++){
           lResult=aResult.push(matrix[i][j]);
        }
          console.log(i,aResult);
     }}
  return aResult;
}
