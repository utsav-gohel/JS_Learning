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

let promise = new Promise((resolve, reject) => {
  console.log("inside promise");
  setTimeout(() => {
    // console.log("resolved promise in 2 sec");
    resolve("resolved promise in 2 sec");
    // reject("reject promise in 2 sec");
  }, 2000);
})
  .then((val) => {
    console.log(val);
  })
  .then((val) => {
    console.log(val);
  });
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
