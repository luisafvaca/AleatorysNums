var arr = [2,3,8,1];

(function aleatorysNums(){
  var e = arr.reduce(function(arrLarge, nums){
    for(var i = 0; i < nums; i++){
     var a = nums;
     a = Math.floor((Math.random() * 10));
     arrLarge.push(a);
   }
   return arrLarge;
  },[])
  console.log(e);
})();

var str = "Hola";

function doubleChart(str){
  var newStr = " ";
  for(var i = 0; i < str.length; i ++){
    newStr = str[i]+ str[i];
  }
}
