/*
 * @param {Array<{data: Object}>} sessions
 * @return {Object}
 */

/**
 * sessions = [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];} sessions 
 */
//Requirements
//1. sessions is an array of objects. Don't modify this sessions array.
//6. If the user is the same, follow the first occurrence of the user in the sessions array.
//2. If the user is the same in multiple objects, merge the data
//3. The duration should be the sum of all durations with the same user
//4. The equipment should be the unique array of all equipment with the same user
//5. The output should be an object which is an independent with the sessions array.

//Steps

//6. After processing all session, convert the map values to an array and return
export default function mergeDaga(sessions) {
  const updatedMap = new Map(); //1. Create an empty map to store the merged data for each user.
  //2. Iterate through each session in the sessions param
  for (let s of sessions) {
    if (updatedMap.has(s.user)) {
      //4. If the user is already in the map, Update the duration by adding the current session's duration to the existing duration in the map.
      const existedS = updatedMap.get(s.user); //Bring the exsiting session for the user from the map
      existedS.duration += s.duration; //Add up the current session's duration to the existed
      //5. Update the equipment array by merging the current session's and using the set to remove duplications and the converting it back to an array.
      let tempArr = [...existedS.equipment, ...s.equipment];
      existedS.equipment = [...new Set(tempArr)]; //Remove duplication using set, convert it to an arra and assign it back to the existed sessions's equipment
    } else {
      //3. If the user is not in the map, add that object into the map
      updatedMap.set(s.user, { ...s, equipment: [...s.equipment] });
    }
  }
  return [...updatedMap.values()];
}
