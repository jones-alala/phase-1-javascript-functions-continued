// code your solution here
function saturdayFun(activities = "roller-skate") {
  return `This Saturday, I want to ${activities}!`;
}
console.log(saturdayFun());

function mondayWork(activities = "go to the office") {
  return `This Monday, I will ${activities}.`;
}
console.log(mondayWork());

function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  }
}
console.log(wrapAdjective()("a hard worker"));
console.log(wrapAdjective("||")("a dedicated programmer"));
