const sport=["Teakwondo","Swim","Skate","Volleyball","Gymnastics"];
console.log(sport)
sport.unshift("I love");
console.log(sport);
const between=sport.join(" and ");
console.log(between)
sport.pop();
console.log(sport);
const sport2=["Basketball","Badminton","Water polo","Fitness","Yoga"];
console.log(sport2)
sport2.splice(0,2);
console.log(sport2)
const index0=sport2[0];
console.log(index0)
const indexes=sport2.slice(1,3)
console.log(indexes.toString());
