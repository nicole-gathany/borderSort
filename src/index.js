let borderSort = function(arr) {
  //two loops because it's a nested array
  let fullArr = [];
  //rows are the number of loops and arrays we need
  let rows = arr.length;
  //columns are the number of empty arrays i need
  let columns = arr[0].length;
  console.log(rows);
  console.log(columns);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      fullArr.push(arr[i][j]);
    }
  }

  let sortedArr = fullArr.concat().sort((a, b) => a - b);
  // console.log(fullArr);
  console.log(sortedArr);
  let outsideArr = [];
  let insideArr = [];

  for (let i = 0; i < rows; i++) {
    outsideArr.push(insideArr);
  }
  //honestly i'm stuck here
  console.log(outsideArr);
  for (let i = 0; i < columns; i++) {
    outsideArr[0].push(sortedArr[i]);

    //outsideArr[i+1].pop()
  }
};

borderSort([
  [15, -66, -18, 99],
  [-80, -36, 90, -10],
  [-59, -37, 82, -33],
  [-15, 26, 61, -2]
]);
//should be:
//this output actually doesn't make any sense
//[[-80,-66,-59,-33],
//[99,-37,-36,-18],
// [61,90,82,-15],
// [26,15,-2,-10]]

borderSort([[9, 4], [6, 8]]);
