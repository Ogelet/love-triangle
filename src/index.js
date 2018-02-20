/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  preferences.forEach(element => {
    if(preferences[preferences[element - 1] - 1] - 1 === preferences.indexOf(element)){
      count++;
      preferences[element - 1] = 0;
      preferences[preferences[element - 1] - 1] = 0;
    };
  });
  return count;
};
