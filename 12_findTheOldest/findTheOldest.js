
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {
  const check = people.forEach(function(item){
if ("yearOfDeath" in item == false) item.yearOfDeath = new Date().getFullYear();})
    
  return people
    .reduce((prev, current) => 
      (prev.yearOfDeath - prev.yearOfBirth) > (current.yearOfDeath - current.yearOfBirth) ? prev : current);
    
};

// Do not edit below this line
module.exports = findTheOldest;

console.log(findTheOldest(people));

/* const check = people.forEach(function(item){

  if ("yearOfDeath" in item == false) item.yearOfDeath = new Date().getFullYear();

  console.log(item);
}) */