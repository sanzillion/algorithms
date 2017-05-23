
$(document).ready(function(){
  //console.log("WELCOME FUCKERS!");

  //set
  var input = $('#in');

    input.on("keydown", function(e){
      console.log("Inside function!");
      var val = input.val();
      if(val != ''){
         if(e.keyCode == 13) //keyCode for Enter Key is 13
          {
              $(this).trigger("enterKey");
          }
      }
    })

  input.bind("enterKey",function(e){
        var val = input.val();
        var ans;
        $('#answer').text(rot13(val));
  });

  function rot13(str) { // LBH QVQ VG!
      var str = str.toUpperCase();
      var arr = str.split('');
      for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].charCodeAt();
        if(arr[i] > 64 && arr[i] < 78){
          arr[i] += 13;
        }
        else if(arr[i] > 77 && arr[i] < 91){
          arr[i] -= 13;
        }
        arr[i] = String.fromCharCode(arr[i]);
      }
      answer = arr.join('');
      return answer;
    }


});

//get the difference of two arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  for(var x = arr1.length; x > -1; x--){
    for(var y = arr2.length; y > -1; y--){
      //console.log("comapring "+ arr1[x] + " and " + arr2[y]);
        if(arr1[x] == arr2[y]){
           arr1.splice(x, 1);
           arr2.splice(y, 1);
           break;
        }
    }
  }
  newArr = arr1.concat(arr2);
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//decimal to roman numeral converter
function convertToRoman(num) {
  var rn = [];
  while(num > 0){
    var x = num - 1000;
    if(x > -1){
      num -= 1000;
      rn.push('M');
    }
    else{
      x = num - 500;
      if(x > -1){
        num -= 500;
        rn.push('D');
      }
      else{
        x = num - 100;
        if(x > -1){
          num -= 100;
          rn.push('C');
        }
        else{
          x = num - 50;
          if(x > -1){
            num -= 50;
            rn.push('L');
          }
          else{
            x = num - 10;
            if(x > -1){
              num -= 10;
              rn.push('X');
            }
            else{
              x = num - 5;
              if(x > -1){
                num -= 5;
                rn.push('V');
              }
              else{
                x = num - 1;
                if(x > -1){
                  num -= 1;
                  rn.push('I');
                }
                else{
                  break;
                }
              }
            }
          }
        }
      }
    }
  }
  var len = rn.length;
  var test = 0;
  var l;
  var curr;
  var pre;
  while(test < 5){
    y = 1;
    l = rn.length;
    while(true){
      curr = rn[l-1];
      pre = rn[l-2];
      p = rn[l-3];
      if(curr == pre){
        y++;
      }
      else{
        y = 1;
      }
      l -= 1;
      if(y >= 4){
        convert(curr, p);
        break;
      }
      if(l <= 1){
        test = 5;
        break;
      }
    }
    test++;
  }
  function convert(cur, pr){
    switch(cur){
      case 'I':
        if(pr == 'V'){
          rn.splice(rn.indexOf('V'), 5, 'IX');
        }
        else{
          rn.splice(rn.indexOf('I'), 4, 'IV');
        }
        break;
      case 'X':
        if(pr == 'L'){
          rn.splice(rn.indexOf('L'), 5, 'XC');
        }
        else{
          rn.splice(rn.indexOf('X'), 4, 'XL');
        }
        
        break;
      case 'C':
        if(pr == 'D'){
          rn.splice(rn.indexOf('D'), 5, 'CM');
        }
        else{
          rn.splice(rn.indexOf('C'), 4, 'CD');
        }
        break;
      default:
        break;
    }
  }
  rn = rn.join('');
  return rn;
}
convertToRoman(36);

//navigating through dynamic objects
function whatIsInAName(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  for(var x = 0; x < collection.length; x++){
    var test = 0;
    for(var y = 0; y < keys.length; y++){
      if(collection[x].hasOwnProperty(keys[y])){
        if(collection[x][keys[y]] == source[keys[y]]){
          test++;
          if(test == keys.length){
            arr.push(collection[x]);
          }
        }
      }
    }
  }
  return arr;
}

//using charcodeat indexOf split join methods
function myReplace(str, before, after) {
  if(before.charCodeAt(0) >= 65 && before.charCodeAt(0) <= 90){
    var array = after.split('');
    array[0] = array[0].toUpperCase();
    after = array.join('');
  }
  var arr = str.split(" ");
  arr.splice(arr.indexOf(before), 1, after);
  str = arr.join(" ");
  return str;
}

//using array - sort and connect arrays using concat
//using arguments in a function
function uniteUnique(arr) {
  var array = [];
  var newarr = [];
  for(var a = 0; a < arguments.length; a++){
    array.push(arguments[a]);
  }
  newarr = array.reduce(
      function(a, b) {
        return a.concat(b);
      },
      []
    );
  for(var x = 0; x < newarr.length; x++){
    for(var y = x+1; y < newarr.length; y++){
      if(newarr[x] == newarr[y]){
         newarr[y] = 0;
      } 
    }
  }
  for(var b = newarr.length; b > -1; b--){
    if(newarr[b] === 0){
      newarr.splice(b, 1);
    }
  }
  return newarr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//replace method
function convertHTML(str) {
  var newstr = str.replace(/[&<>"']/gi, function(char){
    switch(char){
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case '\'': return '&apos;';
    }
  });
  return newstr;
}

//replace method
function spinalCase(str) {
  var arr = str.split('');
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  str = str.toLowerCase();
  str = str.replace(/[ _]/g, '-');
  return str;
}

console.log(spinalCase("The_Andy_Griffith_Show"));

//using charcodeat and fromcharcode 
function fearNotLetter(str) {
  var string;
  var arr = str.split('');
  var charcode;
  var nextchar = arr[0].charCodeAt();
  for(var x = 0; x < arr.length; x++){
    charcode = arr[x].charCodeAt();
    console.log("comparing "+charcode+" and "+nextchar);
    if(charcode != nextchar){
      string = String.fromCharCode(nextchar);
      return string;
    }
    nextchar = arr[x].charCodeAt()+1;
  }
  return string;
}

//fibonacci
function sumFibs(num) {
  var curr = 0;
  var next = 0;
  var total = 0;
  var x = 1;
  while(x <= num){
    curr = next + x;
    if((x%2) == 1){
      total += x;
    }
    next = x;
    x = curr;
  }

  return total;
}

console.log(sumFibs(10));

//find element, using function as parameter

function findElement(arr, func) {
  var arrnum = arr.filter(func);
  num = arrnum[0];
  return num;
}

findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });

//works like a filter
function dropElements(arr, func) {
  var num, len = arr.length;
  for(var x = 0; x < len; x++){
    num = arr.shift();
    if(func(num)) {arr.unshift(num); break;}
  }
  return arr;
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));