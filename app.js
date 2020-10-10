// bài 1

// let a1 = [1,2,"a"];
// let a2 = [1,3,"b"];
// function arrayDiff(array1, array2) {
//     let diff ={};
//     diff.array1 = array1.filter(function(value) {
//         if(array2.indexOf(value) === -1) {
//             return value;
//         }
//     })
//     diff.array2 = array2.filter(function(value) {
//         if(array1.indexOf(value) === -1) {
//             return value;
//         }
//     })

//     diff.concat = diff.array1.concat(diff.array2);

//     return diff;
// }
// console.log( arrayDiff(a1, a2).concat);

// bài 2
// let ip = [
//     {
//         name: "Brsenal",
//         points: 99,
//         GD: 45
//     },
//     {
//         name: "Ahelsea",
//         points: 99,
//         GD: 45
//     },
//     {
//         name: "Manchester United",
//         points: 60,
//         GD: 29
//     },
//     {
//         name: "Liverpool",
//         points: 88,
//         GD: 29
//     },

// ]


// let point = ip.sort(function(a,b){
//     return b.points - a.points
// })
// let gd = point.sort(function(a,b){
//     return b.GD - a.GD
// })
// function alb(a,b) {
//     if(a.name < b.name) {
//         return -1;
//     }
//     if (a.name > b.name) {
//         return 1;
//     }
//     return 0;
// }
// gd.sort(alb);

// function a(x,index) {
//     return {
//         name: x.name,
//         points: x.points,
//         GD: x.GD,
//         position: index+1
//     };
// }
// let table = ip.map(a)
// console.log(table);



// bài 3
// {
//     response_code: 0,
//     results: [
//     {
//     category: "Sports",
//     type: "multiple",
//     difficulty: "easy",
//     question: "In what sport is a &quot;shuttlecock&quot; used?",
//     correct_answer: "Badminton",
//     incorrect_answers: [
//     "Table Tennis",
//     "Rugby",
//     "Cricket"
//     ]
//     },
//     {
//     category: "Sports",
//     type: "multiple",
//     difficulty: "easy",
//     question: "Which team won the 2015-16 English Premier League?",
//     correct_answer: "Leicester City",
//     incorrect_answers: [
//     "Liverpool",
//     "Cheslea",
//     "Manchester United"
//     ]
//     },
//     {
//     category: "Sports",
//     type: "multiple",
//     difficulty: "easy",
//     question: "Who did Steven Gerrard win the Champions League with?",
//     correct_answer: "Liverpool",
//     incorrect_answers: [
//     "Real Madrid",
//     "Chelsea",
//     "Man City"
//     ]
//     },
//     {
//     category: "Sports",
//     type: "multiple",
//     difficulty: "easy",
//     question: "Which country will host the 2022 FIFA World Cup?",
//     correct_answer: "Qatar",
//     incorrect_answers: [
//     "USA",
//     "Japan",
//     "Switzerland"
//     ]
//     },
//     {
//     category: "Sports",
//     type: "multiple",
//     difficulty: "easy",
//     question: "In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?",
//     correct_answer: "1-7",
//     incorrect_answers: [
//     "1-5",
//     "1-6",
//     "2-6"
//     ]
//     }
//     ]
//     }