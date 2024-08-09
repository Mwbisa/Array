const sport=["Teakwondo","Swim","Skate","Volleyball","Gymnastics"];
console.log(sport)

sport.unshift("I love");
console.log(sport);

const between=sport.join(" and ");
console.log(between)

sport.pop();
console.log(sport);

const sport2=[...sport];
sport2.splice(0,2)
console.log(sport2);

const[index0,...more]=sport2;
console.log(index0,more);






