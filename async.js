// const b = prompt("want to run settimeout write Y or N");
// if (b == "Y") {
//   setTimeout(function () {
//     alert("inside to the settimeout");
//   }, 2000);
// } else {
//   clearTimeout();
// }

// const sum = (a, b) => {
//   return a + b;
// };
// setTimeout(() => {
//   alert(sum(10, 30));
// }, 3000);

// setInterval(() => {
//   alert("inside interval");
// }, 2000);

// let mySum = (a, b) => {
//   return a + b;
// };
// let res = mySum(10, 20);
// document.getElementById("sum").innerHTML = res;

// let a = document.getElementById("id1");
// a.addEventListener("click", function () {
//   console.log("event occured");
//   alert("event occured");
// });
// let btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   console.log("clicked");
// });

// //callbacks
// function loadsrc(src, callback) {
//   let srcipt = document.createElement("script");
//   srcipt.src = src;
//   srcipt.addEventListener("load", () => {
//     console.log("Src loaded");
//     callback(null, src);
//   });
//   srcipt.addEventListener("error", () => {
//     console.log("Src not loaded");
//     callback(true, null);
//   });
//   document.body.appendChild(srcipt);
// }
// const isLoaded = (err, val) => {
//   if (err) {
//     alert(new Error("Unable to load src"));
//   } else if (val) {
//     alert("Src loaded " + val);
//   }
// };
// loadsrc(
//   "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js",
//   isLoaded
// );

// const greet = (name, callback) => {
//   console.log("Hi ", name);
// };
// const enrollno = (num) => {
//   console.log("Your enroll no is ", num);
// };
// greet("utsav", enrollno(123456));

// let promise = new Promise((resolve, reject) => {
//   console.log("inside promise");
//   setTimeout(() => {
//     // console.log("resolved promise in 2 sec");
//     resolve("resolved promise in 2 sec");
//     // reject("reject promise in 2 sec");
//   }, 2000);
// })
//   .then((val) => {
//     console.log(val);
//   })
//   .then((val) => {
//     console.log(val);
//   });
// .catch((err) => {
//   console.log(err);
// });

// let promise2 = new Promise((resolve, reject) => {
//   console.log("inside promise");
//   setTimeout(() => {
//     // console.log("resolved promise in 2 sec");
//     // resolve("resolved promise in 2 sec");
//     reject("reject promise in 2 sec");
//   }, 2000);
// })
//   .then((val) => {
//     console.log(val);
//   })
//   .then((val) => {
//     console.log(val);
//   });
// promise2.catch((err) => {
//   console.log(err);
// });

//If we want to get value after every promise resolve then we use promise.all function And this will execute within maximum ms like
//  if one promise have maximum 3000 ms then all promise resolve within 3000 ms
// let prom1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise 1 after 1 sec"); // if we comment this promise then promise.all not going to return any value
//     // reject("promise 1 after 1 sec"); // if we comment this promise then promise.all not going to return any value
//   }, 1000);
// });
// let prom2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise 2 after 2 sec");
//     // reject("promise 2 after 2 sec");
//   }, 2000);
// });
// let prom3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise 3 after 3 sec");
//   }, 3000);
// });

//If any of promise will reject then promise.all not going to work
// let all_promise = Promise.all([prom1, prom2, prom3]).then((val) => {
//   console.log(val);
// });

//this will return 2 states if promise rejected then status will be rejected and return it's value..
// let all_promise = Promise.allSettled([prom1, prom2, prom3]).then((val) => {
//   console.log(val);
// });

//this will return first promise whichever execute first whether it's error/value.
// let all_promise = Promise.race([prom1, prom2, prom3]).then((val) => {
//   console.log(val);
// });

//It will execute only first resolved promise, it not return any reject event.
// let all_promise = Promise.any([prom1, prom2, prom3]).then((val) => {
//   console.log(val);
// });

// let all_promise = Promise.resolve(1).then((val) => {
//   console.log(val);
// });

// let all_promise = Promise.reject(new Error("error in promises")).then((val) => {
//   console.log(val);
// });

// let a = document.getElementById("btn");
// a.addEventListener("click", () => {
//   setTimeout(() => {
//     // document.body.style.backgroundColor = "red";
//   }, 1000);
//   // document.body.style.backgroundColor = "red"
// });

// let button = document.getElementById("btn");
// let id1 = document.getElementById("id1");
// const blue = () => {
//   document.getElementById("btn").style.backgroundColor = "blue";
// };
// const red = () => {
//   document.getElementById("id1").style.backgroundColor = "red";
//   // document.body.style.backgroundColor = "red";
// };

// button.addEventListener("click", blue);
// id1.addEventListener("click", () => {
//   document.getElementById("id1").classList.toggle("visible");
// });

//Async function
// async function myfun() {
//   return 1;
// }

//we can not use then wihtout async keyword in function
// myfun().then((val) => {
//   console.log(val);
// });

//Example of Async Await
// const temp = async () => {
//   let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("26");
//     }, 2000);
//   });
//   let rajkotWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("16");
//     }, 4000);
//   });
//   console.log("fetching delhi weather");
//   let DelhiW = await delhiWeather;
//   console.log("fetching rajkot weather");
//   let rajkotW = await rajkotWeather;
//   console.log("fetched delhi weather " + DelhiW);
//   console.log("fetched rajkot weather " + rajkotW);
//   return [DelhiW, rajkotW];
// };
// const temp1 = () => {
//   console.log("inside Temp1 Function");
// };
// console.log("welcome to weather center");
// let a = temp();
// let b = temp1();
// console.log(a);

//Error handling --- try catch block
// setTimeout(() => {
//   console.log("hacking Wifi Credentials");
// }, 2000);
// try {
//   console.log(utsav);
// } catch (e) {
//   console.log("var utsav not defined");
// }
// setTimeout(() => {
//   console.log("fetching Id and password");
// }, 3000);
// setTimeout(() => {
//   console.log("hacking utsv's Credentials");
// }, 4000);
// setTimeout(() => {
//   console.log("Hacked Wifi Credentials");
// }, 5000);

//Try and catch won't work in settimeout methods, we have to write try and catch within the settimeout function
//this will throw an error as this method won't able to handle errors because we are running script after 2 sec.
// try {
//   setTimeout(() => {
//     console.log(rahul);
//     console.log("error " + e);
//   }, 2000);
// } catch (error) {
//   console.log("error " + error);
// }

//this will handle error as we are writing try and catch inside settimeout
// try {
//   setTimeout(() => {
//     try {
//       console.log(rahul);
//     } catch (e) {
//       console.log("error " + e);
//     }
//   }, 2000);
// } catch (error) {
//   console.log("error " + error);
// }

//Errors objects

// try {
//   // console.log(utsav);
//   throw new ReferenceError("inside block of refError");
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }

//custom errors
// try {
//   let age = prompt("enter your age");
//   age = Number.parseInt(age);
//   if (age > 130) {
//     throw new ReferenceError("INVALID AGE");
//   }
// } catch (e) {
//   console.log(e.name);
//   console.log(e.message);
//   console.log(e.stack);
// }
// console.log("script still runnig");
