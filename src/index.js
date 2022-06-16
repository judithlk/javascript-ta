// complete the function
function prime (num) {
  var i = 2;
  while(i < num){
    var y = num % i;
    if(y == 0){
      return "False"
    }else{
      if(i == (num - 1)){
        return "True";
      };
      i++;
    };
  };
}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
