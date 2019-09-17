/*
/!*setTimeout(()=>{
    console.log('2 Seconds');
},2000);
const geocode =  (addres,callback) =>{
    const data={
        latitude:0,
        longitude:0
    };
    return data
};
const *!/data = geocode('Kharkiv');*/

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


const add =(first,second,callback) =>{
    console.log('Starting');
  setTimeout(()=>{
      const sum = first + second;
      callback(sum);
      },2000);
};
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
});