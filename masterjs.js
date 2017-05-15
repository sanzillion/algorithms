
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

var num;

function convertToRoman(num){
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
    //console.log("comparing "+curr +" and "+pre);
    if(curr == pre){
      y++;
    }
    else{
      y = 1;
    }
    l -= 1;
    //console.log("y = "+y);
    if(y >= 4){
      convert(curr, p);
      break;
    }
    //console.log("l = "+l);
    if(l <= 2){
      test = 5;
      break;
    }
  }
  test++;
}

function convert(cur, pr){
  console.log("converting...");
  console.log(rn);
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
  console.log("done");
  console.log(rn);
}

rn = rn.join('');
return rn;

}
