module.exports = function check(str, bracketsConfig) {
  str = str.split("");
  let list = [];
  let openBracketArray = [];
  let closeBracketArray = [];
  let openBracketIndex;
  let closeBracketIndex;
  let equalOpenAndCloseBracket;
  bracketsConfig.forEach((item) => {
    openBracketArray.push(item[0]);
    closeBracketArray.push(item[1]);
  });
  for (let i = 0; i < str.length; i++) {
    bracket = str[i];
    openBracketIndex = openBracketArray.indexOf(bracket);
    closeBracketIndex = closeBracketArray.indexOf(bracket);
    equalOpenAndCloseBracket = closeBracketArray[openBracketIndex] === openBracketArray[openBracketIndex];
    if (openBracketIndex !== -1 && (!equalOpenAndCloseBracket || (equalOpenAndCloseBracket && list.lastIndexOf(openBracketArray[closeBracketIndex]) === -1)))
      list.push(bracket);
    else if (closeBracketIndex !== -1 && list.indexOf(openBracketArray[closeBracketIndex]) !== -1)
      list.splice(list.indexOf(openBracketArray[closeBracketIndex], list.length - 1));
    else if (closeBracketIndex !== -1 && list.indexOf(openBracketArray[closeBracketIndex]) === -1)
      return false;
  }
  if (list.length !== 0)
    return false;
  return true;
};

function check(str, bracketsConfig) {
  str = str.split("");
  let list = [];
  let openBracketArray = [];
  let closeBracketArray = [];
  let openBracketIndex;
  let closeBracketIndex;
  let equalOpenAndCloseBracket;
  bracketsConfig.forEach((item) => {
    openBracketArray.push(item[0]);
    closeBracketArray.push(item[1]);
  });
  for (let i = 0; i < str.length; i++) {
    bracket = str[i];
    openBracketIndex = openBracketArray.indexOf(bracket);
    closeBracketIndex = closeBracketArray.indexOf(bracket);
    equalOpenAndCloseBracket = closeBracketArray[openBracketIndex] === openBracketArray[openBracketIndex];
    if (openBracketIndex !== -1 && (!equalOpenAndCloseBracket || (equalOpenAndCloseBracket && list.lastIndexOf(openBracketArray[closeBracketIndex]) === -1))){
      list.push(bracket);
    }
    else if (closeBracketIndex !== -1 && list.lastIndexOf(openBracketArray[closeBracketIndex]) !== -1){
      list.splice(list.lastIndexOf(openBracketArray[closeBracketIndex]), 1);
    }
    else if (closeBracketIndex !== -1 && list.lastIndexOf(openBracketArray[closeBracketIndex]) === -1){
      return false;
    }
      
  }
  if (list.length !== 0)
    return false;
  return true;
};
str = "((()))()";
bracketsConfig = [['(', ')']];
console.log(check(str, bracketsConfig));