console.log("EXERCISE 1:\n==========\n");

function plus (number){
    return function (plusNumber){
        return plusNumber + number;
    }
}
var plus15 = plus(15);
console.log(plus15(15));

console.log("EXERCISE 2:\n==========\n");
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach(users => console.log(users.name));
console.log("EXERCISE 3:\n==========\n");

  let newUser = users.map((user) => {
    return { name: user.name, score: user.score};
  });

  console.log([newUser]);

  console.log("EXERCISE 4:\n==========\n");

  let activeUsers = users.filter((user) => user.isActive);

  console.log(activeUsers);

  console.log("EXERCISE 5:\n==========\n");

  users.sort((a, b) => b.name - a.name); 

console.log(users);

console.log("EXERCISE 6:\n==========\n");

let avgScore = users.reduce((sum, user) => sum + user.score, 0) / users.length;

console.log(avgScore);