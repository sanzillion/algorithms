
// $(document).ready(function(){
//   //console.log("WELCOME FUCKERS!");

//   //set
//   var input = $('#in');

//     input.on("keydown", function(e){
//       console.log("Inside function!");
//       var val = input.val();
//       if(val != ''){
//          if(e.keyCode == 13) //keyCode for Enter Key is 13
//           {
//               $(this).trigger("enterKey");
//           }
//       }
//     })

//   input.bind("enterKey",function(e){
//         var val = input.val();
//         var ans;
//         $('#answer').text(rot13(val));
//   });

//   function rot13(str) { // LBH QVQ VG!
//       var str = str.toUpperCase();
//       var arr = str.split('');
//       for(var i = 0; i < arr.length; i++){
//         arr[i] = arr[i].charCodeAt();
//         if(arr[i] > 64 && arr[i] < 78){
//           arr[i] += 13;
//         }
//         else if(arr[i] > 77 && arr[i] < 91){
//           arr[i] -= 13;
//         }
//         arr[i] = String.fromCharCode(arr[i]);
//       }
//       answer = arr.join('');
//       return answer;
//     }


// });

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
sumFibs(10);

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

function steamrollArray(arr) {
  const flatten = array => array.reduce(
    (acc, val) => acc.concat(
      Array.isArray(val) ? flatten(val) : val
    ),
    []
  );
  return flatten(arr);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

function binary(str){ 
 //initialize array and convert string to array by binary code
 var arr = str.split(' '), phrase = [];
  //for every binary code
  for(var x = 0; x < arr.length; x++){
    //split each number for conversion
    var bin = arr[x].split('');
    var mul = 1;
    var decimal = 0;
    //use the binary array to convert to decimal
    for(var y = bin.length-1; y >= 0; y--){
      decimal = decimal + (parseInt(bin[y]) * mul);
      mul += mul;
    }
    //get the character from the decimal and push into a new array
    phrase.push(String.fromCharCode(decimal));
  }
  //join the new array into a string
  phrase = phrase.join('');
  return phrase;
}

console.log(binary("01000001 01110010 01100101"));


function truthCheck(collection, pre) {
  for(var x = 0; x < collection.length; x++){
    if(collection[x].hasOwnProperty(pre)){
      console.log("This "+collection[x][pre]);
      switch(collection[x][pre]){
        case false: case 0: case null: case undefined: case "":
        case NaN:  return false;
      }
    }else{
      return false;
    }
  }
  return true;
}

console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));

//ADVANCE ALGORITHMS

//EXACT CHANGE
function checkCashRegister(price, cash, cid) {
    var change = cash - price, drawer = {}, total = 0, whole, dec, arr = {}, cent = 0;
    var dollar = {
        whole : [['TWENTY', 20], ['TEN', 10], ['FIVE', 5], ['ONE', 1]],
        dec : [['QUARTER', 25, 0.25], ['DIME', 10, 0.10], ['NICKEL', 5, 0.05], ['PENNY', 1, 0.01]]
    };
    
    //convertion to object from an array of key-value tuples----
      cid.forEach(function(data){
        drawer[data[0]] = data[1];
        total += data[1];
      });

    //------separate whole and decimal--------
    var parts = change.toString().split('.');
    whole = parts[0];
    dec = parts[1];

    //check if the decimal part has only 1 char then add 0
    if(dec.length == 1){ dec = parseInt(dec+'0'); }

    //drawer total
    if (total == change){
        return "Closed";
    }
    else{
        //initial values
        var arg = 1;
        var part = 'whole';
        change_temp = whole;
        var x;

        //loop twice, once if whole num == 0
        for(x = 0; x <= 1; x++){
            if(x == 1 || whole == 0){
                x = 1;
                cent = 0;
                part = 'dec';
                change_temp = dec;
            }

            //while there is still change left
            while(change_temp > 0){
                if(part == 'dec'){
                    arg = 2;
                }
                // console.log(change);

                //see if the drawer has the money for change
                if((drawer[dollar[part][cent][0]] - dollar[part][cent][arg]) > -1){

                    //deduct from the drawer for change and check if its insufficient
                    if((drawer[dollar[part][cent][0]] -= dollar[part][cent][arg]) < 0){
                        return "Insufficient Funds";
                    }

                    // console.log(change_temp+" money "+dollar[part][cent][1]);
                    //check if the number can still accomodate another certain coin
                    if((change_temp - dollar[part][cent][1]) > -1){
                        change_temp -= dollar[part][cent][1];

                        //check if its a new certain coin
                        if(arr[dollar[part][cent][0]] == undefined){
                            arr[dollar[part][cent][0]] = 0;
                        }

                        //increment the certain coin
                        arr[dollar[part][cent][0]] += dollar[part][cent][arg]; 
                    }
                    else{
                        cent++;
                    }
                }
                else{
                    cent++;
                }
            }

        }

        console.log(arr);

        cent = 0;
        change = [];
        for(var key in arr){
            change[cent] = [];
            change[cent][0] = key;
            change[cent][1] = arr[key];
            cent++;
        }
    }

    // Here is your change, ma'am.
    return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

// console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));


function updateInventory(arr1, arr2) {
    //create find function that returns 
    //arr1 index for duplicate
	function find(curr, string){
		var i = [];
		//foreach arr1
		curr.forEach(function(data, index){
			//if the string pass is in arr1
			if(data[1] == string){
				i[0] = index;
				return i;
			}
		});
		return i;
	}

	for(var x = 0; x < arr2.length; x++){
		//get index from duplicate
		var index = find(arr1, arr2[x][1]);
		//if there are duplicate add the values
		if(index.length > 0){
			arr1[index[0]][0] += arr2[x][0];
		}
		//if its unique push into arr1
		else{
			arr1.push(arr2[x]); 
		}
	}

	//sort arr1 in alphabetical order
	//this is reusable
	arr1.sort(function(a,b){
		var a1 = a[1].toUpperCase();
		var b1 = b[1].toUpperCase();
		if(a1 < b1){return -1;}
		if(a1 > b1){return 1;}
		return 0;
	});

    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];


// console.log(updateInventory(curInv, newInv));
console.log(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], 
	[[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]));