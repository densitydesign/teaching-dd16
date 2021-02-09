

     
  var row7 = [  
   

    '<video src="video/P1.mp4" autoplay></video>',
    '<video src="video/P2.mp4" autoplay></video>',
    '<video src="video/P3.mp4" autoplay></video>',
    '<video src="video/P4.mp4" autoplay></video>',
    '<video src="video/P5.mp4" autoplay></video>',
    '<video src="video/P6.mp4" autoplay></video>',
    '<video src="video/P7.mp4" autoplay></video>',
    '<video src="video/P8.mp4" autoplay></video>',
    '<video src="video/P9.mp4" autoplay></video>',
    '<video src="video/P10.mp4" autoplay></video>',
    '<video src="video/P11.mp4" autoplay></video>',
    '<video src="video/P12.mp4" autoplay></video>',
    '<video src="video/P13.mp4" autoplay></video>',
    '<video src="video/P14.mp4" autoplay></video>',
    '<video src="video/P15.mp4" autoplay></video>',
    '<video src="video/P16.mp4" autoplay></video>',
    '<video src="video/P17.mp4" autoplay></video>',
    '<video src="video/P18.mp4" autoplay></video>',
    '<video src="video/P19.mp4" autoplay></video>',
    '<video src="video/P20.mp4" autoplay></video>',
    '<img src="video/ending1.jpg" />',
    '<img src="video/ending2.jpg" />',
    '<img src="video/ending3.jpg" />',
    '<img src="video/ending4.jpg" />',
     '',
     '',
     '',
     '',
     '',
     '',
     '',
     '',
     '',
     '',
     ''
     ];
     
     
 
     
 
     
     
     

$(document).ready(function() {



var progressbar = $('#progressbar');
value = progressbar.val(); ; //控制进度条进度

var int = -1; //控制主线文字（row7）数组
var ont = -1; //
var ant = -1; //
var ent = -1; //
var count = 0; //用户按键次数




/// moveLeft

function moveLeft(event, direction, distance, duration, fingerCount) {
    
  
    count++; 
         
    //increment progress bar 
    value += 1;  
    addValue = progressbar.val(value); //更新进度条进度
    $('#pagecount').text(""); //更新进度条条旁数字

    if (count == 4) 
    { 
//           $('#start').css('display', 'block'); //引入部分出现
//           $('#row7').css('display', 'none'); //主线不显示
           $('#row7').fadeIn('500');
        $('.start').css('display', 'none');
           $('#start').css('display', 'none');
           $("#loading").css('display', 'none');
           $('#shape').css('display', 'none');
           $('#row7').css('display', 'block');
           int = (int + 1) %row7.length;
        	   $("#row7").html(row7[int]);
        	
        	   if(row7[int] === '')  {
        	 	 $("#row7").css('display', 'none');
        	 	}
         	   else {
         		 $("#row7").css('display', 'block');
//         		 $("#row7").attr('class', 'style28'); 
         		}
           
             
            $("#bgm1").stop("true").delay('2000').queue(function() { 
                    $(this).html('<audio style="display:none;" autoplay ><source src="audio/Ether Oar - The Whole Other.mp3"> </source></audio>');
       
                    $("#bgm1")[0].volume = 0.8; // why not work???StaffordBawlerNocturne.mp3
        
                });
        console.log("count="+count);
        console.log("int="+int);
    }
           
           
     else if (count >= 1 && count <= 3 ) 
     { 
 		
 		 
         $("#flight").stop("true").delay('2000').queue(function() { 
                $(this).html('<audio style="display:none;" autoplay loop="loop"><source src="audio/Digiffects Sound Effects Library - Slow Keyboard Typing.mp3"> </source></audio>');
       
                $("#flight")[0].volume = 0.5; // why not work???
                console.log($("#flight")[0].volume);
        
             });
         $('#start').css('display', 'block'); //引入部分出现
           $('#row7').css('display', 'none'); //主线不显示	
          $("#loading").css('display', 'none');
           $('#shape').css('display', 'none');
         $('.start').css('display', 'none');
         var current = $('.linear.active');
			 var next =  current.next();

				 current.removeClass('active').addClass('hidden');
				 next.removeClass('hidden').addClass('active');
         console.log("count="+count);
        console.log("int="+int);
     }
     

 
        else if ( (count >=5 && count <=7) )
           {
           
//               $('html,body, #row7').animate({scrollTop:0},0);
     
              
               $('#start').css('display', 'none');
		       $('#row7').css('display', 'block').fadeIn('1000');
//      		   ont = (ont + 1) %bckGrd.length;
//        	   $("#bckgrdImage").css({
//        		  'background-image': bckGrd[ont],
//        		  'background-repeat' : 'no-repeat'
//        		}); 
        
//        	   randomRows();
        	
        		// this moves row7 incrementally through the array
        	   int = (int + 1) %row7.length;
        	   $("#row7").html(row7[int]);
        	
        	   if(row7[int] === '')  {
        	 	 $("#row7").css('display', 'none');
        	 	}
         	   else {
         		 $("#row7").hide().fadeIn('500');
//         		 $("#row7").attr('class', 'style28'); 
         		}	
         		
         	//$("#row7").animate({'bottom' : '40%', 'right' : '70%'});
         	console.log("count="+count);
        console.log("int="+int);
	          
        	}   // end if count >= 4 <= 8
        	
        else if ( (count >=9 && count <= 14)||(count >=16 && count <= 27))
           {
     
             
               $('#start').css('display', 'none');
		       $('#row7').css('display', 'block').fadeIn('1000');
//      		
        	
        		// this moves row7 incrementally through the array
        	   int = (int + 1) %row7.length;
        	   $("#row7").html(row7[int]);
        	
        	   if(row7[int] === '')  {
        	 	 $("#row7").css('display', 'none');
        	 	}
         	   else {
         		 $("#row7").hide().fadeIn('500');
//         		 $("#row7").attr('class', 'style28'); 
         		}	
         		
         	//$("#row7").animate({'bottom' : '40%', 'right' : '70%'});
         	console.log("count="+count);
        console.log("int="+int);
	          
        	}   // end if count >= 4 <= 8
    
 	    else if (count == 8) {
             $("#bgm2").stop("true").delay('3000').queue(function() { 
                $(this).html('<audio style="display:none;" autoplay loop="loop"><source src="audio/The Halloween Dawn - Twin Musicom.mp3"> </source></audio>');
                $("#bgm2 audio")[0].volume = 1;
            });
 			$("#bgm1 audio")[0].volume -=0.1;
            
            $('#start').fadeOut('1000');
		    $('#row7').css('display', 'block');
            int = (int + 1) %row7.length;
            $("#row7").html(row7[int]);
        	
        	   if(row7[int] === '')  {
        	 	 $("#row7").css('display', 'none');
        	 	}
         	   else {
         		 $("#row7").hide().fadeIn('500');
//         		 $("#row7").attr('class', 'style28'); 
         		}	
            console.log("count="+count);
        console.log("int="+int);
        }	
    
        else if (count == 15) {
             $("#bgm3").stop("true").delay('3000').queue(function() { 
                $(this).html('<audio style="display:none;" autoplay ><source src="audio/Leoforos Alexandras - Dan Bodan.mp3"> </source></audio>');
                $("#bgm3 audio")[0].volume = 1;
            });
 			$("#bgm1 audio")[0].volume -=0.1;
            
            $('#start').fadeOut('1000');
		    $('#row7').css('display', 'block');
            int = (int + 1) %row7.length;
            $("#row7").html(row7[int]);
        	
        	   if(row7[int] === '')  {
        	 	 $("#row7").css('display', 'none');
        	 	}
         	   else {
         		 $("#row7").hide().fadeIn('500');
//         		 $("#row7").attr('class', 'style28'); 
         		}	
            console.log("count="+count);
        console.log("int="+int);
        }	
//        	    
//
//        
        else 
        	{

        $('#flight').html('');
          $('#train').html('');
          $('#main1').html('');
          $('#main2').html('');

	
				int = -1;
				ont = -1;
				ant = -1;
				ent = -1;
				count = 0;
				
				
				value = 0;  
                addValue = progressbar.val(value);
				
		var current = $('.linear.active');
	    var next =  current.next();
		
		console.log("count="+count);
        console.log("int="+int);
 		
 		 window.location.href = "index.html";
    
      			 }  //end else
//      			 

       }  // end moveLeft




/// moveRight

function moveRight(event, direction, distance, duration, fingerCount) {
    
    
      
         //count = (count + 1);
         
         count--;
         
         
           //increment progress bar 
        value -= 1;  
        addValue = progressbar.val(value);
        
         if (count == 4) 
    { 
//           $('#start').css('display', 'block'); //引入部分出现
//           $('#row7').css('display', 'none'); //主线不显示
           $('#row7').fadeIn('500'); //主线显示
        $('.start').css('display', 'none'); //第一页提示不显示
           $('#start').css('display', 'none'); //intro不显示
           $("#loading").css('display', 'none');
           $('#shape').css('display', 'none');
           $('#row7').css('display', 'block');
           int = (int - 1) %row7.length;
        	   $("#row7").html(row7[(count-4)]);
        	
        	   if(row7[int] === '')  {
        	 	 $("#row7").css('display', 'none');
        	 	}
         	   else {
         		 $("#row7").css('display', 'block');
//         		 $("#row7").attr('class', 'style28'); 
//                $("#linear4").removeClass('hidden').addClass('active');
         		}
           
             
            $("#bgm1").stop("true").delay('2000').queue(function() { 
                    $(this).html('<audio style="display:none;" autoplay ><source src="audio/Ether Oar - The Whole Other.mp3"> </source></audio>');
       
                    $("#bgm1")[0].volume = 0.8; // why not work???StaffordBawlerNocturne.mp3
        
                });
            console.log("count="+count);
        console.log("int="+int);
    }
       
    else if (count == 3 ) 
     { 
 		
 		 
         $("#flight").stop("true").delay('2000').queue(function() { 
                $(this).html('<audio style="display:none;" autoplay loop="loop"><source src="audio/Digiffects Sound Effects Library - Slow Keyboard Typing.mp3"> </source></audio>');
       
                $("#flight")[0].volume = 0.5; // why not work???
                console.log(count);
        
             });
         $('#start').css('display', 'block'); //引入部分出现
           $('#row7').css('display', 'none'); //主线不显示	
          $("#loading").css('display', 'none');
           $('#shape').css('display', 'none');
         $('.start').css('display', 'none');
         console.log("count="+count);
        console.log("int="+int);
         
     }
           
     else if (count >= 1 && count <= 2 ) 
     { 
 		
 		 
         $("#flight").stop("true").delay('2000').queue(function() { 
                $(this).html('<audio style="display:none;" autoplay loop="loop"><source src="audio/Digiffects Sound Effects Library - Slow Keyboard Typing.mp3"> </source></audio>');
       
                $("#flight")[0].volume = 0.5; // why not work???
                console.log(count);
        
             });
         $('#start').css('display', 'block'); //引入部分出现
           $('#row7').css('display', 'none'); //主线不显示	
          $("#loading").css('display', 'none');
           $('#shape').css('display', 'none');
         $('.start').css('display', 'none');
         var current = $('.linear.active');
			 var prev =  current.prev();

				 current.removeClass('active').addClass('hidden');
				 prev.removeClass('hidden').addClass('active');
         console.log("count="+count);
        console.log("int="+int);
     }
     

 
        else if ( (count >=5 && count <=7) )
           {
           
//               $('html,body, #row7').animate({scrollTop:0},0);
     
              
               $('#start').css('display', 'none');
		       $('#row7').css('display', 'block').fadeIn('1000');
//      		   ont = (ont + 1) %bckGrd.length;
//        	   $("#bckgrdImage").css({
//        		  'background-image': bckGrd[ont],
//        		  'background-repeat' : 'no-repeat'
//        		}); 
        
//        	   randomRows();
        	
        		// this moves row7 incrementally through the array
        	   int = (int - 1) %row7.length;
              
               
        	   $("#row7").html(row7[(count-4)]);
        	
        	   if(row7[int] === '')  {
        	 	 $("#row7").css('display', 'none');
        	 	}
         	   else {
         		 $("#row7").hide().fadeIn('500');
//         		 $("#row7").attr('class', 'style28'); 
         		}	
               console.log("count="+count);
        console.log("int="+int);
         		
         	//$("#row7").animate({'bottom' : '40%', 'right' : '70%'});
         	
	          
        	}   // end if count >= 4 <= 8
        	
        else if ( (count >=9 && count <= 14)||(count >=16 && count <= 27))
           {
     
             
               $('#start').css('display', 'none');
		       $('#row7').css('display', 'block').fadeIn('1000');
//      		
        	
        		// this moves row7 incrementally through the array
        	   int = (int - 1) %row7.length;
        	   $("#row7").html(row7[(count-4)]);
        	
        	   if(row7[int] === '')  {
        	 	 $("#row7").css('display', 'none');
        	 	}
         	   else {
         		 $("#row7").hide().fadeIn('500');
//         		 $("#row7").attr('class', 'style28'); 
         		}	
         		
         	//$("#row7").animate({'bottom' : '40%', 'right' : '70%'});
         	console.log("count="+count);
        console.log("int="+int);
	          
        	}   // end if count >= 4 <= 8
    
 	    else if (count == 8) {
             $("#bgm2").stop("true").delay('3000').queue(function() { 
                $(this).html('<audio style="display:none;" autoplay loop="loop"><source src="audio/The Halloween Dawn - Twin Musicom.mp3"> </source></audio>');
                $("#bgm2 audio")[0].volume = 1;
            });
 			$("#bgm1 audio")[0].volume -=0.1;
            
            $('#start').fadeOut('1000');
		    $('#row7').css('display', 'block');
            int = (int - 1) %row7.length;
            $("#row7").html(row7[(count-4)]);
        	
        	   if(row7[int] === '')  {
        	 	 $("#row7").css('display', 'none');
        	 	}
         	   else {
         		 $("#row7").hide().fadeIn('500');
//         		 $("#row7").attr('class', 'style28'); 
         		}	
            console.log("count="+count);
        console.log("int="+int);
        }	
         	    else if (count == 15) {
             $("#bgm3").stop("true").delay('3000').queue(function() { 
                $(this).html('<audio style="display:none;" autoplay loop="loop"><source src="audio/Leoforos Alexandras - Dan Bodan.mp3"> </source></audio>');
                $("#bgm3 audio")[0].volume = 1;
            });
 			$("#bgm1 audio")[0].volume -=0.1;
            
            $('#start').fadeOut('1000');
		    $('#row7').css('display', 'block');
            int = (int - 1) %row7.length;
            $("#row7").html(row7[(count-4)]);
        	
        	   if(row7[int] === '')  {
        	 	 $("#row7").css('display', 'none');
        	 	}
         	   else {
         		 $("#row7").hide().fadeIn('500');
//         		 $("#row7").attr('class', 'style28'); 
         		}	
            console.log("count="+count);
        console.log("int="+int);
        }	
    
        
//        	    
//
//        
        else 
        	{

        $('#flight').html('');
          $('#train').html('');
          $('#main1').html('');
          $('#main2').html('');

	
				int = -1;
				ont = -1;
				ant = -1;
				ent = -1;
				count = 0;
				
				
				value = 0;  
                addValue = progressbar.val(value);
				
		var current = $('.linear.active');
	    var next =  current.next();
		
		console.log("count="+count);
        console.log("int="+int);
 		
 		 window.location.href = "index.html";
    
      			 }  //end else
//      			 
      			 

       }  // end moveRight



     
      
/// use keys for navigation

$(document).keydown(function(e) {
    if(e.which == 37) { // left     
        moveRight();
    }
    else if(e.which == 39) { // right     
        moveLeft();
    }
});
   
      
      
 
      
 
      


}); //end doc ready