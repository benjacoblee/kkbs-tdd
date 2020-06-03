/* Given two integer arrays startTime and endTime and given an integer queryTime.

The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive. */

module.exports = busyStudent = function (startTime, endTime, queryTime) {
//   let student = 0;

//   const filteredEndtime = endTime.map((time) => {
//     if (time < queryTime) {
//       return (time = undefined);
//     } else {
//       return time;
//     }
//   });

//   const filteredStartTime = startTime.map((time) => {
//     if (time > queryTime) {
//       return (time = undefined);
//     } else {
//       return time;
//     }
//   });

//   for (let i = 0; i < startTime.length; i++) {
//     if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
//       student++;
//     }
//   }

//   return student;
  
  if (startTime.length !== endTime.length){
    throw new Error("THROW THE ERROR THING")
  }
   
  let student = 0;

  for (let i = 0; i < startTime.length; i++) {
    startTime[i] > queryTime || endTime[i] < queryTime ? student : student++
    
  }
    
    // compare one at a time in order to preserve space in mem

  return student;

//   startTime[i] > queryTime && endTime[i] < queryTime ? continue
};
