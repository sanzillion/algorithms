
$(document).ready(function(){
  console.log("WELCOME FUCKERS!");

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