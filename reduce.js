var arr = [2,3,8,1];

(function aleatorysNums(){
  var e = arr.reduce(function(arrLarge, nums){
    for(var i = 0; i < nums; i++){
     var a = nums;
     a = Math.floor((Math.random() * nums));
     arrLarge.push(a);
   }
   return arrLarge;
  },[])
  console.log(e);
})();
