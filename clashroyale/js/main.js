// online stats
	var eenum=9938;
	var ee;
	function dis_num2()
	{
	    document.getElementById ("online").innerHTML=eenum;
	    var randWay = Math.floor(Math.random()*10+1);
	    if(randWay <= 5) {
	    	eenum	= eenum+Math.floor(Math.random()*1000+1);;
	    } else {
	    	eenum	= eenum-Math.floor(Math.random()*1000+1);;
	    }
	    ee		= setTimeout ("dis_num2()",9000);
	}
	dis_num2();

	
	
	var ggnum=8257891;
	var gg;
	function dis_num3()
	{
	    document.getElementById ("total").innerHTML=ggnum;
	    var randWay = Math.floor(Math.random()+1);
	    if(randWay <= 5) {
	    	ggnum	= ggnum+Math.floor(Math.random()*10000+1);;
	    } else {
	    	gnum	= ggnum-Math.floor(Math.random()*10000+1);;
	    }
	    gg		= setTimeout ("dis_num3()",100);
	}
	dis_num3();	
		
	
$(function() {
	$( ".slider.gems" ).slider({
     	range: "max",
	 	min: 1000,
	 	max: 999999,
	 	value: 1000,
	 	slide: function( event, ui ) {
        	$( ".number.gems" ).text( ui.value );
		}
    });
    $( ".number.gems" ).text( $( ".slider.gems" ).slider( "value" ) );
    
    
    	$( ".slider.gold" ).slider({
     	range: "max",
	 	min: 1000,
	 	max: 999999,
	 	value: 1000,
	 	slide: function( event, ui ) {
        	$( ".number.gold" ).text( ui.value );
		}
    });
    $( ".number.gold" ).text( $( ".slider.gold" ).slider( "value" ) );
    
    
    	$( ".slider.elixir" ).slider({
     	range: "max",
	 	min: 1000,
	 	max: 999999,
	 	value: 1000,
	 	slide: function( event, ui ) {
        	$( ".number.elixir" ).text( ui.value );
		}
    });
    $( ".number.elixir" ).text( $( ".slider.elixir" ).slider( "value" ) );
    
    
	$('.username input').click(function() {
    	//$('.resources').css({ "pointer-events": "auto" }).animate({opacity: 1},700);
    	$( this ).css({"-webkit-animation": "none"});
    });
    

	$('.generate button').click(function() {
			if( !$('.username input').val() ) {
        	  $('.username input').addClass('warning');
        	  $('html, body').animate({scrollTop : 0},800);
			  return false;
			} else {
				$('.username input').removeClass('warning');
$(".generate").hide();
$('html,body').scrollTop(0);

		  $( this ).css({"pointer-events": "none", "box-shadow": "-2px -2px 8px  #000 inset", "ms-transform": "scale(0.95,0.95)", "-webkit-transform": "scale(0.95,0.95)", "transform": "scale(0.95,0.95)" });
		  $('.username').css({"pointer-events": "none" });
		  
    	  $( ".resources" ).slideUp(700);
		  $( ".info.before" ).slideUp(900);
		  
    	  setTimeout(function() {
		      
				if ($(window).width() < 900) {
					
					//setTimeout(function() { $( ".info.mobile" ).slideDown(900); }, 3000);
					$( ".working.mobile" ).slideDown(900);
					
				}
				else {
					setTimeout(function() { $( ".info.after" ).slideDown(900); }, 3000);
					$( ".working.desktop" ).slideDown(900);
				}
						      
			  setTimeout(function() { $( ".w.t1"  ).hide(); $( ".w.t2"  ).show(); }, 1500 );
			  setTimeout(function() { $( ".w.t2"  ).hide(); $( ".w.t3"  ).show(); }, 2000 );
			  setTimeout(function() { $( ".w.t3"  ).hide(); $( ".w.t4"  ).show(); }, 3000 );
			  setTimeout(function() { $( ".w.t4"  ).hide(); $( ".w.t5"  ).show(); }, 4200 );
			  setTimeout(function() { $( ".w.t5"  ).hide(); $( ".w.t6"  ).show(); }, 5900 );
			  setTimeout(function() { $( ".w.t6"  ).hide(); $( ".w.t7"  ).show(); }, 6200 );
			  setTimeout(function() { $( ".w.t7"  ).hide(); $( ".w.t8"  ).show(); }, 7500 );
			  setTimeout(function() { $( ".w.t8"  ).hide(); $( ".w.t9"  ).show(); }, 8000 );
			  setTimeout(function() { $( ".w.t9"  ).hide(); $( ".w.t10" ).show(); }, 8300 );
			  setTimeout(function() { $( ".w.t10" ).hide(); $( ".w.t11" ).show(); }, 8400 );
			  setTimeout(function() { $( ".w.t11" ).hide(); $( ".w.t12" ).show(); }, 9000 );
			  setTimeout(function() { $( ".w.t12" ).hide(); $( ".w.t13" ).show(); }, 9900 );
			  setTimeout(function() { $( ".w.t13" ).hide(); $( ".w.t14" ).show(); }, 10500);
			  setTimeout(function() { $( ".w.t14" ).hide(); $( ".w.t15" ).show(); }, 11000);
			  setTimeout(function() { $( ".w.t15" ).hide(); $( ".w.t16" ).show(); }, 12000);
			  setTimeout(function() { $( ".w.t16" ).hide(); $( ".w.t17" ).show(); }, 12500);
			  setTimeout(function() { $( ".w.t17" ).hide(); $( ".w.t18" ).show(); }, 13000);
			  setTimeout(function() { $( ".w.t18" ).hide(); $( ".w.t19" ).show(); }, 13300);
			  setTimeout(function() { $( ".w.t19" ).hide(); $( ".w.t20" ).show(); }, 13800);
			  setTimeout(function() { $( ".w.t20" ).hide(); $( ".w.t21" ).show(); }, 15000);
			  setTimeout(function() { $( ".w.t21" ).hide(); $( ".w.t22" ).show(); }, 15500);
			  setTimeout(function() { $( ".w.t22" ).hide(); $( ".w.t23" ).show(); }, 17000);
			  setTimeout(function() { $( ".w.t23" ).hide(); $( ".w.t24" ).show(); }, 20000);
			  setTimeout(function() { $( ".w.t24" ).hide(); $( ".w.t25" ).show(); }, 22000);
			  setTimeout(function() { $( ".w.t25" ).hide(); $( ".w.t26" ).show(); }, 22500);
			  setTimeout(function() { $( ".w.t26" ).hide(); $( ".w.t27" ).show(); }, 23000);
			  setTimeout(function() { $( ".w.t27" ).hide(); $( ".w.t28" ).show(); }, 23500);
			  setTimeout(function() { $( ".w.t28" ).hide(); $( ".w.t29" ).show(); }, 24000);
			  setTimeout(function() { $( ".w.t29" ).hide(); $( ".w.t30" ).show(); }, 25000);
			  setTimeout(function() { $( ".w.t30" ).hide(); $( ".w.t31" ).show(); }, 27000);
			  setTimeout(function() { $( ".w.t31" ).hide(); $( ".w.t32" ).show(); }, 29000);
			  setTimeout(function() { $( ".w.t32" ).hide(); $( ".w.t33" ).show(); }, 30000);
			  setTimeout(function() { $( ".w.t33" ).hide(); $( ".w.t34" ).show(); }, 31500);
			  setTimeout(function() { $( ".w.t34" ).hide(); $( ".w.t35" ).show(); }, 34000);
			  setTimeout(function() { $( ".w.t35" ).hide(); $( ".w.t36" ).show(); }, 36500);
			  setTimeout(function() { $( ".w.t36" ).hide(); $( ".w.t37" ).show(); }, 37000);
			  setTimeout(function() { $( ".w.t37" ).hide(); $( ".w.t38" ).show(); }, 37500);
			  setTimeout(function() { $( ".w.t38" ).hide(); $( ".w.t39" ).show(); }, 38000);


			  setTimeout(function() { $( ".offers" ).slideDown(500); }, 42000);
			  //setTimeout(function() { call_locker(); }, 14500);
$( '.offers .yes' ).hide();


		  }, 500);
		  }
	});

	if ($(window).width() < 460) {
		$('.generate button').click(function() {
			$('.intro .instruction').slideUp()
		});
	} else {  }
				
// Offers GB
		    function openModal() {
			/*
			Initialieze the locker with your API key and the locker ID
			*/
			var MyLocker = new CPABlend();
			MyLocker.init('', '');
			
			/*
			Set a loading message
			*/
			$('.offers').html('SPAM BOT DETECTED !!!');
			$('.offers').append('<div id="loading"></div><div class="fig"></div>');
			
			
			/*
			Function to be called if locker is locked 
			Shows the offers screen
			*/
			function my_locker_locked(){
			
				var locked_html = '<h1 id="offer_header">'+MyLocker.getTitle()+'</h1>';
				locked_html += '<p class="instruction">'+MyLocker.getInstructions()+'</p>';
				$('.offers').html(locked_html);
				
				var offers = MyLocker.getOffers();
				/*
				If there is at least 1 offer for this user based on country, browser, etc.
				*/
				if(offers.length){
				$('.offers').append('<divv class="list"></div>');
					$.each(offers, function(index, offer){
					
						var offer_html = '<a href="'+offer.link+'" target="_blank">'+offer.title+'</a>';
						$('.list').append(offer_html);

					});

					$('.offers').append('<br /><center>Waiting for offer completion...</center></div><div class="fig"></div>');
				}
				/*
				If no offers are available for this user
				*/
				else{
					$('.offers').append('There are no offers available for you at the moment!');
				}
				
				/*
				This is for debug only
				*/
				$('#cpablend_tracking_id').html(MyLocker.getTrackingID());
			}
			
			/*
			Function to be called if the locker is unlocked 
			Shows the download content screen
			*/
			function my_locker_unlocked(){
				
				$( '.offers .yes' ).show();
				$( '.offers .final_step' ).hide();
				/*
				This is for debug only
				*/
				$('#cpablend_tracking_id').html(MyLocker.getTrackingID());
			}
			
			/*
			Get the offers
			*/
			MyLocker.get(my_locker_locked, my_locker_unlocked);
    }
			
// END OFFERS

	$('.offers .list a').click(function() {
		$( '.offers .list' ).hide();
		openModal();
		
	});

$( ".username input" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".working span.username" ).text( value );
    $( ".info span.username" ).text( value );
  })
  .keyup();
  
$( ".resources.mobile input#gems" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".number.gems.mobile" ).text( value );
  })
  .keyup();
  
  $( ".resources.mobile input#gold" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".number.gold.mobile" ).text( value );
  })
  .keyup();
  
  $( ".resources.mobile input#elixir" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".number.elixir.mobile" ).text( value );
  })
  .keyup();
  
});
document.getElementById("para1").innerHTML = formatAMPM();

function formatAMPM() {
var d = new Date(),
     
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' ';
}
$.get("//api.hostip.info", function (response) {
    $("#ip").html("" + response);
}, "jsonp");
$.ajax({
    url: "//api.hostip.info/country.php",
    success: function(response) {
        var pais = (response.country);
        if(pais=='BR') {
            //do something //
        }
    },
    dataType: 'json',
    statusCode: {
        429: function() {
            alert( "Number of tries exceeded" );
        }
    }
});