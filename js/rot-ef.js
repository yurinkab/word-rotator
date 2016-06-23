
//Change the speed of the suspence
var change_speed = 2000;
//change the fadeIn speed
var fadeIn_speed = 500;
//change the fadeOut speed
var fadeOut_speed = 500;

//change projected words
var arr = ["Developer","Designer","Ninja","Unicorn","SuperDude","AL","Yuri"];

////////////////////////////////////
//Dont Touch anything from here on//
////////////////////////////////////

var count = 0;
setInterval(function(){
 $(".keyword").fadeOut(fadeOut_speed,function(){
 $(this).html(arr[count]); 
  count++;

  if(count === arr.length){
    count = 0;
  }
         $(this).fadeIn(fadeIn_speed);
}); 
},change_speed);