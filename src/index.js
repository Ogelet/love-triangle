/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  preferences.forEach((element, index) => {
    let secondElement = preferences[element - 1];
    let thirdElement = preferences[secondElement - 1];
    if(thirdElement - 1 === index){
      if(element != secondElement && secondElement != thirdElement){
        count++;
      }
    };
  });
  return count/3;
};
